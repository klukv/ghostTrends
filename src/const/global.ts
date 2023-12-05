import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
  body{
    font-size: 14px;
    background-color: #f0f8ff;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0px 15px;
`;
