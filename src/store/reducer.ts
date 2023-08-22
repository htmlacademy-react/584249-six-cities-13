import { createReducer } from '@reduxjs/toolkit';
import { TypeOfferPage } from '../types/offer';
import { SortOptions } from '../const';

import { CITIES, AuthorizationStatus } from '../const';
import { cityChange, selectOffer, changeSort, loadOffers, requireAuthorization, setError } from './action';


type InitialState = {
  city: string;
  Offers: TypeOfferPage[];
  currentOfferId: string;
  sortOption: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
};

const initialState: InitialState = {
  Offers: [],
  city: CITIES[0],
  currentOfferId: '',
  sortOption: SortOptions.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    })
    .addCase(loadOffers, (state, action) => {
      state.Offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
