<script lang="ts">
	import { getMiddleIndex } from "$lib/arrayHelper";
	import { onMount } from "svelte";
	import Player from "./Player.svelte";


    export let array: any[];
    export let index: any;
    export let playerIndex: any;

    let div: HTMLDivElement;


    onMount(() => {
        if (index == getMiddleIndex(array)) {
            div?.classList.add(`bg-blue-500`)
        }

        switch (array[index]) {
            case "N":
                div?.classList.add(`bg-gray-500`)
                break;
            case "G":
                div?.classList.add(`bg-green-500`)
                break;
            case "R":
                div?.classList.add(`bg-red-500`)
                break;
        }
    });
</script>

<body>
    <div bind:this={div} class="size-16 rounded-md flex items-center justify-center">
        {#if playerIndex == index}
            <Player />
        {/if}
    </div>
</body>