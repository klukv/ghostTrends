import React from "react";
import styled, { css } from "styled-components";
import { IAbstractButton, IPropsWithChildren } from "../../const/types";
import { borderRadiusVarinats, borderVariants } from "../../const/enums";

const AbstractButton: React.FC<IPropsWithChildren> = (props) => {
  return (
    <AbstractButtonStyle
      padding={props.padding}
      fontWeight={props.fontWeight}
      isBorder={props.isBorder}
      borderSize={props.borderSize}
      borderColor={props.borderColor}
      borderRadius={props.borderRadius}
      isBackground={props.isBackground}
      backgroundColor={props.backgroundColor}
    >
      {props.children}
    </AbstractButtonStyle>
  );
};

export default AbstractButton;

export const AbstractButtonStyle = styled.button<IAbstractButton>`
  font-size: ${(props) => props.fontSize || "inherit"};
  padding: ${(props) => props.padding || "5px 10px"};
  font-weight: ${(props) => (props.fontWeight === true ? 700 : 400)};
  border-radius: ${(props) =>
    props.borderRadius !== borderRadiusVarinats.NOT_BORDER_RADIUS
      ? props.borderRadius
      : css`
          border-radius: none;
        `};

  ${(props) =>
    props.isBorder === borderVariants.EXIST_BORDER
      ? css`
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
    props.isBackground === true
      ? css`
          background-color: ${props.backgroundColor};
          border-radius: ${props.borderRadius};
        `
      : css`
          background-color: none;
        `}
`;
