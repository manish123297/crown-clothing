import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// actual value that you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  console.log("dispatched..");
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};
const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  //   const [currentUser, setCurrentUser] = useState(null); //this will be replaced by useReducer
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  console.log(currentUser); //to see the current user
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };

  // =====================observer pattern
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      //    console.log(user)
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  // ========================================
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// we are going to wrap entire application with this context in index.js
