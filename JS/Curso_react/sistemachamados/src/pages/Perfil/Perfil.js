import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Titulo from "../../components/Titulo/Titulo";
import { AuthContext } from "../../contexts/auth";
import firebase from "../../services/firebaseConnection";

import { CgProfile } from "react-icons/cg";
import { FiUpload } from "react-icons/fi";
import { ContainerAvatar, ContainerBts, ContainerC, Formulario, ImagemUsuario, Input, ImagemUsuarioPerfil, PainelPers, Label } from "../../styles/Styles";

function Perfil() {
    const { usuario, setUsuario, storageSalvarUsuario } = useContext(AuthContext);

    const RefNome = useRef();
    const RefEmail = useRef();
    const RefAvatar = useRef();

    useEffect(() => {
        // console.log(usuario);
        RefNome.current.value = usuario.nome;
        RefEmail.current.value = usuario.email;
        // console.log(usuario.senha);
    }, [usuario]);

    async function salvarPerfil(e) {
        e.preventDefault(); // D maiusculo
        console.log(e);
        let tUsuario = {};
        let estado = false;

        // console.log(RefAvatar);
        // console.log(RefAvatar.current.files[0]);

        if (RefNome.current.value !== "") {
            tUsuario = { ...tUsuario, nome: RefNome.current.value };
            estado = true;
        }
        if (RefAvatar.current.files[0] !== undefined) {
            tUsuario = { ...tUsuario, avatar: URL.createObjectURL(RefAvatar.current.files[0]) };
            estado = true;
        }

        // console.log(tUsuario);
        if (estado) {
            await firebase
                .firestore()
                .collection("usuarios")
                .doc(usuario.uid)
                .update(tUsuario)
                .then(() => {
                    setUsuario({ ...usuario, ...tUsuario });
                    storageSalvarUsuario({ ...usuario, ...tUsuario }, true);

                    setTimeout(() => {
                        tUsuario = {};
                        estado = false;
                    }, 1);

                    toast.success("Atualizado com sucesso ");
                })
                .catch((error) => {
                    console.log("Erro ao salvar: " + error);
                });
        } else {
            toast.error("nenhum valor a ser atualizado");
        }
    }

    return (
        <ContainerC>
            <Titulo texto="Perfil do usuário">
                <CgProfile size="6vh" />
            </Titulo>

            <ContainerC>
                <PainelPers margin="2rem 0 0 0" largMin="75vw">
                    <Formulario onSubmit={salvarPerfil}>
                        <ImagemUsuarioPerfil>
                            <label>Avatar</label>
                            <Label>
                                <input ref={RefAvatar} type="file" accept="image/*" />
                                <FiUpload size="25px" color="black" />
                            </Label>
                            <ImagemUsuario src={usuario.avatar === null ? require("../../assets/placeholder_img.png") : usuario.avatar} />
                        </ImagemUsuarioPerfil>

                        <label>Nome</label>
                        <Input ref={RefNome} type="text" />
                        <label>Email</label>
                        <Input ref={RefEmail} type="email" />
                        <ContainerBts>
                            <button>Salvar</button>
                        </ContainerBts>
                    </Formulario>
                </PainelPers>
            </ContainerC>
        </ContainerC>
    );
}

export default Perfil;
