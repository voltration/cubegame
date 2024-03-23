<script lang="ts">
	import { onMount } from "svelte";
	import Player from "./Player.svelte";


    export let array: any[];
    export let index: any;
    export let playerIndex: any;

    let div: HTMLDivElement;

    const colorWays: { [key: string]: { background: string, border: string } } = {
        "N": { background: "bg-slate-500", border: "border-slate-600" },
        "G": { background: "bg-[#439d75]", border: "border-[#285e46]" },
        "R": { background: "bg-[#aa5c68]", border: "border-[#774049]" }
    };

    const colorWay = colorWays[array[index]];

    onMount(() => {
        if (colorWay) {
            div.classList.add(colorWay.background, colorWay.border);
        }
    });
</script>

<body>
    <div bind:this={div} class="size-20 border-b-8 rounded-md flex items-center justify-center">
        {#if playerIndex == index}
            <Player />
        {/if}
    </div>
</body>