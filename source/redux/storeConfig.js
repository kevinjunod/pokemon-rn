import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import pokemonReducer from './injector/pokemon';
import itemReducer from './injector/item';
import { watcherSaga } from './saga/rootSaga';

const reducer = combineReducers({
    pokemon: pokemonReducer,
    item: itemReducer,
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer,
    {},
    applyMiddleware(...middleware),
);

sagaMiddleware.run(watcherSaga);

export default store;