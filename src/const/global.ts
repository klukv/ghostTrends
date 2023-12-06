import styled, { createGlobalStyle } from "styled-components";
import { ISpanBlock } from "./types";

export const GlobalStyle = createGlobalStyle`
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
    /* отображаем курсор в виде руки при наведении; некоторые
    считают, что необходимо оставлять стрелочный вид для кнопок */
    cursor: pointer;
  }
`;

export const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  padding: 0px 15px;
`;

export const SpanBlock = styled.div<ISpanBlock>`
  display: inline-block;

  // значение margin  в зависимости от пропса
  ${(props) => props.marginValue === "right" && "margin: 0px 8px 0px 0px"}
  ${(props) => props.marginValue === "mx" && "margin: 0px 5px 0px 5px"}
`;
