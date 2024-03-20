import type { Levels } from "./types/Levels";

export const levels: Levels = {
    1: {
        Left: [
            "N", "N", "G",
            "N", "N", "R",
            "N", "N", "N",
        ],
        
        Right: [
            "N", "N", "R",
            "N", "N", "G",
            "N", "N", "N",
        ],
    },
    2: {
        Left: [
            "G", "N", "N",
            "R", "N", "N",
            "N", "N", "N",
        ],
        
        Right: [
            "N", "N", "N",
            "N", "N", "R",
            "G", "N", "N",
        ],
    },
    3: {
        Left: [
            "N", "R", "N",
            "N", "N", "N",
            "N", "N", "G",
        ],
        
        Right: [
            "N", "N", "N",
            "N", "N", "R",
            "G", "N", "N",
        ],
    }
}