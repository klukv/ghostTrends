export interface IAbstractButton {
    color: string;
    fontSize: string;
    isHover: boolean;
}

export interface IButtonBorder extends IAbstractButton {
    border: string;
}

export interface IButtonBackground extends IAbstractButton {
    backgroundColor: string;
}

export interface IButtonLike extends IAbstractButton {
    isCLick: boolean;
}

