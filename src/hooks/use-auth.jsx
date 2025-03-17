'use client';
import {createContext, useContext, useEffect, useState} from 'react';
import {useMount} from 'react-use';
import PropTypes from 'prop-types';
import {clearCookie, getCrossSubdomainCookie, setCrossSubdomainCookie} from "@/lib/utils";
import {useGetProfile} from "@/api/auth";

const authContext = createContext({
  user: null,
  updateUser: () => {
  },
  authenticate: () => {
  },
  reloadUser: () => {
  },
  isReloading: false,
  resolved: false,
  authenticated: false,
  logout: () => {
  },
  error: null,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [resolved, setResolved] = useState(false);
  const {refetch, data, error, isRefetching} = useGetProfile();

  useEffect(() => {
    if (data) {
      const user = data.myrecord;
      authenticate({user});
    }
  }, [data]);

  const authenticate = (data) => {
    setUser(data.user);
    setAuthenticated(true);
    setResolved(true);
    if (data.token) {
      setCrossSubdomainCookie('token', data.token, 30);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    clearCookie('token');
  };

  const updateUser = (user) => {
    setUser((old) => ({...old, ...user}));
  };

  const reloadUser = async () => {
    await refetch();
  };

  useMount(() => {
    const token = getCrossSubdomainCookie('token');
    if (!token) return setResolved(true);
    if (!resolved && !authenticated) reloadUser();
  });

  return {
    user,
    updateUser,
    reloadUser,
    isReloading: isRefetching,
    authenticate,
    resolved,
    authenticated,
    logout,
    error,
  };
};

export const AuthProvider = ({children}) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(authContext);
};
