import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { TypeOfferPage } from '../../types/offer';
import { fetchFavoritesAction, addToFavoritesAction } from '../api-actions';


export type FavoritesData = {
  favorites: TypeOfferPage[];
  fetchStatus: FetchStatus;
};


const initialState: FavoritesData = {
  favorites: [],
  fetchStatus: FetchStatus.Idle,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.fetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.Success;
        state.favorites = action.payload;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.fetchStatus = FetchStatus.Failed;
      })
      .addCase(addToFavoritesAction.fulfilled, (state, action) => {

        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter(({ id }) => id !== action.payload.id);
        }
      });
  },
});
