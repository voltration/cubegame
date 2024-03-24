<script>
    import { Content, Trigger, Modal } from "sv-popup";
</script>

<Modal>
    <Content class="bg-[#111] p-4">
        <p class="text-white text-xl i700">how do i play?!?!</p>
        <p class="text-white text-xl i500">Welcome to cubegame. A game about cubes. In a grid.</p>
        <div class="pt-4">
            <p class="text-white text-xl i700">These are the following rules:</p>
            <div class="pt-2">
                <p class="text-white text-xl i500">• You have two grids, and both grids have a player with share the same input</p>
                <p class="text-white text-xl i500">• Have both players at the green grid at the same time to win.</p>
                <p class="text-white text-xl i500">• Players are not able to walk into the red one.</p>
                <p class="text-white text-xl i500">• Use WASD or your arrow keys to move.</p>
            </div>
            <p class="text-white text-xl i500 pt-4">Good luck!</p>
        </div>
    </Content>
    <Trigger>
        <button class="rounded-md border-2 bg-blue-500/20  border-blue-500/20 shadow-lg shadow-blue-950/30 p-2 px-6">
            <p class="i400 text text-white">Tutorial</p>
        </button>
    </Trigger>
  </Modal>