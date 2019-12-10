import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    alignItems: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text };
    display: flex;
    flexDirection: column;
    justifyContent: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    fontFamily: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
`;
