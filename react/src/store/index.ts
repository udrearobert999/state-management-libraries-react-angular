import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '@/store/slices/cart.slice';

export const store = configureStore({
  reducer: { cart: cartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;