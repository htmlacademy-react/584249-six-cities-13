import OfferCard from '../../components/offers/offer-card';
import { TypeOfferPage } from '../../types/offer';
import { useState } from 'react';

type OffersListProps = {
  offersNumber?: number;
  offers: TypeOfferPage[];
  classN?: string;
}


function OffersList({offersNumber, offers, classN, }: OffersListProps): JSX.Element {
  const [, setActiveState] = useState<string | ''>('');

  return (
    <div className={classN ? '' : 'cities__places-list places__list tabs__content'}>
      {offers.slice(0, offersNumber).map((offer) => <OfferCard key={offer.id} oneOffer={offer} onMouseOver={setActiveState} />)}
    </div>
  );
}

export default OffersList;
