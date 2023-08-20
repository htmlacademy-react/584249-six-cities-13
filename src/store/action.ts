import { createAction } from '@reduxjs/toolkit';

export const cityChange = createAction('offers/cityChange', (city: string) => ({
  payload: city,
}));
