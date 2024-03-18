<script lang="ts">
    import { currentLevel } from "$lib/user.writable";
    import { levels } from "$lib/Levels";
    import GameIterator from "./GameIterator.svelte";
    import { onMount } from "svelte";
    import { getMiddleIndex } from "$lib/arrayHelper";
	import { writable } from "svelte/store";

    let left: string[];
    let right: string[];

    const leftWin = writable<boolean>(false);
    const rightWin = writable<boolean>(false);

    $: {
        if ($leftWin && $rightWin) {
            alert("You won!");
        }
        console.log($leftWin, $rightWin);
    }

    onMount(() => {
        left = levels[$currentLevel].Left;
        right = levels[$currentLevel].Right;
    });
</script>

<body>
    <div class="flex items-center justify-center h-screen">
        <div class="flex justify-between gap-24">
            {#if left}
            <GameIterator index={getMiddleIndex(left)} win={$leftWin} array={left} />
            {/if}
            {#if right}
            <GameIterator index={getMiddleIndex(right)} win={$rightWin} array={right} />
            {/if}
        </div>
    </div>
</body>