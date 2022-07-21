import styled from "styled-components";
import { Link } from "react-router-dom";

import FundoUser from "../assets/background-user.jpg";

//Genericos
//  Containeres
export const Cabecalho = styled.header`
    height: 100vh;
    @media screen and (max-width: 700px) {
        min-height: 14vh;
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
    height: 100vh;
`;

export const ContainerR = styled(ContainerC)`
    flex-direction: row;
`;

export const ContainerPaginas = styled(ContainerR)`
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 700px) {
        flex-direction: column;
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

export const Titulo = styled.h1`
    font-size: calc(0.3rem+2vh);
    color: #0047bb;
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

    padding: 5vh 0;

    @media screen and (max-width: 700px) {
        flex-direction: row;
        justify-content: flex-start;

        padding: 5vh 3vw;
        max-height: 14vh;
        width: fit-content;
    }
`;

export const ImagemUsuario = styled.img`
    height: 30vh;
    width: 30vh;
    border-radius: 5rem;
    box-shadow: 0 0 6px rgb(0, 0, 0, 0.7);
    overflow: hidden;

    @media screen and (max-width: 700px) {
        height: 12vh;
    }
`;

export const ImagemUsuarioPerfil = styled(ContainerC)`
    svg {
        margin-top: 32vh;
        position: absolute;
        filter: drop-shadow(0 0 3px rgb(0, 95, 180));
        transition: all 0.5s;
        :hover {
            color: white !important;
            cursor: pointer;
            filter: drop-shadow(0 0 2px rgb(0, 0, 0));
            transform: scale(2) rotate(360deg);
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
        flex-direction: row;
        margin: 0;
        padding: 0;
        min-width: 100vw;
        max-height: 14vh;
        overflow: hidden;
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
        padding: 0 5vw;
    }
`;
//  Titulo
export const ContainerTitulo = styled(ContainerC)`
    width: 80vw;
    height: 10vh;
    margin-top: 2rem;
`;

export const PainelTitulo = styled(PainelR)`
    width: 75vw;
    height: 15vh;

    display: flex;
    padding: 1rem 5vw;

    box-shadow: 0rem 1px 0.2rem #7e7e7e;

    h1 {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const BtnLogout = styled.button`
    background-color: #ff3828;
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
    margin: -0.5rem -3rem -0.5rem 0rem;
`;

//  Paginas

export const ContainerContent = styled(ContainerC)`
    height: fit-content;
`;

//  Cadastro

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    width: 100%;
    label {
        color: #61a2d6;
        font-weight: 700;
        font-size: 1.8rem;
        margin: 0.5rem 0 0.5rem 0;
    }
`;

export const Input = styled.input`
    ${(props) => (props.verificando === true ? "background-color: #EFAEAE; outline: 1px solid #F08080;" : "background-color: #aed2ef;")};

    min-width: 60%;
    height: 2.5rem;
    padding: 0.5rem;
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
    }
`;
