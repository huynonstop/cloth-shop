import { createContext, useEffect, useState } from "react";
import { authStateListener } from '../firebase';
import { createUserIfNotExists } from '../firebase/user';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const contextValue = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsub = authStateListener((user) => {
      if (user) {
        createUserIfNotExists(user)
      }
      setCurrentUser(user);
    })
    return () => {
      unsub()
    }
  }, [])
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};