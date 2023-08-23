import cn from 'classnames';

import OffersList from '../../components/offers/offers-list';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations/locations-list';
import Map from '../../components/map/map';
import MainEmpty from '../../components/main-empty/main-empty';
import Sort from '../../components/sort/sort';

import { cityChange } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOfferAction } from '../../store/api-actions';
import { sortOffers } from '../../utils/utils';
import { useEffect } from 'react';

function MainPage(): JSX.Element {
  const activeCard = useAppSelector((state) => state.currentOfferId);
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.Offers);
  const currentSortOption = useAppSelector((state) => state.sortOption);

  const currentCityOffers = offers.filter((offer) => offer.city.name === currentCity);
  const sortedOffers = sortOffers(currentCityOffers, currentSortOption);

  const dispatch = useAppDispatch();

  const onChangeCity = (city: string) => {
    dispatch(cityChange(city));
  };

  useEffect(() => {
    dispatch(fetchOfferAction());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={cn('page__main page__main--index', (currentCityOffers.length === 0) && 'page__main-index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList currentCity={currentCity} onChangeCity={onChangeCity} />
        </div>
        <div className="cities">
          {(currentCityOffers.length > 0) ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentCityOffers.length} places to stay in {currentCity}</b>
                <Sort />
                <OffersList
                  offers={sortedOffers}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  className='cities__map'
                  offers={currentCityOffers}
                  selectedOfferId={activeCard}
                />
              </div>
            </div>
          ) : (
            <MainEmpty city={currentCity} />
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
