export interface Piece {
    composer?: string;
    title: string;
    pdfPath?: string;
}

export interface Level {
    name: string;
    pieces: Piece[];
    consolidatedPdf?: string;
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
