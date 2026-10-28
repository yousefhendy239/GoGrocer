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
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/productsdetails" element={<Productdetails />} />
        <Route path="/products" element={<Products />} />
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
