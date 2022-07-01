import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import { useDispatch } from 'react-redux';

// Assets
import rootReducer from './slices';
import rootSaga from './sagas';

// Roor reducer with persist config
const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
    whitelist: ['common', 'auth'],
  },
  rootReducer,
);

// Middlewares setup
const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

/**
 * Only use redux logger if app is in debug more and not in relase mode
 * It will imprive app performance
 */
if (__DEV__ && typeof atob !== 'undefined') {
  // With logger
  middlewares.push(sagaMiddleware, logger);
} else {
  // without logger
  middlewares.push(sagaMiddleware);
}

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

// PersistStore contains all the data from store
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Run Saga
sagaMiddleware.run(rootSaga);
