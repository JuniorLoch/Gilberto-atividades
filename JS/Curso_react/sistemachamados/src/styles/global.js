import { createGlobalStyle } from "styled-components";
import imgFundo from "../assets/background.jpg";

export const GlobalStyle = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root{
        height: 100%;
        width: 100%;
    }

    body{
        background: url( ${imgFundo});
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        backdrop-filter: blur(0.2rem);

        font-family: "Roboto", sans-serif, monospace;

        ::-webkit-scrollbar{
            display: none;
        }
    }

    button{
        cursor: pointer;
        border: none;
    }

    input{
        border: none;
    }

    a, a:-webkit-any-link {
        text-decoration: none;
    }
    ul, li{
        list-style: none;
    }
`;
