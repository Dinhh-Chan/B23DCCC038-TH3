// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './goodsSlice';

const store = configureStore({
  reducer: {
    goods: goodsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
