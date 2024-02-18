import React from 'react';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from './../../redux/auth/authServices/authApi';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const OnSubmit = event => {
    event.preventDefault();
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(apiLoginUser(formData));
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <form className={css.form} onSubmit={OnSubmit}>
        <label className={css.label}>
          Email:
          <input
            className={css.input}
            type="email"
            name="userEmail"
            placeholder="MaryM@hotmail.ua"
            required
          ></input>
        </label>
        <label className={css.label}>
          Password:
          <input
            className={css.input}
            type="password"
            name="userPassword"
            minLength={7}
            required
          ></input>
        </label>
        <button className={css.button} type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
