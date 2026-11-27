import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import ProductsAdmin from "../pages/adminDashboard/ProductsAdmin";
import CustomersAdmin from "../pages/adminDashboard/CustomersAdmin";
import OrdersAdmin from "../pages/adminDashboard/OrdersAdmin";
import SideBar from "../components/DashBoard/SideBar";
import NavbarAdmin from "../components/DashBoard/NavbarAdmin";
const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div className="min-h-screen bg-background">
        <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="min-h-screen lg:ml-72">
          <NavbarAdmin onMenuClick={() => setSidebarOpen(true)} />

          <Routes>
            <Route index element={<AdminDashboard />} />
            <Route path="productsadmin" element={<ProductsAdmin />} />
            <Route path="customersadmin" element={<CustomersAdmin />} />
            <Route path="ordersadmin" element={<OrdersAdmin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
