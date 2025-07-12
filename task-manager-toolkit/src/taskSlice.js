import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    data: [],
  },
  reducers: {
    add: (state,action) => {
      state.data = [...state.data, action.payload];
    },
    remove: (state,action)=>{
      state.data=state.data.filter((ele)=>ele.id !== action.payload)
    },
    toggle: (state,action)=>{
      const task=state.data.find((ele)=> ele.id===action.payload)
      if(task){
        task.completed=!task.completed
      }
    }
  },
});

export const {add, remove, toggle}=taskSlice.actions
export default taskSlice.reducer