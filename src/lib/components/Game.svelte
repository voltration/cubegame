<script lang="ts">
    import { currentLevel, tileIndex } from "$lib/user.writable";
    import { Levels } from "$lib/Levels";
	import GameIterator from "./GameIterator.svelte";
	import { onDestroy, onMount } from "svelte";
	import { writable } from "svelte/store";
	import { getMiddleIndex } from "$lib/arrayHelper";


    // @ts-expect-error
    const left = Levels[$currentLevel].Left;
    // @ts-expect-error
    const right = Levels[$currentLevel].Right;

    onMount(() => {
        tileIndex.set(getMiddleIndex(left));
    });

    onDestroy(() => {
        tileIndex.set(0);
    })
</script>

<body>
    <div class="flex items-center justify-center h-screen">
        <div class="flex justify-between gap-24">
            <div class="border-4 border-pink-300">
                <GameIterator array={left} />
            </div>
            <div class="border-4 border-pink-300">
                <GameIterator array={right} />
            </div>
        </div>
    </div>
</body>