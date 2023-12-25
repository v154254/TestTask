import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  productID: 0,
  colorID: 0,
  sizeID: 0,
};

export const SelectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {
    setProductID(state, action: PayloadAction<number>) {
      state.productID = action.payload;
    },
    setColorID(state, action: PayloadAction<number>) {
      state.colorID = action.payload;
    },
    setSizeID(state, action: PayloadAction<number>) {
      state.sizeID = action.payload;
    },
  },
});

export default SelectedProductSlice.reducer;
