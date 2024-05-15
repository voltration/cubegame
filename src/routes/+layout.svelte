<script>
	import { onMount } from "svelte";
	import "../app.css";
	import '@fontsource-variable/inter';
	import { goto } from "$app/navigation";
	import '@fontsource-variable/outfit';
	import { Toaster } from "svelte-sonner";
</script>


<div class="h-screen w-screen">
	<div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
	<slot />
	<Toaster richColors />
</div>
