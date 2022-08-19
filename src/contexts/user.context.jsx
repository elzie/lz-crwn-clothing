import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase.utils';
// actual value we want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

// Provider is the actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log('Auth State Changed:', user);
    });
    //unsubscribe to this, when it unmounts bcus onAuthStateChanged is a listener. Avoid memleaks.
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
