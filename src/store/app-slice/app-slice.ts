import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, SortOptions, Cities } from '../../const';


export type AppData = {
  city: Cities;
  sortOption: SortOptions;
  selectedOfferId: number | null;
};

const initialState: AppData = {
  city: Cities.Paris,
  sortOption: SortOptions.Popular,
  selectedOfferId: null,
};

export const appSlice = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeSort: (state, action: PayloadAction<SortOptions>) => {
      state.sortOption = action.payload;
    },
    changeCity(state, action: PayloadAction<Cities>) {
      state.city = action.payload;
    },
    selectOffer: (state, action: PayloadAction<number | null>) => {
      state.selectedOfferId = action.payload;
    }
  }
});


export const { changeCity, changeSort, selectOffer } = appSlice.actions;
