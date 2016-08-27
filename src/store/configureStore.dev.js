// Redux
import { createStore, applyMiddleware, compose } from 'redux';

// Redux devtools
import DevTools from 'containers/DevTools';

// Redux middleware
import createSagaMiddleware from 'redux-saga';

// Reducers
import rootReducer from 'reducers';

// Sagas
import rootSaga from 'sagas';
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      DevTools.instrument(),
    ),
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
