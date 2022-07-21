import React, { useContext } from "react";
import Titulo from "../../components/Titulo/Titulo";

import { ContainerContent } from "../../styles/Styles";

import { HiOutlineClipboardList } from "react-icons/hi";

function Chamados() {
    return (
        <ContainerContent>
            <Titulo texto="Pagina Chamados">
                <HiOutlineClipboardList size="6vh" />
            </Titulo>
        </ContainerContent>
    );
}

export default Chamados;
