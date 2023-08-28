import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TypeOfferPage } from '../../types/offer';
import { fetchFavoritesAction, addToFavoritesAction, removeFromFavoritesAction } from '../api-actions';

export type FavoritesData = {
  favorites: TypeOfferPage[];
};


const initialState: FavoritesData = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(addToFavoritesAction.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(removeFromFavoritesAction.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(({ id }) => id !== action.payload.id);
      });
  },
});
