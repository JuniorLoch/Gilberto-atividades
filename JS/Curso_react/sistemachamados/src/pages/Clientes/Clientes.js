import React, { useState, useRef, useContext } from "react";
import { toast } from "react-toastify";

import { BsFillPersonFill } from "react-icons/bs";
import Titulo from "../../components/Titulo/Titulo";
import firebase from "../../services/firebaseConnection";

import { ContainerBts, ContainerC, Formulario, ImagemCarregando, Input, PainelPers } from "../../styles/Styles";

function Clientes() {
    const [salvando, setSalvando] = useState(false);

    const refnome = useRef();
    const refdocumento = useRef();
    const refendereco = useRef();

    async function salvarPerfil(e) {
        e.preventDefault();
        setSalvando(true);

        let tcliente = {
            nome: refnome.current.value === "" ? null : refnome.current.value,
            cnpj_cpf: refdocumento.current.value === "" ? null : refdocumento.current.value,
            endereco: refendereco.current.value === "" ? null : refendereco.current.value,
        };

        await firebase
            .firestore()
            .collection("Clientes")
            .doc(tcliente.cnpj_cpf)
            .set(tcliente)
            .then((resp) => {
                // console.log("salvo");
                toast.success("Cliente salvo com sucesso!");
                setSalvando(false);
            })
            .catch((error) => {
                console.log(error);
                setSalvando(false);
            });
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
                    <Input ref={refdocumento} type="text" placeholder="cnpj da empresa ou seu cpf"></Input>
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
