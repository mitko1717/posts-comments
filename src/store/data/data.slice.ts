import { IPost, IPostWithComments } from "./../../models/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IDataState {
  posts: IPost[];
  openedPost: IPostWithComments | null;
}

const initialState: IDataState = {
  posts: [],
  openedPost: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<IPost[]>) {
      state.posts = action.payload;
    },
    setOpenedPost(state, action: PayloadAction<IPostWithComments>) {
      state.openedPost = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
