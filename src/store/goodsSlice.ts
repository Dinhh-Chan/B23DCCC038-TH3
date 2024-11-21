// src/store/goodsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Good {
  id: number;
  name: string;
  price: number;
}

interface GoodsState {
  goods: Good[];
}

const initialState: GoodsState = {
  goods: [],
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    addGood: (state, action: PayloadAction<Good>) => {
      state.goods.push(action.payload);
    },
    updateGood: (state, action: PayloadAction<Good>) => {
      const index = state.goods.findIndex(good => good.id === action.payload.id);
      if (index !== -1) {
        state.goods[index] = action.payload;
      }
    },
    deleteGood: (state, action: PayloadAction<number>) => {
      state.goods = state.goods.filter(good => good.id !== action.payload);
    },
  },
});

export const { addGood, updateGood, deleteGood } = goodsSlice.actions;
export default goodsSlice.reducer;
