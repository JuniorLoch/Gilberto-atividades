import React, { useEffect, useContext, useState, useRef } from "react";
import { FcLock } from "react-icons/fc";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/auth";

import translate from "translate";

import { ContainerBts, ContainerCentro, Formulario, ImagemCarregando, Input, PainelC, PainelPers } from "../../styles/Styles";

function Login() {
    const refEmail = useRef();
    const refSenha = useRef();

    const [verificando, setVerificando] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [verifUsuario, setVerifUsuario] = useState({});
    const [carregando, setCarregando] = useState(true);

    const { logarUsuario, msgErro, autenticando } = useContext(AuthContext);

    function logarconta() {
        const usuario = { email: refEmail.current.value, senha: refSenha.current.value };
        if (usuario.email === "" || usuario.senha === "") {
            //algum campo vazio
            toast.error("todos os campos precisam ser preenchidos!");
            setVerificando(true);
            setEmail("");
            setSenha("");
        } else {
            if (usuario.email === email && usuario.senha === senha && msgErro.message !== "") {
                translate(msgErro, "PT").then((msgTraduzida) => toast.error(msgTraduzida));
            }
            setEmail(usuario.email);
            setSenha(usuario.senha);
        }
        setVerifUsuario(usuario);
    }

    useEffect(() => {
        if (email !== "" && senha !== "") {
            logarUsuario(email, senha);
        }
        // eslint-disable-next-line
    }, [email, senha]);

    useEffect(() => {
        if (msgErro !== "" && !carregando) {
            translate(msgErro, "PT").then((msgTraduzida) => toast.error(msgTraduzida));
        }
        // eslint-disable-next-line
    }, [msgErro]);

    useEffect(() => {
        setCarregando(false);
    }, []);

    return (
        <ContainerCentro>
            <PainelC>
                <PainelPers cor="#61A2D6" padding="0.5rem 0.5rem" bradius="0.3rem 0.3rem 0rem 0rem">
                    <FcLock size="8vw" />
                </PainelPers>

                <Formulario>
                    <label>Login</label>
                    <Input ref={refEmail} verificando={verifUsuario.email === "" ? verificando : "false"} type="text" placeholder="Email"></Input>
                    <label>Senha</label>
                    <Input ref={refSenha} verificando={verifUsuario.email === "" ? verificando : "false"} type="password" placeholder="Senha"></Input>
                    <ContainerBts>
                        <button type="button" onClick={logarconta}>
                            {autenticando ? (
                                <span>
                                    Carregando...
                                    <ImagemCarregando src={require("../../assets/carregando.gif")} />
                                </span>
                            ) : (
                                "Entrar"
                            )}
                        </button>
                        <Link to="/cadastro">
                            <button type="button">Cadastrar-se</button>
                        </Link>
                    </ContainerBts>
                </Formulario>
            </PainelC>
        </ContainerCentro>
    );
}

export default Login;
