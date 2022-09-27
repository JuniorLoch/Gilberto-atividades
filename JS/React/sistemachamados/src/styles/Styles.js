import styled from "styled-components";

import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

import FundoUser from "../assets/background-user.jpg";
import Homer from "../assets/carregando.gif";

//Genericos
//  Containeres
export const Cabecalho = styled.header`
    height: 100%;
    @media screen and (max-width: 700px) {
        width: 100%;
        max-height: 5rem;
    }
`;

export const ContainerC = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ContainerCentro = styled(ContainerC)`
    height: 100%;
`;

export const ContainerR = styled(ContainerC)`
    flex-direction: row;
`;

export const ContainerPaginas = styled(ContainerR)`
    justify-content: flex-start;
    align-items: flex-start;

    height: 100%;

    @media screen and (max-width: 700px) {
        min-width: 100%;
        min-height: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

//  Paineis

export const PainelC = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
    border-radius: 0.3rem;

    padding: 0 0 2rem 0;
    min-width: 50vw;
`;

export const PainelR = styled(PainelC)`
    flex-direction: row;
`;

export const PainelPers = styled(PainelC)`
    ${(props) => (props.cor ? "background-color: " + props.cor : "")};
    ${(props) => (props.padding ? "padding: " + props.padding : "")};
    ${(props) => (props.margin ? "margin: " + props.margin : "")};
    ${(props) => (props.bradius ? "border-radius: " + props.bradius : "")};
    ${(props) => (props.largMin ? "min-width: " + props.largMin : "min-width: 100%;")};

    box-shadow: 0rem 1px 0.2rem #7e7e7e;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;

//  Misc

export const TextoLink = styled(Link)`
    color: #2c4c83;
    font-weight: 700;
    margin-top: 2vh;
    margin-left: 1vw;
    text-align: center;
    :hover {
        color: #233c68;
    }
`;

export const TabelaLink = styled.td`
    .Link {
        color: #2b3b55;
        font-weight: 700;
        text-align: center;
        margin: -0.9rem;
        padding: 0.9rem;
        :hover {
            color: #487fd8;
        }
    }
