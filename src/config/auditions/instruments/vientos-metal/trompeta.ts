import type { Level } from "../types";

const basePath = "/src/assets/documents/RepertorioAudiciones";

const trompetaLevels: Level[] = [
    {
        name: "Nivel Fila",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 5",
                pdfPath: `${basePath}/Trompeta /Nivel Fila/Beethoven/Sinfonía Nº 5.pdf`,
            },
            {
                composer: "G. Rossini",
                title: "Obertura La Italiana en Argel",
                pdfPath: `${basePath}/Trompeta /Nivel Fila/G. Rossini/Obertura La Italiana en Argel.pdf`,
            },
            {
                composer: "J. Calabrese",
                title: "Obertura Festiva",
                pdfPath: `${basePath}/Trompeta /Nivel Fila/J. Calabrese/Obertura Festiva.pdf`,
            },
            {
                composer: "P. I. Tchaikovsky",
                title: "Sinfonía Nº 4",
                pdfPath: `${basePath}/Trompeta /Nivel Fila/P. I. Tchaikovsky/Sinfonía Nº 4.pdf`,
            },
            {
                composer: "W.A. Mozart",
                title: "Sinfonía Nº 40",
                pdfPath: `${basePath}/Trompeta /Nivel Fila/W.A. Mozart/Sinfonía Nº 40.pdf`,
            },
        ],
    },
    {
        name: "Nivel Pasante",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 7",
                pdfPath: `${basePath}/Trompeta /Nivel Pasante/Beethoven/Sinfonía Nº 7.pdf`,
            },
            {
                composer: "Brahms",
                title: "Sinfonía Nº 2",
                pdfPath: `${basePath}/Trompeta /Nivel Pasante/Brahms/Sinfonía Nº 2.pdf`,
            },
            {
                composer: "M. Ravel",
                title: "Bolero",
                pdfPath: `${basePath}/Trompeta /Nivel Pasante/M. Ravel/Bolero.pdf`,
            },
        ],
    },
    {
        name: "Nivel Principal",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 9",
                pdfPath: `${basePath}/Trompeta /Nivel Principal/Beethoven/Sinfonía Nº 9.pdf`,
            },
            {
                composer: "Brahms",
                title: "Sinfonía Nº 4",
                pdfPath: `${basePath}/Trompeta /Nivel Principal/Brahms/Sinfonía Nº 4.pdf`,
            },
            {
                composer: "Stravinsky",
                title: "Petrushka",
                pdfPath: `${basePath}/Trompeta /Nivel Principal/Stravinsky/Petrushka.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Sinfonía Nº 6",
                pdfPath: `${basePath}/Trompeta /Nivel Principal/Tchaikovsky/Sinfonía Nº 6.pdf`,
            },
        ],
    },
];

export const trompeta = {
    name: "Trompeta",
    levels: trompetaLevels,
    consolidatedPdf: `${basePath}/Trompeta /Repertorio de Audición OSC _ Trompeta.pdf`,
};
