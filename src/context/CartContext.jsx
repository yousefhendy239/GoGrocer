
import { createContext, useState } from "react";

export const CartMainContext = createContext();

const CartContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const productId = product.id;

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === productId
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      const rating =
        typeof product.rating === "object"
          ? product.rating?.rate
          : product.rating;

      return [
        ...currentItems,
        {
          ...product,
          name: product.name ?? product.title,
          rating,
          unit: product.unit ?? "each",
          quantity,
        },
      ];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartMainContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartMainContext.Provider>
  );
};

export default CartContext;
