import type { Level } from "../types";

const basePath = "/src/assets/documents/RepertorioAudiciones";

const violinLevels: Level[] = [
    {
        name: "Nivel Fila A",
        pieces: [
            {
                composer: "Félix Mendelssohn",
                title: "Sinfonía Italiana",
                pdfPath: `${basePath}/Violín /Nivel Fila A/Félix Mendelssohn/Sinfonía Italiana.pdf`,
            },
            {
                composer: "José Calabrese",
                title: "Concierto para orquesta - 3mov. Barroco Blues",
                pdfPath: `${basePath}/Violín /Nivel Fila A/José Calabrese/Concierto para orquesta _ 3mov. Barroco Blues .pdf`,
            },
            {
                composer: "Richard Strauss",
                title: "Don Juan",
                pdfPath: `${basePath}/Violín /Nivel Fila A/Richard Strauss/Don Juan .pdf`,
            },
            {
                composer: "Serguéi Prokofiev",
                title: "Sinfonía Clásica",
                pdfPath: `${basePath}/Violín /Nivel Fila A/Serguéi Prokofiev/Sinfonía Clásica.pdf`,
            },
            {
                composer: "W.A. Mozart",
                title: "Sinfonía 41",
                pdfPath: `${basePath}/Violín /Nivel Fila A/W.A. Mozart/Sinfonía 41.pdf`,
            },
        ],
    },
    {
        name: "Nivel Fila B",
        pieces: [
            {
                composer: "Félix Mendelssohn",
                title: "Sinfonía Italiana",
                pdfPath: `${basePath}/Violín /Nivel Fila B/Félix Mendelssohn/Sinfonía Italiana.pdf`,
            },
            {
                composer: "G. Rossini",
                title: "Obertura La Italiana en Argel",
                pdfPath: `${basePath}/Violín /Nivel Fila B/G. Rossini/Obertura La Italiana en Argel.pdf`,
            },
            {
                composer: "J. Calabrese",
                title: "Concierto para orquesta - 3mov",
                pdfPath: `${basePath}/Violín /Nivel Fila B/J. Calabrese/Concierto para orquesta _ 3mov.pdf`,
            },
            {
                composer: "P. I. Tchaikovsky",
                title: "Sinfonía Nº 4",
                pdfPath: `${basePath}/Violín /Nivel Fila B/P. I. Tchaikovsky/Sinfonía Nº 4.pdf`,
            },
            {
                composer: "W.A. Mozart",
                title: "Sinfonía Nº 40",
                pdfPath: `${basePath}/Violín /Nivel Fila B/W.A. Mozart/Sinfonía Nº 40.pdf`,
            },
        ],
    },
    {
        name: "Nivel Pasante",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 7",
                pdfPath: `${basePath}/Violín /Nivel Pasante/Beethoven/Sinfonía Nº 7.pdf`,
            },
            {
                composer: "Brahms",
                title: "Sinfonía Nº 2",
                pdfPath: `${basePath}/Violín /Nivel Pasante/Brahms/Sinfonía Nº 2.pdf`,
            },
            {
                composer: "M. Ravel",
                title: "Bolero",
                pdfPath: `${basePath}/Violín /Nivel Pasante/M. Ravel/Bolero.pdf`,
            },
        ],
    },
    {
        name: "Nivel Principal y Asistente",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 9",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Beethoven/Sinfonía Nº 9.pdf`,
            },
            {
                composer: "Brahms",
                title: "Sinfonía Nº 4",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Brahms/Sinfonía Nº 4.pdf`,
            },
            {
                composer: "Stravinsky",
                title: "Petrushka",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Stravinsky/Petrushka.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Sinfonía Nº 6",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Tchaikovsky/Sinfonía Nº 6.pdf`,
            },
        ],
    },
];

export const violin = {
    name: "Violín",
    levels: violinLevels,
    consolidatedPdf: `${basePath}/Violín /Repertorio de Audición OSC _ Violín.pdf`,
};
