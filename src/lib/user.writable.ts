import { writable } from "svelte/store";

export const currentLevel = writable<number>(1);

// clear these!!!
export const leftWin = writable<boolean>(false);
export const rightWin = writable<boolean>(false);