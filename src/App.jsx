
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import Aboutus from "./pages/aboutUs/Aboutus";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Contactus from "./pages/contactUs/Contactus";
import Homepage from "./pages/homepage/Homepage";
import Productdetails from "./pages/productDetails/Productdetails";
import Products from "./pages/products/Products";
import Profile from "./pages/profile/Profile";
import Signin from "./pages/signIn/Signin";
import Signup from "./pages/signUp/Signup";
import Tracking from "./pages/tracking/Tracking";
import Visacard from "./pages/visaCard/Visacard";
import Error from "./pages/error404/Error";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  // Update product quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  // Clear cart after placing order
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total cart quantity
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <Header cartCount={cartCount} />

      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              onClearCart={clearCart}
            />
          }
        />

        <Route path="/contactus" element={<Contactus />} />

        <Route
          path="/"
          element={<Homepage onAdd={addToCart} />}
        />

        <Route path="/productsdetails" element={<Productdetails />} />

        <Route
          path="/products"
          element={<Products onAdd={addToCart} />}
        />

        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/visacard" element={<Visacard />} />
        <Route path="/error" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
