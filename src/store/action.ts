import { createAction } from '@reduxjs/toolkit';

export const cityChange = createAction('offers/cityChange', (city: string) => ({
  payload: city,
}));

export const selectOffer = createAction('offer/selectOffer', (id: string) => ({
  payload: id,
}));

export const changeSort = createAction('offers/changeSort', (sortOption: string) => ({
  payload: sortOption,
}));
