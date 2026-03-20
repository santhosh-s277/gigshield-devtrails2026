import React from "react";
import { CloudRain, Thermometer, Wind, Waves, Shield } from "lucide-react";
import StatusBadge from "./StatusBadge";

const icons = { Rain: CloudRain, Heat: Thermometer, AQI: Wind, Flood: Waves, Curfew: Shield };
const colors = { TRIGGERED: "#FF4444", WARNING: "#FFB347", SAFE: "#00E676" };

export default function TriggerCard({ type, currentValue, threshold, status, unit }) {
  const Icon = icons[type] || Shield;
  const color = colors[status];
  const pct = Math.min((currentValue / (threshold * 1.5)) * 100, 100);

  return (
    <div className="rounded-xl p-4 border transition-transform hover:-translate-y-1"
      style={{ background: "#0F1535", borderColor: color + "44" }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon size={20} style={{ color }} />
          <span className="font-semibold text-white">{type}</span>
        </div>
        <StatusBadge status={status} />
      </div>
      <div className="flex justify-between text-sm mb-2">
        <span style={{ color }} className="text-2xl font-bold">{currentValue}{unit}</span>
        <span className="text-gray-400 text-sm self-end">Threshold: {threshold}{unit}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
        <div className="h-2 rounded-full transition-all" style={{ width: pct + "%", background: color }} />
      </div>
      <p className="text-gray-500 text-xs mt-2">Last updated just now</p>
    </div>
  );
}
