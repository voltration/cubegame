<script lang="ts">
    import { currentLevel } from "$lib/user.writable";
    import { levels } from "$lib/Levels";
    import GameIterator from "./GameIterator.svelte";
    import { onMount } from "svelte";
    import { getMiddleIndex } from "$lib/arrayHelper";

    let left: string[];
    let right: string[];

    onMount(() => {
        left = levels[$currentLevel].Left;
        right = levels[$currentLevel].Right;
    });
</script>

<body>
    <div class="flex items-center justify-center h-screen">
        <div class="flex justify-between gap-24">
            <div class="">
                {#if left}
                    <GameIterator index={getMiddleIndex(left)} array={left} />
                {/if}
            </div>
            <div class="">
                {#if right}
                    <GameIterator index={getMiddleIndex(right)} array={right} />
                {/if}
            </div>
        </div>
    </div>
</body>