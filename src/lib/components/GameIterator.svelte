<script lang="ts">
    import { onMount } from "svelte";
    import Box from "./Box.svelte";
	import { onKeyDown } from "$lib/keyboardListener";

    export let array: string[];
    export let index: number;

    let div: HTMLDivElement;
    const sqrt = Math.round(Math.sqrt(array.length));

    onMount(() => {
        if (div) {
            div.style.gridTemplateColumns = `repeat(${sqrt}, minmax(0, 1fr))`;
        }
    });
</script>

<svelte:window on:keydown={(e) => onKeyDown(e, array, index)} />
<body>
    <div bind:this={div} class="grid grid-cols-3 gap-4">
        {#each array as item, i}
            <Box array={array} index={i} playerIndex={index} />
        {/each}
    </div>
</body>