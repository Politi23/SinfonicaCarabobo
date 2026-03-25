import type { Level } from "../types";

const basePath = "/documents/RepertorioAudiciones";

const tubaLevels: Level[] = [
    {
        name: "Repertorio Único",
        pieces: [
            {
                composer: "Varios",
                title: "Repertorio de Audición - Tuba",
                pdfPath: `${basePath}/Tuba/Repertorio general de audición (TUBA).pdf`,
            },
            {
                composer: "Benjamin Britten",
                title: "Guía Orquestal para Jóvenes",
                pdfPath: `${basePath}/Tuba/Guía Orquestal para Jóvenes Benjamin Britten.pdf`,
            },
            {
                composer: "Tchaikovsky",
                title: "March Slav",
                pdfPath: `${basePath}/Tuba/March Slav.pdf`,
            },
            {
                composer: "Gustav Holst",
                title: "Marte, de la Suite Los Planetas",
                pdfPath: `${basePath}/Tuba/Marte, de la Suite Los Planetas Gustav Holst.pdf`,
            },
            {
                composer: "Piotr I. Tchaikovsky",
                title: "Obertura Fantasía Romeo y Julieta",
                pdfPath: `${basePath}/Tuba/Obertura Fantasía Romeo y Julieta Piotr I. Tchaikovsky.pdf`,
            },
            {
                composer: "Rossini",
                title: "Obertura Gazza Ladra",
                pdfPath: `${basePath}/Tuba/Obertura Gazza Ladra Rossini.pdf`,
            },
            {
                composer: "Richard Wagner",
                title: "Obertura Los Maestros Cantores de Nuremberg",
                pdfPath: `${basePath}/Tuba/Obertura Los Maestros Cantores de Nuremberg Richard Wagner.pdf`,
            },
            {
                composer: "Richard Wagner",
                title: "Obertura Rienzi",
                pdfPath: `${basePath}/Tuba/Obertura Rienzi Richard Wagner.pdf`,
            },
            {
                composer: "Silvestre Revueltas",
                title: "Sensemayá",
                pdfPath: `${basePath}/Tuba/Sensemayá Silvestre Revueltas.pdf`,
            },
        ],
    },
];

export const tuba = {
    name: "Tuba",
    levels: tubaLevels,
};
