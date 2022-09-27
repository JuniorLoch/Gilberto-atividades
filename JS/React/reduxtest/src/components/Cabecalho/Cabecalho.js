import React from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ContainerCabecalho, ContainerH, Texto } from "../../Styles/styles";

function Cabecalho() {
    const numReservas = useSelector((state) => state.reservas.length);

    return (
        <ContainerCabecalho>
            <ContainerH>
                <Link to="/">
                    <GiAirplaneDeparture color="black" size="8vw" />
                </Link>
                <Texto>
                    <h1>Bom dia viagens</h1>
                </Texto>
            </ContainerH>

            <Link to="/reservas">
                <ContainerH>
                    <Texto>
                        <h3>{numReservas < 1 ? "Você não possui nenhuma reserva" : "Voce tem " + numReservas + " reserva" + (numReservas > 1 ? "s" : "")}</h3>
                    </Texto>
                </ContainerH>
            </Link>
        </ContainerCabecalho>
    );
}

export default Cabecalho;
