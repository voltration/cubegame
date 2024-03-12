<script lang="ts">
    import { onMount } from "svelte";
    import Box from "./Box.svelte";

    export let array: string[];

    let div: HTMLDivElement;
    const sqrt = Math.round(Math.sqrt(array.length));

    onMount(() => {
        div?.classList.add(`grid-cols-${sqrt}`);
    });
</script>

<body>
    <div bind:this={div} class="grid gap-4">
        {#each array as item, i}
            <Box array={array} index={i} />
        {/each}
    </div>
</body>