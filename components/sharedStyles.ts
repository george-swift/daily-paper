import styled, { createGlobalStyle, ThemeProps } from "styled-components";

export const Center = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: auto;

  @media (max-width: 800px) {
    max-width: 650px;
    padding: 0 15px;
  }
`

export const theme = {
  fonts: {
    basic: 'Helvetica, sans-serif',
    accent: '"Permanent Marker", cursive',
    fancy: '"Archivo", sans-serif',
  },
  colors: {
    black: '#212529',
    gray: '#6c757d',
    orange: '#f4ae40',
    navy: '#2c3e50',
    blue: '#387af5',
    pink: '#eb57a3'
  }
}

export type MainThemeProps = ThemeProps<typeof theme>

export const GlobalStyle = createGlobalStyle<MainThemeProps>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.basic};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.pink};
  }

  .main {
    padding: 70px 0 20px;
    min-height: calc(100vh - 50px);
  }
`