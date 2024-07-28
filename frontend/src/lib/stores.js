import {writable} from "svelte/store";

export const active = writable('home')
export const apiUrl = writable('http://localhost:8000/api/v1/auth/')