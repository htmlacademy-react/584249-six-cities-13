import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { TypeOfferPage } from '../../types/offer';
import { State } from '../../types/state';


export const getOffer = (state: State): TypeOfferPage | null => state[NameSpace.Offer].offer;
export const offerStatus = (state: State): FetchStatus => state[NameSpace.Offer].offerStatus;
export const getNearOffers = (state: State) => state[NameSpace.Offer].nearOffers;

export const getOfferStatus = createSelector([offerStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));
