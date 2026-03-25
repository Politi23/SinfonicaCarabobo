import type { Level } from "../types";

const basePath = "/documents/RepertorioAudiciones";

const oboeLevels: Level[] = [
    {
        name: "Nivel Fila",
        pieces: [
            {
                composer: "Barber",
                title: "Concierto para Violín - 2do mov.",
                pdfPath: `${basePath}/Oboe/Nivel Fila/Barber/Concierto para Violín segundo mov..pdf`,
            },
            {
                composer: "Varios",
                title: "Corno Inglés - Joropeando (J. Calabrese)",
                pdfPath: `${basePath}/Oboe/Nivel Fila/Corno inglés/Joropeando J.Calabrese.pdf`,
            },
            {
                composer: "Rossini",
                title: "Corno Inglés - Obertura Guillermo Tell",
                pdfPath: `${basePath}/Oboe/Nivel Fila/Corno inglés/Obertura Guillermo Tell.pdf`,
            },
            {
                composer: "Dvořák",
                title: "Corno Inglés - Sinfonía Nuevo Mundo - 2do Mov.",
                pdfPath: `${basePath}/Oboe/Nivel Fila/Corno inglés/Sinfonía Nuevo Mundo 2do Mov..pdf`,
            },
            {
                composer: "G. Verdi",
                title: "Obertura Vísperas Sicilianas",
                pdfPath: `${basePath}/Oboe/Nivel Fila/G. Verdi/Obertura Vísperas Sicilianas.pdf`,
            },
            {
                composer: "Rossini",
                title: "La Scala di Seta",
                pdfPath: `${basePath}/Oboe/Nivel Fila/Rossini/La Scala si Seta.pdf`,
            },
            {
                composer: "Rossini",
                title: "Obertura La Italiana in Algeri",
                pdfPath: `${basePath}/Oboe/Nivel Fila/Rossini/Obertura La Italiana in Algeri.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Lago de los Cisnes",
                pdfPath: `${basePath}/Oboe/Nivel Fila/Tchaikovsky/Lago de los cisnes.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Sinfonía Nº 4",
                pdfPath: `${basePath}/Oboe/Nivel Fila/Tchaikovsky/Sinfonía Nº 4.pdf`,
            },
        ],
    },
    {
        name: "Nivel Pasante",
        pieces: [
            {
                composer: "A. Márquez",
                title: "Danzón Nº 2",
                pdfPath: `${basePath}/Oboe/Nivel Pasante/A. Márquez/Danzón Nº2.pdf`,
            },
            {
                composer: "Brahms",
                title: "Variaciones sobre un tema de Haydn",
                pdfPath: `${basePath}/Oboe/Nivel Pasante/Brahms/variaciones sobre un tema de Haydn.pdf`,
            },
            {
                composer: "Prokofiev",
                title: "Pedro y el Lobo",
                pdfPath: `${basePath}/Oboe/Nivel Pasante/Prokofiev/Pedro y el Lobo.pdf`,
            },
            {
                composer: "Schubert",
                title: "Sinfonía Nº 8 'Inconclusa'",
                pdfPath: `${basePath}/Oboe/Nivel Pasante/Shubert/Sinfonía Nº 8 _inconclusa_ .pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Lago de los Cisnes - Escena 1",
                pdfPath: `${basePath}/Oboe/Nivel Pasante/Tchaikovsky/Lago de los Cisnes_ Escena 1.pdf`,
            },
        ],
    },
    {
        name: "Nivel Principal y Asistente",
        pieces: [
            {
                composer: "Brahms",
                title: "Concierto para Violín",
                pdfPath: `${basePath}/Oboe/Nivel Principal y Asistente/Brahms/Concierto para Violín.pdf`,
            },
            {
                composer: "G. Rossini",
                title: "La Scala di Seta",
                pdfPath: `${basePath}/Oboe/Nivel Principal y Asistente/G. Rossini/La Scala si Seta.pdf`,
            },
            {
                composer: "Korsakov",
                title: "Scheherazade - Solos II y III movimiento",
                pdfPath: `${basePath}/Oboe/Nivel Principal y Asistente/Korsakov/Scherezade Solos II y III movimiento.pdf`,
            },
            {
                composer: "Ravel",
                title: "Tumbas de Couperin",
                pdfPath: `${basePath}/Oboe/Nivel Principal y Asistente/Ravel/Tumbas de Couperin.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Sinfonía Nº 4",
                pdfPath: `${basePath}/Oboe/Nivel Principal y Asistente/Tchaikovsky/Sinfonía Nº 4.pdf`,
            },
        ],
    },
];

export const oboe = {
    name: "Oboe",
    levels: oboeLevels,
    consolidatedPdf: `${basePath}/Oboe/Repertorio de Audición OSC _ Oboe.pdf`,
};
