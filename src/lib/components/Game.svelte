<script lang="ts">
    import { currentLevel, leftWin, rightWin } from "$lib/user.writable";
    import { levels } from "$lib/Levels";
    import GameIterator from "./GameIterator.svelte";
    import { getMiddleIndex } from "$lib/arrayHelper";

    let left: string[];
    let right: string[];

    $: {
        if ($leftWin && $rightWin) {
            $currentLevel++;
            $leftWin = false;
            $rightWin = false;
        }

        const nextLevel = levels[$currentLevel];
        left = nextLevel ? nextLevel.Left :  [];
        right = nextLevel ? nextLevel.Right : [];

        if (left || right === undefined) {
            // TODO: handle no more levels
        }
    }
</script>

<body>
    <div class="flex items-center justify-center h-screen">
        <div class="flex flex-col gap-12">
            <p class="i300 text-center">Level: {$currentLevel}</p>
            <div class="flex justify-between gap-24">
                {#key $currentLevel}
                    {#if left}
                        <GameIterator side="left" index={getMiddleIndex(left)} array={left} />
                    {/if}
                    {#if right}
                        <GameIterator side="right" index={getMiddleIndex(right)} array={right} />
                    {/if}
                {/key}
            </div>
        </div>
    </div>
</body>