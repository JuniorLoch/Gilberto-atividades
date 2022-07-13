import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    html, body, #root{
        min-height: 100%;
        
    }

    body{
        background: #89CFF0;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        backdrop-filter: blur(0.2rem);

        font-family: "Roboto", sans-serif;

        ::-webkit-scrollbar{
            display: none;
        }
    }

    button{
        cursor: pointer;
    }

    a, a:-webkit-any-link {
        text-decoration: none;
    }
    ul, li{
        list-style: none;
    }
`;
