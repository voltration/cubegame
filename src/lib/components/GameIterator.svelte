<script lang="ts">
	import { leftWin, rightWin } from "$lib/user.writable";
    import Box from "./Box.svelte";
    import { onMount } from "svelte";
	import { writable } from "svelte/store";

    export let array: string[];
    export let index: number;
    export let side: string;

    export const gameArray = writable<string[]>(array);
    export const gameIndex = writable<number>(index);

    $: {
        if ($gameArray[$gameIndex] === "G") {
            side === "left" ? leftWin.set(true) : rightWin.set(true);
        }
        if ($gameArray[$gameIndex] === "N") {
            side === "left" ? leftWin.set(false) : rightWin.set(false);
        }
    }

    let div: HTMLDivElement;
    const sqrt = Math.round(Math.sqrt(array.length));

    onMount(() => {
        if (div) {
            div.style.gridTemplateColumns = `repeat(${sqrt}, minmax(0, 1fr))`;
        }
    });

    export function onKeyDown(e: KeyboardEvent) {
    switch (e.key) {
        case "ArrowLeft":
            if ($gameIndex % 3 === 0 || $gameArray[$gameIndex - 1] === "R") {
                e.preventDefault();
            } else {
                gameIndex.update((index) => index - 1);
            }
            break;
        case "ArrowRight":
            if (($gameIndex + 1) % 3 === 0 || $gameArray[$gameIndex + 1] === "R") {
                e.preventDefault();
            } else {
                gameIndex.update((index) => index + 1);
            }
            break;
        case "ArrowUp":
            if ($gameIndex < 3 || $gameArray[$gameIndex - 3] === "R") {
                e.preventDefault();
            } else {
                gameIndex.update((index) => index - 3);
            }
            break;
        case "ArrowDown":
            if ($gameIndex >= ($gameArray.length / 3 - 1) * 3 || $gameArray[$gameIndex + 3] === "R") {
                e.preventDefault();
            } else {
                gameIndex.update((index) => index + 3);
            }
            break;
        }
    }
</script>

<svelte:window on:keydown={(e) => onKeyDown(e)} />
<body>
    <div bind:this={div} class="grid grid-cols-3 gap-4">
        {#each array as item, i}
            <Box array={$gameArray} index={i} playerIndex={$gameIndex} />
        {/each}
    </div>
</body>