import React from "react";
import Sidebar from "../components/Sidebar";

const payouts = [
  { date: "2024-01-15", trigger: "Rain", amount: 600, upi: "UPI2024011500123", status: "SUCCESS" },
];

export default function Payouts() {
  return (
    <div className="flex min-h-screen" style={{ background: "#0A0F2C" }}>
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-extrabold text-white mb-6">Payout History</h1>

        {/* Summary */}
        <div className="rounded-2xl p-6 border border-white/10 mb-6 text-center" style={{ background: "#0F1535" }}>
          <p className="text-gray-400 text-sm mb-1">Total Earnings Protected</p>
          <p className="text-5xl font-extrabold" style={{ color: "#00E676" }}>₹600</p>
          <p className="text-gray-500 text-xs mt-2">Across 1 successful payout this week</p>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-white/10 overflow-hidden mb-6" style={{ background: "#0F1535" }}>
          <div className="px-6 py-4 border-b border-white/10">
            <h2 className="text-lg font-bold text-white">All Payouts</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {["Date", "Trigger", "Amount", "UPI Reference", "Status"].map(h => (
                    <th key={h} className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {payouts.map((p, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-gray-300">{p.date}</td>
                    <td className="px-6 py-4 text-white font-medium">{p.trigger}</td>
                    <td className="px-6 py-4 font-bold" style={{ color: "#00E676" }}>₹{p.amount}</td>
                    <td className="px-6 py-4 text-gray-400 font-mono text-xs">{p.upi}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400">{p.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-gray-500 text-sm text-center mb-6">More payouts will appear here as claims are processed</p>

        <div className="text-center">
          <button className="px-8 py-3 rounded-full font-semibold text-white border transition-all hover:bg-orange-500/10"
            style={{ borderColor: "#FF6B2C", color: "#FF6B2C" }}>
            Download Statement
          </button>
        </div>
      </main>
    </div>
  );
}
