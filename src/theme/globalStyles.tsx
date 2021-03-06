import { createGlobalStyle } from 'styled-components';

import { ThemeType } from '.';

type Props = {
  theme: ThemeType;
};

export const GlobalStyles = createGlobalStyle<Props>`
  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'SF Pro Display', Helvetica, sans-serif, system;
    color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : '#000000')};
    background: ${({ theme }) =>
      theme.mode === 'dark' ? '#222222' : '#FFFFFF'};
    border-width: 6px 0 0 0;
    border-style: solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      to right,
      #f76f6f,
      #fcca67,
      #fcfc83,
      #84ffaf,
      #83e0f7,
      #ca67e5,
      #ff87e1
    );
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => (theme.mode === 'dark' ? '#f4f2f2' : '#302f2f')}
  }

  p, small, li {
    margin: 0;
    color: gray;
  }

  li {
    margin-bottom: 10px;
  }

  ::-webkit-scrollbar {
    background-color: #ff87e1;
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    height: 10px;
    background: linear-gradient(
      to bottom,
      #ff87e1,
      #ca67e5,
      #83e0f7,
      #84ffaf,
      #fcfc83,
      #fcca67,
      #f76f6f
    );
  }

  ::selection {
    background: #84fbb8;
  }
`;
