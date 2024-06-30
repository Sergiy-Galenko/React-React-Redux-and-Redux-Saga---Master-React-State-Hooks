import { all, fork } from 'redux-saga/effects';
import { watchIncrementAsync } from './exampleSaga';

function* rootSaga() {
  yield all([fork(watchIncrementAsync)]);
}

export default rootSaga;
