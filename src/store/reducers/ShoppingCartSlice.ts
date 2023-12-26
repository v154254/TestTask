import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ChosenProductType from '../../types/ChosenProductType';

const initialState: ChosenProductType[] = [];

export const ShoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ChosenProductType>) {
      state.push(action.payload);
    },
  },
});

export default ShoppingCartSlice.reducer;
