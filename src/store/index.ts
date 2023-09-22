import { configureStore, Middleware } from '@reduxjs/toolkit';
import usuario from './reducers/usuario';
import viagem from './reducers/viagem';
import filtro from './reducers/filtro';
import createDebugger from 'redux-flipper';
import { viagensApi } from './reducers/viagem/middlewares';

const middlewares: Middleware[] = [viagensApi.middleware];

if (__DEV__) {
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: {
    [viagensApi.reducerPath]: viagensApi.reducer,
    usuario,
    viagem,
    filtro
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(...middlewares)
  ,
});

export default store;