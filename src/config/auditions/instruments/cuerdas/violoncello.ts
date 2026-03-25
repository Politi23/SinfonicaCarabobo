import type { Level } from "../types";

const basePath = "/src/assets/documents/RepertorioAudiciones";

const violoncelloLevels: Level[] = [
    {
        name: "Fila A",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sexta Sinfonía - Andante Molto",
                pdfPath: `${basePath}/Violoncello /Fila A/Beethoven/Sexta Sinfonia Movimiento_ Andante Molto.pdf`,
            },
            {
                composer: "José Calabrese",
                title: "Concierto para violoncello y orquesta",
                pdfPath: `${basePath}/Violoncello /Fila A/José Calabrese/Concierto para violoncello y orquesta.pdf`,
            },
            {
                composer: "Varios",
                title: "Obertura Festiva",
                pdfPath: `${basePath}/Violoncello /Fila A/Obertura Festiva.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Obertura fantasía Romeo y Julieta",
                pdfPath: `${basePath}/Violoncello /Fila A/Tchaikovsky/Obertura fantasía Romero y Julieta.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Quinta sinfonía",
                pdfPath: `${basePath}/Violoncello /Fila A/Tchaikovsky/Quinta sinfonía.pdf`,
            },
        ],
    },
    {
        name: "Fila B",
        pieces: [
            {
                composer: "Beethoven",
                title: "Coriolan Obertura",
                pdfPath: `${basePath}/Violoncello /Nivel Fila B/Beethoven/Coriolan Obertura.pdf`,
            },
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 5",
                pdfPath: `${basePath}/Violoncello /Nivel Fila B/Beethoven/Sinfonía Nº 5.pdf`,
            },
            {
                composer: "J. Calabrese",
                title: "Concierto para violoncello y orquesta",
                pdfPath: `${basePath}/Violoncello /Nivel Fila B/J. Calabrese/Concierto para violoncello y orquesta.pdf`,
            },
            {
                composer: "W.A. Mozart",
                title: "Bodas de Fígaro - Obertura",
                pdfPath: `${basePath}/Violoncello /Nivel Fila B/W.A. Mozart/Bodas de Figaro Obertura.pdf`,
            },
        ],
    },
    {
        name: "Nivel Pasante",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía No. 1",
                pdfPath: `${basePath}/Violoncello /Nivel Pasante/Beethoven/Sinfonía No. 1.pdf`,
            },
            {
                composer: "J. Calabrese",
                title: "Concierto para violoncello y orquesta",
                pdfPath: `${basePath}/Violoncello /Nivel Pasante/J. Calabrese/Concierto para violoncello y orquesta.pdf`,
            },
            {
                composer: "W.A. Mozart",
                title: "Obertura de la flauta mágica",
                pdfPath: `${basePath}/Violoncello /Nivel Pasante/W.A. Mozart/Obertura de la flauta mágica.pdf`,
            },
        ],
    },
    {
        name: "Asistente",
        pieces: [
            {
                composer: "D. Shostakovich",
                title: "Quinta Sinfonía - Cuarto movimiento",
                pdfPath: `${basePath}/Violoncello /Asistente/D. Shostakovich/Quinta Sinfonia _ Cuarto movimiento.pdf`,
            },
            {
                composer: "L. V. Beethoven",
                title: "Novena sinfonía - 4to mov.",
                pdfPath: `${basePath}/Violoncello /Asistente/L. V. Beethoven/Novena sinfonía 4to mov..pdf`,
            },
            {
                composer: "J. Brahms",
                title: "Sinfonía N.2 (Solos)",
                pdfPath: `${basePath}/Violoncello /Asistente/Solos/J. Brahms/Sinfonía N.2.pdf`,
            },
            {
                composer: "Strauss",
                title: "Don Juan",
                pdfPath: `${basePath}/Violoncello /Asistente/Strauss/Don Juan.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Sinfonía Nº 6 'Pathétique'",
                pdfPath: `${basePath}/Violoncello /Asistente/Tchaikovsky/IMSLP26961-PMLP02511-Tchaikovsky_-_Symphony_No6_Op74_Pathetique_(cello-part)a.pdf`,
            },
        ],
    },
    {
        name: "Principal",
        pieces: [
            {
                composer: "Beethoven",
                title: "Novena sinfonía - 4to mov.",
                pdfPath: `${basePath}/Violoncello /Principal/Beethoven/Novena sinfonía 4to mov..pdf`,
            },
            {
                composer: "Brahms",
                title: "Sinfonía Nº 2",
                pdfPath: `${basePath}/Violoncello /Principal/Brahms/Sinfonía Nº 2.pdf`,
            },
            {
                composer: "D. Shostakovich",
                title: "Quinta Sinfonía - 1er mov",
                pdfPath: `${basePath}/Violoncello /Principal/D. Shostakovich/Quinta Sinfonia 1mov.pdf`,
            },
            {
                composer: "D. Shostakovich",
                title: "Quinta Sinfonía - Cuarto movimiento",
                pdfPath: `${basePath}/Violoncello /Principal/D. Shostakovich/Quinta Sinfonia _ Cuarto movimiento.pdf`,
            },
            {
                composer: "Puccini",
                title: "Ópera Manon",
                pdfPath: `${basePath}/Violoncello /Principal/Puccini/Opera manon.pdf`,
            },
            {
                composer: "R. Strauss",
                title: "Don Juan",
                pdfPath: `${basePath}/Violoncello /Principal/R. Strauss/Don Juan.pdf`,
            },
        ],
    },
];

export const violoncello = {
    name: "Violoncello",
    levels: violoncelloLevels,
    consolidatedPdf: `${basePath}/Violoncello /Repertorio de Audición OSC _ Violoncello.pdf`,
};
