export interface Piece {
    composer?: string;
    title: string;
    pdfPath?: string;
}

export interface Level {
    name: string;
    pieces: Piece[];
}

export interface Instrument {
    name: string;
    levels: Level[];
    consolidatedPdf?: string;
}

export interface Category {
    name: string;
    instruments: Instrument[];
    variant?: "secondary" | "primary";
}

export const basePath = "/src/assets/documents/RepertorioAudiciones";

// CUERDAS
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

const contrabajoLevels: Level[] = [
    {
        name: "Nivel Fila",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 5",
                pdfPath: `${basePath}/Contrabajo /Nivel Fila /Beethoven/Sinfonía Nº 5.pdf`,
            },
            {
                composer: "W.A. Mozart",
                title: "Sinfonía Nº 40",
                pdfPath: `${basePath}/Contrabajo /Nivel Fila /W.A. MOZART/Sinfonía Nº 4 0.pdf`,
            },
        ],
    },
    {
        name: "Nivel Pasante",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía No. 1",
                pdfPath: `${basePath}/Contrabajo /Nivel Pasante/Beethoven/Sinfonía No  1.pdf`,
            },
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 5",
                pdfPath: `${basePath}/Contrabajo /Nivel Pasante/Beethoven/Sinfonía Nº 5.pdf`,
            },
        ],
    },
    {
        name: "Nivel Principal",
        pieces: [
            {
                composer: "Beethoven",
                title: "Sinfonía Nº 9",
                pdfPath: `${basePath}/Contrabajo /Nivel Principal/Beethoven/Sinfonía Nº 9.pdf`,
            },
            {
                composer: "Mahler",
                title: "Sinfonía Nº 1 'Titán' (Solos)",
                pdfPath: `${basePath}/Contrabajo /Nivel Principal/Solos/Mahler/Sinfonía Nº 1 _Titán_ .pdf`,
            },
            {
                composer: "W.A. Mozart",
                title: "Sinfonía Nº 40",
                pdfPath: `${basePath}/Contrabajo /Nivel Principal/W.A. Mozart/Sinfonía Nº 40.pdf`,
            },
        ],
    },
];

// VIENTOS MADERA
const flautaLevels: Level[] = [
    {
        name: "Repertorio General",
        pieces: [
            {
                composer: "Varios",
                title: "Repertorio de Audición - Flauta",
                pdfPath: `${basePath}/Flauta/FLAUTA repertotio audicion.pdf`,
            },
            {
                composer: "Varios",
                title: "Repertorio Audición Solista Asociado",
                pdfPath: `${basePath}/Flauta/Repertorio audicion solista Asociado.pdf`,
            },
        ],
    },
];

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

// VIENTOS METAL
const cornoLevels: Level[] = [
    {
        name: "Repertorio Único",
        pieces: [
            {
                composer: "Varios",
                title: "Programa de Audición para Corno Francés",
                pdfPath: `${basePath}/Corno/Programa de Audición para Corno Francés.pdf`,
            },
        ],
    },
];

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

const trombonLevels: Level[] = [
    {
        name: "Repertorio General",
        pieces: [
            {
                composer: "Varios",
                title: "Audición Trombón Bajo (Concertino)",
                pdfPath: `${basePath}/Trombón/AUDICIÓN trombon bajo (trombon solo Concertino).pdf`,
            },
            {
                composer: "Varios",
                title: "Repertorio Obligatorio - Concurso Trombón Solista",
                pdfPath: `${basePath}/Trombón/REPERTORIO OBLIGATORIO CONCURSO TROMBON SOLISTA.pdf`,
            },
            {
                composer: "Varios",
                title: "Repertorio Audición Trombón Tenor",
                pdfPath: `${basePath}/Trombón/Repertorio audicion Trombon tenor.pdf`,
            },
            {
                composer: "Varios",
                title: "Repertorio para Audición Trombón Bajo",
                pdfPath: `${basePath}/Trombón/Repertorio para audicion Trombon bajo.pdf`,
            },
        ],
    },
];

const tubaLevels: Level[] = [
    {
        name: "Repertorio Único",
        pieces: [
            {
                composer: "Varios",
                title: "Repertorio de Audición - Tuba",
                pdfPath: `${basePath}/Tuba/Repertorio de Audición OSC _ Tuba.pdf`,
            },
        ],
    },
];

