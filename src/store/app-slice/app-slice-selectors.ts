import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Cities, SortOptions } from '../../const';

export const getOffersCity = (state: State): Cities => state[NameSpace.App].city;
export const getSortOption = (state: State): SortOptions => state[NameSpace.App].sortOption;
export const getSelectedOfferId = (state: State): number | null => state[NameSpace.App].selectedOfferId;
