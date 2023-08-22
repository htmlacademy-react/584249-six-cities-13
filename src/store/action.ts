import { createAction } from '@reduxjs/toolkit';
import { TypeOfferPage } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const cityChange = createAction('offers/cityChange', (city: string) => ({
  payload: city,
}));

export const selectOffer = createAction('offer/selectOffer', (id: string) => ({
  payload: id,
}));

export const changeSort = createAction('offers/changeSort', (sortOption: string) => ({
  payload: sortOption,
}));

export const loadOffers = createAction<TypeOfferPage[]>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction('offers/setError', (error: string | null) => ({
  payload: error
}));
