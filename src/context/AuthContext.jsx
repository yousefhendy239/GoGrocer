import { createContext, useContext, useEffect, useState } from "react";
export const AuthMainContext = createContext();

const AuthContext = ({ children }) => {
   const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedUser =
        localStorage.getItem("user") || sessionStorage.getItem("user");
      const savedToken =
        localStorage.getItem("token") || sessionStorage.getItem("token");

      if (savedUser && savedToken) {
        setUser(JSON.parse(savedUser));
        setToken(savedToken);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, []);

  const login = (userData, userToken, remember = true) => {
    const storage = remember ? localStorage : sessionStorage;

    storage.setItem("user", JSON.stringify(userData));
    storage.setItem("token", userToken);

    setUser(userData);
    setToken(userToken);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");

    setUser(null);
    setToken(null);
  };

  return (
    <AuthMainContext.Provider value={{ 
        user,
        token,
        loading,
        connected: !!token,
        login,
        logout,}}>{children}</AuthMainContext.Provider>
  );
};

export default AuthContext;
