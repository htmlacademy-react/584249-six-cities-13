import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Offers} from './mocks/offers';
import {Reviews} from './mocks/reviews';
import {NearPlaces} from './mocks/near-places';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={Offers}
        reviews={Reviews}
        nearPlaces={NearPlaces}
      />
    </Provider>
  </React.StrictMode>
);
