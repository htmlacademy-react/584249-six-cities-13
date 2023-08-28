import { Cities } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/app-slice/app-slice';
import cn from 'classnames';

type LocationsListProps = {
  currentCity: string;
}

function LocationsList({ currentCity }: LocationsListProps): JSX.Element {

  const dispatch = useAppDispatch();

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.entries(Cities).map(([_, city]) => (
          <li
            className="locations__item"
            key={_}
          >
            <a
              className={cn('locations__item-link tabs__item', currentCity === city ? 'tabs__item--active' : '')}
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeCity(city));
              }}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LocationsList;
