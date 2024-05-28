<script lang="ts">
    import { currentLevel, leftWin, rightWin } from "$lib/user.writable";
    import { levels } from "$lib/Levels";
    import GameIterator from "./GameIterator.svelte";
    import { getMiddleIndex } from "$lib/arrayHelper";
	import { confetti } from "@neoconfetti/svelte";

    let left: string[];
    let right: string[];
    let levelsLeft: number;
    let completed: boolean;

    $: levelsLeft = Object.keys(levels).length - $currentLevel

    $: {
        if (levelsLeft <= -1) {
            completed = true
        } 
    }

    $: {
        if ($leftWin && $rightWin) {
            $currentLevel++;
            $leftWin = false;
            $rightWin = false;
        }

        const nextLevel = levels[$currentLevel];
        left = nextLevel ? nextLevel.Left :  [];
        right = nextLevel ? nextLevel.Right : [];
    }
</script>

<div class="flex flex-col gap-8 h-screen items-center pt-4">
    {#if !completed}
        <div class="flex flex-col gap-4">
            <a href="/" class="i100 text-center  text-white text-6xl">cube<span class="text-blue-500">game</span></a>
            <div class="flex flex-row w-full justify-between gap-2">
                <p class="i400 text-white/90 rounded-md border-2 border-blue-500/20 bg-blue-500/10 shadow-lg shadow-blue-950/30 px-4 py-1">Level {$currentLevel}</p>
                <p class="i400 text-white/90 rounded-md border-2 border-blue-500/20 bg-blue-500/10 shadow-lg shadow-blue-950/30 px-4 py-1">{levelsLeft} levels left</p>
                <a class="i400 text-white/90 rounded-md border-2 border-blue-500/30 bg-blue-500/30 shadow-lg shadow-blue-950/30 px-4 py-1" href="/tutorial">Tutorial</a>
            </div>
        </div>
        <div class="flex flex-col gap-4 md:flex-row md:gap-24">
            {#key $currentLevel}
                {#if left}
                    <GameIterator side="left" index={getMiddleIndex(left)} array={left} />
                {/if}
                <div class="h-[1px] w-full bg-white/5 md:hidden"></div>
                {#if right}
                    <GameIterator side="right" index={getMiddleIndex(right)} array={right} />
                {/if}
            {/key}
        </div>
    {:else}
        <div class="flex flex-col">
            <a on:click={() => $currentLevel = 1} href="/" class="i100 text-center  text-white text-[4rem]">cube<span class="text-blue-500">game</span></a>
            <p class="text-white i400 text-center">No more levels left... You won!</p>
            <div>
                <button>Reset level count?</button>
            </div>
        </div>
        <div class="absolute top-0">
            <div class="overflow-hidden" use:confetti></div>
        </div>
    {/if}
</div>