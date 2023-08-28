import { Icon, Marker, LayerGroup } from 'leaflet';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/map/map';
import { TypeOfferPage } from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  className: 'cities__map' | 'property__map';
  offers: TypeOfferPage[];
  selectedOfferId: number | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const mapStyle = {
  'cities__map': {
    height: '100%',
    width: '100%'
  },
  'property__map': {
    height: '579px',
    width: '1144px',
    marginRight: 'auto',
    marginLeft: 'auto'
  }
};

function Map({ className, offers, selectedOfferId }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const city = offers[0].city;
  const map = useMap(mapRef, city.location);
  const style = mapStyle[className];

  useEffect(() => {
    const markerGroup = new LayerGroup();

    if (map) {
      const cityCoordinates = { lat: city.location.latitude, lng: city.location.longitude };
      map.setView(cityCoordinates);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOfferId && offer.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerGroup);
      });

      markerGroup.addTo(map);
    }
    return () => {
      map?.removeLayer(markerGroup);
    };
  }, [map, offers, selectedOfferId, city]);

  return (
    <section style={style} className={`${className} map`} ref={mapRef}></section>
  );
}

export default Map;
