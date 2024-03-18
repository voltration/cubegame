<script lang="ts">
    import { currentLevel, leftIndex, rightIndex } from "$lib/user.writable";
    import { levels } from "$lib/Levels";
    import GameIterator from "./GameIterator.svelte";
    import { onDestroy, onMount } from "svelte";
    import { getMiddleIndex } from "$lib/arrayHelper";

    let left: string[];
    let right: string[];

    onMount(() => {
        left = levels[$currentLevel].Left;
        right = levels[$currentLevel].Right;
        leftIndex.set(getMiddleIndex(left));
        rightIndex.set(getMiddleIndex(right));
    });
</script>

<body>
    <div class="flex items-center justify-center h-screen">
        <div class="flex justify-between gap-24">
            <div class="border-4 border-pink-300">
                {#if left}
                    <GameIterator index={$leftIndex} array={left} />
                {/if}
            </div>
            <div class="border-4 border-pink-300">
                {#if right}
                    <GameIterator index={$rightIndex} array={right} />
                {/if}
            </div>
        </div>
    </div>
</body>