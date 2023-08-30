import { OffersData, offersSlice } from './offers-slice';
import { FetchStatus, Cities, SortOptions } from '../../const';
import { makeFakeOffer } from '../../utils/mocks';
import { fetchOffersAction } from '../api-actions';

describe('Offers slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: ''};
    const expectedState: OffersData = {
      offers: [],
      offersStatus: FetchStatus.Idle,
      city: Cities.Paris,
      sortOption: SortOptions.Popular,
      selectedOfferId: null,
    };
    const result = offersSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: ''};
    const expectedState: OffersData = {
      offers: [],
      offersStatus: FetchStatus.Idle,
      city: Cities.Paris,
      sortOption: SortOptions.Popular,
      selectedOfferId: null,
    };
    const result = offersSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "offerStatus" to "FetchStatus.Loading"', () => {
    const expectedState: OffersData = {
      offers: [],
      offersStatus: FetchStatus.Loading,
      city: Cities.Paris,
      sortOption: SortOptions.Popular,
      selectedOfferId: null,
    };
    const result = offersSlice.reducer(undefined, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offerStatus" to "FetchStatus.Success"', () => {
    const fakeOffer = makeFakeOffer();
    const initialState: OffersData = {
      offers: [],
      offersStatus: FetchStatus.Idle,
      city: Cities.Paris,
      sortOption: SortOptions.Popular,
      selectedOfferId: null,
    };
    const expectedState: OffersData = {
      offers: [fakeOffer],
      offersStatus: FetchStatus.Success,
      city: Cities.Paris,
      sortOption: SortOptions.Popular,
      selectedOfferId: null,
    };
    const result = offersSlice.reducer(initialState, fetchOffersAction.fulfilled([fakeOffer], '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "offerStatus" to "FetchStatus.Failed"', () => {
    const expectedState: OffersData = {
      offers: [],
      offersStatus: FetchStatus.Failed,
      city: Cities.Paris,
      sortOption: SortOptions.Popular,
      selectedOfferId: null,
    };
    const result = offersSlice.reducer(undefined, fetchOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });

});
