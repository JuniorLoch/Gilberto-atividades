// modulos react
import React, { useState, useEffect } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

//modulos
import api from "../../services/api";
import { Container, ContainerViagem, Painel, PainelViagem, Texto, BtReservar } from "../../Styles/styles";

function Home() {
    const [viagens, setViagens] = useState();
    const [carregado, setCarregado] = useState(false);
    const dispatch = useDispatch();

    function reservar(viagem) {
        dispatch({
            type: "add_reservas",
            viagem,
        });
        toast.success("Viagem Reservada!");
    }

    useEffect(() => {
        api.get("/trips").then((resp) => {
            setViagens(resp.data);
            setCarregado(true);
        });
    }, []);

    return carregado ? (
        <Container>
            {viagens.map((viagem) => {
                return (
                    <PainelViagem key={viagem.id}>
                        <Texto>
                            <ContainerViagem>
                                <h1>{viagem.title}</h1>
                                <img alt={viagem.title} src={viagem.image} />
                                <BtReservar
                                    onClick={() => {
                                        reservar(viagem);
                                    }}
                                >
                                    <FaTelegramPlane size="1.8rem" />
                                    {viagem.status ? " Disponível!" : " Esgotado!"}
                                </BtReservar>
                            </ContainerViagem>
                        </Texto>
                    </PainelViagem>
                );
            })}
        </Container>
    ) : (
        <Container>
            <Painel>
                <Texto>
                    <h1>Carregando</h1>
                </Texto>
            </Painel>
        </Container>
    );
}

export default Home;
