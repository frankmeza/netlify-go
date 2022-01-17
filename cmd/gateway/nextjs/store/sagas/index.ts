import { all } from "redux-saga/effects";
import counterSagas from "./counter";

export function* rootSaga() {
    yield all([counterSagas]);
}

export { incrementBy } from "./counter";
