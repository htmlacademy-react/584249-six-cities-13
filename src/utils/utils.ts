import { TypeOfferPage } from '../types/offer';
import { Review } from '../types/review';
import { Cities } from '../const';

export function sortOffers(offers: TypeOfferPage[], sortBy: string): TypeOfferPage[] {
  switch (sortBy) {
    case 'Price: high to low':
      return offers.slice().sort((a, b) => b.price - a.price);
    case 'Price: low to high':
      return offers.slice().sort((a, b) => a.price - b.price);
    case 'Top rated first':
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}

export function sortReviews(reviews: Review[]): Review[] {
  return [...reviews].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function calculateRating(rating: number):string {
  return String(rating * 20).concat('%');
}

export function getRandomCity() {
  const cities = Object.values(Cities);
  const serialNumber = Math.floor(Math.random() * cities.length);
  const cityName = cities[serialNumber];

  return Cities[cityName];
}
