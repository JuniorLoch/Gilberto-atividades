import produce from "immer";

export default function reservas(state = [], action) {
    switch (action.type) {
        case "add_reservas":
            return produce(state, (draft) => {
                if(draft.findIndex((viagem)=>{viagem.id === action.viagem.id}) >)
                draft.push(action.viagem);
            });

        default:
            return state;
    }
}
