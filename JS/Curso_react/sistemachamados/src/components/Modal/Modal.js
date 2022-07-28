import React, { useEffect, useState } from "react";

import { BtnLogout, ContainerBtFechar, ContainerC, ContainerModal, PainelModal, Titulo, TabelaV, ContainerChamado, Tabela, Badge } from "../../styles/Styles";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
function Modal({ item, fechar }) {
    const [chamado, setChamado] = useState();

    useEffect(() => {
        let vetChamado = ["Identificador", "Data de criação", "Cliente atendido", "Atendente atual", "Estado atual", "Categoria", "Descrição do chamado"];
        // console.log(vetChamado);
        // console.log(Object.keys(item) === vetChamado);
        // console.log(Object.keys(item));
        let igual = true;
        Object.keys(item).map((attr, index) => {
            if (attr !== vetChamado[index]) {
                igual = false;
            }
            // console.log(attr + " - " + vetChamado[index]);
        });

        if (igual) {
            // console.log("iguais");
            setChamado({ ...item });
        } else {
            // console.log("diferentes");
        }
    }, [item]);
    return (
        <ContainerModal>
            <PainelModal>
                <ContainerBtFechar>
                    <BtnLogout onClick={fechar}>
                        <MdArrowBack size="3rem" color="white" />{" "}
                    </BtnLogout>
                </ContainerBtFechar>
                {chamado ? (
                    //"Identificador" "Data de criação" "Cliente atendido" "Atendente atual" "Estado atual" "Categoria" "Descrição do chamado"
                    <ContainerChamado>
                        <div className="between">
                            <Titulo>{chamado["Identificador"]}</Titulo>
                            <Titulo>{chamado["Data de criação"]}</Titulo>
                        </div>
                        <div className="left conteudoChamado">
                            <h1>Cliente:</h1>
                            <h2>{chamado["Cliente atendido"][0]}</h2>
                        </div>
                        <div className="left conteudoChamado">
                            <>
                                <h1>Categoria:</h1>
                                <Badge cor="blue">{chamado["Categoria"]}</Badge>
                            </>
                            <>
                                <h1>Estado atual:</h1>
                                <Badge cor="green">{chamado["Estado atual"]}</Badge>
                            </>
                        </div>
                        <div className="left conteudoChamado">
                            <h1>Descrição do chamado:</h1>
                        </div>
                        <div className="left conteudoChamado">
                            <h3>{chamado["Descrição do chamado"]}</h3>
                        </div>
                    </ContainerChamado>
                ) : (
                    <TabelaV>
                        <tbody>
                            {Object.keys(item).map((key, index) => {
                                let attrs = Object.values(item);

                                return (
                                    <tr key={index}>
                                        <th>{key}</th>
                                        <td>{attrs[index]}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </TabelaV>
                )}
                {/*Object.keys(item).map((propt, index) => {
                            let attrs = Object.values(item);
                            return 
                            
                            index === 0 ? 
                            <h1 key={index}>{propt + " - " + attrs[index]}</h1> 
                            : 
                            <p key={index}>{propt + " - " + attrs[index]}</p>;
                        })*/}
            </PainelModal>
        </ContainerModal>
    );
}

export default Modal;
