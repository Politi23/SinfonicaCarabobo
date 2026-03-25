import type { Level } from "../types";

const basePath = "/documents/RepertorioAudiciones";

const violaLevels: Level[] = [
    {
        name: "Nivel Fila",
        pieces: [
            {
                composer: "Beethoven",
                title: "Novena Sinfonía",
                pdfPath: `${basePath}/Viola/Nivel Fila/Beethoven/Novena Sinfonia.pdf`,
            },
            {
                composer: "Beethoven",
                title: "Quinta Sinfonía - 2do mov.",
                pdfPath: `${basePath}/Viola/Nivel Fila/Beethoven/Quinta Sinfonia 2mov.pdf`,
            },
            {
                composer: "José Calabrese",
                title: "Barroco Blues",
                pdfPath: `${basePath}/Viola/Nivel Fila/José Calabrese/Barroco Blues.pdf`,
            },
            {
                composer: "Strauss",
                title: "Don Juan",
                pdfPath: `${basePath}/Viola/Nivel Fila/Strauss/Don Juan.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Sexta Sinfonía",
                pdfPath: `${basePath}/Viola/Nivel Fila/Tchaikovsky/Sexta Sinfonia.pdf`,
            },
        ],
    },
    {
        name: "Nivel Pasante",
        pieces: [
            {
                composer: "Beethoven",
                title: "Primera Sinfonía",
                pdfPath: `${basePath}/Viola/Nivel Pasante/Beethoven/Primera sinfonia.pdf`,
            },
            {
                composer: "J. Calabrese",
                title: "Concierto para orquesta - 3er mov. Barroco Blues",
                pdfPath: `${basePath}/Viola/Nivel Pasante/J. Calabrese/Concierto para orquesta, 3er mov. Barroco Blues.pdf`,
            },
            {
                composer: "Rossini",
                title: "Obertura Gazza Ladra",
                pdfPath: `${basePath}/Viola/Nivel Pasante/Rossini/Obertura Gazza Ladra.pdf`,
            },
        ],
    },
    {
        name: "Nivel Principal o Asistente",
        pieces: [
            {
                composer: "Beethoven",
                title: "Novena Sinfonía",
                pdfPath: `${basePath}/Viola/Nivel Principal o Asistente/Beethoven/ Novena Sinfonia.pdf`,
            },
            {
                composer: "Beethoven",
                title: "Quinta Sinfonía - 2do mov.",
                pdfPath: `${basePath}/Viola/Nivel Principal o Asistente/Beethoven/Quinta Sinfonia 2mov.pdf`,
            },
            {
                composer: "Mozart",
                title: "Sinfonía Nº 40",
                pdfPath: `${basePath}/Viola/Nivel Principal o Asistente/Mozart/Sinfonía Nº 40.pdf`,
            },
            {
                composer: "Strauss",
                title: "Don Juan",
                pdfPath: `${basePath}/Viola/Nivel Principal o Asistente/Strauss/ Don Juan.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Sexta Sinfonía",
                pdfPath: `${basePath}/Viola/Nivel Principal o Asistente/Tchaikovsky/Copia de Sexta Sinfonia.pdf`,
            },
            {
                composer: "Berlioz (Solo)",
                title: "Harold in Italy",
                pdfPath: `${basePath}/Viola/Nivel Principal o Asistente/Solos/Berlioz/IMSLP42123-PMLP11245-Berlioz-HeroldinItaly.Viola.pdf`,
            },
            {
                composer: "J. Calabrese (Solo)",
                title: "Copia de Barroco Blues",
                pdfPath: `${basePath}/Viola/Nivel Principal o Asistente/Solos/J. Calabrese/Copia de Barroco Blues.pdf`,
            },
            {
                composer: "Puccini (Solo)",
                title: "Intermezzo - Manon Lescaut",
                pdfPath: `${basePath}/Viola/Nivel Principal o Asistente/Solos/Puccini/Intermezzo Manon Lescaut.pdf`,
            },
        ],
    },
];

export const viola = {
    name: "Viola",
    levels: violaLevels,
    consolidatedPdf: `${basePath}/Viola/Repertorio de Audición OSC _ Viola.pdf`,
};
