<script lang="ts">
    import Box from "./Box.svelte";
    import { onMount } from "svelte";
	import { writable } from "svelte/store";

    export let array: string[];
    export let index: number;

    export const gameArray = writable<string[]>(array);
    export const gameIndex = writable<number>(index);

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
                if ($gameIndex % 3 === 0) {
                    e.preventDefault();
                } else {
                    gameIndex.update((index) => index - 1);
                }
                break;
            case "ArrowRight":
                if (($gameIndex + 1) % 3 === 0) {
                    e.preventDefault();
                } else {
                    gameIndex.update((index) => index + 1);
                }
                break;
            case "ArrowUp":
                if ($gameIndex < 3) {
                    e.preventDefault();
                } else {
                    gameIndex.update((index) => index - 3);
                }
                break;
            case "ArrowDown":
                if ($gameIndex >= 6) {
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