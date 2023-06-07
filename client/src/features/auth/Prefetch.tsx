import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { store } from '@/app/store';
import { usersApiSlice } from '@/features/users/usersApiSlice';


/**
 * Prefetches data.
 */
const Prefetch = () => {
  useEffect(() => {
    store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
  }, [])

  return <Outlet />
};

export default Prefetch;
