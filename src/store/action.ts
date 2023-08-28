import { createAction } from '@reduxjs/toolkit';
import { AppRoutes } from '../const';

export const setError = createAction('offers/setError', (error: string | null) => ({
  payload: error
}));

export const redirectToRoute = createAction<AppRoutes>('user/redirectToRoute');
