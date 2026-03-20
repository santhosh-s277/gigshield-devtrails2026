import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Navbar from "../components/Navbar";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const initClaims = [
  { rider: "Ravi Kumar", trigger: "Rain", date: "Jan 15", amount: 600, status: "Paid" },
  { rider: "Ravi Kumar", trigger: "Heat", date: "Jan 10", amount: 450, status: "Processing" },
];

const zoneRisks = [
  { city: "Chennai", level: "HIGH", color: "#FF4444" },
  { city: "Mumbai", level: "MEDIUM", color: "#FFB347" },
  { city: "Bangalore", level: "LOW", color: "#00E676" },
  { city: "Hyderabad", level: "LOW", color: "#00E676" },
  { city: "Delhi", level: "MEDIUM", color: "#FFB347" },
];

const chartData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    { label: "Premiums Collected", data: [147, 196, 147, 245], backgroundColor: "#FF6B2C" },
    { label: "Claims Paid", data: [0, 600, 450, 0], backgroundColor: "#00D4FF" },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: { legend: { labels: { color: "#A0AEC0" } } },
  scales: {
    x: { ticks: { color: "#A0AEC0" }, grid: { color: "rgba(255,255,255,0.05)" } },
    y: { ticks: { color: "#A0AEC0" }, grid: { color: "rgba(255,255,255,0.05)" } },
  },
};

export default function AdminDashboard() {
  const [claims, setClaims] = useState(initClaims);

  const approve = (i) => {
    const updated = [...claims];
    updated[i] = { ...updated[i], status: "Approved" };
    setClaims(updated);
  };

  const reject = (i) => {
    const updated = [...claims];
    updated[i] = { ...updated[i], status: "Rejected" };
    setClaims(updated);
  };

  return (
    <div className="min-h-screen" style={{ background: "#0A0F2C" }}>
      <Navbar admin />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-extrabold text-white mb-8">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Riders", value: "3", color: "#00D4FF" },
            { label: "Active Policies", value: "3", color: "#FF6B2C" },
            { label: "Claims This Week", value: "2", color: "#FFB347" },
            { label: "Total Payouts", value: "₹600", color: "#00E676" },
          ].map(({ label, value, color }, i) => (
            <div key={i} className="rounded-2xl p-5 border border-white/10 text-center" style={{ background: "#0F1535" }}>
              <p className="text-3xl font-extrabold" style={{ color }}>{value}</p>
              <p className="text-gray-400 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Claims Table */}
        <div className="rounded-2xl border border-white/10 overflow-hidden mb-8" style={{ background: "#0F1535" }}>
          <div className="px-6 py-4 border-b border-white/10">
            <h2 className="text-lg font-bold text-white">Claims Management</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {["Rider", "Trigger", "Date", "Amount", "Status", "Actions"].map(h => (
                    <th key={h} className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {claims.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{row.rider}</td>
                    <td className="px-6 py-4 text-gray-300">{row.trigger}</td>
                    <td className="px-6 py-4 text-gray-400">{row.date}</td>
                    <td className="px-6 py-4 font-bold" style={{ color: "#00E676" }}>₹{row.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        row.status === "Paid" ? "bg-green-500/20 text-green-400" :
                        row.status === "Approved" ? "bg-blue-500/20 text-blue-400" :
                        row.status === "Rejected" ? "bg-red-500/20 text-red-400" :
                        "bg-yellow-500/20 text-yellow-400"}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {row.status === "Processing" && (
                        <div className="flex gap-2">
                          <button onClick={() => approve(i)}
                            className="px-3 py-1 rounded-full text-xs font-bold text-white transition-opacity hover:opacity-80"
                            style={{ background: "#FF6B2C" }}>Approve</button>
                          <button onClick={() => reject(i)}
                            className="px-3 py-1 rounded-full text-xs font-bold border transition-opacity hover:opacity-80"
                            style={{ borderColor: "#FF4444", color: "#FF4444" }}>Reject</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart + Zone Risk */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 border border-white/10" style={{ background: "#0F1535" }}>
            <h2 className="text-lg font-bold text-white mb-4">Loss Ratio — Last 4 Weeks</h2>
            <Bar data={chartData} options={chartOptions} />
          </div>
          <div className="rounded-2xl p-6 border border-white/10" style={{ background: "#0F1535" }}>
            <h2 className="text-lg font-bold text-white mb-4">Zone Risk Map</h2>
            <div className="space-y-3">
              {zoneRisks.map(({ city, level, color }, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl px-4 py-3 border border-white/5"
                  style={{ background: "#0A0F2C" }}>
                  <span className="text-white font-medium">{city}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: color + "22", color }}>{level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
