import { NameSpace } from '../../const';
import { TypeOfferPage } from '../../types/offer';
import { State } from '../../types/state';

export const getFavorites = (state: State): TypeOfferPage[] =>
  state[NameSpace.Favorites].favorites;
