<script>
	import { onMount } from "svelte";
	import "../app.css";
	import '@fontsource-variable/inter';
	import { goto } from "$app/navigation";

	let aspectRatio = 0;

	function calculateAspectRatio() {
		const screenWidth = window.screen.width;
		const screenHeight = window.screen.height;
		aspectRatio = screenWidth / screenHeight;
  	}

	onMount(() => {
		if (aspectRatio !== 16 / 9) {
			goto("/device");
		}
	})
</script>

<slot />