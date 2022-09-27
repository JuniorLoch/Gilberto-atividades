import { all } from "redux-saga/effects";
import reservas from "./reservas/sagas";

export default function* rootSaga() {
    return yield all([reservas]);
}
