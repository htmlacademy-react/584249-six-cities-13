import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';

import MainPage from '../../pages/main/main-page';
import FavoritesPage from '../../pages/favorites/favorites-page';
import PrivateRoute from '../../components/private-route/private-route';
import LoginPage from '../../pages/login/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer/offer-page';
import { TypeOfferPage } from '../../types/offer';
import { Review } from '../../types/review';
import { useAppSelector } from '../../hooks';

type AppMainProps = {
  reviews: Review[];
  nearPlaces: TypeOfferPage[];
}

function App({reviews, nearPlaces}: AppMainProps): JSX.Element {
  const offers = useAppSelector((state) => state.Offers);

  return (
    <BrowserRouter>
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
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Offer}
          element={<OfferPage offers={offers} reviews={reviews} nearPlaces={nearPlaces} />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
