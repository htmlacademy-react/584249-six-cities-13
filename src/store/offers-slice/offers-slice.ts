import { createSlice } from '@reduxjs/toolkit';
import { fetchOffersAction } from '../api-actions';
import { NameSpace, FetchStatus, SortOptions, Cities } from '../../const';
import { TypeOfferPage } from '../../types/offer';
import { addToFavoritesAction, logoutAction } from '../api-actions';

export type OffersData = {
  offers: TypeOfferPage[];
  offersStatus: FetchStatus;
  city: Cities;
  sortOption: SortOptions;
  selectedOfferId: number | null;
};

const initialState: OffersData = {
  offers: [],
  offersStatus: FetchStatus.Idle,
  city: Cities.Paris,
  sortOption: SortOptions.Popular,
  selectedOfferId: null,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersStatus = FetchStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersStatus = FetchStatus.Failed;
      })
      .addCase(addToFavoritesAction.fulfilled, (state, action) => {
        state.offers.forEach((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
        });
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.offers.forEach((offer) => {
          offer.isFavorite = false;
        });
      });
  }
});
