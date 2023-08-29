import { useParams, useNavigate } from 'react-router';
import cn from 'classnames';
import { useEffect } from 'react';
import { calculateRating, sortReviews } from '../../utils/utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getNearOffers, getOffer, getOfferStatus } from '../../store/offer-slice/offer-slice-selectors';
import { fetchOfferAction, fetchNearOffersAction, fetchReviewsAction, addToFavoritesAction } from '../../store/api-actions';
import { getReviews } from '../../store/reviews-slice/reviews-slice-selectors';
import { getIsAuthorized } from '../../store/user-slice/user-slice-selectors';
import { AppRoutes, Settings } from '../../const';

import Header from '../../components/header/header';
import Map from '../../components/map/map';
import ReviewsList from '../../components/reviews/reviews-list';
import OffersList from '../../components/offers/offers-list';
import Loading from '../loading/loading';
import Error from '../../components/error/error';

function OfferPage():JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const id = Number(useParams().id);

  useEffect(() => {
    dispatch(fetchOfferAction(id));
    dispatch(fetchNearOffersAction(id));
    dispatch(fetchReviewsAction(id));
  }, [id, dispatch]);

  const offer = useAppSelector(getOffer);
  const offerStatus = useAppSelector(getOfferStatus);
  const nearOffers = useAppSelector(getNearOffers);
  const reviews = useAppSelector(getReviews);
  const isAuth = useAppSelector(getIsAuthorized);

  if (offerStatus.isLoading) {
    return <Loading />;
  }

  if (!offer || offerStatus.isError) {
    return <Error />;
  }

  const { images, rating, title, type, bedrooms, maxAdults, price, goods, description, isPremium, isFavorite } = offer;
  const { avatarUrl, isPro, name } = offer.host;
  const sortedReviews = sortReviews(reviews).slice(0, Settings.MaxReviewsAmount);

  const handleButtonClick = () => {
    if (!isAuth) {
      navigate(AppRoutes.Login);

      return;
    }
    dispatch(addToFavoritesAction({
      id: id,
      status: Number(!isFavorite)
    }));
  };

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.slice(0, Settings.MaxPhotosAmount).map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt={title} />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button
                  className={cn('offer__bookmark-button button', isFavorite && 'offer__bookmark-button--active')}
                  type="button"
                  onClick={handleButtonClick}
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: calculateRating(rating)}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item) => (<li className="offer__inside-item" key={item}>{item}</li>))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {name}
                  </span>
                  {isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsList reviews={sortedReviews} id={id} />
            </div>
          </div>
          <Map
            className="property__map"
            offers={[...nearOffers, offer]} selectedOfferId={id}
          />
        </section>
        <div className="container">
          <OffersList
            offers={nearOffers}
            cardClass='near-places'
          />
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
