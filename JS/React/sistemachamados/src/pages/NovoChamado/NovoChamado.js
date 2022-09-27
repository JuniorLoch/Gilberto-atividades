import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Titulo from "../../components/Titulo/Titulo";
import { VscNewFile } from "react-icons/vsc";
import { AuthContext } from "../../contexts/auth";
import firebase from "../../services/firebaseConnection";
import { toast } from "react-toastify";

import { ComboBox, ContainerBts, ContainerC, ContainerComboBox, ContainerR, Formulario, ImagemCarregando, Input, PainelPers } from "../../styles/Styles";

function NovoChamado() {
    const { id } = useParams();

    const [salvando, setSalvando] = useState(false);
    const [clientes, setClientes] = useState([]);
    const [status, setStatus] = useState("");

    const [carregadoClientes, setCarregadoClientes] = useState(true);

    const refCliente = useRef();
    const refAssunto = useRef();
    const refObservacao = useRef();

    const { usuario } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        async function carregaClientes() {
            let tclientes = [];
            await firebase
                .firestore()
                .collection("Clientes")
                .get()
                .then((cli) => {
                    // console.log(cli);
                    cli.forEach((cliente) => {
                        tclientes.push({ id: cliente.id, nome: cliente.data().nome, documento: cliente.data().cnpj_cpf, endereco: cliente.data().endereco });
                    });
                    setClientes(tclientes);
                    setCarregadoClientes(false);

                    if (id) {
                        editaChamado(tclientes);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setCarregadoClientes(false);
                });
        }
        carregaClientes();
        // console.log(id);
    }, []);

    async function editaChamado(listaClientes) {
        await firebase
            .firestore()
            .collection("Chamados")
            .doc(id)
            .get()
            .then((snapshot) => {
                const tchamado = snapshot.data();
                // console.log(refCliente.current.defaultValue);
                refAssunto.current.value = tchamado.assunto;
                setStatus(tchamado.status);
                refObservacao.current.value = tchamado.observacao;

                let indexCli = listaClientes.findIndex((cliente) => {
                    return cliente.id === tchamado.cliente;
                });
                if (indexCli >= 0) {
                    refCliente.current.value = listaClientes[indexCli].id;
                } else {
                    console.error("Cliente nao encontrado");
                }
            })
            .catch();
    }

    async function salvarChamado(e) {
        e.preventDefault();

        // console.log(
        //     "Cliente: " + refCliente.current.value + " Assunto: " + refAssunto.current.value + " Status: " + status + " Observação: " + refObservacao.current.value
        // );
        let tchamado = { cliente: refCliente.current.value, assunto: refAssunto.current.value, status, observacao: refObservacao.current.value };
        if (tchamado.cliente === "" || tchamado.observacao === "" || status == "") {
            toast.error("Todos os campos precisam estar preenchidos!");
        } else {
            setSalvando(true);
            // let clienteIndex = clientes.findIndex((cliente) => {
            //     return tchamado.cliente === cliente.id;
            // });
            // tchamado = { ...tchamado, cliente: clientes[clienteIndex].id + " - " + clientes[clienteIndex].nome };
            const hoje = new Date();
            tchamado = { ...tchamado, funcionario: usuario.uid, dataCriacao: hoje };
            if (id) {
                await firebase
                    .firestore()
                    .collection("Chamados")
                    .doc(id)
                    .set(tchamado)
                    .then(() => {
                        toast.success("Chamado Editado com sucesso!");
                        setSalvando(false);
                        setTimeout(() => {
                            navigate("/chamados");
                        }, 500);
                    })
                    .catch((error) => {
                        console.log(error);
                        toast.error("Ocorreu um erro!");
                        setSalvando(false);
                    });
            } else {
                await firebase
                    .firestore()
                    .collection("Chamados")
                    .add(tchamado)
                    .then(() => {
                        toast.success("Chamado registrado com sucesso!");
                        setSalvando(false);
                        setTimeout(() => {
                            navigate("/chamados");
                        }, 500);
                    })
                    .catch((error) => {
                        console.log(error);
                        toast.error("Ocorreu um erro!");
                        setSalvando(false);
                    });
            }
        }
    }

    function trocaStatus(e) {
        setStatus(e.target.value);
        // console.log(e.target.value);
    }

    return (
        <ContainerC>
            <Titulo texto="Novo Chamado">
                <VscNewFile size="3rem" />
            </Titulo>
            <PainelPers margin="2rem 0 0 0" largMin="75vw">
                <Formulario salvando={salvando} onSubmit={salvarChamado}>
                    <label>Cliente</label>
                    <ContainerR>
                        <ComboBox ref={refCliente}>
                            {!carregadoClientes ? (
                                clientes.length === 0 ? (
                                    <option value="">Nenhum cliente cadastrado</option>
                                ) : (
                                    clientes.map((cliente) => {
                                        return (
                                            <option key={cliente.documento} value={cliente.id}>
                                                {cliente.nome}
                                            </option>
                                        );
                                    })
                                )
                            ) : (
                                <option value="">Aguarde...</option>
                            )}
                        </ComboBox>
                        {carregadoClientes ? (
                            <ImagemCarregando style={{ position: "absolute", marginRight: "30rem" }} src={require("../../assets/carregando.gif")} />
                        ) : (
                            ""
                        )}
                    </ContainerR>
                    <label>Assunto</label>
                    <ComboBox defaultValue="Suporte" ref={refAssunto}>
                        <option>Suporte</option>
                        <option>Financeiro</option>
                        <option>Visita técnica</option>
                    </ComboBox>
                    <label>Status</label>
                    <ContainerComboBox>
                        <ContainerC>
                            <Input type="radio" name="status" value="Aberto" onChange={trocaStatus} checked={status === "Aberto"} />
                            <span>Aberto</span>
                        </ContainerC>
                        <ContainerC>
                            <Input type="radio" name="status" value="Em andamento" onChange={trocaStatus} checked={status === "Em andamento"} />
                            <span>Em andamento</span>
                        </ContainerC>
                        <ContainerC>
                            <Input type="radio" name="status" value="Atendido" onChange={trocaStatus} checked={status === "Atendido"} />
                            <span>Atendido</span>
                        </ContainerC>
                    </ContainerComboBox>
                    <label>Observacao</label>
                    <textarea ref={refObservacao} type="text" placeholder="Observe o chamado"></textarea>
                    <ContainerBts>
                        <button>
                            {salvando ? (
                                <span>
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

export default NovoChamado;
