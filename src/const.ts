const Settings = {
  MaxOffersCount: 5,
  MaxPhotosAmount: 6,
  MaxReviewsAmount: 10,
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
  Offers = '/offers',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite'
}

enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  App = 'APP',
  Offer = 'OFFER',
  Reviews = 'REVIEWS',
  Favorites = 'FAVORITES',
}

enum FetchStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failed = 'Failed',
}

export { FetchStatus, NameSpace, Settings, AppRoutes, AuthorizationStatus, SortOptions, APIRoute, Cities };
