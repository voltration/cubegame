<script lang="ts">
    export let letter: string;
    export let index = false;
</script>

{#if index}
    <div class="size-12 bg-transparent border-transparent text-white border-b-4 rounded-md flex items-center justify-center">{letter}</div>
{:else }
    <p class="size-12 capitalize bg-blue-950/30 border-blue-800 shadow shadow-blue-950/40 border-2 rounded-md text-white/90 i300 flex items-center justify-center text-3xl">{letter}</p>
{/if}