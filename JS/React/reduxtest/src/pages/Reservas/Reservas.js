import { Container, PainelReservas, Texto, ContainerReservas, Reserva, BtCancelar } from "../../Styles/styles";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { removeReserva } from "../../store/modules/reservas/actions";

function Reservas() {
    const Reservas = useSelector((state) => state.reservas);
    const dispatch = useDispatch();

    function rmReserva(id) {
        dispatch(removeReserva(id));
        toast.success("Viagem Cancelada");
    }
    return (
        <Container>
            <PainelReservas>
                <Texto>
                    <h1>{Reservas.length < 1 ? "Você não possui nenhuma reserva" : "Voce tem " + Reservas.length + " reserva" + (Reservas.length > 1 ? "s" : "")}</h1>
                    <ContainerReservas>
                        {Reservas.map((reserva) => {
                            return (
                                <Reserva>
                                    <h1>{reserva.title}</h1>
                                    <img alt="" src={reserva.image}></img>
                                    <p>7 noites</p>
                                    <p>Quantidade: {reserva.quantidade}</p>
                                    <BtCancelar
                                        type="button"
                                        onClick={() => {
                                            rmReserva(reserva.id);
                                        }}
                                    >
                                        <BsFillTrashFill size="1.8rem" />
                                        Cancelar
                                    </BtCancelar>
                                </Reserva>
                            );
                        })}
                    </ContainerReservas>
                </Texto>
            </PainelReservas>
        </Container>
    );
}

export default Reservas;
