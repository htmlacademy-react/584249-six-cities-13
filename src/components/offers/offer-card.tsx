import { generatePath, Link } from 'react-router-dom';
import { TypeOfferPage } from '../../types/offer';
import { AppRoutes } from '../../const';

type OfferCardProps = {
  oneOffer: TypeOfferPage;
  // onMouseOver: (activeOffer: string) => void;
  onCardHover?: (offerId: string | null) => void;
}

function OfferCard({oneOffer, onCardHover}: OfferCardProps): JSX.Element {

  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => onCardHover?.(oneOffer.id)}
      onMouseOut={() => onCardHover?.(null)}
    >
      {oneOffer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoutes.Offer, {id: `${oneOffer.id}` })}>
          <img className="place-card__image" src={oneOffer.images[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro; {oneOffer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: String(oneOffer.rating * 20).concat('%')}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoutes.Offer, {id: `${oneOffer.id}` })}>{oneOffer.title}</Link>
        </h2>
        <p className="place-card__type">{oneOffer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
