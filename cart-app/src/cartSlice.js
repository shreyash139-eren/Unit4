import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], total: 0 },
  reducers: {
    add: (state,action) => {
        state.items.push(action.payload);
        state.total += action.payload.price;
    },
    remove:(state,action)=>{
        state.items = state.items.filter(item => item.id !== action.payload.id)
        state.total -= action.payload.price
    }
  },
});
export const {add,remove} =cartSlice.actions
export default cartSlice.reducer
