import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TriggerCard from "../components/TriggerCard";
import ClaimCard from "../components/ClaimCard";
import RiskGauge from "../components/RiskGauge";

const triggers = [
  { type: "Rain", currentValue: 84, threshold: 50, status: "TRIGGERED", unit: "mm" },
  { type: "Heat", currentValue: 38, threshold: 42, status: "WARNING", unit: "°C" },
  { type: "AQI", currentValue: 145, threshold: 200, status: "SAFE", unit: "" },
  { type: "Flood", currentValue: 0, threshold: 1, status: "SAFE", unit: "" },
  { type: "Curfew", currentValue: 0, threshold: 1, status: "SAFE", unit: "" },
];

const claims = [
  { id: "CLM001", type: "Rain", date: "2024-01-15 14:30", zone: "Chennai - 600001", status: "Paid", amount: 600 },
  { id: "CLM002", type: "Heat", date: "2024-01-10 11:00", zone: "Chennai - 600001", status: "Processing", amount: 450 },
];

export default function RiderDashboard() {
  return (
    <div className="flex min-h-screen" style={{ background: "#0A0F2C" }}>
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">

        {/* Triggered Banner */}
        <div className="rounded-xl px-5 py-3 mb-6 flex items-center gap-3 border"
          style={{ background: "#FF4444/10", borderColor: "#FF4444", backgroundColor: "rgba(255,68,68,0.1)" }}>
          <span className="text-xl">🚨</span>
          <p className="text-sm font-semibold text-white">
            Rain trigger active in your zone — Claim CLM001 auto-initiated — <span style={{ color: "#00E676" }}>₹600 processing to your UPI</span>
          </p>
        </div>

        {/* Welcome + Coverage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-white mb-1">Welcome back, Ravi 👋</h1>
            <p className="text-gray-400">Your deliveries are protected this week</p>
          </div>
          <div className="rounded-2xl p-5 border border-white/10" style={{ background: "#0F1535" }}>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Active Coverage</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div><p className="text-gray-500">Plan</p><p className="font-semibold text-white">Standard Shield</p></div>
              <div><p className="text-gray-500">Week</p><p className="font-semibold text-white">Jan 15 – Jan 21</p></div>
              <div><p className="text-gray-500">Premium Paid</p><p className="font-semibold" style={{ color: "#FF6B2C" }}>₹49</p></div>
              <div><p className="text-gray-500">Max Payout</p><p className="font-semibold" style={{ color: "#00E676" }}>₹900</p></div>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div className="rounded-2xl p-5 border border-white/10 flex flex-col items-center" style={{ background: "#0F1535" }}>
            <RiskGauge score={72} />
            <p className="text-gray-400 text-sm mt-2">Zone Risk Score</p>
          </div>
          <div className="rounded-2xl p-5 border border-white/10 flex flex-col justify-center items-center" style={{ background: "#0F1535" }}>
            <p className="text-4xl font-extrabold" style={{ color: "#00E676" }}>₹600</p>
            <p className="text-gray-400 text-sm mt-2">Earnings Protected</p>
          </div>
          <div className="rounded-2xl p-5 border border-white/10 flex flex-col justify-center items-center" style={{ background: "#0F1535" }}>
            <p className="text-2xl font-extrabold text-white">15 Jan 2024</p>
            <p className="text-gray-400 text-sm mt-2">Active Since</p>
          </div>
        </div>

        {/* Weather + Triggers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="rounded-2xl p-5 border border-white/10" style={{ background: "#0F1535" }}>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">Current Weather — Chennai</p>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-5xl">🌧️</span>
              <div>
                <p className="text-4xl font-extrabold text-white">38°C</p>
                <p className="text-gray-400 text-sm">Heavy Rain · Humidity 78%</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs">Last updated just now</p>
          </div>
          <div className="rounded-2xl p-5 border border-white/10" style={{ background: "#0F1535" }}>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Live Triggers</p>
            <div className="space-y-2">
              {triggers.map((t, i) => (
                <TriggerCard key={i} {...t} />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Claims */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-bold text-white">Recent Claims</p>
            <Link to="/claims" className="text-sm font-semibold" style={{ color: "#FF6B2C" }}>View All →</Link>
          </div>
          <div className="space-y-3">
            {claims.map((c, i) => <ClaimCard key={i} {...c} />)}
          </div>
        </div>

      </main>
    </div>
  );
}
