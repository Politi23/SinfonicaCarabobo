import type { Level } from "../types";

const basePath = "/src/assets/documents/RepertorioAudiciones";

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

export const corno = {
    name: "Corno Francés",
    levels: cornoLevels,
};
