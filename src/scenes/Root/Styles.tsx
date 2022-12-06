// stylelint-disable sh-waqar/declaration-use-variable, comment-whitespace-inside, max-empty-lines
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%; /* Now 10px = 1rem! */
  }

  body {
    margin: 0;
    background-color: #fff;

    font-size: 1.5rem;
    strong {
      font-weight: 500;
    }
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

/* IE 11 fix */
  /* stylelint-disable */
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    #root {
      display: block;
    }
  }

  /* stylelint-enable */

  html,
  body {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    color: inherit;
    font: inherit;

    line-height: normal;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
  }

  /* Hide Google reCAPTCHA badge */
  .grecaptcha-badge { visibility: hidden; }
`;

const ReactToastifyStyles = createGlobalStyle`
  div.Toastify__toast {
    background: none;
    box-shadow: none;
    padding: 0;
    min-height: auto;
    overflow: initial;

    .toast-container {
      top: 5rem;
    }
  }
`;

interface Props {
  children: React.ReactNode;
}

export const Styles = ({ children }: Props) => (
  <>
    <GlobalStyles />
    <ReactToastifyStyles />
    {children}
  </>
);
