import { all } from 'redux-saga/effects';
import { watchIncrementAsync } from './exampleSaga';

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
  ]);
}
