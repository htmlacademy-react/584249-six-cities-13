import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { TypeOfferPage } from '../types/offer';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoutes } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { toast } from 'react-toastify';
import { redirectToRoute } from './action';
import { Review } from '../types/review';

type ThunkOptions = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

type ReveiwData = {
  comment: string;
  rating: number;
  id: number;
}

export const fetchOffersAction = createAsyncThunk<TypeOfferPage[], undefined, ThunkOptions>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    try {
      const { data } = await api.get<TypeOfferPage[]>(APIRoute.Offers);
      return data;
    } catch (err) {
      throw new Error();
    }
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, ThunkOptions>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data } = await api.get<UserData>(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoutes.Root));

      return data;
    } catch (err) {

      toast.error('Login failed');
      throw err;
    }
  });

export const logoutAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/logout',
  async (_arg, { extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
    } catch (err) {

      toast.error('Logout failed');
      throw err;
    }
  },
);

export const fetchOfferAction = createAsyncThunk<
  TypeOfferPage,
  number,
  ThunkOptions
>('data/fetchOffer', async (id, { extra: api }) => {
  try {
    const { data } = await api.get<TypeOfferPage>(`${APIRoute.Offers}/${id}`);
    return data;
  } catch (err) {

    toast.error('Could not load the offer');
    throw new Error();
  }
});

export const fetchNearOffersAction = createAsyncThunk<
  TypeOfferPage[],
  number,
  ThunkOptions
>('data/fetchNearOffers', async (id, { extra: api }) => {
  try {
    const { data } = await api.get<TypeOfferPage[]>(
      `${APIRoute.Nearby}/${id}/nearby`
    );
    return data;
  } catch (err) {

    toast.error('Could not load near offers');
    throw err;
  }
});

export const fetchReviewsAction = createAsyncThunk<
  Review[],
  number,
  ThunkOptions
>('data/fetchReviewAction', async (id, { extra: api }) => {
  try {
    const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
    return data;
  } catch (err) {
    toast.error('Could not load the reviews');
    throw err;
  }
});


export const postReviewAction = createAsyncThunk<
  Review[],
  ReveiwData,
  ThunkOptions
>(
  'data/sendReviewAction',
  async ({ id, rating, comment }, { extra: api }) => {
    try {
      const { data } = await api.post<Review[]>(`${APIRoute.Reviews}/${id}`, { rating, comment });
      return data;
    } catch (err) {
      toast.error('Could not send the review');
      throw err;
    }
  }
);
