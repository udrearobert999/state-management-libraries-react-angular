import { ItemModel } from '@/models/item.model';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ItemWithQuantity extends ItemModel {
  quantity: number;
}

interface CartState {
  items: ItemWithQuantity[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0.0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ItemWithQuantity>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity += newItem.quantity;
      }

      state.totalPrice += parseFloat(newItem.price) * newItem.quantity;
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
