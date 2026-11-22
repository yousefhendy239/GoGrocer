import { Route, Routes } from "react-router-dom";

import ProductContext from "./context/ProductContext";
import CartContext from "./context/CartContext";
import AuthContext from "./context/AuthContext";
import UserLayout from "./layout/UserLayout";
import AdminLayout from "./layout/AdminLayout";

const App = () => {
  return (
    <div>
      <AuthContext>
        <CartContext>
          <ProductContext>
            <Routes>
              <Route path="/*" element={<UserLayout />} />
              <Route path="/admin/*" element={<AdminLayout />} />
            </Routes>
          </ProductContext>
        </CartContext>
      </AuthContext>
    </div>
  );
};

export default App;
