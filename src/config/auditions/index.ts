// Types
export type { Piece, Level, Instrument, Category } from "./types";

// Constants
export { basePath } from "./constants";

// Instrument families
export * from "./instruments/cuerdas";
export * from "./instruments/vientos-madera";
export * from "./instruments/vientos-metal";
export * from "./instruments/percusion";

// Assemble categories
import type { Category } from "./types";
import { violin, viola, violoncello, contrabajo } from "./instruments/cuerdas";
import { flauta, oboe, clarinete } from "./instruments/vientos-madera";
import { corno, trompeta, trombon, tuba } from "./instruments/vientos-metal";
import { percusion } from "./instruments/percusion";

export const auditionsData: Category[] = [
    {
        name: "Cuerdas",
        variant: "secondary",
        instruments: [violin, viola, violoncello, contrabajo],
    },
    {
        name: "Vientos Madera",
        variant: "secondary",
        instruments: [flauta, oboe, clarinete],
    },
    {
        name: "Vientos Metal",
        variant: "secondary",
        instruments: [corno, trompeta, trombon, tuba],
    },
    {
        name: "Percusión",
        variant: "secondary",
        instruments: [percusion],
    },
];
