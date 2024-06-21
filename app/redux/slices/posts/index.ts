import { TPosts } from '@/app/utils/api/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface IPostsState {
  data: TPosts | null;
}
const initialState: IPostsState = {
  data: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsData: (state, action: PayloadAction<TPosts>) => {
      state.data = action.payload;
    },
  },
});
export const { setPostsData } = postsSlice.actions;
export const postsSelector = (state: RootState) => state.posts.data;
export const postsReducer = postsSlice.reducer;
