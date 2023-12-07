import React from "react";
import styled, { css } from "styled-components";
import { IAbstractButton, IPropsWithChildren } from "../../const/types";

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

  ${(props) =>
    props.isBorder === true
      ? css`
          border: ${props.borderSize} solid transparent;
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
`;
