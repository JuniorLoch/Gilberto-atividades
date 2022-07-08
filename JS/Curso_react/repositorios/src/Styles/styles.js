import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    ${(props) => (props.direction ? "flex-direction: " + props.direction + ";" : "")}
    ${(props) => (props.alinha ? "align-items: " + props.alinha + ";" : "")}
    ${(props) => (props.altura ? "height: " + props.altura + ";" : "")}
    justify-content: center;
`;

export const ContainerBt = styled(Container)`
    max-width: 20vh;
    min-width: 14vh;
    justify-content: space-between;
`;

export const ContainerBtIssues = styled(Container)`
    max-width: 10vw;
    min-width: 10vw;
    justify-content: space-between;
`;

export const Painel = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #011627d9;
    border-radius: 2vh;
    padding: 2.5vh;
    margin: 5vh 0 5vh 0;
    width: 80vw;
    min-height: 20vh;

    box-shadow: 0 0rem 0.5rem #8d79a9;
`;

export const PainelLabel = styled(Painel)`
    background-color: #011627d9;
    font-size: medium;
    padding: 0.2vw;
    min-width: 0vw;
    max-width: 10vw;
    min-height: 100%;
    max-height: 25vh;
    margin-left: 2vh;
`;

export const PainelNav = styled(Painel)`
    flex-direction: row;
    min-height: 10vh;
    justify-content: space-between;
    min-width: 50vw;
    max-width: 100vw;
    border-radius: 0 0 2vh 2vh;
    margin: 0 -2.4vh -2.4vh -2.4vh;
`;

export const Texto = styled.div`
    z-index: 1;
    h1 {
        color: #7986cb;
        font-weight: 500;
        font-family: monospace;
        font-size: ${(props) => (props.tamanho ? props.tamanho : " calc(0.6rem + 4vh);")};
        text-align: center;
        ${(props) => (props.margin ? "margin: " + props.margin + ";" : "")}
        filter: drop-shadow(0 0 0.2rem #5e35b1);
    }
    p {
        color: #7986cb;
        font-weight: 400;
        font-family: monospace;
        font-size: ${(props) => (props.tamanho ? props.tamanho : "calc(0.2rem + 3vh)")};
        filter: drop-shadow(0 0 0.2rem #5e35b1);
    }
`;

export const BtVoltar = styled.button`
    z-index: 2;
    position: absolute;
    border: none;
    background: none;

    filter: drop-shadow(0 0 0.2rem #5e35b1);
    transition: all 250ms;

    :hover {
        filter: drop-shadow(0 0 0.5rem #8547ff);
    }
`;

export const Imagem = styled(Texto)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        margin-top: 3vh;
        width: 35vh;
        border-radius: 10rem;
        box-shadow: 0 0 0.5rem #5e35b1;
        transition: all 250ms;
        :hover {
            box-shadow: 0 0 0.9rem #7e44f3;
        }
    }
`;

export const Repos = styled(Texto)`
    h1 {
        padding: 0.3rem;
    }
    p {
        padding: 1vw;
        margin: 0.3rem 0;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        max-width: 90vw;

        :hover {
            background-color: #022440;
            border-radius: 2vh;
        }
    }
`;

export const IssueList = styled(Repos)`
    p {
        padding: 1vh;
        font-size: 2.5vh;
        word-wrap: normal;
        max-height: 25vh;

        font-size: 1vw;
    }
    img {
        max-height: 20vh;
        margin-right: 3vh;
        border-radius: 10rem;
    }
`;

export const BtAdd = styled.button`
    z-index: 2;

    border: none;
    border-radius: 1vh;

    max-width: 6vh;
    max-height: 6vh;

    min-width: 6vh;
    min-height: 6vh;

    background-color: #4caf50;
    box-shadow: 0 0.7vh 0 #388e3c;
    margin: ${(props) => props.margin};

    overflow: hidden;

    :hover {
        background-color: #558b2f;
        box-shadow: 0 0.7vh 0 #33691e;
    }
    :active {
        background-color: #1b5e20;
        margin-bottom: -0.1rem;
        box-shadow: 0 0 0 #388e3c;
    }

    svg {
        position: sticky;

        max-width: 6vh;
        max-height: 6vh;

        min-width: 4vh;
        min-height: 4vh;
    }
`;

export const BtRem = styled(BtAdd)`
    background-color: #d32f2f;
    box-shadow: 0 0.7vh 0 #b71c1c;
    margin-bottom: 0.7vh;

    :hover {
        background-color: #c62828;
        box-shadow: 0 0.7vh 0 #8d1616;
    }
    :active {
        background-color: #8d1616;
        margin-top: 0.7vh;
        box-shadow: 0 0 0 #388e3c;
    }
    svg {
        max-width: 6vh;
        max-height: 6vh;
    }
`;

export const BtInfo = styled(BtRem)`
    background-color: #2196f3;
    box-shadow: 0 0.7vh 0 #1565c0;
    margin-bottom: 0.7vh;

    :hover {
        background-color: #1565c0;
        box-shadow: 0 0.7vh 0 #0d47a1;
    }
    :active {
        background-color: #0d47a1;
        margin-top: 0.7vh;
        box-shadow: 0 0 0 #388e3c;
    }
    svg {
        max-width: 5vh;
        max-height: 5vh;
    }
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;

    input {
        background-color: #9fa8da;
        min-width: 60%;
        width: 90%;
        height: 6.5vh;
        min-height: 50%;
        border-radius: 0.5vh;
        border: none;

        margin: 2vh 3vh 0 2vh;
        padding-left: 1rem;

        color: #311b92;
        font-weight: 400;
        font-family: monospace;
        font-size: calc(0.2rem + 3vh);
        :hover {
            outline-color: #651fff;
            outline-width: calc(0.1em);
            outline-style: solid;
            outline-offset: calc(0.1em);
        }
        ::placeholder {
            color: #757575;
        }
    }
`;
