import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';

export default function configureStore(routerHistory) {
  const initState = window.PRELOADED_STATE;
  const store = createStore(
    createRootReducer(routerHistory),
    initState,
    compose(
      applyMiddleware(
        routerMiddleware(routerHistory),
        thunk,
      ),
    ),
  );
  
  return store;
}
