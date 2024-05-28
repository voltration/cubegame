<script lang="ts">
    import { currentLevel, leftWin, rightWin } from "$lib/user.writable";
    import { levels } from "$lib/Levels";
    import GameIterator from "$lib/components/GameIterator.svelte";
    import { getMiddleIndex } from "$lib/arrayHelper";
	import { confetti } from "@neoconfetti/svelte";
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";
	import { toast } from "svelte-sonner";
	import { goto } from "$app/navigation";

    const tutorialMessages = [
        "Use WASD, your arrow keys or swipe if you are on mobile.",
        "Your objective is to have both your dots at the green square at the same time.",
        "You can not stand on top of red squares.",
        "Good luck!"
    ]

    let canMove = false;
    let step = 0;
    let timer = 10;
    let tutCompleted = false;

    onMount(() => {
        setInterval(() => {
            timer--;
            if (timer == 0) {
                if (step < 3) {
                    step++;
                }
                else {
                    tutCompleted = true;
                    canMove = true;
                    toast.info("You can now move.")
                }
                if (step == 3) {
                    timer = 5;
                }
                else {
                    timer = 10;
                }
            } 
        }, 1000);
    })

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
            setTimeout(() => {
                toast.success("Completed the tutorial!");
                canMove = false;
                setTimeout(() => {
                    goto("./");
                }, 2000)
            })
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
        </div>
        <div class="flex flex-col gap-4 md:flex-row md:gap-24">
            {#key $currentLevel}
                {#if left}
                    <GameIterator canMove={canMove} side="left" index={getMiddleIndex(left)} array={left} />
                {/if}
                <div class="h-[1px] w-full bg-white/5 md:hidden"></div>
                {#if right}
                    <GameIterator canMove={canMove} side="right" index={getMiddleIndex(right)} array={right} />
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

{#if !tutCompleted}
    <div transition:fade={{ duration: 300 }} class="mb-12 border-2 rounded-full shadow shadow-blue-500/50 bg-blue-500/20 px-8 py-4 border-blue-500/50 absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div class="flex flex-row justify-center items-center gap-2">
            <div class="text-blue-300 w-8 text-center rounded-md border-blue-500/30 border-2 bg-blue-500/20">{timer}</div>
            <p class="text-white/90 i500"> {tutorialMessages[step]}</p>
        </div>
    </div>
{/if}