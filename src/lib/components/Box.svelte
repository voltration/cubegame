<script lang="ts">
	import { onMount } from "svelte";
	import Player from "./Player.svelte";


    export let array: any[];
    export let index: any;
    export let playerIndex: any;

    let div: HTMLDivElement;

    const colorWays: { [key: string]: string } = {
        "N": "bg-neutral-500",
        "G": "bg-green-500",
        "R": "bg-red-500"
    };

    const colorWay: string | undefined = colorWays[array[index]];

    onMount(() => {
        div?.classList.add(colorWay)
    });
</script>

<body>
    <div bind:this={div} class="size-20 rounded-md flex items-center justify-center">
        {#if playerIndex == index}
            <Player />
        {/if}
    </div>
</body>