import { CITIES } from '../../const';

type LocationsListProps = {
  currentCity: string;
  onChangeCity: (city: string) => void;
}

function LocationsList({ currentCity, onChangeCity }: LocationsListProps): JSX.Element {
  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => {
          const className = 'locations__item-link tabs__item';
          if (currentCity === city) {
            className.concat(' tabs__item--active');
          }
          return (
            <li
              className="locations__item"
              key={city}
            >
              <a
                className={className}
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  onChangeCity(city);
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
