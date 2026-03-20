import React from "react";
export default function StatusBadge({ status }) {
  const styles = {
    TRIGGERED: "bg-red-500 text-white",
    WARNING: "bg-yellow-500 text-black",
    SAFE: "bg-green-500 text-black",
    Paid: "bg-green-500 text-black",
    Processing: "bg-yellow-500 text-black",
    Approved: "bg-blue-500 text-white",
    Rejected: "bg-red-500 text-white",
    SUCCESS: "bg-green-500 text-black",
    PENDING: "bg-yellow-500 text-black",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${styles[status] || "bg-gray-500 text-white"}`}>
      {status}
    </span>
  );
}
