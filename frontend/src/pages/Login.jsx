import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login("rider");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#0A0F2C" }}>
      <div className="w-full max-w-md rounded-2xl p-8 border border-white/10" style={{ background: "#0F1535" }}>
        <div className="text-center mb-8">
          <p className="text-4xl mb-2">🛡️</p>
          <h1 className="text-2xl font-extrabold text-white">Welcome back</h1>
          <p className="text-gray-400 text-sm mt-1">Login to your GigShield account</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)}
              type="email" placeholder="ravi@example.com"
              className="w-full px-4 py-3 rounded-xl text-white outline-none focus:ring-2 text-sm"
              style={{ background: "#0A0F2C", border: "1px solid rgba(255,255,255,0.1)", focusRingColor: "#FF6B2C" }} />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)}
              type="password" placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl text-white outline-none text-sm"
              style={{ background: "#0A0F2C", border: "1px solid rgba(255,255,255,0.1)" }} />
          </div>
          <button type="submit"
            className="w-full py-3 rounded-full font-bold text-white text-lg mt-2 transition-opacity hover:opacity-90"
            style={{ background: "#FF6B2C" }}>
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-6">
          New rider? <Link to="/register" className="font-semibold" style={{ color: "#FF6B2C" }}>Register here</Link>
        </p>
        <p className="text-center mt-3">
          <button onClick={() => { login("admin"); navigate("/admin"); }}
            className="text-xs text-gray-500 hover:text-gray-300 underline">
            Admin login
          </button>
        </p>
      </div>
    </div>
  );
}
