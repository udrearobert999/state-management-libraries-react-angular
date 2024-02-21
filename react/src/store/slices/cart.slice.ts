import { ItemModel } from '@/models/item.model';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartState {
  items: ItemModel[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemModel>) => {
      console.log(state, action);
    },

    removeItem: (state, action: PayloadAction<number>) => {
      console.log(state, action);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
