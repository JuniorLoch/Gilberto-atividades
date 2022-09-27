import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { BsFillPersonFill } from "react-icons/bs";
import Titulo from "../../components/Titulo/Titulo";
import firebase from "../../services/firebaseConnection";

import { ContainerBts, ContainerC, Formulario, ImagemCarregando, Input, PainelPers } from "../../styles/Styles";

function Clientes() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [salvando, setSalvando] = useState(false);

    const refnome = useRef();
    const refdocumento = useRef();
    const refendereco = useRef();

    useEffect(() => {
        if (id) {
            editaCliente();
        }
    }, []);

    async function editaCliente() {
        await firebase
            .firestore()
            .collection("Clientes")
            .doc(id)
            .get()
            .then((snapshot) => {
                let tcliente = snapshot.data();
                console.log(tcliente);

                refnome.current.value = tcliente.nome;
                refdocumento.current.value = tcliente.cnpj_cpf;
                refendereco.current.value = tcliente.endereco;
            })
            .catch((error) => {
                console.log(error);
                toast.error("Cliente não encontrado!");
                navigate("/");
            });
    }

    function limpaCampos() {
        refnome.current.value = "";
        refdocumento.current.value = "";
        refendereco.current.value = "";
    }

    async function salvarPerfil(e) {
        e.preventDefault();
        setSalvando(true);

        let tcliente = {
            nome: refnome.current.value === "" ? null : refnome.current.value,
            cnpj_cpf: refdocumento.current.value === "" ? null : refdocumento.current.value,
            endereco: refendereco.current.value === "" ? null : refendereco.current.value,
        };

        if (id) {
            await firebase
                .firestore()
                .collection("Clientes")
                .doc(id)
                .set(tcliente)
                .then(() => {
                    toast.info("Cliente editado com sucesso!");
                    setSalvando(false);
                    limpaCampos();
                })
                .catch((error) => {
                    console.log(error);
                    setSalvando(false);
                    limpaCampos();
                });
        } else {
            await firebase
                .firestore()
                .collection("Clientes")
                .add(tcliente)
                .then(() => {
                    // console.log("salvo");
                    toast.success("Cliente salvo com sucesso!");
                    setSalvando(false);
                    limpaCampos();
                })
                .catch((error) => {
                    console.log(error);
                    setSalvando(false);
                    limpaCampos();
                });
        }
    }

    return (
        <ContainerC>
            <Titulo texto="Clientes">
                <BsFillPersonFill size="3rem" />
            </Titulo>
            <PainelPers margin="2rem 0 0 0" largMin="75vw">
                <Formulario salvando={salvando} onSubmit={salvarPerfil}>
                    <label>Nome fantasia</label>
                    <Input ref={refnome} type="text" placeholder="nome da empresa"></Input>
                    <label>CNPJ/CPF</label>
                    <Input mask="999.999.999-99" ref={refdocumento} type="text" placeholder="cnpj da empresa ou seu cpf"></Input>
                    <label>Endereço</label>
                    <Input ref={refendereco} type="text" placeholder="endereço (rua) da empresa"></Input>
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
    );
}

export default Clientes;
