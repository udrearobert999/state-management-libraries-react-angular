import { ItemModel } from '@/models/item.model';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ItemWithQuantity extends ItemModel {
  quantity: number;
}

interface ChangeQuantity {
  id: number;
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

      state.totalPrice += newItem.price * newItem.quantity;
    },

    changeItemQuantity: (state, action: PayloadAction<ChangeQuantity>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
        state.totalPrice += quantity * existingItem.price;
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const item = state.items.find((item) => item.id === id);
      const itemPrice = item?.price || 0;

      state.items = state.items.filter((item) => item.id !== id);
      state.totalPrice -= itemPrice;
    },

    clear: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
