import { IPost } from './../../models/interfaces';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IDataState {
  posts: IPost[]
}

const initialState: IDataState = {
  posts: []
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<IPost[]>) {
      state.posts = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
