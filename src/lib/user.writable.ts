import { toast } from "svelte-sonner";
import { writable } from "svelte/store";

export const currentLevel = writable<number>(1);

// clear these!!!
export const leftWin = writable<boolean>(false);
export const rightWin = writable<boolean>(false);

export function resetCounter() {
    currentLevel.set(1);
    toast.info("Reset your progression successfully.");
}