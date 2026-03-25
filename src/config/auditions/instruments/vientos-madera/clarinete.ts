import type { Level } from "../types";

const basePath = "/src/assets/documents/RepertorioAudiciones";

const clarineteLevels: Level[] = [
    {
        name: "Fila",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 6",
                pdfPath: `${basePath}/Clarinete/Fila/Beethoven/Sinfonía Nº 6.pdf`,
            },
            {
                composer: "Borodin",
                title: "Danzas Polovtsiennes",
                pdfPath: `${basePath}/Clarinete/Fila/Borodin/Danzas Polovtsiennes.pdf`,
            },
            {
                composer: "G. Rossini",
                title: "Barbero de Sevilla",
                pdfPath: `${basePath}/Clarinete/Fila/G. Rossini/Barbero de Sevilla.pdf`,
            },
            {
                composer: "Mendelssohn",
                title: "Sueño de una Noche de Verano",
                pdfPath: `${basePath}/Clarinete/Fila/Mendelssohn/Sueño de una Noche de Verano.pdf`,
            },
            {
                composer: "Ravel",
                title: "Bolero",
                pdfPath: `${basePath}/Clarinete/Fila/Ravel/Bolero.pdf`,
            },
            {
                composer: "Rimsky-Korsakoff",
                title: "Capricho Español",
                pdfPath: `${basePath}/Clarinete/Fila/Rimsky-Korsakoff/Capricho Español.pdf`,
            },
        ],
    },
    {
        name: "Pasante",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 6",
                pdfPath: `${basePath}/Clarinete/Pasante/Beethoven/Sinfonía Nº 6.pdf`,
            },
            {
                composer: "G. Rossini",
                title: "Barbero de Sevilla",
                pdfPath: `${basePath}/Clarinete/Pasante/G. Rossini/Barbero de Sevilla.pdf`,
            },
            {
                composer: "Ravel",
                title: "Bolero",
                pdfPath: `${basePath}/Clarinete/Pasante/Ravel/Bolero.pdf`,
            },
        ],
    },
    {
        name: "Principal y Asistente",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 6",
                pdfPath: `${basePath}/Clarinete/Principal y Asistente/Beethoven/Sinfonía Nº 6.pdf`,
            },
            {
                composer: "Borodin",
                title: "Danzas Polovtsiennes",
                pdfPath: `${basePath}/Clarinete/Principal y Asistente/Borodin/Danzas Polovtsiennes.pdf`,
            },
            {
                composer: "G. Rossini",
                title: "Barbero de Sevilla",
                pdfPath: `${basePath}/Clarinete/Principal y Asistente/G. Rossini/Barbero de Sevilla.pdf`,
            },
            {
                composer: "Mendelssohn",
                title: "Sueño de una Noche de Verano",
                pdfPath: `${basePath}/Clarinete/Principal y Asistente/Mendelssohn/Sueño de una Noche de Verano.pdf`,
            },
            {
                composer: "Ravel",
                title: "Bolero",
                pdfPath: `${basePath}/Clarinete/Principal y Asistente/Ravel/Bolero.pdf`,
            },
            {
                composer: "Rimsky-Korsakoff",
                title: "Capricho Español",
                pdfPath: `${basePath}/Clarinete/Principal y Asistente/Rimsky-Korsakoff/Capricho Español.pdf`,
            },
            {
                composer: "Rimsky-Korsakoff",
                title: "Scheherazade",
                pdfPath: `${basePath}/Clarinete/Principal y Asistente/Rimsky-Korsakoff/Scherazade.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Sinfonía Nº 5",
                pdfPath: `${basePath}/Clarinete/Principal y Asistente/Tchaikovsky/Sinfonía Nº 5.pdf`,
            },
            {
                composer: "Zoltan Kodaly",
                title: "Danzas de Galanta",
                pdfPath: `${basePath}/Clarinete/Principal y Asistente/Zoltan Kodaly/Danzas de Galanta.pdf`,
            },
        ],
    },
];

export const clarinete = {
    name: "Clarinete",
    levels: clarineteLevels,
    consolidatedPdf: `${basePath}/Clarinete/Repertorio de Audición OSC _ Clarinete.pdf`,
};
