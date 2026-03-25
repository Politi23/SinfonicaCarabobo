import type { Level } from "../types";

const basePath = "/src/assets/documents/RepertorioAudiciones";

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

export const tuba = {
    name: "Tuba",
    levels: tubaLevels,
};
