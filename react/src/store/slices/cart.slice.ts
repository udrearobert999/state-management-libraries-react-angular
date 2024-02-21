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
      const newItem = action.payload;

      state.items.push(newItem);
    },

    removeItem: (state, action: PayloadAction<number>) => {
      console.log(state, action);
    },

    clear: (state) => {
      state.items = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
