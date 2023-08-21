import { createReducer } from '@reduxjs/toolkit';
import { TypeOfferPage } from '../types/offer';
import { CITIES } from '../const';
import { Offers } from '../mocks/offers';
import { cityChange, selectOffer, changeSort } from './action';
import { SortOptions } from '../const';


type InitialState = {
  city: string;
  Offers: TypeOfferPage[];
  currentOfferId: string;
  sortOption: string;
};

const initialState: InitialState = {
  Offers,
  city: CITIES[0],
  currentOfferId: '',
  sortOption: SortOptions.POPULAR,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    })
    .addCase(selectOffer, (state, action) => {
      state.currentOfferId = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortOption = action.payload;
    });
});

export { reducer };
