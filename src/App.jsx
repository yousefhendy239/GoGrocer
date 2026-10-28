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
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Productdetails" element={<Productdetails />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Tracking" element={<Tracking />} />
        <Route path="/Visacard" element={<Visacard />} />
        <Route path="/Error" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
