export type OfferCard = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  location: Location;
}

export type TypeOfferPage = OfferCard & {
  city: City;
  description: string;
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  images: string[];
  host: Host;
}

export type Host = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}
