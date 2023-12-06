// Buttons types

export interface IAbstractButton {
    fontSize?: string;
}

export interface IButtonBorder extends IAbstractButton {
    border: string;
}

export interface IButtonBackground extends IAbstractButton {
    backgroundColor: string;
    fontWeight: number;
}

export interface IButtonLike extends IAbstractButton {
    isCLick: boolean;
}

//BLockTrack types

export interface IBlockTrack {
    display: string;
    backgroundColor: string;
}

// Data types

export interface ITrackData {
    id: number,
    name: string,
    artist: string,
    label: string,
    platform: string,
    genres: string[],
    bpm: number,
    key_: string,
    daw: string,
    duration: number,
    price: number,
    currency: string,
    dateCreated: Date,
    dateSold: Date,
    status: string,
    coverImage: string,
    isLiked: boolean
}

// Span types

export interface ISpanBlock {
    marginValue: string;
}

