import OfferCard from '../../components/offers/offer-card';
import { TypeOfferPage } from '../../types/offer';

type OffersListProps = {
  offersNumber?: number;
  offers: TypeOfferPage[];
  cardClass: string;
  onMouseOver?: (activeCard: number) => void;
  onMouseLeave?: (activeCard: number | null) => void;
}

let classes = 'cities__places-list places__list tabs__content';

function OffersList({offersNumber, offers, cardClass, onMouseLeave, onMouseOver }: OffersListProps): JSX.Element {

  if (cardClass === 'favorites') {
    classes = 'favorites__places';
  }

  if (cardClass === 'near-places') {
    classes = 'near-places__list places__list';

    return (
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className={classes}>
          {offers.slice(0, offersNumber).map((offer) => (
            <OfferCard
              key={offer.id}
              oneOffer={offer}
              cardClass={cardClass}
              onMouseLeave={onMouseLeave}
              onMouseOver={onMouseOver}
            />
          ))}
        </div>
      </section>
    );

  } else {

    return (
      <div className={classes}>
        {offers.slice(0, offersNumber).map((offer) => (
          <OfferCard
            key={offer.id}
            oneOffer={offer}
            cardClass={cardClass}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
          />
        ))}
      </div>
    );
  }
}

export default OffersList;
