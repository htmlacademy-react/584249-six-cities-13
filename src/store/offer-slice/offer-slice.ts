import { createSlice } from '@reduxjs/toolkit';
import { fetchOfferAction, fetchNearOffersAction } from '../api-actions';
import { FetchStatus, NameSpace } from '../../const';
import { TypeOfferPage } from '../../types/offer';

export type OneOfferData = {
  offer: TypeOfferPage | null;
  offerStatus: FetchStatus;
  nearOffers: TypeOfferPage[];
  nearOffersStatus: FetchStatus;
};

const initialState: OneOfferData = {
  offer: null,
  offerStatus: FetchStatus.Idle,
  nearOffers: [],
  nearOffersStatus: FetchStatus.Idle
};

export const oneOfferSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.offerStatus = FetchStatus.Loading;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offerStatus = FetchStatus.Success;
        state.offer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerStatus = FetchStatus.Failed;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffersStatus = FetchStatus.Success;
        state.nearOffers = action.payload;
      });
  },
});
