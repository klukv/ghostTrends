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
`;

export const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 0px 15px;
`;

export const SpanBlock = styled.div<ISpanBlock>`
  display: inline-block;

  margin: ${(props) => props.marginValue === "left" ? "0px 0px 0px 8px" : "0px 8px 0px 0px"}
`
