import type { Level } from "../types";

const basePath = "/documents/RepertorioAudiciones";

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

export const contrabajo = {
    name: "Contrabajo",
    levels: contrabajoLevels,
    consolidatedPdf: `${basePath}/Contrabajo /Repertorio de Audición OSC _ Contrabajo.pdf`,
};
