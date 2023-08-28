import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus } from '../../const';
import { State } from '../../types/state';
import { Review } from '../../types/review';
import { NameSpace } from '../../const';

export const getReviews = (state: State): Review[] => state[NameSpace.Reviews].reviews;
export const postStatus = (state: State): FetchStatus => state[NameSpace.Reviews].postStatus;

export const getPostStatus = createSelector([postStatus], (status) => ({
  isLoading: status === FetchStatus.Loading,
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Failed
}));
