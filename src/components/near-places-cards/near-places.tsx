import NearPlaceItem from './near-place-item';
import { TypeOfferPage } from '../../types/offer';

type NearPlacesProps = {
  nearPlaces: TypeOfferPage[];
}

function NearPlacesList({nearPlaces}: NearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaces.map((item) => <NearPlaceItem offer={item} key={item.id} />)}
      </div>
    </section>
  );
}

export default NearPlacesList;
