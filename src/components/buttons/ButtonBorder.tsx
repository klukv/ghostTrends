import React, { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { IButtonBorder } from "../../const/types";

interface IPropsButtonBorder {
  children: ReactNode;
  border?: string;
}

const ButtonBorder: React.FC<PropsWithChildren<IPropsButtonBorder>> = ({ children, border }) => {
  return <ButtonBorderStyle border={border}>{children}</ButtonBorderStyle>;
};

export default ButtonBorder;

const ButtonBorderStyle = styled.button<IButtonBorder>`
  padding: 5px 10px;
  border: 2px solid transparent;
  border-bottom: 2px solid ${(props) => props.border || "#4f6f8a"};
  font-size: ${(props) => props.fontSize};
  transition: all 0.3s ease-in;
  &:hover{
    border: 2px solid ${(props) => props.border || "#4f6f8a"};
    border-radius: 7px;
  }

`
