import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";

import { BotaoLink, Cabecalho, ContainerAvatar, ContainerCBotoes, ImagemUsuario, PainelCabecalho } from "../../styles/Styles";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { GoGear } from "react-icons/go";
function Menu() {
    const { usuario } = useContext(AuthContext);

    return (
        <Cabecalho>
            <PainelCabecalho>
                <ContainerAvatar>
                    <Link to="/perfil">
                        <ImagemUsuario src={usuario.avatar === null ? require("../../assets/placeholder_img.png") : usuario.avatar}></ImagemUsuario>
                    </Link>
                </ContainerAvatar>
                <ContainerCBotoes>
                    <BotaoLink to="/chamados">
                        <HiOutlineClipboardList size="6vh" />
                        <span> Chamados</span>
                    </BotaoLink>
                    <BotaoLink to="/clientes">
                        <BsFillPersonFill size="6vh" />
                        <span> Clientes</span>
                    </BotaoLink>
                    <BotaoLink to="/configuracoes">
                        <GoGear size="6vh" />
                        <span> Configurações</span>
                    </BotaoLink>
                </ContainerCBotoes>
            </PainelCabecalho>
        </Cabecalho>
    );
}

export default Menu;
