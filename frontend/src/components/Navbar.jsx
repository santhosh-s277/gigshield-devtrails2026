import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ admin }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10" style={{ background: "#0F1535" }}>
      <Link to="/" className="flex items-center gap-2">
        <span className="text-2xl">🛡️</span>
        <span className="text-xl font-extrabold" style={{ color: "#FF6B2C" }}>
          GigShield {admin && <span className="text-sm font-normal text-gray-400">Admin</span>}
        </span>
      </Link>
      {admin && <span className="text-gray-300 text-sm">Admin Panel</span>}
    </nav>
  );
}
