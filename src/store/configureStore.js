/**
 * Created by vuinguyen on 20/10/2017.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers";

let middleware = [thunk];

if(__DEV__){
    //just log on dev env
    const reduxImmutableStateInvariant = require("redux-immutable-state-invariant").default();
    middleware = [...middleware, reduxImmutableStateInvariant, logger];
}else{
    middleware = [...middleware];
}

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}