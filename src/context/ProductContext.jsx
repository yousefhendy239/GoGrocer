import { createContext, useEffect, useState } from "react";
export const ProductsMainContext = createContext();

const ProductContext = ({ children }) => {
  const [products, setproducts] = useState([]);
  const [productsError, setproductsError] = useState("");
  const [productsLoading, setproductsLoading] = useState(true);

  const getProducts = async () => {
    setproductsLoading(true);
    try {
      const req = await fetch("https://fakestoreapi.com/products");
      const res = await req.json();

      setproductsLoading(false);

      setproducts(res);
    } catch (e) {
      setproductsLoading(false);
      setproductsError(e.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  //---------singleProduct

  const getProductById = (id) => products.find((p) => p.id === Number(id));

  const getHighestRatedProducts = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);

  const getCategories = [...new Set(products.map((p) => p.category))];

  // تجيب منتجات مشابهة (من نفس القسم الأول، وبعدين أي منتجات تانية)
  const getRelatedProducts = (id, limit = 4) => {
    const current = getProductById(id);
    const others = products.filter((p) => p.id !== Number(id));
    const sameCategory = others.filter((p) => p.category === current?.category);
    const rest = others.filter((p) => p.category !== current?.category);
    return [...sameCategory, ...rest].slice(0, limit);
  };

  //---------

  return (
    <ProductsMainContext.Provider
      value={{
        products,
        productsError,
        productsLoading,
        getProductById,
        getRelatedProducts,
        getHighestRatedProducts,
        getCategories,
      }}
    >
      {children}
    </ProductsMainContext.Provider>
  );
};

export default ProductContext;
