import type { Level } from "../types";

const basePath = "/src/assets/documents/RepertorioAudiciones";

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

export const percusion = {
    name: "Percusión",
    levels: percusionLevels,
};
