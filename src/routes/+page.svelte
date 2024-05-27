<script>
	import { goto } from "$app/navigation";
	import { levels } from "$lib/Levels";
	import Letterbox from "$lib/components/Letterbox.svelte";
	import Letterlogo from "$lib/components/Letterlogo.svelte";
	import { currentLevel, resetCounter } from "$lib/user.writable";

</script>

<div class="flex justify-center mt-24">
    <div class="md:scale-125 flex flex-col gap-8">
        <Letterlogo />
        <div class="flex flex-col gap-4">
            <a href="/game" class="w-full flex items-center justify-center ease-in-out hover:scale-95 duration-300 shadow-2xl shadow-blue-950 border-blue-500/40 border-2 rounded-md px-4 py-1 text-white i500">Play</a>
            <a href="/tutorial" class="w-full flex items-center justify-center ease-in-out hover:scale-95 duration-300 shadow-2xl shadow-blue-950 border-blue-500/40 border-2 rounded-md px-4 py-1 text-white i500">Tutorial</a>
            <button on:click={resetCounter} class="w-full ease-in-out hover:scale-95 duration-300 shadow-2xl shadow-blue-950 border-blue-500/40 border-2 rounded-md px-4 py-1 text-white i500">Reset progression</button>
            <a href="https://github.com/voltration/cubegame" class="w-full bg-blue-950/40 ease-in-out hover:scale-95 duration-300 shadow-2xl shadow-blue-950 border-blue-500/40 border-2 rounded-md px-4 py-2 mt-2 text-white flex items-center justify-center i500"><img class="size-6" src="./github-mark.svg" alt="Github"></a>
        </div>
    </div>
    
</div>