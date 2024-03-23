<script lang="ts">
    import { currentLevel, leftWin, rightWin } from "$lib/user.writable";
    import { levels } from "$lib/Levels";
    import GameIterator from "./GameIterator.svelte";
    import { getMiddleIndex } from "$lib/arrayHelper";

    let left: string[];
    let right: string[];
    let levelsLeft: number;

    $: levelsLeft = Object.keys(levels).length - $currentLevel

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
    
    <div class="flex items-center justify-center h-screen ">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div class="flex flex-col gap-12">
            <div class="flex flex-col w-full items-center gap-2">
                <a href="/" class="i100 text-center  text-white text-[4rem]">cube<span class="text-blue-500">game</span></a>
                <div class="flex flex-row gap-4">
                    <div class="rounded-md border-2 border-blue-500/20 shadow-lg shadow-blue-950/30 p-2 px-6">
                        <p class="i500 text text-white">Level {$currentLevel}</p>
                    </div>
                    <div class="rounded-md border-2 border-blue-500/20 shadow-lg shadow-blue-950/30 p-2 px-6">
                        <p class="i500 text text-white">{levelsLeft} levels left</p>
                    </div>
                </div>
            </div>
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