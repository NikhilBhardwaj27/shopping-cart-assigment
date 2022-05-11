import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { rootreducer } from "./root-reducer";
import thunk from 'redux-thunk';


const middlewares = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store =  createStore(rootreducer,undefined,composeEnhancers(applyMiddleware(...middlewares)))



