<script lang="ts">
	import { fade } from "svelte/transition";


</script>

<body class="flex items-center justify-center h-screen w-screen">
    <div class="absolute top-0 left-0 bg-[#111]/60 w-screen h-screen">
        <div id="container" class="gradient-container">
            <div id="gradient1"></div>
            <div id="gradient2"></div>
        </div>
    </div>
    <div class="z-50">
        <p transition:fade class="i100 text-center text-white text-3xl">cubegame</p>
    </div>
</body>

<style>

@keyframes Scroll {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 33%; }
}

#gradient1 {
  background: linear-gradient(70deg, rgb(10, 3, 15) 0%, rgb(64, 69, 149) 25%, rgb(10, 3, 15) 50%, rgb(64, 69, 149) 75%, rgb(10, 3, 15) 100%);
  animation: Scroll 12s linear infinite;
  background-size: 300% 200%;
}

#gradient2 {
  background: radial-gradient(circle, rgb(0, 0, 0) 0%, rgb(207, 204, 205) 55%, rgb(70, 9, 144) 100%);
  mix-blend-mode: color-dodge;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

div {
    grid-column: 1;
    grid-row: 1;
}

.gradient-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  display: grid;
}

.shadow {
  border-radius: 50%;
  display: inline-block;
  position: relative;
}
.shadow img {
  border-radius: 50%;
  display: block;
  border: 1px solid #fff;
}
.shadow:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: inset 10px 24px 40px 0px white, 
    inset -10px -24px 40px 0px white, 
    inset 20px -10px 40px 0px white, 
    inset -20px 10px 40px 0px white;
}

</style>