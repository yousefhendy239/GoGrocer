import { createContext } from "react";
export const ProductsMainContext = createContext();

const ProductContext = ({ children }) => {
  return (
    <ProductsMainContext.Provider value={{}}>
      {children}
    </ProductsMainContext.Provider>
  );
};

export default ProductContext;
