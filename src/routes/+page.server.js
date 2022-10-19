import { invalid, redirect } from '@sveltejs/kit';
import argon2 from 'argon2';
import User from '$lib/models/User.js';

export const load = async () => {
	// TODO: check if user is logged in
};

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		// Simple validation
		if (!email || !password) {
			return invalid(400, { invalid: true });
		}

		// Check if user exists
		const user = await User.findOne({ email });
		if (!user) {
			return invalid(400, { invalid: true });
		}

		// Check if password is correct
		const validPassword = await argon2.verify(user.password, password);
		if (!validPassword) {
			return invalid(400, { invalid: true });
		}

		// Update user token
		const token = await argon2.hash(`${email}${password}`);
		await user.updateOne({ token });

		// Set cookie
		cookies.set('session', token, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 1 // 1 day
		});

		// redirect to profile page
		throw redirect(303, `/profile/${user?.handle}`);
	},
	register: async ({ cookies, request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const password = data.get('password');
		const handle = data.get('handle');
		console.log('register', name, email, password, handle);
		// Simple Validation
		if (!name || !email || !password || !handle) {
			return invalid(400, { invalid: true });
		}

		// Check if user already exists
		const user = await User.findOne({ email });
		if (user) {
			return invalid(400, { user: true });
		}

		// Check if the handle in use
		if (user?.handle === handle) {
			return invalid(400, { handle: true });
		}

		// Hash the password
		const hashedPassword = await argon2.hash(password);

		// Create new token
		const token = await argon2.hash(`${email}${password}`);

		// Create the user
		let newUser = await User.create({
			name,
			email,
			password: hashedPassword,
			handle,
			token
		});

		if (newUser) {
			// Set the cookie
			cookies.set('session', token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 1 // 1 day
			});

			// Redirect to profile page
			throw redirect(303, `/profile/${handle}`);
		} else {
			return invalid(500, { server: true });
		}
	}
};
