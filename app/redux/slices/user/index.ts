import { ResponseUser } from '@/app/utils/api/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface IUserState {
  data: ResponseUser | null;
}
const initialState: IUserState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ResponseUser>) => {
      state.data = action.payload;
    },
  },
});
export const { setUserData } = userSlice.actions;
export const userSelector = (state: RootState) => state.user.data;
export const userReducer = userSlice.reducer;
