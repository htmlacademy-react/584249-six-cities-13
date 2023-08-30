import { AuthorizationStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { userSlice } from './user-slice';
import { makeFakeUser } from '../../utils/mocks';

describe('UserProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: null,
    };

    const result = userSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null,
    };

    const result = userSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "checkAuthAction.fulfilled" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
    };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth };

    const result = userSlice.reducer(initialState, checkAuthAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "checkAuthAction.rejected" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: null
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null
    };

    const result = userSlice.reducer(initialState, checkAuthAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "loginAction.fulfilled" action', () => {
    const fakeUser = makeFakeUser();
    const initialState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: fakeUser,
    };

    const result = userSlice.reducer(initialState, loginAction.fulfilled(fakeUser, '', {login: 'keks', password: '123456'}));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "loginAction.rejected" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: null,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null
    };

    const result = userSlice.reducer(initialState, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth", with "logoutAction.fulfilled" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: null,
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
    };

    const result = userSlice.reducer(initialState, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
