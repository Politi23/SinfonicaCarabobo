import type { Level } from "../types";

const basePath = "/documents/RepertorioAudiciones";

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
                composer: "José Calabrese",
                title: "Concierto para orquesta - 3mov. Barroco Blues",
                pdfPath: `${basePath}/Violín /Nivel Fila B/José Calabrese/Concierto para orquesta _ 3mov. Barroco Blues .pdf`,
            },
            {
                composer: "Serguéi Prokofiev",
                title: "Sinfonía Clásica",
                pdfPath: `${basePath}/Violín /Nivel Fila B/Serguéi Prokofiev/Sinfonía Clásica.pdf`,
            },
            {
                composer: "W.A. Mozart",
                title: "Sinfonía 41",
                pdfPath: `${basePath}/Violín /Nivel Fila B/W.A. Mozart/Sinfonía 41.pdf`,
            },
        ],
    },
    {
        name: "Nivel Pasante",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía No.1",
                pdfPath: `${basePath}/Violín /Nivel Pasante /Beethoven/Sinfonía no.1.pdf`,
            },
            {
                composer: "Gioachino Rossini",
                title: "El Barbero de Sevilla",
                pdfPath: `${basePath}/Violín /Nivel Pasante /Gioachino Rossini/El Barbero de Sevilla.pdf`,
            },
            {
                composer: "Gioachino Rossini",
                title: "Obertura Gazza Ladra",
                pdfPath: `${basePath}/Violín /Nivel Pasante /Gioachino Rossini/ Obertura Gazza Ladra.pdf`,
            },
        ],
    },
    {
        name: "Nivel Principal y Asistente",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 9 (3er mov.)",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Beethoven/Sinfonía Nº 9 (3er mov.).pdf`,
            },
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 9 (4to mov.)",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Beethoven/Sinfonía Nº 9 (4to mov.) .pdf`,
            },
            {
                composer: "Dimitri Shostakovich",
                title: "5ta Sinfonía",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Dimitri Shostakovich/5ta Sinfonía.pdf`,
            },
            {
                composer: "Dvorak",
                title: "Serenata para cuerdas",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Dvorak/Serenata para cuerdas.pdf`,
            },
            {
                composer: "Dvorak",
                title: "Sinfonía no.9",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Dvorak/Sinfonía no.9 .pdf`,
            },
            {
                composer: "Mozart",
                title: "Sinfonía Nº 39",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Mozart/Sinfonía Nº 39.pdf`,
            },
            {
                composer: "Richard Strauss",
                title: "Don Juan",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Richard Strauss/ Don Juan .pdf`,
            },
            {
                composer: "Bizet (Solo)",
                title: "Suite Carmen No. 2",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Solos/Bizet/Suite Carmen No. 2.pdf`,
            },
            {
                composer: "Calabrese (Solo)",
                title: "Concierto para orquesta - 3mov. Barroco Blues",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Solos/Calabrese/Concierto para orquesta _ 3mov. Barroco Blues .pdf`,
            },
            {
                composer: "Korsakov (Solo)",
                title: "Solos Scherezade",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Solos/Korsakov/Solos Scherezade.pdf`,
            },
            {
                composer: "Offenbach (Solo)",
                title: "Orfeo en los infiernos - Obertura",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Solos/Offenbach/Orfeo en los infiernos Obertura.pdf`,
            },
            {
                composer: "Shostakovich (Solo)",
                title: "9na Sinfonía",
                pdfPath: `${basePath}/Violín /Nivel Principal y Asistente/Solos/Shostakovich/9 sinfonía.pdf`,
            },
        ],
    },
];

export const violin = {
    name: "Violín",
    levels: violinLevels,
    consolidatedPdf: `${basePath}/Violín /Repertorio de Audición OSC _ Violín.pdf`,
};
