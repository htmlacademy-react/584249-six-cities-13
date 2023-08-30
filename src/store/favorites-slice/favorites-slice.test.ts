import { FavoritesData, favoritesSlice } from './favorites-slice';
import { fetchFavoritesAction } from '../api-actions';
import { FetchStatus } from '../../const';
import { makeFakeOffer } from '../../utils/mocks';

describe('Favorites slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: ''};
    const expectedState: FavoritesData = {
      favorites: [],
      fetchStatus: FetchStatus.Idle,
    };
    const result = favoritesSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: ''};
    const expectedState: FavoritesData = {
      favorites: [],
      fetchStatus: FetchStatus.Idle,
    };
    const result = favoritesSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchStatus" to "FetchStatus.Loading"', () => {
    const expectedState: FavoritesData = {
      favorites: [],
      fetchStatus: FetchStatus.Loading,
    };
    const result = favoritesSlice.reducer(undefined, fetchFavoritesAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "fetchStatus" to "FetchStatus.Fulfilled"', () => {
    const fakeOffer = makeFakeOffer();

    const expectedState: FavoritesData = {
      favorites: [fakeOffer],
      fetchStatus: FetchStatus.Success,
    };
    const result = favoritesSlice.reducer(undefined, fetchFavoritesAction.fulfilled([fakeOffer], '', undefined));

    expect(result).toEqual(expectedState);
  });
});
