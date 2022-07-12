export function adicionaReserva(id) {
    return {
        type: "add_reservas",
        id,
    };
}

export function adicionaReservaResponse(viagem) {
    return {
        type: "add_reservas_response",
        viagem,
    };
}

export function removeReserva(id) {
    return {
        type: "rm_reservas",
        id,
    };
}

export function editarReserva(id, qtd) {
    return {
        type: "update_reserva",
        id,
        qtd,
    };
}
