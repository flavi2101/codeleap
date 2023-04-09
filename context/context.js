import { createContext, useReducer } from "react";

export const UserContext = createContext();

export function myUserReducer(state, action) {
  switch (action.type) {
    case 'user':
      return {...state, user: action.payload };
    

    default:
     return state
  }
}

export default function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(myUserReducer, {
    user: '',
  
  });
  return <UserContext.Provider value={{...state,dispatch}}>{children}</UserContext.Provider>;
}
