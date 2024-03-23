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

    let div: HTMLDivElement;
    let sqrt: number;

    $: {
        if ($gameArray[$gameIndex] === "N") {
            side === "left" ? leftWin.set(false) : rightWin.set(false);
        }
        // race condition but this fixes it
        setTimeout(() => {
            if ($gameArray[$gameIndex] === "G") {
                side === "left" ? leftWin.set(true) : rightWin.set(true);
            }
        }, 100)
    }

    onMount(() => {
        if (div) {
            sqrt = Math.sqrt(array.length);
            div.style.gridTemplateColumns = `repeat(${sqrt}, minmax(0, 1fr))`;
        }
    });

    export function onKeyDown(e: KeyboardEvent) {

    switch (e.key) {
        case "ArrowLeft":
            if ($gameIndex % sqrt === 0 || $gameArray[$gameIndex - 1] === "R") {
                e.preventDefault();
            } else {
                gameIndex.update(index => index - 1);
            }
            break;
        case "ArrowRight":
            if (($gameIndex + 1) % sqrt === 0 || $gameArray[$gameIndex + 1] === "R") {
                e.preventDefault();
            } else {
                gameIndex.update(index => index + 1);
            }
            break;
        case "ArrowUp":
            if ($gameIndex < sqrt || $gameArray[$gameIndex - sqrt] === "R") {
                e.preventDefault();
            } else {
                gameIndex.update(index => index - sqrt);
            }
            break;
        case "ArrowDown":
            if (
                $gameIndex >= (array.length - sqrt) ||
                $gameArray[$gameIndex + sqrt] === "R"
            ) {
                e.preventDefault();
            } else {
                gameIndex.update(index => index + sqrt);
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