import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from './../../redux/auth/authSlice.selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div>
      <header>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
