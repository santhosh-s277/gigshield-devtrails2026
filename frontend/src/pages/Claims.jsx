import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ClaimCard from "../components/ClaimCard";

const allClaims = [
  { id: "CLM001", type: "Rain", date: "2024-01-15 14:30", zone: "Chennai - 600001", status: "Paid", amount: 600 },
  { id: "CLM002", type: "Heat", date: "2024-01-10 11:00", zone: "Chennai - 600001", status: "Processing", amount: 450 },
];

const tabs = ["All", "Processing", "Approved", "Paid"];

export default function Claims() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allClaims : allClaims.filter(c => c.status === active);

  return (
    <div className="flex min-h-screen" style={{ background: "#0A0F2C" }}>
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-extrabold text-white mb-6">My Claims</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActive(tab)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: active === tab ? "#FF6B2C" : "transparent",
                color: active === tab ? "white" : "#A0AEC0",
                border: active === tab ? "none" : "1px solid rgba(255,255,255,0.1)"
              }}>
              {tab}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🛡️</p>
            <p className="text-white font-semibold text-lg">No claims yet — you are protected</p>
            <p className="text-gray-500 text-sm mt-2">Claims will appear here when a trigger activates</p>
          </div>
        ) : (
          <div className="space-y-4 max-w-2xl">
            {filtered.map((c, i) => <ClaimCard key={i} {...c} />)}
          </div>
        )}
      </main>
    </div>
  );
}
