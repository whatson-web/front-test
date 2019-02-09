import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from '../reducers/index'

const persistConfig = {
    key: 'root',
    storage,
};
const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL:'https://www.prevision-meteo.ch/services/json/lille',
    responseType: 'json'
});
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer, applyMiddleware(
    //all middlewares
    axiosMiddleware(client), //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix
));
let persistor = persistStore(store)

export { store, persistor }




