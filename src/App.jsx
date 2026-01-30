
import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import HomePage from "./App_src/HomePage";
import OrdersPage from "./App_src/OrderPage";
import AddFunds from "./App_src/AddFunds";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/homepage" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/orderpage" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
      <Route path="/addfunds" element={<ProtectedRoute><AddFunds /></ProtectedRoute>} />
    </Routes>
  );
}
