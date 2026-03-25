import type { Level } from "../types";

const basePath = "/documents/RepertorioAudiciones";

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

export const flauta = {
    name: "Flauta",
    levels: flautaLevels,
};
