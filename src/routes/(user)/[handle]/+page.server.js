import { invalid, redirect } from '@sveltejs/kit';
import Skreech from '../../../lib/models/Skreech';

export const load = async ({ locals }) => {
	if (!locals?.user) {
		throw redirect(302, '/');
	}

	const skreeches = await Skreech.find({ user: locals.user.id }).populate(
		'user',
		'-password -token -updatedAt'
	);

	if (!skreeches) {
		throw invalid(404, 'Skreeches not found');
	}

	// Sort skreeches by date
	skreeches.sort((a, b) => b.createdAt - a.createdAt);

	return {
		skreeches: JSON.stringify(skreeches)
	};
};

export const actions = {
	addSkreech: async ({ locals, request }) => {
		const data = await request.formData();
		const content = data.get('content');
		// if (!content || !user) {
		// 	return invalid(400, { invalid: true });
		// }
		const newSkreech = {
			user: locals.user.id,
			content: content,
			replies: 0,
			reSkreeches: 0,
			likes: 0
		};
		const skreech = await (
			await Skreech.create(newSkreech)
		).populate('user', '-password -token -createdAt -updatedAt');
		if (!skreech) {
			return invalid(400, { server: true });
		}
		// skreeches.update((skreeches) => [skreech, ...skreeches]);
	}
};
