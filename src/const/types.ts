import { MouseEventHandler, ReactNode } from "react";
import { CSSProperties } from "styled-components";

// Buttons types

export interface IBasicStyles {
  fontSize?: string;
  color?: string;
  padding?: string;
  fontWeight?: string;
}

export interface IAbstractButton {
  styleBase?: IBasicStyles;
  //пропсы для кнопки с border
  isBorder?: string;
  borderSize?: string;
  borderColor?: string;
  borderRadius?: string;
  //пропсы для кнопки с background-color
  isBackground?: string;
  backgroundColor?: string;
  hoverBackground?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  //пропсы для кнопки лайка
  stylesLikeBtn?: IButtonLikeStyled;
}

export interface IPropsWithChildren extends IAbstractButton {
  children: ReactNode;
}

export interface IPropsButtonLike extends IBasicStyles {
  children: ReactNode;
  isLiked: boolean;
  onClick: () => void;
}

export interface IButtonLikeStyled {
  min_width?: string;
  height: string;
  margin: string;
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
