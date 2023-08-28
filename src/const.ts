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
  Loading = 'LOADING'
}

enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

enum SortOptions {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

enum APIRoute {
  Nearby = '/offers',
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout'
}

enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  App = 'APP',
  Offer = 'OFFER',
  Reviews = 'REVIEWS'
}

enum FetchStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}

const TIMEOUT_SHOW_ERROR = 2000;

export { FetchStatus, NameSpace, Settings, AppRoutes, AuthorizationStatus, SortOptions, APIRoute, TIMEOUT_SHOW_ERROR, Cities };
