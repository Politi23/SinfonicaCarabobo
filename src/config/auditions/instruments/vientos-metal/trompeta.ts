import type { Level } from "../types";

const basePath = "/documents/RepertorioAudiciones";

const trompetaLevels: Level[] = [
    {
        name: "Fila A",
        pieces: [
            {
                composer: "Dvorak",
                title: "Sinfonía Nuevo Mundo",
                pdfPath: `${basePath}/Trompeta /Fila/Fila A/Dvorak/Sinfonía Nuevo Mundo.pdf`,
            },
            {
                composer: "M. Mussorgsky",
                title: "Promenade - Cuadros de una Exposición",
                pdfPath: `${basePath}/Trompeta /Fila/Fila A/M. Mussorgsky/promenade Cuadros de una Exposición.pdf`,
            },
            {
                composer: "Rimski-Korsakov",
                title: "Scherezade",
                pdfPath: `${basePath}/Trompeta /Fila/Fila A/Rimski-Korsakov/Scherezade.pdf`,
            },
            {
                composer: "Shostakovich",
                title: "5ta Sinfonía",
                pdfPath: `${basePath}/Trompeta /Fila/Fila A/Shostakovich/5ta Sinfonía.pdf`,
            },
        ],
    },
    {
        name: "Fila B",
        pieces: [
            {
                composer: "A. Márquez",
                title: "Danzón No.2 (solo)",
                pdfPath: `${basePath}/Trompeta /Fila/Fila B/A. Márquez/Danzón No.2 (solo) .pdf`,
            },
            {
                composer: "Beethoven",
                title: "Leonore Nº 2 y 3",
                pdfPath: `${basePath}/Trompeta /Fila/Fila B/Beethoven/Leonore Nº 2 y 3.pdf`,
            },
            {
                composer: "G. Rossini",
                title: "Obertura Guillermo Tell",
                pdfPath: `${basePath}/Trompeta /Fila/Fila B/G. Rossini/Obertura Guillermo Tell.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Cascanueces - Le Chocolat Allegro Brillante",
                pdfPath: `${basePath}/Trompeta /Fila/Fila B/Tchaikovsky/Cascanueces Le Chocolat Allegro Brillante.pdf`,
            },
        ],
    },
    {
        name: "Pasante",
        pieces: [
            {
                composer: "Beethoven",
                title: "Leonore Nº 2 y 3",
                pdfPath: `${basePath}/Trompeta /Pasante/Beethoven/Leonore Nº 2 y 3.pdf`,
            },
        ],
    },
];

export const trompeta = {
    name: "Trompeta",
    levels: trompetaLevels,
    consolidatedPdf: `${basePath}/Trompeta /Programa de Audición para Trompeta.pdf`,
};
