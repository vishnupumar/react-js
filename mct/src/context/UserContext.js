import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState("");
  const [allUserData, setAllUserData] = useState({});
  
  return (
    <UserContext.Provider
      value={{ logged, setLogged, user, setUser, allUserData, setAllUserData }}
    >
      {children}
    </UserContext.Provider>
  );
};
