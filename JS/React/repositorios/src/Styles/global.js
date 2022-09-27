import { createGlobalStyle } from "styled-components";
import FundoEspaco from "../assets/fundo.jpg";

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
        background: url(${FundoEspaco});
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        backdrop-filter: blur(0.2rem);
        height: 100vh;
        width: 100vw;

        ::-webkit-scrollbar{
            display: none;
        }
    }

    button{
        cursor: pointer;
    }

    a:-webkit-any-link {
        text-decoration: none;
    }
`;
