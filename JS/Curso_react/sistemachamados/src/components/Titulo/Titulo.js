import React, { useContext } from "react";
import { ContainerTitulo, PainelTitulo, Titulo as TituloText, BtnLogout } from "../../styles/Styles";
import { AuthContext } from "../../contexts/auth";
import { HiLogin } from "react-icons/hi";

function Titulo({ children, texto }) {
    const { deslogarUsuario } = useContext(AuthContext);
    return (
        <ContainerTitulo>
            <PainelTitulo>
                <TituloText>
                    <span>
                        {children}
                        {"  " + texto}
                    </span>

                    <BtnLogout onClick={deslogarUsuario} type="button">
                        <HiLogin size="5vh" color="white" />
                    </BtnLogout>
                </TituloText>
            </PainelTitulo>
        </ContainerTitulo>
    );
}

export default Titulo;
