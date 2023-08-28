import { generatePath, Link } from 'react-router-dom';
import { TypeOfferPage } from '../../types/offer';
import { AppRoutes } from '../../const';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectOffer } from '../../store/app-slice/app-slice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getIsAuthorized } from '../../store/user-slice/user-slice-selectors';
import { addToFavoritesAction, removeFromFavoritesAction } from '../../store/api-actions';

import cn from 'classnames';

type OfferCardProps = {
  oneOffer: TypeOfferPage;
  cardClass: string;
}

function OfferCard({oneOffer, cardClass}: OfferCardProps): JSX.Element {

  const { price, rating, title, type, isPremium, id, images, isFavorite } = oneOffer;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isActive, setActive] = useState(isFavorite);
  const isAuth = useAppSelector(getIsAuthorized);

  const handleButtonClick = () => {
    if (isAuth) {
      if (isFavorite) {
        dispatch(removeFromFavoritesAction({ id }));
        setActive(isActive);
      } else {
        dispatch(addToFavoritesAction({ id }));
        setActive(!isActive);
      }
    } else {
      navigate(AppRoutes.Login);
    }
  };

  const sizes = {
    'cities': {
      width: '260',
      height: '200'
    },
    'near-places': {
      width: '260',
      height: '200'
    },
    'favorites': {
      width: '150',
      height: '110'
    }
  };

  let width = sizes.cities.width;
  let height = sizes.cities.height;

  if (cardClass === 'favorites') {
    width = sizes['favorites'].width;
    height = sizes['favorites'].height;
  } else if (cardClass === 'near-places') {
    width = sizes['near-places'].width;
    height = sizes['near-places'].height;
  }

  return (
    <article
      className={cn(cardClass.concat('__card'), 'place-card')}
      onMouseOver={() => dispatch(selectOffer(oneOffer.id))}
      onMouseOut={() => dispatch(selectOffer(null))}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={cn(cardClass.concat('__image-wrapper'), 'place-card__image-wrapper')}>
        <Link to={generatePath(AppRoutes.Offer, {id: `${id}` })}>
          <img className="place-card__image" src={images[0]} width={width} height={height} alt="Place image" />
        </Link>
      </div>
      <div className={cn('place-card__info', cardClass === 'favorites' ? 'favorites__card-info' : '')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro; {price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cn('place-card__bookmark-button button', isActive && 'place-card__bookmark-button--active')}
            type="button"
            onClick={handleButtonClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: String(rating * 20).concat('%')}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoutes.Offer, {id: `${id}` })}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
