import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

import usePersist from "@/hooks/usePersist";
import { selectCurrentToken } from "./authSlice";
import { useRefreshMutation } from "./authApiSlice";


/**
 * Persists login.
 */
const PersistLogin = () => {
  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, {
    isUninitialized,
    isLoading,
    isSuccess,
    isError,
    error
  }] = useRefreshMutation();

  useEffect((): any => {
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      const verifyRefreshToken = async () => {
        console.log('Verifying refresh token...');
        try {
          await refresh("");
          setTrueSuccess(true);
        } catch (err) {
          console.error(err);
        }
      };

      // Verify refresh token.
      if (!token && persist)
        verifyRefreshToken();
    }

    return () => effectRan.current = true;
  }, []);

  let content;
  // No persist.
  if (!persist) {
    content = <Outlet />
  
  // Persist, but no token.
  } else if (isLoading) {
    content = <p className='loading'>Loading...</p>;
  } else if (isError) {
    content = (
      <p className='errmsg'>
        {`${error?.data?.message} - `}
        <Link to="/login">Please login again</Link>.
      </p>
    );
  
  // Persist and token.
  } else if (isSuccess && trueSuccess) {
    content = <Outlet />;
  } else if (token && isUninitialized) {
    content = <Outlet />;
  }

  return content;
}

export default PersistLogin;
