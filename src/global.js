import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    *:focus {
        outline: none;
    }

    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        padding: 0;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.25s linear;
        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
    }

    footer {
        text-align: center;
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.5rem;
      }
    
      small {
        display: block;
      }
    
      button {
        display: block;
      }
    
      a {
        color: ${({ theme }) => theme.text};
      }
`;
