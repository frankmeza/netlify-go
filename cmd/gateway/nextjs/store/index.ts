import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import counterReducer from "./slices/counter";
import { rootSaga } from "./sagas";

const devMode = process.env.NODE_ENV === "development";

const sagaMiddleware = createSagaMiddleware();
const middleware = devMode ? [logger, sagaMiddleware] : [sagaMiddleware];

const reducer = {
    counter: counterReducer,
};

export const store = configureStore({
    reducer,
    devTools: devMode,
    middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
