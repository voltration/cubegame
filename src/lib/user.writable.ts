import { writable } from "svelte/store";

export const currentLevel = writable<number>(1);