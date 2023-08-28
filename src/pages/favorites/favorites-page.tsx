import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TypeOfferPage } from '../../types/offer';
import { fetchFavoritesAction } from '../../store/api-actions';
import { getFavorites } from '../../store/favorites-slice/favorites-slice-selectors';
import Header from '../../components/header/header';

import OffersList from '../../components/offers/offers-list';

type OffersByCity = {
  [cityName: string]: TypeOfferPage[];
}

function groupOffersByCity(offers: TypeOfferPage[]): OffersByCity {

  return offers.reduce<OffersByCity>((acc, offer) => {
    const { city: { name: cityName } } = offer;

    if (!acc[cityName]) {
      acc[cityName] = [];
    }

    acc[cityName].push(offer);

    return acc;
  }, {});
}

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const favoriteOffers = useAppSelector(getFavorites);
  const offersByCity = groupOffersByCity(favoriteOffers);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  Object.entries(offersByCity).map(([city, cityOffers]) => (
                    <li key={city} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="/#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <OffersList offers={cityOffers} cardClass='favorites' />
                      </div>
                    </li>
                  ))
                }
              </ul>
            </section>
            :
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            </section>}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to='/'>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
