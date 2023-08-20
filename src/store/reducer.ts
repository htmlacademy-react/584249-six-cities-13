import { createReducer } from '@reduxjs/toolkit';
import { TypeOfferPage } from '../types/offer';
import { CITIES } from '../const';
import { Offers } from '../mocks/offers';
import { cityChange } from './action';


type InitialState = {
  city: string;
  Offers: TypeOfferPage[];
};

const initialState: InitialState = {
  Offers,
  city: CITIES[0]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
    });
});

export { reducer };
