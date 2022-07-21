import React, { useRef, useState, useContext, useEffect } from "react";

import { FcLock } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/auth";
import translate from "translate";

import { ContainerBts, ContainerCentro, Formulario, PainelC, PainelPers, TextoLink, Input, ImagemCarregando } from "../../styles/Styles";

function Cadastro() {
    const refEmail = useRef();
    const refSenha = useRef();
    const refSenhaR = useRef();

    const [verificando, setVerificando] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [verifUsuario, setVerifUsuario] = useState({});
    const [carregando, setCarregando] = useState(true);

    const { cadastrarUsuario, msgErro, autenticando } = useContext(AuthContext);

    function cadastrarConta() {
        const usuario = { email: refEmail.current.value, senha: refSenha.current.value, confirmaSenha: refSenhaR.current.value };

        if (usuario.email === "" || usuario.senha === "" || usuario.confirmaSenha === "") {
            //algum campo vazio
            toast.error("todos os campos precisam ser preenchidos!");
            setVerificando(true);
        } else {
            //todos os campos preenchidos
            if (usuario.senha === usuario.confirmaSenha) {
                //senhas iguais
                // console.log(usuario.email + " - " + email + " ? " + (usuario.email === email));
                // console.log(usuario.senha + " - " + senha + " ? " + (usuario.senha === senha));
                // console.log(msgErro.message + " ? " + (msgErro.message !== ""));
                if (usuario.email === email && usuario.senha === senha && msgErro.message !== "") {
                    translate(msgErro, "PT").then((msgTraduzida) => toast.error(msgTraduzida));
                }
                setEmail(usuario.email);
                setSenha(usuario.senha);
                setVerificando(false);
            } else {
                //senhas diferentes
                toast.info("senhas não coincidem!");
                setVerificando(true);
            }
        }
        usuario.senha = usuario.senha === usuario.confirmaSenha ? usuario.senha : "";
        setVerifUsuario(usuario);
    }

    useEffect(() => {
        if (email !== "" && senha !== "") {
            cadastrarUsuario(email, senha);
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
                    <label>Insira o seu E-mail</label>
                    <Input verificando={verifUsuario.email === "" ? verificando : "false"} ref={refEmail} type="text" placeholder="Email"></Input>
                    <label>Senha</label>
                    <Input verificando={verifUsuario.senha === "" ? verificando : "false"} ref={refSenha} type="password" placeholder="Senha"></Input>
                    <label>Repita a senha</label>
                    <Input verificando={verifUsuario.senha === "" ? verificando : "false"} ref={refSenhaR} type="password" placeholder="Repita a senha"></Input>
                    <ContainerBts>
                        <button onClick={cadastrarConta} type="button">
                            {autenticando ? (
                                <span>
                                    Carregando...
                                    <ImagemCarregando src={require("../../assets/carregando.gif")} />
                                </span>
                            ) : (
                                "Cadastrar-se"
                            )}
                        </button>
                    </ContainerBts>
                    <TextoLink to="/">Já tenho uma conta</TextoLink>
                </Formulario>
            </PainelC>
        </ContainerCentro>
    );
}

export default Cadastro;
