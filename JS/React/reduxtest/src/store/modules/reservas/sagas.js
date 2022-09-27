import { select, call, put, all, takeLatest } from "redux-saga/effects";
import { adicionaReservaResponse, editarReserva } from "./actions";
import api from "../../../services/api";
import history from "../../../services/history";

function* sAdicionaReserva({ id }) {
    const viagem = yield select((state) => state.reservas.find((item) => item.id === id));
    // console.log(viagem);
    if (viagem) {
        const estoque = yield call(api.get, "stock/" + viagem.id);
        console.log(estoque.data.amount);
        if (viagem.quantidade < estoque.data.amount) {
            const qtd = viagem.quantidade + 1;
            yield put(editarReserva(viagem.id, qtd));
            history.push("/reservas");
        } else {
            alert("limite atingido: " + estoque.data.amount);
        }
    } else {
        const response = yield call(api.get, "trips/" + id);
        // console.log(response.data);
        yield put(adicionaReservaResponse({ ...response.data, quantidade: 1 }));
        history.push("/reservas");
    }
}

export default all([takeLatest("add_reservas", sAdicionaReserva)]);
