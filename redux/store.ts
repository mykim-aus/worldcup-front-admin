import { configureStore } from '@reduxjs/toolkit';
import LanguageSlice from './features/LanguageSlice';
import counterReducer from './features/CountSlice';

export const store = configureStore({
  reducer: {
    changeLangState: LanguageSlice,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
