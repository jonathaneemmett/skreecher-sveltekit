import { writable } from 'svelte/store';

const initialState = {
	skreeches: [
		{
			_id: 1,
			avatar: 'https://via.placeholder.com/100/100',
			handle: '@johndoe',
			name: 'John Doe',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore quaerat ex iste error aliquid debitis excepturi nobis, ratione, consequuntur eius quod aliquam soluta omnis? Quos numquam cumque unde architecto quibusdam autem mollitia consequuntur error perferendis nesciunt itaque dolor saepe excepturi odit modi, dolores earum dolore ipsa voluptate quaerat quod ab iste praesentium. Veniam, aliquid, unde incidunt quam voluptas deleniti consequuntur dignissimos suscipit a nemo tempore nulla fugiat eligendi eius vel, cumque neque sit facere. Consequatur iusto molestias voluptate voluptatum libero est, saepe odit harum blanditiis. Quibusdam deleniti temporibus fugit.',
			time: '1h',
			replies: 0,
			reSkreeches: 0,
			likes: 0
		},
		{
			_id: 2,
			avatar: 'https://via.placeholder.com/100/100',
			handle: '@johndoe',
			name: 'John Doe',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempore quaerat ex iste error aliquid debitis excepturi nobis, ratione, consequuntur eius.',
			time: '1h',
			replies: 0,
			reSkreeches: 0,
			likes: 0
		}
	]
};

export const skreeches = writable(initialState.skreeches);
