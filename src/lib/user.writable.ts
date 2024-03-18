
import { writable } from "svelte/store";

export const currentLevel = writable<number>(1);
export const leftIndex = writable<number>(0);
export const rightIndex = writable<number>(0);