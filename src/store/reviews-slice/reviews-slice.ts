import { createSlice } from '@reduxjs/toolkit';
import { fetchReviewsAction, postReviewAction } from '../api-actions';
import { NameSpace } from '../../const';
import { Review } from '../../types/review';
import { FetchStatus } from '../../const';

type InitialState = {
  reviews: Review[];
  postStatus: FetchStatus;
};

const initialState: InitialState = {
  reviews: [],
  postStatus: FetchStatus.Idle
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.postStatus = FetchStatus.Loading;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.postStatus = FetchStatus.Success;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.postStatus = FetchStatus.Failed;
      });
  }
});
