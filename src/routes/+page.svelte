<script lang="ts">
</script>

<body class="flex items-center justify-center h-screen w-screen">
    <div class="absolute top-0 left-0 bg-[#111]/60 w-screen h-screen">
        <div id="container" class="gradient-container">
            <div id="gradient1"></div>
            <div id="gradient2"></div>
        </div>
    </div>
    <div class="z-50">
        <p class="i100 fade-in-text text-center text-white text-3xl">cubegame</p>

        <div>
            
        </div>
    </div>
</body>

<style>
    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }

    @keyframes Scroll {
        0% { background-position: 0% 0%; }
        100% { background-position: 100% 33%; }
    }

    .fade-in-text {
    animation: fadeIn 7s;
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
</style>