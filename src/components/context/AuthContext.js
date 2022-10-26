import React, { createContext, useState, useEffect } from 'react';


export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null });
  // we will use loading later

  const setAuthData = data => {
    setAuth({ data });
  };

  useEffect(() => {

    setAuth({
      loading: false,
      data: JSON.parse(window.localStorage.getItem('authJustGoNow')),
    });
    console.log("auth",auth)
  }, []);

  useEffect(() => {
    window.localStorage.setItem('authJustGoNow', JSON.stringify(auth.data));
  }, [auth.data]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
