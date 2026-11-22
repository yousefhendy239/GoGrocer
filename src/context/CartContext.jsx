import { createContext } from "react";
export const CartMainContext = createContext();

const CartContext = ({ children }) => {
  return (
    <CartMainContext.Provider value={{}}>{children}</CartMainContext.Provider>
  );
};

export default CartContext;
