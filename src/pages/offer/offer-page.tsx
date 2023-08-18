import { TypeOfferPage } from '../../types/offer';
import { useParams } from 'react-router';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import ReviewsList from '../../components/reviews/reviews-list';
import {Review} from '../../types/review';
import NearPlaces from '../../components/near-places-cards/near-places';

type OfferPageProps = {
  offers: TypeOfferPage[];
  reviews: Review[];
  nearPlaces: TypeOfferPage[];
}

function OfferPage({offers, reviews, nearPlaces}: OfferPageProps):JSX.Element {

  const params = useParams();
  const offer = offers.find((el) => el.id === params.id);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer?.images.map((i) => (
                <div className="offer__image-wrapper" key={i}>
                  <img className="offer__image" src={i} alt={offer.title} />
                </div>
              ))}
            </div>
          </div>
          {offer &&
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className='offer__bookmark-button button' type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: String(offer.rating * 20).concat('%')}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item) => (<li className="offer__inside-item" key={item}>{item}</li>))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <ReviewsList reviews={reviews}/>
            </div>
          </div>}
          <Map
            className="offer__map map"
            city={offer ? offer.city.location : offers[0].city.location}
            offers={offers} selectedOfferId={offer ? offer.id : offers[0].id}
          />
        </section>
        <div className="container">
          <NearPlaces nearPlaces={nearPlaces} />
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
