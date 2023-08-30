import { AppData } from './app-slice';
import { Cities, SortOptions } from '../../const';
import { appSlice, changeCity, changeSort } from './app-slice';

describe('App slice', () => {

  it('should return initial state with empty action', () => {
    const emptyAction = { type: ''};
    const expectedState: AppData = {
      city: Cities.Paris,
      sortOption: SortOptions.Popular,
      selectedOfferId: null,
    };

    const result = appSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: ''};
    const expectedState: AppData = {
      city: Cities.Paris,
      sortOption: SortOptions.Popular,
      selectedOfferId: null,
    };

    const result = appSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);

  });

  it('should change city with "changeCity" action', () => {
    const initialState: AppData = {
      city: Cities.Paris,
      sortOption: SortOptions.Popular,
      selectedOfferId: null,
    };
    const expectedState: AppData = {
      city: Cities.Brussels,
      sortOption: SortOptions.Popular,
      selectedOfferId: null,
    };
    const result = appSlice.reducer(initialState, changeCity(Cities.Brussels));

    expect(result).toEqual(expectedState);
  });

  it('should change sort option with "changeSort" action', () => {
    const initialState: AppData = {
      city: Cities.Paris,
      sortOption: SortOptions.Popular,
      selectedOfferId: null,
    };
    const expectedState: AppData = {
      city: Cities.Paris,
      sortOption: SortOptions.HighToLow,
      selectedOfferId: null,
    };
    const result = appSlice.reducer(initialState, changeSort(SortOptions.HighToLow));

    expect(result).toEqual(expectedState);
  });
});
