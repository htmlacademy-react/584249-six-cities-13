import { useAppSelector, useAppDispatch } from '../../hooks';
import { Navigate, Link } from 'react-router-dom';
import { getIsAuthorized } from '../../store/user-slice/user-slice-selectors';
import { changeCity } from '../../store/app-slice/app-slice';
import { getRandomCity } from '../../utils/utils';
import { AppRoutes } from '../../const';
import LoginForm from '../../components/login-form/login-form';
import Logo from '../../components/logo/logo';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const randomCity = getRandomCity();
  const isAuth = useAppSelector(getIsAuthorized);

  if (isAuth) {
    return <Navigate to={AppRoutes.Root} />;
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo type='header' />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoutes.Root}
                onClick={() => {
                  dispatch(changeCity(randomCity));
                }}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
