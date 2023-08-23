import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import UserNotLogged from '../user-not-logged/user-not-logged';
import UserNav from '../user-nav/user-nav';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link" >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {(authorizationStatus === AuthorizationStatus.Auth) ? <UserNav /> : <UserNotLogged />}
        </div>
      </div>
    </header>
  );
}

export default Header;
