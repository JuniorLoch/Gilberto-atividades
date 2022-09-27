import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const ContainerH = styled(Container)`
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ContainerDireita = styled(Container)`
    float: right;
`;

export const ContainerReservas = styled(ContainerH)`
    max-width: 90vw;
`;

export const ContainerCabecalho = styled.header`
    padding: 1vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: #f0f8ff99;
    box-shadow: 0px 10px 10px -10px #0000009e;
    svg {
        filter: drop-shadow(0px 0px 2px #4242429c);
        margin-right: 1vw;

        path {
            shape-rendering: optimizeQuality;
        }
    }
`;

export const ContainerViagem = styled(Container)`
    width: 100%;
    text-align: center;
    padding: 3vh 0;

    h1 {
        margin-bottom: 2vh;
    }
    img {
        width: 100%;
    }
    p {
        display: flex;
        align-items: center;

        svg {
            margin-right: 1vw;
        }
    }
`;

export const Painel = styled(Container)`
    background-color: #f0f8ff99;
    box-shadow: 0px 10px 10px -10px #00000099;
    margin: 2vh 0;
    min-width: fit-content;
    min-height: fit-content;
`;

export const Reserva = styled(Painel)`
    padding: 1rem;
    margin: 0.3rem;
    font-size: calc(0.8vw + 10px);
    transition: all 250ms;
    :hover {
        box-shadow: 0px 0px 10px #000000b3;
    }
`;

export const PainelReservas = styled(Painel)`
    width: 90vw;
    max-width: 90vw;
    min-height: 70vh;
    overflow: hidden;
    padding: 1rem;

    h1 {
        margin-bottom: 1rem;
        padding: 0;
    }
`;

export const PainelViagem = styled(Painel)`
    min-width: 300px;
    width: fit-content;
    transition: all 250ms;

    h1 {
        min-width: 50vw;
        max-width: 50vw;
    }

    svg {
        margin-bottom: -1vh;
    }

    img {
        width: 100%;
    }

    :hover {
        box-shadow: 0px 0px 10px #000000b3;
    }
`;

export const BtReservar = styled.button`
    border: none;
    background: none;
    margin-top: 2vh;
    color: #4caf50;
    filter: drop-shadow(0px 0px 2px #1b5e20b3) !important;
    font-weight: 800;
    font-size: 30px;
    padding: 1vw 5vw;
    transition: all 250ms;
    border-radius: 15px;

    :hover {
        background-color: #4caf50cc;
        color: #dcefddcc;
        box-shadow: 0 5px 5px #104613b3;
    }
`;

export const BtCancelar = styled(BtReservar)`
    color: #e53935;
    filter: drop-shadow(0px 0px 2px #5f1c1cb3) !important;

    :hover {
        background-color: #ae4c4ccc;
        box-shadow: 0 5px 5px #ae4c4ccc;
    }

    svg {
        margin-bottom: -0.1rem;
    }
`;

export const Texto = styled(Container)`
    font-size: calc(0.8vw + 8px);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #212121;
    filter: drop-shadow(0px 0px 1px #4242429c);

    h1,
    h2,
    h3 {
        filter: drop-shadow(0px 0px 2px #4242429c);
    }
    p {
        filter: drop-shadow(0px 0px 1px #4242429c);
    }
`;
