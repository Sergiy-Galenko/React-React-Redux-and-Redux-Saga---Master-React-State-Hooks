import { takeEvery, put } from "redux-saga/effects";
import { increment, incrementByAmount } from "./exampleReducer";

export function* incrementAsync() {
    yield put(incrementByAmount(1));
}

export function* watchIncrementAsync() {
    yield takeEvery(increment.type, incrementAsync);
}
