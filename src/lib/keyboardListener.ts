export function onKeyDown(e: KeyboardEvent, array: string[], index: number) {
    switch (e.key) {
        case "ArrowLeft":
            if (index % 3 === 0) { // Tile is already on the left edge
                e.preventDefault();
            } else {
                //index.update((index) => index - 1);
            }
            break;
        case "ArrowRight":
            if ((index + 1) % 3 === 0) { // Tile is already on the right edge
                e.preventDefault();
            } else {
                //index.update((index) => index + 1);
            }
            break;
        case "ArrowUp":
            if (index < 3) { // Tile is already on the top edge
                e.preventDefault();
            } else {
                //tileIndex.update((index) => index - 3);
            }
            break;
        case "ArrowDown":
            if (index >= 6) { // Tile is already on the bottom edge
                e.preventDefault();
            } else {
                //tileIndex.update((index) => index + 3);
            }
            break;
    }
}