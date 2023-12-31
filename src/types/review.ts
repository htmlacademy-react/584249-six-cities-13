export type Host = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
}
