import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { countReducer } from '@/pages/Count/flow/reducers';
import { asyncReducer } from '@/pages/Async/flow/reducers';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    (<any> window) &&
    (<any> window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducer = combineReducers({
  countReducer,
  asyncReducer,
});

export function configureStore(initialState?: object) {
  return createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));
}
