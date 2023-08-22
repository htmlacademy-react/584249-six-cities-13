import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Reviews } from './mocks/reviews';
import { NearPlaces } from './mocks/near-places';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOfferAction } from './store/api-actions.ts';

store.dispatch(fetchOfferAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={Reviews}
        nearPlaces={NearPlaces}
      />
    </Provider>
  </React.StrictMode>
);
