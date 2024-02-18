import React from 'react';
import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { apiLogoutUser } from './../../redux/auth/authServices/authApi';
import {
  selectAuthIsLoading,
  selectAuthUserData,
} from './../../redux/auth/authSlice.selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const handleLogOut = () => dispatch(apiLogoutUser());

  const userEmail = userData?.email ?? "Could't get user email";

  return (
    <div>
      <p className={css.p}>{userEmail}</p>
      <button className={css.button} onClick={handleLogOut} type="button" disabled={isLoading}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
