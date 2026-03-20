import React, { useState } from "react";
import StatusBadge from "./StatusBadge";

export default function ClaimCard({ id, type, date, zone, status, amount }) {
  const [open, setOpen] = useState(false);
  const isPaid = status === "Paid";

  return (
    <>
      <div onClick={() => setOpen(true)}
        className="rounded-xl p-4 border border-white/10 cursor-pointer transition-transform hover:-translate-y-1"
        style={{ background: "#0F1535" }}>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-bold text-white">{id} — {type} Trigger</p>
            <p className="text-gray-400 text-sm mt-1">{date}</p>
            <p className="text-gray-400 text-sm">{zone}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold" style={{ color: isPaid ? "#00E676" : "#FFB347" }}>₹{amount}</p>
            <div className="mt-1"><StatusBadge status={status} /></div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setOpen(false)}>
          <div className="rounded-2xl p-6 w-full max-w-md" style={{ background: "#0F1535" }} onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-white mb-4">Claim Details — {id}</h3>
            <div className="space-y-2 text-sm text-gray-300 mb-6">
              <p><span className="text-gray-500">Trigger:</span> {type}</p>
              <p><span className="text-gray-500">Date:</span> {date}</p>
              <p><span className="text-gray-500">Zone:</span> {zone}</p>
              <p><span className="text-gray-500">Amount:</span> <span className="text-green-400 font-bold">₹{amount}</span></p>
              <p><span className="text-gray-500">Status:</span> <StatusBadge status={status} /></p>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-400 text-sm font-semibold mb-3">Status Timeline</p>
              {[
                { label: "Trigger Detected", time: "Jan 15, 2:30 PM", done: true },
                { label: "Claim Validated", time: "Jan 15, 2:35 PM", done: true },
                { label: "Approved", time: "Jan 15, 2:40 PM", done: isPaid },
                { label: "Paid to UPI", time: "Jan 15, 4:30 PM", done: isPaid },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 mb-2">
                  <span className="text-lg">{s.done ? "✅" : "⏳"}</span>
                  <div>
                    <p className={`text-sm font-medium ${s.done ? "text-white" : "text-gray-500"}`}>{s.label}</p>
                    <p className="text-xs text-gray-500">{s.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setOpen(false)}
              className="mt-4 w-full py-2 rounded-full font-semibold text-white"
              style={{ background: "#FF6B2C" }}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
