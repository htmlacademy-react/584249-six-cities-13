import {Review} from '../types/review';

export const Reviews: Review[] = [
  {
    id: 1,
    user: {
      id: 10,
      isPro: false,
      name: 'John',
      avatarUrl: 'img/avatar-max.jpg'
    },
    rating: 3,
    comment: 'The apartment was nice but could use some updates. The view was great though and the location was convenient.',
    date: '2023-02-15T12:22:01.112Z'
  },
  {
    id: 2,
    user: {
      id: 8,
      isPro: true,
      name: 'Sarah',
      avatarUrl: 'img/avatar-max.jpg'
    },
    rating: 5,
    comment: 'This apartment exceeded all of our expectations! The view was breathtaking and the location was perfect for exploring the city. We will definitely be back!',
    date: '2023-02-28T17:41:55.912Z'
  },
  {
    id: 3,
    user: {
      id: 25,
      isPro: false,
      name: 'Dave',
      avatarUrl: 'img/avatar-max.jpg'
    },
    rating: 2,
    comment: 'The apartment was not what we expected. The view was nice, but the location was noisy and the apartment itself was not very clean. We were disappointed.',
    date: '2023-03-05T09:13:37.222Z'
  },
  {
    id: 4,
    user: {
      id: 16,
      isPro: true,
      name: 'Jamie',
      avatarUrl: 'img/avatar-max.jpg'
    },
    rating: 4,
    comment: 'We had a wonderful stay at this apartment! The view was amazing and the location was perfect for our needs.',
    date: '2023-03-05T09:13:37.222Z'
  }
];
