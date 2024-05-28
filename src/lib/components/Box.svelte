<script lang="ts">
	import { onMount } from "svelte";
	import Player from "./Player.svelte";


    export let array: any[];
    export let index: any;
    export let playerIndex: any;

    let div: HTMLDivElement;

    const colorWays: { [key: string]: { background: string, border: string, shadow: string } } = {
        "N": { background: "bg-slate-500", border: "border-slate-600", shadow: "shadow-slate-600/50" },
        "G": { background: "bg-[#439d75]", border: "border-[#285e46]", shadow: "shadow-[#285e46]/50" },
        "R": { background: "bg-[#aa5c68]", border: "border-[#774049]", shadow: "shadow-[#774049]/50" }
    };

    const colorWay = colorWays[array[index]];

    onMount(() => {
        if (colorWay) {
            div.classList.add(colorWay.background, colorWay.border, colorWay.shadow);
        }
    });
</script>

<body>
    <div bind:this={div} class="size-16 md:size-20 shadow-lg border-b-4 rounded-md flex items-center justify-center">
        {#if playerIndex == index}
            <Player />
        {/if}
    </div>
</body>