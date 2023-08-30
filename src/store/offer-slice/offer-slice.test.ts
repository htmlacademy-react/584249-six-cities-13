import { OneOfferData, oneOfferSlice } from './offer-slice';
import { FetchStatus } from '../../const';
import { fetchNearOffersAction, fetchOfferAction } from '../api-actions';
import { makeFakeOffer } from '../../utils/mocks';

describe('Offer slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: ''};
    const expectedState: OneOfferData = {
      offer: null,
      offerStatus: FetchStatus.Idle,
      nearOffers: [],
      nearOffersStatus: FetchStatus.Idle
    };
    const result = oneOfferSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: ''};
    const expectedState: OneOfferData = {
      offer: null,
      offerStatus: FetchStatus.Idle,
      nearOffers: [],
      nearOffersStatus: FetchStatus.Idle
    };
    const result = oneOfferSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "offerStatus" to "FetchStatus.Loading"', () => {
    const expectedState: OneOfferData = {
      offer: null,
      offerStatus: FetchStatus.Loading,
      nearOffers: [],
      nearOffersStatus: FetchStatus.Idle
    };
    const result = oneOfferSlice.reducer(undefined, fetchOfferAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offerStatus" to "FetchStatus.Success"', () => {
    const fakeOffer = makeFakeOffer();
    const initialState: OneOfferData = {
      offer: null,
      offerStatus: FetchStatus.Loading,
      nearOffers: [],
      nearOffersStatus: FetchStatus.Idle
    };
    const expectedState: OneOfferData = {
      offer: fakeOffer,
      offerStatus: FetchStatus.Success,
      nearOffers: [],
      nearOffersStatus: FetchStatus.Idle
    };
    const result = oneOfferSlice.reducer(initialState, fetchOfferAction.fulfilled(fakeOffer, '', 1));

    expect(result).toEqual(expectedState);
  });

  it('should set "offerStatus" to "FetchStatus.Failed"', () => {
    const expectedState: OneOfferData = {
      offer: null,
      offerStatus: FetchStatus.Failed,
      nearOffers: [],
      nearOffersStatus: FetchStatus.Idle
    };
    const result = oneOfferSlice.reducer(undefined, fetchOfferAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "nearOffersStatus" to "FetchStatus.Loading"', () => {
    const expectedState: OneOfferData = {
      offer: null,
      offerStatus: FetchStatus.Idle,
      nearOffers: [],
      nearOffersStatus: FetchStatus.Loading
    };
    const result = oneOfferSlice.reducer(undefined, fetchNearOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "nearOffersStatus" to "FetchStatus.Success"', () => {
    const fakeOffer = makeFakeOffer();
    const expectedState: OneOfferData = {
      offer: null,
      offerStatus: FetchStatus.Idle,
      nearOffers: [fakeOffer],
      nearOffersStatus: FetchStatus.Success
    };
    const result = oneOfferSlice.reducer(undefined, fetchNearOffersAction.fulfilled([fakeOffer], '', 1));

    expect(result).toEqual(expectedState);
  });

  it('should set "nearOffersStatus" to "FetchStatus.Failed"', () => {
    const expectedState: OneOfferData = {
      offer: null,
      offerStatus: FetchStatus.Idle,
      nearOffers: [],
      nearOffersStatus: FetchStatus.Failed
    };
    const result = oneOfferSlice.reducer(undefined, fetchNearOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
