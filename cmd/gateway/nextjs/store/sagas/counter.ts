import { put, takeEvery } from "redux-saga/effects";
import { incrementByAmount } from "../slices/counter";

type IncrementByNumberParams = {
    payload: number;
    type: "increment_by_number";
};

export function* incrementBy(params: IncrementByNumberParams) {
    yield put(incrementByAmount(params.payload));
}

export default takeEvery("counter/increment_by_number", incrementBy);
