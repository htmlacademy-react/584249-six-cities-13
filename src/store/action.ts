import { createAction } from '@reduxjs/toolkit';
import { TypeOfferPage } from '../types/offer';
import { AuthorizationStatus, AppRoutes } from '../const';
import { UserData } from '../types/user-data';

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

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setError = createAction('offers/setError', (error: string | null) => ({
  payload: error
}));

export const setUserData = createAction('user/setUserData', (userData: UserData) => ({
  payload: userData
}));

export const redirectToRoute = createAction<AppRoutes>('user/redirectToRoute');
