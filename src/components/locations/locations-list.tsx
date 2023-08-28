import { Cities } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/app-slice/app-slice';

type LocationsListProps = {
  currentCity: string;
}

function LocationsList({ currentCity }: LocationsListProps): JSX.Element {

  const dispatch = useAppDispatch();

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.entries(Cities).map(([_, city]) => {
          const className = 'locations__item-link tabs__item';
          if (currentCity === city) {
            className.concat(' tabs__item--active');
          }
          return (
            <li
              className="locations__item"
              key={_}
            >
              <a
                className={className}
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(changeCity(city));
                }}
              >
                <span>{city}</span>
              </a>
            </li>
          );
        })}

      </ul>
    </section>
  );
}

export default LocationsList;
