import { createContext } from "react";
export const AuthMainContext = createContext();

const AuthContext = ({ children }) => {
  return (
    <AuthMainContext.Provider value={{}}>{children}</AuthMainContext.Provider>
  );
};

export default AuthContext;
