import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Titulo from "../../components/Titulo/Titulo";
import { AuthContext } from "../../contexts/auth";
import firebase from "../../services/firebaseConnection";

import { CgProfile } from "react-icons/cg";
import { FiUpload } from "react-icons/fi";
import {
    ContainerAvatar,
    ContainerBts,
    ContainerC,
    Formulario,
    ImagemUsuario,
    Input,
    ImagemUsuarioPerfil,
    PainelPers,
    Label,
    ImagemCarregando,
} from "../../styles/Styles";

function Perfil() {
    const { usuario, setUsuario, storageSalvarUsuario } = useContext(AuthContext);

    const [AvatarPreview, setAvatarPreview] = useState();
    const [salvando, setSalvando] = useState(false);
    const RefNome = useRef();
    const RefEmail = useRef();
    const RefAvatar = useRef();

    useEffect(() => {
        setAvatarPreview(usuario.avatar ? usuario.avatar : require("../../assets/placeholder_img.png"));
    }, []);

    useEffect(() => {
        // console.log(usuario);
        RefNome.current.value = usuario.nome;
        RefEmail.current.value = usuario.email;
        // console.log(usuario.senha);
    }, [usuario]);

    async function salvarPerfil(e) {
        e.preventDefault(); // D maiusculo
        setSalvando(true);

        // console.log(e);
        let tUsuario = {};
        let estado = false;

        // console.log(RefAvatar);
        // console.log(RefAvatar.current.files[0]);

        if (RefNome.current.value !== "") {
            tUsuario = { ...tUsuario, nome: RefNome.current.value };
            estado = true;
        }
        // salvando imagem no storage
        if (RefAvatar.current.files[0] !== undefined) {
            let tImagem = RefAvatar.current.files[0];
            // Não é possível deletar uma pasta inteira pelo firebase storage sem utilizar nenhum plugin externo
            // await firebase
            //     .storage()
            //     .ref("avatares/" + usuario.uid + "/" + tImagem.name)
            //     .delete()
            //     .then((resp) => {
            //         console.log("deletado: " + resp);
            //     })
            //     .catch((error) => {
            //         console.log("erro ao deletar: " + error);
            //     });
            await firebase
                .storage()
                .ref("avatares/" + usuario.uid + "/" + tImagem.name)
                .put(tImagem)
                .then(async () => {
                    await firebase
                        .storage()
                        .ref("avatares/" + usuario.uid)
                        .child(tImagem.name)
                        .getDownloadURL()
                        .then(async (URL) => {
                            tUsuario = { ...tUsuario, avatar: URL };
                            // console.log("imagem salva");
                        })
                        .catch((error) => {
                            console.error("erro ao buscar url storage: " + error);
                        });
                    // console.log("salvo no storage com sucesso ");
                    // console.log(resp);
                })
                .catch((error) => {
                    console.log(error);
                });
            // tUsuario = { ...tUsuario, avatar: URL.createObjectURL(RefAvatar.current.files[0]) };
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
                    // console.log("salvando state usuario");
                    setUsuario({ ...usuario, ...tUsuario });

                    // console.log("salvando storage");
                    storageSalvarUsuario({ ...usuario, ...tUsuario }, true);

                    setTimeout(() => {
                        tUsuario = {};
                        estado = false;
                    }, 1);

                    toast.success("Atualizado com sucesso ");
                    setSalvando(false);
                })
                .catch((error) => {
                    console.log("Erro ao salvar: " + error);
                    setSalvando(false);
                });
        } else {
            toast.error("nenhum valor a ser atualizado");
            setSalvando(false);
        }
    }

    function trocaImagem() {
        const imgAvatar = RefAvatar.current.files[0];
        if (imgAvatar !== undefined) {
            setAvatarPreview(URL.createObjectURL(imgAvatar));
        }
    }

    return (
        <ContainerC>
            <Titulo texto="Perfil do usuário">
                <CgProfile size="3rem" />
            </Titulo>

            <ContainerC>
                <PainelPers margin="2rem 0 0 0" largMin="75vw">
                    <Formulario salvando={salvando} onSubmit={salvarPerfil}>
                        <ImagemUsuarioPerfil>
                            <label>Avatar</label>
                            <Label>
                                <input onChange={trocaImagem} ref={RefAvatar} type="file" accept="image/*" />
                                <FiUpload size="25px" color="lightgrey" />
                            </Label>
                            <ImagemUsuario src={AvatarPreview} />
                        </ImagemUsuarioPerfil>

                        <label>Nome</label>
                        <Input ref={RefNome} type="text" />
                        <label>Email</label>
                        <Input disabled ref={RefEmail} type="email" />
                        <ContainerBts>
                            <button>
                                {salvando ? (
                                    <span>
                                        {" "}
                                        Salvando... <ImagemCarregando src={require("../../assets/carregando.gif")} />
                                    </span>
                                ) : (
                                    "Salvar"
                                )}
                            </button>
                        </ContainerBts>
                    </Formulario>
                </PainelPers>
            </ContainerC>
        </ContainerC>
    );
}

export default Perfil;
