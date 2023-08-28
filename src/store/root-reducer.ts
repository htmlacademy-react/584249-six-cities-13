import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user-slice/user-slice';
import { oneOfferSlice } from './offer-slice/offer-slice';
import { NameSpace } from '../const';
import { appSlice } from './app-slice/app-slice';
import { reviewsSlice } from './reviews-slice/reviews-slice';
import { offersSlice } from './offers-slice/offers-slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.Offer]: oneOfferSlice.reducer,
  [NameSpace.Reviews]: reviewsSlice.reducer,
});
