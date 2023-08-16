import OfferCard from '../../components/offers/offer-card';
import { TypeOfferPage } from '../../types/offer';

type OffersListProps = {
  offersNumber?: number;
  offers: TypeOfferPage[];
  classN?: string;
  onCardHover?: (offerId: string | null) => void;
}


function OffersList({offersNumber, offers, classN, onCardHover }: OffersListProps): JSX.Element {

  return (
    <div className={classN ? '' : 'cities__places-list places__list tabs__content'}>
      {offers.slice(0, offersNumber).map((offer) => <OfferCard key={offer.id} oneOffer={offer} onCardHover={onCardHover} />)}
    </div>
  );
}

export default OffersList;
