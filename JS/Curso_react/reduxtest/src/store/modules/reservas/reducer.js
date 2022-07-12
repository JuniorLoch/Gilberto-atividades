import produce from "immer";

export default function reservas(state = [], action) {
    switch (action.type) {
        case "add_reservas_response":
            return produce(state, (draft) => {
                // var indexviagem = draft.findIndex((viagem) => {
                //     return viagem.id === action.viagem.id;
                // });
                // if (indexviagem >= 0) {
                //     draft[indexviagem].quantidade++;
                // } else {
                draft.push(/*{ ...*/ action.viagem /*, quantidade: 1  }*/);
                // }
            });
        case "rm_reservas":
            return produce(state, (draft) => {
                var indexviagem = draft.findIndex((viagem) => {
                    return viagem.id === action.id;
                });
                if (indexviagem >= 0) {
                    if (draft[indexviagem].quantidade > 1) {
                        draft[indexviagem].quantidade--;
                    } else {
                        draft.splice(indexviagem, 1);
                    }
                } else {
                    console.log("tentando remover item nao encontrado");
                }
            });
        case "update_reserva":
            return produce(state, (draft) => {
                var indexviagem = draft.findIndex((viagem) => {
                    return viagem.id === action.id;
                });

                if (indexviagem >= 0) {
                    draft[indexviagem].quantidade++;
                } else {
                    console.log("tentando editar item nao encontrado");
                }
            });

        default:
            return state;
    }
}
