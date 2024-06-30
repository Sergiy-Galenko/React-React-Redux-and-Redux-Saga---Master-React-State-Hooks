import { put, takeEvery } from 'redux-saga/effects';
import { increment, incrementByAmount } from './exampleReducer';
import { incrementAsync, watchIncrementAsync } from './exampleSaga';

test('incrementAsync saga test', () => {
  const generator = incrementAsync();

  expect(generator.next().value).toEqual(put(incrementByAmount(1)));
  expect(generator.next().done).toBeTruthy();
});

test('watchIncrementAsync saga test', () => {
  const generator = watchIncrementAsync();

  expect(generator.next().value).toEqual(takeEvery(increment.type, incrementAsync));
  expect(generator.next().done).toBeTruthy();
});
