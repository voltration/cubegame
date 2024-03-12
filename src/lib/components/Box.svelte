<script lang="ts">
	import { getMiddleIndex } from "$lib/arrayHelper";
	import type { Color } from "$lib/types/Color";
	import { onMount } from "svelte";


    export let array: any[];
    export let index: any;

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
    </div>
</body>