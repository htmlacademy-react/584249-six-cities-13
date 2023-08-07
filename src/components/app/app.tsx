import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';

import MainPage from '../../pages/main/main-page';
import FavoritesPage from '../../pages/favorites/favorites-page';
import PrivateRoute from '../../components/private-route/private-route';
import LoginPage from '../../pages/login/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer/offer-page';
import {TypeOfferPage} from '../../types/offer';

type AppMainProps = {
  offersCount: number;
  offers: TypeOfferPage[];
}

function App({offersCount, offers}: AppMainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Root}
          element={<MainPage offersNumber={offersCount} offers={offers}/>}
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
          element={<OfferPage offers={offers}/>}
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
