import React, { useState, useEffect } from "react";

import Titulo from "../../components/Titulo/Titulo";
import Modal from "../../components/Modal/Modal";
import firebase from "../../services/firebaseConnection";

import { BotaoNovo, ContainerBts, ContainerC, PainelPers, Tabela, TabelaLink, TextoLink, Titulo as TituloTexto } from "../../styles/Styles";

import { HiOutlineClipboardList, HiOutlinePlus } from "react-icons/hi";
import { CgDetailsMore } from "react-icons/cg";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function Chamados() {
    const [rawChamados, setRawChamados] = useState([]);
    const [chamados, setChamados] = useState([]);

    const [carregandoChamados, setCarregandoChamados] = useState(true);
    const [semChamados, setSemChamados] = useState(true);

    const [showModal, setShowModal] = useState(false);
    const [chamadoModal, setChamadoModal] = useState();

    useEffect(() => {
        // async function carregaChamados() {
        let tchamados = [];
        firebase
            .firestore()
            .collection("Chamados")
            .limit(10)
            .get()
            .then((items) => {
                items.forEach((item) => {
                    tchamados.push({ id: item.id, ...item.data() });
                    // console.log("chamados: " + tchamados);
                });
                setRawChamados(tchamados); // se eu coloco setChamados fora desse then() é setado no chamados o valor inicial de tchamados []
                // console.log(tchamados);
                // carregaItensChamado(tchamados);
                setCarregandoChamados(false);
                setSemChamados(false);
            })
            .catch((error) => {
                console.log(error);
                setCarregandoChamados(false);
            });
        // } // preciso que primeiro preencha tchamados e depois seta isso no state chamados, nao estou conseguindo
        // carregaChamados();
    }, []);

    // function carregaItensChamado(rChamados) {
    //     let tchamados = [];
    //     // console.log(rChamados);
    //     rChamados.every((item) => {
    //         let tItem = item;
    //         // console.log("tItem");
    //         // console.log(tItem);
    //         let tcliente;
    //         let tfuncionario;
    //         // tfuncionario = firebase.firestore().collection("Clientes").doc(tItem.cliente).get().then((tfuncionario));
    //         // tfuncionario = tfuncionario.data();
    //         firebase
    //             .firestore()
    //             .collection("Clientes")
    //             .doc(tItem.cliente)
    //             .get()
    //             .then((itemcli) => {
    //                 tcliente = itemcli.data();
    //                 firebase
    //                     .firestore()
    //                     .collection("usuarios")
    //                     .doc(tItem.funcionario)
    //                     .get()
    //                     .then((itemfun) => {
    //                         tfuncionario = itemfun.data();
    //                         tItem = { ...tItem, cliente: tcliente.nome, funcionario: tfuncionario.nome };
    //                         tchamados.push(tItem);
    //                         console.log(tchamados);
    //                         setSemChamados(false);
    //                     });
    //             });
    //         // tcliente = firebase.firestore().collection("usuarios").doc(tItem.funcionario).get();
    //         // tcliente = tcliente.data();
    //         // console.log("tcliente");
    //         // console.log(tcliente);
    //         // console.log("tfuncionario");
    //         // console.log(tfuncionario);
    //     });
    //     setCarregandoChamados(false);
    //     // console.log(tchamados);
    //     setChamados(tchamados);
    // }

    useEffect(() => {
        if (rawChamados.length > 0) {
            // async function carregaItensChamado() {
            let tchamados = [];
            // console.log(rawChamados);
            rawChamados.every(async (item, index) => {
                // console.log(index);
                let tItem = item;
                // console.log("tItem");
                // console.log(tItem);
                let tcliente;
                let tfuncionario;
                async function preencherDados() {
                    tfuncionario = await firebase.firestore().collection("usuarios").doc(tItem.funcionario).get();
                    tfuncionario = tfuncionario.data();
                    tcliente = await firebase.firestore().collection("Clientes").doc(tItem.cliente).get();
                    let tclienteid = tcliente.id;
                    tcliente = tcliente.data();
                    // console.log(tcliente);
                    tItem = { ...tItem, cliente: [tcliente.nome, tclienteid], funcionario: tfuncionario.nome };
                    tchamados.push(tItem);
                    // console.log(tchamados);
                }
                await preencherDados();
                if (index === rawChamados.length - 1) {
                    setChamados(tchamados);
                    setSemChamados(false);
                }
                // console.log("tcliente");
                // console.log(tcliente);
                // console.log("tfuncionario");
                // console.log(tfuncionario);
            });

            setCarregandoChamados(false);
            // console.log(tchamados);

            // }
            // carregaItensChamado();
        }
    }, [rawChamados]);

    function infoChamado(chamado) {
        if (chamado) {
            // console.log(chamado);
            let tchamado = { ...chamado, dataCriacao: chamado.dataCriacao.toDate().toLocaleString() };
            let formchamado = {
                Identificador: tchamado.id,
                "Data de criação": tchamado.dataCriacao,
                "Cliente atendido": tchamado.cliente,
                "Atendente atual": tchamado.funcionario,
                "Estado atual": tchamado.status,
                Categoria: tchamado.assunto,
                "Descrição do chamado": tchamado.observacao,
            };
            setChamadoModal(formchamado);
        }
        setShowModal(!showModal);
    }

    return (
        <ContainerC>
            <Titulo texto="Chamados">
                <HiOutlineClipboardList size="3rem" />
            </Titulo>
            <PainelPers margin="2rem 0 0 0" largMin="75vw" padding="1rem">
                {!carregandoChamados ? (
                    !semChamados ? (
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
                                    {chamados.map((chamado, index) => {
                                        return (
                                            <tr key={chamado.id}>
                                                <TabelaLink>
                                                    <Link className="Link" to={"/clientes/" + chamado.cliente[1]}>
                                                        {chamado.cliente[0] ? chamado.cliente[0] : "null"}
                                                    </Link>
                                                </TabelaLink>

                                                <td>{chamado.assunto ? chamado.assunto : "null"}</td>
                                                <td>{chamado.status ? chamado.status : "null"}</td>
                                                <td>{chamado.status ? chamado.funcionario : "null"}</td>
                                                <td>{chamado.dataCriacao ? chamado.dataCriacao.toDate().toLocaleString() : "null"}</td>
                                                <td className="botoes">
                                                    <button
                                                        onClick={() => {
                                                            infoChamado(chamado);
                                                        }}
                                                        className="btdetalhes"
                                                    >
                                                        <CgDetailsMore size="1rem" />
                                                    </button>
                                                    <Link to={"/novochamado/" + chamado.id} className="btedit">
                                                        <BiEditAlt size="1rem" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Tabela>
                            <ContainerBts>
                                <BotaoNovo to="/novochamado">
                                    <HiOutlinePlus size="2rem" /> Novo chamado
                                </BotaoNovo>
                            </ContainerBts>
                        </ContainerC>
                    ) : (
                        <ContainerC>
                            <TituloTexto>Não existem chamados registrados</TituloTexto>
                            <ContainerBts>
                                <BotaoNovo to="/novochamado">
                                    <HiOutlinePlus size="2rem" /> Cadastrar novo
                                </BotaoNovo>
                            </ContainerBts>
                        </ContainerC>
                    )
                ) : (
                    <div>Carregando</div>
                )}
            </PainelPers>
            {showModal && (
                <Modal
                    item={chamadoModal}
                    fechar={() => {
                        infoChamado(null);
                    }}
                />
            )}
        </ContainerC>
    );
}

export default Chamados;
