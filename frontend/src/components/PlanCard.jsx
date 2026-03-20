import React from "react";
import { CheckCircle } from "lucide-react";

export default function PlanCard({ name, price, maxPayout, features, recommended, onSelect }) {
  return (
    <div className="rounded-2xl p-6 border-2 transition-transform hover:-translate-y-1 flex flex-col"
      style={{ background: "#0F1535", borderColor: recommended ? "#FF6B2C" : "rgba(255,255,255,0.08)" }}>
      {recommended && (
        <div className="text-center mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: "#FF6B2C" }}>
            ⭐ Recommended
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-white text-center">{name}</h3>
      <div className="text-center my-4">
        <span className="text-4xl font-extrabold" style={{ color: recommended ? "#FF6B2C" : "#00D4FF" }}>₹{price}</span>
        <span className="text-gray-400 text-sm">/week</span>
      </div>
      <p className="text-center text-sm text-gray-400 mb-4">Max payout: <span className="text-green-400 font-bold">₹{maxPayout}</span></p>
      <ul className="space-y-2 flex-1 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle size={14} style={{ color: "#00E676" }} /> {f}
          </li>
        ))}
      </ul>
      <button onClick={onSelect}
        className="w-full py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
        style={{ background: recommended ? "#FF6B2C" : "transparent", border: recommended ? "none" : "2px solid #FF6B2C", color: "white" }}>
        Select Plan
      </button>
    </div>
  );
}
