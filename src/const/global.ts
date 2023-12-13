import styled, { createGlobalStyle, css } from "styled-components";
import { IButtonLikeStyled, ISpanBlock } from "./types";

//общие стили

export const GlobalStyle = createGlobalStyle`
  html {
      height: 100%;
}
  *, *::after, *::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
  body{
    font-size: 16px;
    background-color: #f0f8ff;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
  }
  a{
    color: #ffffff;
    text-decoration: none;
  }
  button{
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    outline: none;
  }
`;

export const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 0px 15px;
`;

export const SpanBlock = styled.div<ISpanBlock>`
  display: inline-block;

  // значение margin  в зависимости от пропса
  ${(props) => props.marginValue === "right" && "margin: 0px 8px 0px 0px"}
  ${(props) => props.marginValue === "mx" && "margin: 0px 5px 0px 5px"}
`;

export const FlexContainerALignCenter = css`
  display: flex;
  align-items: center;
`;

export const FlexContainerJustifyCenter = css`
  display: flex;
  justify-content: center;
`;
export const FlexConteinerCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const setValuePosition = (isLiked: boolean): IButtonLikeStyled => {
  if (isLiked)
    return {
      min_width: "60px",
      height: "100%",
      margin: "0px",
    };
  return {
    min_width: "60px",
    height: "50px",
    margin: "15px",
  };
};

export const defaultBtnPadding = () => "5px 10px";

export const likeBtnPadding = () => "15px 0px";

export const defaultBorderRadius = () => "12px";

export const likeBtnActiveBorderRadius = () => "0px 12px 12px 0px";

// константы color и bg-color

export const defaultBtnColor = () => "#000";

export const likeBtnActiveColor = () => "#ffffff";

export const defaultBgColor = () => "#4f6f8a";

export const likeBtnHoverBgColor = () => "#d498b4";

export const likeBtnActiveBgColor = () => "#c45269";
