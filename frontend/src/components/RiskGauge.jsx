import React from "react";

export default function RiskGauge({ score }) {
  const color = score <= 40 ? "#00E676" : score <= 70 ? "#FFB347" : "#FF4444";
  const r = 40, cx = 60, cy = 60;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;

  return (
    <div className="flex flex-col items-center">
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1a2040" strokeWidth="10" />
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
          transform={`rotate(-90 ${cx} ${cy})`} />
        <text x={cx} y={cy + 6} textAnchor="middle" fontSize="20" fontWeight="bold" fill={color}>{score}</text>
      </svg>
      <p className="text-xs text-gray-400 mt-1">Risk Score</p>
    </div>
  );
}
