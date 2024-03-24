import { createContext, useContext, useEffect, useReducer } from "react";

// Initial state for the AuthContext
const initialState = {
  user: null,
  role: null,
  token: null,
};

// Create the AuthContext
export const authContext = createContext(initialState);

// AuthReducer function to handle state updates
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        role: null,
        token: null,
        //loading: true, // Add a loading state to indicate ongoing login
        //error: null,  // Add an error state to capture login errors
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
        //loading: false,
        //error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        role: null,
        token: null,
        //loading: false,
        //error: action.payload.error,
      };
    case "LOGOUT":
      return {
        user: null,
        role: null,
        token: null,
        //loading: false,
        //error: null,
      };
    default:
      return state;
  }
};

// AuthContext Provider compo

export const AuthContextProvider = ({ children }) => {
  const [ state, dispatch] = useReducer(authReducer, initialState);

  // Additional functionality can be added here, such as login/logout actions

  return (
    <authContext.Provider value={{ user:state.user, token:state.token, role:state.role , dispatch}}>
      {children}
    </authContext.Provider>
  );
};

// Custom hook to access AuthContext from any component
/*const useAuth = () => {
  const authContextValue = useContext(authContext);

  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return authContextValue;
};*/

