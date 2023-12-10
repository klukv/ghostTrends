import { MouseEventHandler, ReactNode } from "react";

// Buttons types

export interface IAbstractButton {
  fontSize?: string;
  padding?: string;
  fontWeight?: string;
  //пропсы для кнопки с border
  isBorder?: string;
  borderSize?: string;
  borderColor?: string;
  borderRadius?: string;
  //пропсы для кнопки с background-color
  isBackground?: string;
  backgroundColor?: string;
  hoverBackground?: string;
  //пропсы для кнопки лайка
  isLiked?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  colorLiked?: string;
  backgroundColorLiked?: string;
  borderRadiusLiked?: string;
  positionTopStart?: string;
  positionBottomStart?: string;
  positionRightStart?: string;
  positionTopEnd?: string;
  positionBottomEnd?: string;
  positionRightEnd?: string;
}

export interface IPropsWithChildren extends IAbstractButton {
  children: ReactNode;
}

export interface IPropsButtonLike extends IAbstractButton {
  children: ReactNode;
  onClick: () => void;
}

//BLockTrack types

export interface IBlockTrack {
  display: string;
  backgroundColor: string;
}

// Data types

export interface ITrackData {
  id: number;
  name: string;
  artist: string;
  label: string;
  platform: string;
  genres: string[];
  bpm: number;
  key_: string;
  daw: string;
  duration: number;
  price: number;
  currency: string;
  dateCreated: Date;
  dateSold: Date;
  status: string;
  coverImage: string;
  isLiked: boolean;
}

// Span types

export interface ISpanBlock {
  marginValue: string;
}

// Div types 

export interface ISpecialFont {
  fontFamily: string;
}

