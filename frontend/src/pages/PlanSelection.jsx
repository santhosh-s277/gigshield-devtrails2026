import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RiskGauge from "../components/RiskGauge";
import PlanCard from "../components/PlanCard";

const plans = [
  { name: "Basic Shield", price: 29, maxPayout: 500, recommended: false,
    features: ["Rain trigger only", "Max ₹500/week payout", "UPI instant transfer", "Email alerts"] },
  { name: "Standard Shield", price: 49, maxPayout: 900, recommended: true,
    features: ["Rain + Heat + Curfew", "Max ₹900/week payout", "UPI instant transfer", "Priority processing"] },
  { name: "Max Shield", price: 79, maxPayout: 1500, recommended: false,
    features: ["All 5 triggers", "Max ₹1,500/week payout", "UPI instant transfer", "Dedicated support"] },
];

export default function PlanSelection() {
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(false);
  const [upi, setUpi] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (plan) => { setSelected(plan); setModal(true); };

  const handlePay = () => {
    setSuccess(true);
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  return (
    <div className="min-h-screen px-6 py-12" style={{ background: "#0A0F2C" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white mb-3">Choose Your Weekly Shield</h1>
          <p className="text-gray-400">AI-adjusted pricing based on your zone and history</p>
        </div>

        <div className="flex flex-col items-center mb-10">
          <div className="rounded-2xl p-6 border border-white/10 text-center" style={{ background: "#0F1535" }}>
            <RiskGauge score={72} />
            <p className="text-white font-semibold mt-3">Your Zone Risk Score: <span style={{ color: "#FFB347" }}>72/100</span></p>
            <p className="text-gray-400 text-sm mt-1">Based on your zone and history, we recommend <span style={{ color: "#FF6B2C" }}>Standard Shield</span></p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <PlanCard key={i} {...plan} onSelect={() => handleSelect(plan)} />
          ))}
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="rounded-2xl p-8 w-full max-w-sm border border-white/10" style={{ background: "#0F1535" }}>
            {!success ? (
              <>
                <h2 className="text-xl font-bold text-white mb-2 text-center">Confirm Payment</h2>
                <p className="text-gray-400 text-center text-sm mb-6">
                  Paying <span className="text-white font-bold">₹{selected?.price}</span> via UPI for <span style={{ color: "#FF6B2C" }}>{selected?.name}</span>
                </p>
                <label className="text-sm text-gray-400 mb-1 block">UPI ID</label>
                <input value={upi} onChange={e => setUpi(e.target.value)}
                  placeholder="ravi@upi"
                  className="w-full px-4 py-3 rounded-xl text-white outline-none text-sm mb-4"
                  style={{ background: "#0A0F2C", border: "1px solid rgba(255,255,255,0.1)" }} />
                <button onClick={handlePay}
                  className="w-full py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90 mb-3"
                  style={{ background: "#FF6B2C" }}>Pay Now ₹{selected?.price}</button>
                <button onClick={() => setModal(false)}
                  className="w-full py-2 rounded-full text-gray-400 text-sm border border-white/10 hover:border-white/30">
                  Cancel
                </button>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-5xl mb-4">✅</p>
                <h2 className="text-xl font-bold text-white mb-2">Payment Successful!</h2>
                <p className="text-gray-400 text-sm">You are now protected under <span style={{ color: "#FF6B2C" }}>{selected?.name}</span></p>
                <p className="text-gray-500 text-xs mt-3">Redirecting to dashboard...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
