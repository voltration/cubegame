<body class="flex items-center justify-center h-screen w-screen">
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <div class="flex flex-col z-50">
        <div class="fade-in-text border-b-[1px] border-white/20">
            <p class="i100 text-center text-white text-[12rem]">cube<span class="text-blue-500">game</span></p>
        </div>
        <div class="flex justify-between fade-in-button">
            <a class="text-white hover:text-blue-300 cursor-pointer duration-200 ease-out i100 text-[4rem]" href="game">play</a>
            <a class="text-white hover:text-blue-300 cursor-pointer duration-200 ease-out i100 text-[4rem]" href="https://github.com/voltration/cubegame">source code</a>
        </div>
    </div>
</body>

<style>
    @keyframes fadeInText {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }

    @keyframes fadeInButton {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }
    .fade-in-text {
    animation: fadeInText 1s;
    }

    .fade-in-button {
    animation: fadeInButton 2s;
    }
</style>