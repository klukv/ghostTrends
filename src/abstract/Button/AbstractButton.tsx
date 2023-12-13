import React from "react";
import styled, { css } from "styled-components";
import { IAbstractButton, IPropsWithChildren } from "../../const/types";
import {
  isBackgroundVariants,
  isBorderRadiusVarinats,
  isBorderVariants,
  variantsFontWeight,
} from "../../const/enums";
import { defaultBgColor } from "../../const/global";

const AbstractButton: React.FC<IPropsWithChildren> = (props) => {
  return (
    <AbstractButtonStyle
      styleBase={{
        fontSize: props.styleBase?.fontSize,
        color: props.styleBase?.color,
        padding: props.styleBase?.padding,
        fontWeight: props.styleBase?.fontWeight,
      }}
      isBorder={props.isBorder}
      borderSize={props.borderSize}
      borderColor={props.borderColor}
      borderRadius={props.borderRadius}
      isBackground={props.isBackground}
      backgroundColor={props.backgroundColor}
      hoverBackground={props.hoverBackground}
      onClick={props.onClick}
      stylesLikeBtn={props.stylesLikeBtn}
    >
      {props.children}
    </AbstractButtonStyle>
  );
};

export default AbstractButton;

export const AbstractButtonStyle = styled.button<IAbstractButton>`
  color: ${(props) => props.styleBase?.color ?? "#000"};
  font-size: ${(props) => props.styleBase?.fontSize ?? "inherit"};
  padding: ${(props) => props.styleBase?.padding ?? "5px 10px"};
  font-weight: ${(props) =>
    props.styleBase?.fontWeight !== variantsFontWeight.DEFAULT_FW
      ? props.styleBase?.fontWeight
      : variantsFontWeight.DEFAULT_FW};
  border-radius: ${(props) =>
    props.borderRadius !== isBorderRadiusVarinats.NOT_BORDER_RADIUS
      ? props.borderRadius
      : css`
          border-radius: none;
        `};

  ${(props) =>
    props.isBorder === isBorderVariants.EXIST_BORDER
      ? css`
          white-space: nowrap;
          border: ${props.borderSize} solid transparent;
          border-radius: 0px;
          border-bottom: ${props.borderSize} solid ${props.borderColor};
          transition: all 0.3s ease-in;
          &:hover {
            border: ${props.borderSize} solid ${props.borderColor};
            border-radius: ${props.borderRadius};
          }
        `
      : css`
          border: none;
        `};

  ${(props) =>
    props.isBackground === isBackgroundVariants.EXIST_BACKGROUND_COLOR
      ? css`
          white-space: nowrap;
          margin: 0px 5px;
          background-color: ${props.backgroundColor ?? "#b4c3d0"};
          border-radius: ${props.borderRadius ?? "5px"};
          transition: all 0.3s ease-in;
          &:hover {
            background-color: ${props.hoverBackground ?? defaultBgColor()};
          }
        `
      : css`
          background-color: none;
        `}

  ${(props) =>
    props.stylesLikeBtn &&
    css`
      min-width: ${props.stylesLikeBtn.min_width};
      transition: all 0.2s ease-in;
      height: ${props.stylesLikeBtn.height};
      margin: ${props.stylesLikeBtn.margin};
    `}
`;
