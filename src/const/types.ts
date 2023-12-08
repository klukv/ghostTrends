import { ReactNode } from "react";

// Buttons types

export interface IAbstractButton {
    fontSize?: string;
    padding?: string;
    fontWeight?: boolean;
    isBorder?: string;
    borderSize?: string;
    borderColor?: string;
    borderRadius?: string;
    isBackground?: boolean;
    backgroundColor?: string;
}

export interface IPropsWithChildren extends IAbstractButton {
    children: ReactNode;
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

