import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const SelectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState: {
    selectedProduct: {
      productID: 0,
      colorID: 0,
      sizeID: 0,
    },
  },
  reducers: {
    setProductID(state, action: PayloadAction<number>) {
      state.selectedProduct.productID = action.payload;
    },
    setColorID(state, action: PayloadAction<number>) {
      state.selectedProduct.colorID = action.payload;
    },
    setSizeID(state, action: PayloadAction<number>) {
      state.selectedProduct.sizeID = action.payload;
    },
  },
});

export default SelectedProductSlice.reducer;
