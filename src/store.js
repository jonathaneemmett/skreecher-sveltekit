import { writable } from 'svelte/store';

const initialState = {
	skreeches: []
};

export const skreeches = writable([]);
