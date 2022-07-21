import React from "react";
import { ContainerCentro, PainelC, Titulo } from "../../styles/Styles";

function Carregando() {
    return (
        <ContainerCentro>
            <PainelC>
                <br />
                <Titulo>Carregando</Titulo>
                <br />
                <img alt="" src={require("../../assets/carregando.gif")}></img>
            </PainelC>
        </ContainerCentro>
    );
}

export default Carregando;
