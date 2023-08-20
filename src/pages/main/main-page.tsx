import { useState } from 'react';
import cn from 'classnames';
import OffersList from '../../components/offers/offers-list';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations/locations-list';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { cityChange } from '../../store/action';

function MainPage(): JSX.Element {
  const [selectedOffer, setSelectedOfferId] = useState<string | null>(null);

  const onCardHover = (offerId: string | null): void => {
    setSelectedOfferId(offerId);
  };

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  const onChangeCity = (city: string) => {
    dispatch(cityChange(city));
  };
  const offers = useAppSelector((state) => state.Offers);
  const currentCityOffers = offers.filter((offer) => offer.city.name === currentCity);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={cn('page__main page__main--index', (currentCityOffers.length === 0) && 'page__main-index-empty')}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList currentCity={currentCity} onChangeCity={onChangeCity} />
        </div>
        <div className="cities">
          {(currentCityOffers.length !== 0) ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentCityOffers.length} places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>g
                  <ul className="places__options places__options--custom">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <OffersList
                  offers={offers}
                  onCardHover={onCardHover}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  className="cities"
                  city={offers[0].city.location}
                  offers={offers}
                  selectedOfferId={selectedOffer}
                />
              </div>
            </div>
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
                </div>
              </section>
              <div className="cities__right-section" />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
