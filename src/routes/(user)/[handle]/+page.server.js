export const load = async ({ locals }) => {
	console.log('locals', locals?.user);
	if (!locals?.user) {
		throw redirect(302, '/');
	}
};
