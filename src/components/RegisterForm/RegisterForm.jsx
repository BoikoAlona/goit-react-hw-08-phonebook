import React from 'react';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from './../../redux/auth/authServices/authApi';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(apiRegisterUser(formData));
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <form onSubmit={onSubmit} className={css.form}>
        <label className={css.label}>
          Name:
          <input
            className={css.field}
            type="text"
            name="userName"
            minLength={3}
            placeholder="Mary"
            required
          ></input>
        </label>
        <label className={css.label} htmlFor="userEmail">
          Email:
          <input
            className={css.field}
            type="email"
            name="userEmail"
            minLength={7}
            placeholder="MaryM@hotmail.ua"
            required
          ></input>
        </label>
        <label className={css.label} htmlFor="userPassword">
          Password:
          <input
            className={css.field}
            type="password"
            name="userPassword"
            required
          ></input>
        </label>
        <button className={css.button} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};
