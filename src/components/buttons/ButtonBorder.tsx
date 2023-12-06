import React, { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { IButtonBorder } from "../../const/types";

interface IChildren {
  children: ReactNode;
  border: string;
}

const ButtonBorder: React.FC<PropsWithChildren<IChildren>> = ({ children, border }) => {
  return <ButtonBorderStyle border={border}>{children}</ButtonBorderStyle>;
};

export default ButtonBorder;

const ButtonBorderStyle = styled.button<IButtonBorder>`
  padding: 5px 10px;
  border: 2px solid transparent;
  border-bottom: 2px solid ${(props) => props.border};
  font-size: ${(props) => props.fontSize};
  transition: all 0.3s ease-in;
  &:hover{
    border: 2px solid ${(props) => props.border};
    border-radius: 8px;
  }

`