// PERCUSIÓN
const percusionLevels: Level[] = [
    {
        name: "Tutti",
        pieces: [
            {
                composer: "Tchaikovsky",
                title: "4ta Sinfonía (Platillos)",
                pdfPath: `${basePath}/Percusión/Tutti/4ta Sinfonía Tchaikovsky (Platillos)_.pdf`,
            },
            {
                composer: "Ravel",
                title: "Bolero (Redoblante)",
                pdfPath: `${basePath}/Percusión/Tutti/Bolero (Redoblante) _ Ravel.pdf`,
            },
            {
                composer: "Korsakov",
                title: "Capricho Español (Redoblante)",
                pdfPath: `${basePath}/Percusión/Tutti/Capricho Español (Redoblante) _ Korsakov.pdf`,
            },
            {
                composer: "Bizet",
                title: "Carmen Suite No.2 (Pandereta)",
                pdfPath: `${basePath}/Percusión/Tutti/Carmen suite no.2 (Pandereta) _ Bizet_.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "Danza Trepux - Suite Cascanueces (Pandereta)",
                pdfPath: `${basePath}/Percusión/Tutti/Danza Trepux Suite Cascanueces (Pandereta).pdf`,
            },
            {
                composer: "Mozart",
                title: "Flauta Mágica (Campanelli)",
                pdfPath: `${basePath}/Percusión/Tutti/Flauta Mágica (Campaneli) _ Mozart.pdf`,
            },
            {
                composer: "Korsakov",
                title: "Scheherazade 3er y 4to mov (Redoblante)",
                pdfPath: `${basePath}/Percusión/Tutti/Scherezade 3er y 4mov (Redoblante) _ Korsakov.pdf`,
            },
            {
                composer: "Prokofiev",
                title: "Teniente Kije (Redoblante)",
                pdfPath: `${basePath}/Percusión/Tutti/Teniente Kije (Redoblante) _ Prokofiev.pdf`,
            },
            {
                composer: "Beethoven",
                title: "Timpani - 5ta Sinfonía",
                pdfPath: `${basePath}/Percusión/Tutti/Timpani 5ta Beethoven.pdf`,
            },
        ],
    },
];

export const auditionsData: Category[] = [
    {
        name: "Cuerdas",
        variant: "secondary",
        instruments: [
            {
                name: "Violín",
                levels: violinLevels,
                consolidatedPdf: `${basePath}/Violín /Repertorio de Audición OSC _ Violín.pdf`,
            },
            {
                name: "Viola",
                levels: violaLevels,
                consolidatedPdf: `${basePath}/Viola/Repertorio de Audición OSC _ Viola.pdf`,
            },
            {
                name: "Violoncello",
                levels: violoncelloLevels,
                consolidatedPdf: `${basePath}/Violoncello /Repertorio de Audición OSC _ Violoncello.pdf`,
            },
            {
                name: "Contrabajo",
                levels: contrabajoLevels,
                consolidatedPdf: `${basePath}/Contrabajo /Repertorio de Audición OSC _ Contrabajo.pdf`,
            },
        ],
    },
    {
        name: "Vientos Madera",
        variant: "secondary",
        instruments: [
            {
                name: "Flauta",
                levels: flautaLevels,
            },
            {
                name: "Oboe",
                levels: oboeLevels,
                consolidatedPdf: `${basePath}/Oboe/Repertorio de Audición OSC _ Oboe.pdf`,
            },
            {
                name: "Clarinete",
                levels: clarineteLevels,
                consolidatedPdf: `${basePath}/Clarinete/Repertorio de Audición OSC _ Clarinete.pdf`,
            },
        ],
    },
    {
        name: "Vientos Metal",
        variant: "secondary",
        instruments: [
            {
                name: "Corno Francés",
                levels: cornoLevels,
            },
            {
                name: "Trompeta",
                levels: trompetaLevels,
                consolidatedPdf: `${basePath}/Trompeta /Repertorio de Audición OSC _ Trompeta.pdf`,
            },
            {
                name: "Trombón",
                levels: trombonLevels,
            },
            {
                name: "Tuba",
                levels: tubaLevels,
            },
        ],
    },
    {
        name: "Percusión",
        variant: "secondary",
        instruments: [
            {
                name: "Percusión",
                levels: percusionLevels,
            },
        ],
    },
];
