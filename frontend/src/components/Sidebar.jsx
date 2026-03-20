import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Zap, FileText, Wallet, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/triggers", label: "Live Triggers", icon: Zap },
  { to: "/claims", label: "My Claims", icon: FileText },
  { to: "/payouts", label: "Payout History", icon: Wallet },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <aside className="hidden md:flex flex-col w-56 min-h-screen border-r border-white/10 p-4" style={{ background: "#0F1535" }}>
      <div className="flex items-center gap-2 mb-8 px-2">
        <span className="text-2xl">🛡️</span>
        <span className="text-xl font-extrabold" style={{ color: "#FF6B2C" }}>GigShield</span>
      </div>
      <nav className="flex-1 space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <Link key={to} to={to}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{ background: pathname === to ? "#FF6B2C22" : "transparent", color: pathname === to ? "#FF6B2C" : "#A0AEC0" }}>
            <Icon size={18} />{label}
          </Link>
        ))}
      </nav>
      <button onClick={() => { logout(); navigate("/"); }}
        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-400/10 transition-all">
        <LogOut size={18} />Logout
      </button>
    </aside>
  );
}
