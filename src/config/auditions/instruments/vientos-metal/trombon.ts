import type { Level } from "../types";

const basePath = "/documents/RepertorioAudiciones";

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

export const trombon = {
    name: "Trombón",
    levels: trombonLevels,
};
