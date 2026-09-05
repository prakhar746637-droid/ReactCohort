import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || [],
  );
  const [loggedInUsers, setLoggedInUsers] = useState(JSON.parse(localStorage.getItem("loggedInUsers")));
  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        loggedInUsers,
        setLoggedInUsers,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
