import { Route, Routes } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-slice/user-slice-selectors';

import MainPage from '../../pages/main/main-page';
import FavoritesPage from '../../pages/favorites/favorites-page';
import PrivateRoute from '../../components/private-route/private-route';
import LoginPage from '../../pages/login/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer/offer-page';
import LoadingScreen from '../../pages/loading/loading';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { checkAuthAction } from '../../store/api-actions';

import browserHistory from '../../browser-history/browser-history';
import HistoryRouter from '../history-route/history-route';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<MainPage />}
        />
        <Route
          path={AppRoutes.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Offer}
          element={<OfferPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
