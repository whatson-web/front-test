// Redux store
import { applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import { createStore } from "redux-friends";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import rootReducer from "./redux-reducer";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const { store, persistor, history } = createStore(
  persistedReducer,
  applyMiddleware(thunk),
  false
);
