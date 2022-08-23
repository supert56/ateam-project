import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    font-family: "Inter", sans-serif;
  }

  body {
    padding: 16px;
    @media (min-width: 768px) {
      padding: 24px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-weight: 800;
    font-size: 40px;
    letter-spacing: -0.03em;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0 0 16px 0;
    padding: 0;
  }

`;