`;

export const Titulo = styled.h1`
    font-size: calc(0.3rem+2vh);
    color: #0047bb;
    filter: drop-shadow(0 0.5px 1px #0048bb8c);
    font-weight: 700;
    svg {
        margin: -0.5rem 0;
    }
`;

export const ImagemCarregando = styled.img`
    max-width: 8vh;
    margin: -1rem -1rem -1rem 0.5rem;
`;

//especificos de paginas/componentes
// Cabecalho
export const ContainerAvatar = styled(ContainerC)`
    background-image: url(${FundoUser});
    background-size: cover;

    padding: 2rem 0;

    @media screen and (max-width: 700px) {
        padding: 0.2rem 0.2rem;
        width: 4.5rem;
        max-height: 5rem;
    }
`;

export const ImagemUsuario = styled.img`
    height: 10rem;
    width: 10rem;
    border-radius: 5rem;
    box-shadow: 0 0 6px rgb(0, 0, 0, 0.7);
    overflow: hidden;

    @media screen and (max-width: 700px) {
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 2.5rem;
    }
`;

export const ImagemUsuarioPerfil = styled(ContainerC)`
    svg {
        margin-top: 12rem;
        position: absolute;
        filter: drop-shadow(0 0 2px rgb(116, 116, 116));
        transition: all 0.5s;
        :hover {
            color: white !important;
            cursor: pointer;
            filter: drop-shadow(0 0 2px rgb(0, 0, 0));
            transform: scale(2) rotate(360deg);
        }

        @media screen and (max-width: 700px) {
            margin-top: 6rem;
            color: black !important;
        }
    }

    input {
        display: none;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PainelCabecalho = styled(PainelC)`
    min-width: 20vw;
    height: 100%;
    border-radius: 0;
    align-items: baseline;

    box-shadow: 0.1px 0px 0.3rem black;

    background-color: #61a2d6;

    @media screen and (max-width: 700px) {
        align-items: center;
        width: 100%;
        height: 5rem;

        padding: 0;
        flex-direction: row;
    }
`;

export const ContainerCBotoes = styled(ContainerC)`
    justify-content: flex-start;
    align-items: baseline;

    @media screen and (max-width: 700px) {
        flex-direction: row;
        svg {
            display: none;
        }
    }
`;

export const BotaoLink = styled(TextoLink)`
    color: aliceblue;
    font-weight: 600;
    background-color: #61a2d6;

    margin-top: 0.2vh;
    margin-left: 0rem;
    padding: 2rem 1rem;
    min-width: 20vw;

    text-align: start;
    :hover {
        background-color: #00c0de;
        color: white;
        box-shadow: 0px 0.8px 3px #323232;
    }

    svg {
        margin: -1rem 0;
    }

    @media screen and (max-width: 700px) {
        margin: 0;
        padding: 1.4rem 0.5rem;
        span {
            margin-top: 0.3rem !important;
        }
    }
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
            margin-top: 1rem;
        }
    }
`;

export const BotaoNovo = styled(BotaoLink)`
    min-width: fit-content !important;
    border-radius: 0.3rem;

    padding: 1rem 0.5rem;

    svg {
        margin: -0.7rem 0;
    }
`;
//  Titulo
export const ContainerTitulo = styled(ContainerC)`
    width: 80vw;
    height: 4.7rem;
    margin-top: 2rem;
    @media screen and (max-width: 700px) {
        margin-top: 1rem;
        width: 100%;
    }
`;

export const PainelTitulo = styled(PainelR)`
    width: 75vw;
    height: 4.7rem;

    display: flex;
    padding: 1rem 0.5rem;

    box-shadow: 0rem 1px 0.2rem #7e7e7e;

    h1 {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (max-width: 700px) {
        justify-content: flex-start;
        width: 100%;
    }
`;

export const BtnLogout = styled.button`
    background-color: #ff3828;
    box-shadow: 0 0.3rem 0 #da0f00;
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
    margin: -0.5rem 0rem -0.5rem 0rem;
    z-index: 1;
    :hover {
        background-color: #b91e13;
        box-shadow: 0 0.3rem 0 #860900;
    }
    :active {
        background-color: #860900;
        box-shadow: 0 0 0 #860900;
        margin-top: -0.2rem;
        margin-bottom: -0.8rem;
    }
`;

export const BtnVoltar = styled(BtnLogout)`
    background-color: #84bedf;
    box-shadow: none;

    margin: -1.1rem 0 -1.1rem -0.5rem;

    border-radius: 0.2rem 0 0 0.2rem;
    :hover {
        background-color: #64b2df;
        box-shadow: 0 0rem 0 #862018;
        :active {
            background-color: #2f8dc4;
            box-shadow: 0 0 0 #8f241d;
            margin-top: -1.1rem;
            margin-bottom: -1.2rem;
        }
    }
`;

//  Paginas

export const ContainerModal = styled.div`
    position: absolute;
    background-color: #696969b2;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;
`;

export const PainelModal = styled.div`
    :hover {
        animation-name: girando;
        animation-duration: 2400s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
    }
    background-color: #f0f8ffff;

    border-radius: 0.5rem;
    padding: 1rem;

    width: 80%;
    min-height: fit-content;

    text-align: center;

    z-index: 2;
`;

export const ContainerChamado = styled(ContainerC)`
    .left {
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .right {
        width: 100%;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .between {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .conteudoChamado {
        :nth-of-type(2) {
            margin-top: 2rem;
        }
        :last-of-type {
            padding-bottom: 2rem;
        }
        padding: 0.5rem 2rem;
        h1 {
            color: #187397;
            filter: drop-shadow(0 0.5px 0.2px #187397bd);
        }
        h2,
        h3,
        h4 {
            float: left;
            margin-top: -0.2rem;
            margin-left: 0.5rem;
            color: #2f2e79;
            filter: drop-shadow(0 0px 0.2px gray);
            text-align: justify;
        }

        h3 {
            max-height: 20rem;
            overflow: scroll;
            overflow-x: hidden;
            padding: 0 0.5rem;
            ::-webkit-scrollbar {
                width: 1.4rem;
            }
            ::-webkit-scrollbar-track {
                border-radius: 0.5rem;
                padding: 0 2rem;
                background-color: #e7e7e746;
                :hover {
                    background-color: #b5b5b97c;
                }
            }
            ::-webkit-scrollbar-thumb {
                border-radius: 0.5rem;
                height: 3rem;
                //background-color: #187397;
                background-image: url(${Homer});
                background-size: contain;
                box-shadow: 0px 0px 20px gray inset;
            }
        }

        @keyframes girando {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }

    h1 {
        font-size: 1.2rem;
        float: left;
    }

    div {
        margin-top: 1rem;
        :first-child {
            margin-top: 0;
        }
    }
`;

export const Badge = styled.span`
    margin-top: -0.5rem;
    margin-left: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;

    color: aliceblue;
    font-weight: 700;

    float: left;

    :first-of-type {
        margin-right: 0.5rem;
    }

    ${(props) =>
        props.cor
            ? props.cor === "green"
                ? `
                background-color: #3c9b39;
                filter: drop-shadow(0 0px 0.8px #5abe56);
            `
                : props.cor === "red"
                ? `
                background-color: #9b3939;
                filter: drop-shadow(0 0px 0.8px #be6256);
            `
                : props.cor === "blue"
                ? `
                background-color: #396c9b;
                filter: drop-shadow(0 0px 0.8px #568cbe);
            `
                : ""
            : ""};
`;

export const ContainerBtFechar = styled(ContainerC)`
    position: absolute;
    width: fit-content;
    margin-top: -0.5rem;
    margin-left: -6rem;

    z-index: 1;
`;

export const ContainerContent = styled(ContainerC)`
    height: fit-content;
`;

export const Tabela = styled.table`
    width: 100%;
    border-collapse: collapse;

    th {
        padding: 0.5rem 0;
        color: #0048bbff;
    }

    td {
        padding: 0.5rem 0;
        text-align: center;

        :hover {
            transform: scale(1);
        }
    }

    tr {
        transition: all 100ms;
        border-bottom: 1px solid lightgray;
        @media screen and (max-width: 700px) {
            font-size: 9pt;
        }

        :hover {
            box-shadow: 0 2px 2px lightgray;
            background-color: #ffffff;
            transform: scale(1.03);
        }
        :only-child:hover {
            box-shadow: 0 0px 0px lightgray;
            transform: scale(1);
            background-color: aliceblue;
        }
    }

    .botoes {
        display: flex;
        justify-content: center;

        button {
            margin-left: 0.5rem;
            :first-child {
                margin-left: 0;
            }

            padding: 0.3rem;
            border-radius: 0.3rem;
            :hover {
                filter: brightness(1.2);
            }
            :active {
                margin-top: 0.2rem;
                margin-bottom: -0.2rem;
            }
            svg {
                color: lightgray;
            }
        }

        .btdetalhes {
            background-color: #3860a4;
            box-shadow: 0 0.2rem 0 #2a4a7f;
            :active {
                background-color: #1f3860;
                box-shadow: 0 0rem 0 #2a4a7f;
            }
        }
        .btedit {
            background-color: #eac94f;
            box-shadow: 0 0.2rem 0 #bca13e;
            :active {
                background-color: #917b2d;
                box-shadow: 0 0 0 #bca13e;
            }

            margin-left: 0.5rem;
            :first-child {
                margin-left: 0;
            }

            padding: 0.3rem;
            border-radius: 0.3rem;
            :hover {
                filter: brightness(1.2);
            }
            :active {
                margin-top: 0.2rem;
                margin-bottom: -0.2rem;
            }
            svg {
                color: lightgray;
            }
        }
    }
`;

export const TabelaV = styled(Tabela)`
    width: 100%;
    height: 100%;

    th {
        border-right: 1px solid lightgray;
        text-align: left;
        max-width: 5rem;
        padding-right: 1rem;
    }
    td {
        text-align: left;
        padding-left: 1rem;
    }
`;

export const ContainerComboBox = styled(ContainerR)`
    justify-content: center;
    max-width: 30%;
    input {
        min-width: 1.4rem;
    }
    @media screen and (max-width: 700px) {
        max-width: 100%;
    }
`;

//  Cadastro

export const Formulario = styled.form`
    ${(props) => (props.salvando ? " pointer-events: none;  cursor: not-allowed; filter: opacity(70%);" : "")};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    width: 100%;
    label {
        color: #61a2d6;
        font-weight: 700;
        font-size: 1.8rem;
        margin: 1rem 0 0.5rem 0;
    }

    textarea {
        min-width: 60%;
        min-height: 5rem;

        border: 1px solid #83bdea;
        background-color: #aed2ef;
        padding: 0.5rem;
    }
`;

export const Input = styled.input`
    ${(props) => (props.verificando === true ? "background-color: #EFAEAE; outline: 1px solid #F08080;" : "background-color: #aed2ef;")};

    min-width: 60%;
    height: 2.5rem;
    padding: 0.5rem;

    :disabled {
        cursor: not-allowed;
        background-color: lightgray;
    }
`;

export const ComboBox = styled.select`
    min-width: 60%;
    height: 2.5rem;
    padding: 0.5rem;

    border: 1.5px solid #83bdea;

    font-size: 12pt;
    font-weight: 600;
    color: #1e6aa0;

    background-color: #aed2ef;

    :disabled {
        cursor: not-allowed;
        background-color: lightgray;
    }

    option {
        font-weight: 600;
        color: #1e6aa0;
    }
`;

export const ContainerBts = styled(ContainerR)`
    margin-top: 2rem;
    width: 100%;
    justify-content: center;
    button {
        color: aliceblue;
        font-weight: 700;
        padding: 1rem 2rem;

        font-size: 1rem;
        background-color: #4679cd;
        border-radius: 0.3rem;
        :hover {
            background-color: #3860a4;
        }
        :active {
            background-color: #2c4c83;
        }
        :nth-child(1) {
            margin-left: 1vw;
        }
        svg {
            margin: -0.6rem 0rem -0.6rem -0.8rem;
        }
    }
`;
