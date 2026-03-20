import React from "react";
import Sidebar from "../components/Sidebar";
import TriggerCard from "../components/TriggerCard";

const triggers = [
  { type: "Rain", currentValue: 84, threshold: 50, status: "TRIGGERED", unit: "mm" },
  { type: "Heat", currentValue: 38, threshold: 42, status: "WARNING", unit: "°C" },
  { type: "AQI", currentValue: 145, threshold: 200, status: "SAFE", unit: "" },
  { type: "Flood", currentValue: 0, threshold: 1, status: "SAFE", unit: "" },
  { type: "Curfew", currentValue: 0, threshold: 1, status: "SAFE", unit: "" },
];

const history = [
  { date: "2024-01-15", trigger: "Rain", value: "84mm", threshold: "50mm", status: "TRIGGERED", duration: "3h 20m" },
  { date: "2024-01-12", trigger: "Heat", value: "43°C", threshold: "42°C", status: "TRIGGERED", duration: "5h 10m" },
  { date: "2024-01-10", trigger: "AQI", value: "210", threshold: "200", status: "TRIGGERED", duration: "2h 45m" },
  { date: "2024-01-08", trigger: "Rain", value: "62mm", threshold: "50mm", status: "TRIGGERED", duration: "1h 30m" },
  { date: "2024-01-05", trigger: "Heat", value: "38°C", threshold: "42°C", status: "WARNING", duration: "4h 00m" },
];

export default function TriggersMonitor() {
  return (
    <div className="flex min-h-screen" style={{ background: "#0A0F2C" }}>
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-white">Live Trigger Monitor</h1>
            <p className="text-gray-400 text-sm mt-1">Chennai — 600001 · Last updated just now</p>
          </div>
        </div>

        {/* Triggered Banner */}
        <div className="rounded-xl px-5 py-4 mb-6 border" style={{ backgroundColor: "rgba(255,68,68,0.1)", borderColor: "#FF4444" }}>
          <p className="text-white font-semibold">
            ⚡ CLAIM AUTO-INITIATED — Rain trigger exceeded threshold. <span style={{ color: "#00E676" }}>₹600 payout being processed to your UPI.</span>
          </p>
        </div>

        {/* 5 Trigger Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {triggers.map((t, i) => <TriggerCard key={i} {...t} />)}
        </div>

        {/* History Table */}
        <div className="rounded-2xl border border-white/10 overflow-hidden" style={{ background: "#0F1535" }}>
          <div className="px-6 py-4 border-b border-white/10">
            <h2 className="text-lg font-bold text-white">Trigger History — Last 7 Days</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {["Date", "Trigger", "Value", "Threshold", "Status", "Duration"].map(h => (
                    <th key={h} className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {history.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-gray-300">{row.date}</td>
                    <td className="px-6 py-4 text-white font-medium">{row.trigger}</td>
                    <td className="px-6 py-4 text-white">{row.value}</td>
                    <td className="px-6 py-4 text-gray-400">{row.threshold}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${row.status === "TRIGGERED" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
