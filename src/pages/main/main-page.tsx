import cn from 'classnames';

import OffersList from '../../components/offers/offers-list';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations/locations-list';
import Map from '../../components/map/map';
import MainEmpty from '../../components/main-empty/main-empty';
import Sort from '../../components/sort/sort';
import Error from '../../components/error/error';
import LoadingScreen from '../loading/loading';

import { getOffers, getOffersStatus } from '../../store/offers-slice/offers-slice-selectors';
import { getOffersCity, getSelectedOfferId, getSortOption } from '../../store/app-slice/app-slice-selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffersAction } from '../../store/api-actions';
import { sortOffers } from '../../utils/utils';
import { useEffect } from 'react';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  const currentCity = useAppSelector(getOffersCity);
  const activeCardId = useAppSelector(getSelectedOfferId);
  const currentSortOption = useAppSelector(getSortOption);
  const offers = useAppSelector(getOffers);
  const status = useAppSelector(getOffersStatus);

  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity);
  const sortedOffers = sortOffers(filteredOffers, currentSortOption);
  const isEmpty = sortedOffers.length === 0;

  if (status.isError) {
    return <Error />;
  }

  if (status.isLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={cn('page__main page__main--index', isEmpty && 'page__main-index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList currentCity={currentCity} />
        </div>
        <div className="cities">
          {!isEmpty ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>
                <Sort />
                <OffersList
                  offers={sortedOffers}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  className='cities__map'
                  offers={filteredOffers}
                  selectedOfferId={activeCardId}
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
