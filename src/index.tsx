import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Settings} from './const';
import {Offers} from './mocks/offers';
import {Reviews} from './mocks/reviews';
import {NearPlaces} from './mocks/near-places';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={Settings.OffersCount}
      offers={Offers}
      reviews={Reviews}
      nearPlaces={NearPlaces}
    />
  </React.StrictMode>
);
