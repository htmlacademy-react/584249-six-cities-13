import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { NameSpace, FetchStatus } from '../../const';
import { TypeOfferPage } from '../../types/offer';

export const getOffers = (state: State): TypeOfferPage[] => state[NameSpace.Offers].offers;
export const getStatus = (state: State): FetchStatus => state[NameSpace.Offers].offersStatus;

export const getOffersStatus = createSelector([getStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed,
}));
