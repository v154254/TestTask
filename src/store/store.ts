import { combineReducers, configureStore } from '@reduxjs/toolkit';
import SelectedProductSlice from './reducers/SelectedProductSlice';

const rootReducer = combineReducers({ SelectedProductSlice });

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
