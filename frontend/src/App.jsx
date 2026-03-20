import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PlanSelection from "./pages/PlanSelection";
import RiderDashboard from "./pages/RiderDashboard";
import TriggersMonitor from "./pages/TriggersMonitor";
import Claims from "./pages/Claims";
import Payouts from "./pages/Payouts";
import AdminDashboard from "./pages/AdminDashboard";

function Protected({ children, adminOnly }) {
  const { auth } = useAuth();
  if (!auth.isLoggedIn) return <Navigate to="/login" />;
  if (adminOnly && auth.role !== "admin") return <Navigate to="/dashboard" />;
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/plans" element={<Protected><PlanSelection /></Protected>} />
          <Route path="/dashboard" element={<Protected><RiderDashboard /></Protected>} />
          <Route path="/triggers" element={<Protected><TriggersMonitor /></Protected>} />
          <Route path="/claims" element={<Protected><Claims /></Protected>} />
          <Route path="/payouts" element={<Protected><Payouts /></Protected>} />
          <Route path="/admin" element={<Protected adminOnly><AdminDashboard /></Protected>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
