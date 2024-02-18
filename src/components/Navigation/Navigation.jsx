import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from './../../redux/auth/authSlice.selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          `${css.navLink} ${isActive ? css.active : ''}`
        }
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.navLink} ${isActive ? css.active : ''}`
        }
        to="/register"
        end
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.navLink} ${isActive ? css.active : ''}`
        }
        to="/login"
        end
      >
        Login
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/contacts"
          end
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
