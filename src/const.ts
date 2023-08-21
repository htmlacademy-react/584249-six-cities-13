export const Settings = {
  OffersCount: 5
};

export enum AppRoutes {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Root = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SortOptions = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGHT: 'Price: low to high',
  PRICE_HIGHT_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
};
