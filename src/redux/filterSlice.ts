import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


const initialState: initialStateType = {
  dateStart: '',
  dateEnd: '',
};

export const dateFilterSlice = createSlice({
  name: 'dateFilter',
  initialState,
  reducers: {
    setDateStart: (state, action: PayloadAction<any>) => {
      state.dateStart = action.payload;
    },
    setDateEnd: (state, action: PayloadAction<any>) => {
      state.dateEnd = action.payload;
    },
  },
});

export const { setDateStart, setDateEnd } = dateFilterSlice.actions;

export const dateFilterReducer = dateFilterSlice.reducer;

type initialStateType = {
  dateStart: string
  dateEnd: string
}