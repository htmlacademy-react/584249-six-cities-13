import cn from 'classnames';
import { useState, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getIsLoading } from '../../store/user-slice/user-slice-selectors';
import styles from './login-form.module.css';


type FormData = {
  value: string;
  pattern: RegExp;
  error: boolean;
  errorMessage: string;
  label: string;
}


function LoginForm(): JSX.Element {

  const [formData, setFormData] = useState<Record<string, FormData>>({
    email: {
      value: '',
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      error: false,
      errorMessage: 'Please enter a valid email address',
      label: 'E-mail',
    },
    password: {
      value: '',
      pattern: /^(?=.*[A-Za-z])(?=.*\d).+$/,
      error: false,
      errorMessage: 'Please enter a password with at least one letter and number',
      label: 'Password',
    },
  });

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(loginAction({
      login: formData.email.value,
      password: formData.password.value
    }));
  };


  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        error: !formData[name].pattern.test(value),
        value: value,
      }
    });

  };


  return (

    <form className="login__form form" onSubmit={handleSubmit}>

      {Object.keys(formData).map((name) => (
        <div key={name} className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">{formData[name].label}</label>
          <input
            className={cn('login__input form__input', { [styles.input__error]: formData[name].error })}
            type={name}
            name={name}
            placeholder={formData[name].label}
            required
            value={formData[name].value}
            onChange={handleFieldChange}
          />
          {formData[name].error && <span className={styles.error}>{formData[name].errorMessage}</span>}
        </div>
      ))}
      <button className="login__submit form__submit button"
        type="submit"
        disabled={formData.email.error || formData.password.error}
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>

  );
}

export default LoginForm;
