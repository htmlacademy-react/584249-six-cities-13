import { NameSpace } from '../../const';
import { TypeOfferPage } from '../../types/offer';
import { State } from '../../types/state';
import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus } from '../../const';

export const getFavorites = (state: State): TypeOfferPage[] =>
  state[NameSpace.Favorites].favorites;

export const getStatus = (state: State): FetchStatus =>
  state[NameSpace.Favorites].fetchStatus;

export const getFavoriteStatus = createSelector([getStatus], (status) => ({
  isLoading: status === FetchStatus.Loading,
  isError: status === FetchStatus.Failed,
  isSuccess: status === FetchStatus.Success
})
);
