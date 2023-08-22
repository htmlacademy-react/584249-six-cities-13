const Settings = {
  OffersCount: 5
};

enum AppRoutes {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Root = '/'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const SortOptions = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGHT: 'Price: low to high',
  PRICE_HIGHT_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
};

enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

const TIMEOUT_SHOW_ERROR = 2000;

export { Settings, AppRoutes, AuthorizationStatus, SortOptions, APIRoute, TIMEOUT_SHOW_ERROR, CITIES };
