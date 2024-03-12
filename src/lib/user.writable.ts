
import { writable } from "svelte/store";

export const currentLevel = writable<number>(1);
export const tileIndex = writable<number>(0);