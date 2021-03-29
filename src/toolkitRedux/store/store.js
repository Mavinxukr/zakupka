import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import rootReducer from '../reducers/rootReducer';
import { userWatcher } from '../saga/userSaga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true
});

sagaMiddleware.run(userWatcher)