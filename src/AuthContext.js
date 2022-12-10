import React, {useState} from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logoutHandler: () => {},
  loginHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  const loginHandler = (uid) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", uid);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
