import React, { useState, useEffect } from "react";
import Titulo from "../../components/Titulo/Titulo";

import firebase from "../../services/firebaseConnection";

import { BotaoNovo, ContainerBts, ContainerC, PainelPers, Tabela, Titulo as TituloTexto } from "../../styles/Styles";

import { HiOutlineClipboardList, HiOutlinePlus } from "react-icons/hi";
import { CgDetailsMore } from "react-icons/cg";
import { BiEditAlt } from "react-icons/bi";

function Chamados() {
    const [chamados, setChamados] = useState([]);

    useEffect(() => {
        async function carregaChamados() {
            let tchamados = [];
            await firebase
                .firestore()
                .collection("Chamados")
                .get()
                .then(async (items) => {
                    items.forEach(async (item) => {
                        let tItem = item.data();
                        // console.log("tItem");
                        // console.log(tItem);
                        let tcliente;
                        await firebase
                            .firestore()
                            .collection("Clientes")
                            .doc(tItem.cliente)
                            .get()
                            .then((cliente) => {
                                tcliente = cliente.data();
                            });
                        // console.log("tcliente");
                        // console.log(tcliente);
                        let tfuncionario;
                        await firebase
                            .firestore()
                            .collection("usuarios")
                            .doc(tItem.funcionario)
                            .get()
                            .then((funcionario) => {
                                tfuncionario = funcionario.data();
                            });
                        // console.log("tfuncionario");
                        // console.log(tfuncionario);
                        tItem = { ...tItem, cliente: tcliente.nome, funcionario: tfuncionario.nome };
                        tchamados.push(tItem);

                        // console.log("chamados: " + tchamados);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
            return tchamados;
        } // preciso que primeiro preencha tchamados e depois seta isso no state chamados, nao estou conseguindo
        carregaChamados().then((tchamados) => {
            console.log(tchamados);
            setInterval();
            setChamados(tchamados);
        });
    }, []);

    return (
        <ContainerC>
            <Titulo texto="Chamados">
                <HiOutlineClipboardList size="3rem" />
            </Titulo>
            <PainelPers margin="2rem 0 0 0" largMin="75vw" padding="1rem">
                {chamados.length === 0 ? (
                    <ContainerC>
                        <TituloTexto>Não existem chamados registrados</TituloTexto>
                        <ContainerBts>
                            <BotaoNovo to="/novochamado">
                                <HiOutlinePlus size="2rem" /> Cadastrar novo
                            </BotaoNovo>
                        </ContainerBts>
                    </ContainerC>
                ) : (
                    <ContainerC>
                        <Tabela>
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>Assunto</th>
                                    <th>Status</th>
                                    <th>Atendente</th>
                                    <th>Data de criação</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {React.Children.toArray(
                                    chamados.map((chamado) => (
                                        <tr>
                                            <td>{chamado.cliente ? chamado.cliente : "null"}</td>
                                            <td>{chamado.assunto ? chamado.assunto : "null"}</td>
                                            <td>{chamado.status ? chamado.status : "null"}</td>
                                            <td>{chamado.status ? chamado.funcionario : "null"}</td>
                                            <td>{chamado.dataCriacao ? chamado.dataCriacao : "null"}</td>
                                            <td className="botoes">
                                                <button className="btdetalhes">
                                                    <CgDetailsMore size="1rem" />
                                                </button>
                                                <button className="btedit">
                                                    <BiEditAlt size="1rem" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </Tabela>
                        <ContainerBts>
                            <BotaoNovo to="/novochamado">
                                <HiOutlinePlus size="2rem" /> Novo chamado
                            </BotaoNovo>
                        </ContainerBts>
                    </ContainerC>
                )}
            </PainelPers>
        </ContainerC>
    );
}

export default Chamados;
