import type { Level } from "../types";

const basePath = "/src/assets/documents/RepertorioAudiciones";

const violaLevels: Level[] = [
    {
        name: "Nivel Fila",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 5",
                pdfPath: `${basePath}/Viola/Nivel Fila/Beethoven/Sinfonía Nº 5.pdf`,
            },
            {
                composer: "Brahms",
                title: "Sinfonía Nº 2",
                pdfPath: `${basePath}/Viola/Nivel Fila/Brahms/Sinfonía Nº 2.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Sinfonía Nº 4",
                pdfPath: `${basePath}/Viola/Nivel Fila/Tchaikovsky/Sinfonía Nº 4.pdf`,
            },
        ],
    },
    {
        name: "Nivel Pasante",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 7",
                pdfPath: `${basePath}/Viola/Nivel Pasante/Beethoven/Sinfonía Nº 7.pdf`,
            },
            {
                composer: "Dvořák",
                title: "Sinfonía Nº 9",
                pdfPath: `${basePath}/Viola/Nivel Pasante/Dvořák/Sinfonía Nº 9.pdf`,
            },
            {
                composer: "Ravel",
                title: "Bolero",
                pdfPath: `${basePath}/Viola/Nivel Pasante/Ravel/Bolero.pdf`,
            },
        ],
    },
    {
        name: "Nivel Principal",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 9",
                pdfPath: `${basePath}/Viola/Nivel Principal/Beethoven/Sinfonía Nº 9.pdf`,
            },
            {
                composer: "Brahms",
                title: "Sinfonía Nº 4",
                pdfPath: `${basePath}/Viola/Nivel Principal/Brahms/Sinfonía Nº 4.pdf`,
            },
            {
                composer: "Stravinsky",
                title: "La Consagración de la Primavera",
                pdfPath: `${basePath}/Viola/Nivel Principal/Stravinsky/La Consagración de la Primavera.pdf`,
            },
        ],
    },
];

export const viola = {
    name: "Viola",
    levels: violaLevels,
    consolidatedPdf: `${basePath}/Viola/Repertorio de Audición OSC _ Viola.pdf`,
};
