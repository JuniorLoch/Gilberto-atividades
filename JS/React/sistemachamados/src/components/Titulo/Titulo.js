import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ContainerTitulo, PainelTitulo, Titulo as TituloText, BtnLogout, BtnVoltar } from "../../styles/Styles";
import { AuthContext } from "../../contexts/auth";

import { BiLogOut } from "react-icons/bi";
import { MdArrowBack } from "react-icons/md";

function Titulo({ children, texto }) {
    const { deslogarUsuario } = useContext(AuthContext);
    const navigate = useNavigate();

    function back() {
        navigate(-1);
    }
    return (
        <ContainerTitulo>
            <PainelTitulo>
                <TituloText>
                    <BtnVoltar onClick={back}>
                        <MdArrowBack size="2.5rem" color="white" />
                    </BtnVoltar>
                    <span>
                        {children}
                        {"  " + texto}
                    </span>

                    <BtnLogout onClick={deslogarUsuario} type="button">
                        <BiLogOut size="2.5rem" color="white" />
                    </BtnLogout>
                </TituloText>
            </PainelTitulo>
        </ContainerTitulo>
    );
}

export default Titulo;
