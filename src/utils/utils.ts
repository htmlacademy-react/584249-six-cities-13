import { TypeOfferPage } from '../types/offer';

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

export function calculateRating(rating: number):string {
  return String(rating * 20).concat('%');
}

