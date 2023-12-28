import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ChosenProductType from '../../types/ChosenProductType';

export const ShoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    cart: [] as ChosenProductType[],
  },
  reducers: {
    addProduct(state, action: PayloadAction<ChosenProductType>) {
      state.cart.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.cart.splice(action.payload, 1);
    },
  },
});

export default ShoppingCartSlice.reducer;
