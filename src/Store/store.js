import { compose, createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import { rootReducer } from "./root-reducer"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { rootSaga } from "./root-saga"
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware
].filter(Boolean)

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares))

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, composeEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
