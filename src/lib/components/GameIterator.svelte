<script lang="ts">
	import { leftWin, rightWin } from "$lib/user.writable";
	import { swipe } from "svelte-gestures";
    import Box from "./Box.svelte";
    import { onMount } from "svelte";
	import { writable } from "svelte/store";

    export let canMove: boolean = true;
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
    const sqrt = Math.sqrt($gameArray.length);

    if (canMove) {
        switch (e.key) {
        case "ArrowLeft":
        case "a":
            if ($gameIndex % sqrt === 0 || $gameArray[$gameIndex - 1] === "R") {
                e.preventDefault();
            } else {
                gameIndex.update(index => index - 1);
            }
            break;
        case "ArrowRight":
        case "d":
            if (($gameIndex + 1) % sqrt === 0 || $gameArray[$gameIndex + 1] === "R") {
                e.preventDefault();
            } else {
                gameIndex.update(index => index + 1);
            }
            break;
        case "ArrowUp":
        case "w":
            if ($gameIndex < sqrt || $gameArray[$gameIndex - sqrt] === "R") {
                e.preventDefault();
            } else {
                gameIndex.update(index => index - sqrt);
            }
            break;
        case "ArrowDown":
        case "s":
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
    }

    function handler(event) {
        switch (event.detail.direction) {
        case "left":
            if ($gameIndex % sqrt === 0 || $gameArray[$gameIndex - 1] === "R") {
                    event.preventDefault();
                } else {
                    gameIndex.update(index => index - 1);
                }
            break;
        case "right":
            if (($gameIndex + 1) % sqrt === 0 || $gameArray[$gameIndex + 1] === "R") {
            } else {
                gameIndex.update(index => index + 1);
            }
            break;
        case "top":
            if ($gameIndex < sqrt || $gameArray[$gameIndex - sqrt] === "R") {
            } else {
                gameIndex.update(index => index - sqrt);
            }
            break;
        case "bottom":
            if (
                $gameIndex >= (array.length - sqrt) ||
                $gameArray[$gameIndex + sqrt] === "R"
            ) {
            } else {
                gameIndex.update(index => index + sqrt);
            }
            break;
        }
    }
</script>


<svelte:window on:keydown={(e) => onKeyDown(e)} />
<div use:swipe={{ timeframe: 300, minSwipeDistance: 1}} on:swipe={handler} bind:this={div} class="grid grid-cols-3 gap-4">
    {#each array as item, i}
        <Box array={$gameArray} index={i} playerIndex={$gameIndex} />
    {/each}
</div>