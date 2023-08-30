import { TypeOfferPage } from '../types/offer';
import { lorem, finance, datatype, name, system } from 'faker';

export const makeFakeOffer = (): TypeOfferPage => ({
  id: Number(finance.amount(10, 100)),
  title: lorem.sentences(1),
  type: lorem.word(1),
  price: Number(finance.amount(200, 300)),
  isPremium: datatype.boolean(),
  isFavorite: datatype.boolean(),
  rating: Number(finance.amount(0, 5)),
  location: {
    latitude: 0,
    longitude: 0,
    zoom: Number(finance.amount(5, 10)),
  },
  description: lorem.sentences(2),
  bedrooms: Number(finance.amount(1, 5)),
  maxAdults: Number(finance.amount(1, 5)),
  goods: [],
  images: [],
  host: {
    id: Number(finance.amount(100, 200)),
    name: name.title(),
    avatarUrl: system.filePath(),
    isPro: datatype.boolean(),
  },
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: Number(finance.amount(5, 10)),
    },
  }
});
