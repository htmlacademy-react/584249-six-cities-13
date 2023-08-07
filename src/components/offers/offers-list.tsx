import OfferCard from '../../components/offers/offer-card';
import { Offers } from '../../mocks/offers';

type OffersListProps = {
  offersNumber: number;
}


function OffersList({offersNumber}: OffersListProps): JSX.Element {

  const limitedOffers = Offers.slice(0, offersNumber);

  return (
    <div className="cities__places-list places__list tabs__content">
      {limitedOffers.map((offer) => <OfferCard key={offer.id} oneOffer={offer} />)}
    </div>
  );
}

export default OffersList;
