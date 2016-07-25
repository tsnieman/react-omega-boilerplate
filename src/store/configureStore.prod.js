// TODO was a copy of the dev to start things off.
// will circle back by prod deployment time.

// Redux
import { createStore, applyMiddleware, compose } from 'redux';

// Redux middleware
import createSagaMiddleware from 'redux-saga';

// Reducers
import rootReducer from 'reducers';

// Sagas
import rootSaga from 'sagas';
const sagaMiddleware = createSagaMiddleware(rootSaga);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
    ),
  );

  return store;
}
