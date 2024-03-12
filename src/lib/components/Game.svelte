<script lang="ts">
    import { currentLevel } from "$lib/user.writable";
    import { Levels } from "$lib/Levels";
	import GameIterator from "./GameIterator.svelte";


    // @ts-expect-error
    const left = Levels[$currentLevel].Left;
    // @ts-expect-error
    const right = Levels[$currentLevel].Right;
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