import { InitialState, reviewsSlice } from './reviews-slice';
import { FetchStatus } from '../../const';
import { makeFakeReview } from '../../utils/mocks';
import { fetchReviewsAction, postReviewAction } from '../api-actions';

describe('Reviews slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: ''};
    const expectedState: InitialState = {
      reviews: [],
      postStatus: FetchStatus.Idle,
    };
    const result = reviewsSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: ''};
    const expectedState: InitialState = {
      reviews: [],
      postStatus: FetchStatus.Idle,
    };
    const result = reviewsSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return reviews', () => {
    const fakeReview = makeFakeReview();
    const expectedState: InitialState = {
      reviews: [fakeReview],
      postStatus: FetchStatus.Idle,
    };
    const result = reviewsSlice.reducer(undefined, fetchReviewsAction.fulfilled([fakeReview], '', 1));

    expect(result).toEqual(expectedState);
  });

  it('should set "postStatus" to "FetchStatus.Loading"', () => {
    const expectedState: InitialState = {
      reviews: [],
      postStatus: FetchStatus.Loading,
    };
    const result = reviewsSlice.reducer(undefined, postReviewAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "postStatus" to "FetchStatus.Failed"', () => {
    const expectedState: InitialState = {
      reviews: [],
      postStatus: FetchStatus.Failed,
    };
    const result = reviewsSlice.reducer(undefined, postReviewAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "postStatus" to "FetchStatus.Success"', () => {
    const fakeReview = makeFakeReview();
    const initialState: InitialState = {
      reviews: [fakeReview],
      postStatus: FetchStatus.Idle,
    };
    const expectedState: InitialState = {
      reviews: [fakeReview],
      postStatus: FetchStatus.Success,
    };
    const result = reviewsSlice.reducer(initialState, postReviewAction.fulfilled([fakeReview], '', {rating: 2, comment: '', id: 100}));

    expect(result).toEqual(expectedState);
  });
});
