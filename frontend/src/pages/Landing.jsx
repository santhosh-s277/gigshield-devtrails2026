import React from "react";
import { Link } from "react-router-dom";
import { Shield, Zap, IndianRupee, CloudRain, Thermometer, Wind, Waves } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen" style={{ background: "#0A0F2C" }}>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🛡️</span>
          <span className="text-xl font-extrabold" style={{ color: "#FF6B2C" }}>GigShield</span>
        </div>
        <Link to="/login" className="px-5 py-2 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-orange-500 transition-all">
          Login
        </Link>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-20 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-6 border" style={{ background: "#FF6B2C22", color: "#FF6B2C", borderColor: "#FF6B2C44" }}>
          Built for Zomato & Swiggy Riders
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Your Income.<br />
          <span style={{ color: "#FF6B2C" }}>Protected.</span> Automatically.
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          When rain stops your deliveries, GigShield pays you instantly. No forms. No calls. No waiting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register" className="px-8 py-4 rounded-full font-bold text-white text-lg transition-opacity hover:opacity-90"
            style={{ background: "#FF6B2C" }}>Get Protected Now</Link>
          <a href="#how" className="px-8 py-4 rounded-full font-bold text-white text-lg border border-white/20 hover:border-orange-500 transition-all">
            See How It Works
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-3">Ravi loses <span style={{ color: "#FF4444" }}>₹4,000</span> every monsoon month</h2>
        <p className="text-gray-400 text-center mb-10">15 million delivery workers. Zero protection. Until now.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: "₹500-800", label: "Daily earnings at risk", icon: IndianRupee },
            { value: "20-30%", label: "Monthly income lost to disruptions", icon: CloudRain },
            { value: "0", label: "Insurance products built for riders", icon: Shield },
          ].map(({ value, label, icon: Icon }, i) => (
            <div key={i} className="rounded-2xl p-6 text-center border border-white/10" style={{ background: "#0F1535" }}>
              <Icon size={28} className="mx-auto mb-3" style={{ color: "#FF6B2C" }} />
              <p className="text-4xl font-extrabold text-white mb-2">{value}</p>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">How GigShield Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {[
            { step: "01", label: "Register in 2 minutes" },
            { step: "02", label: "Pick your weekly shield plan" },
            { step: "03", label: "We monitor rain, heat, AQI, flood, curfew" },
            { step: "04", label: "Trigger detected automatically" },
            { step: "05", label: "Money in your UPI in 2 hours" },
          ].map(({ step, label }, i) => (
            <div key={i} className="rounded-2xl p-5 text-center border border-white/10" style={{ background: "#0F1535" }}>
              <p className="text-3xl font-extrabold mb-2" style={{ color: "#FF6B2C" }}>{step}</p>
              <p className="text-sm text-gray-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-3">Simple Weekly Pricing</h2>
        <p className="text-gray-400 text-center mb-10">Gig workers think week to week — so does GigShield</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Basic Shield", price: 29, payout: 500, recommended: false, features: ["Rain trigger only", "Max ₹500/week payout", "UPI instant transfer"] },
            { name: "Standard Shield", price: 49, payout: 900, recommended: true, features: ["Rain + Heat + Curfew", "Max ₹900/week payout", "UPI instant transfer", "Priority processing"] },
            { name: "Max Shield", price: 79, payout: 1500, recommended: false, features: ["All 5 triggers", "Max ₹1,500/week payout", "UPI instant transfer", "Dedicated support"] },
          ].map((plan, i) => (
            <div key={i} className="rounded-2xl p-6 border-2 flex flex-col"
              style={{ background: "#0F1535", borderColor: plan.recommended ? "#FF6B2C" : "rgba(255,255,255,0.08)" }}>
              {plan.recommended && (
                <div className="text-center mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: "#FF6B2C" }}>⭐ Recommended</span>
                </div>
              )}
              <h3 className="text-xl font-bold text-white text-center">{plan.name}</h3>
              <div className="text-center my-4">
                <span className="text-4xl font-extrabold" style={{ color: plan.recommended ? "#FF6B2C" : "#00D4FF" }}>₹{plan.price}</span>
                <span className="text-gray-400 text-sm">/week</span>
              </div>
              <p className="text-center text-sm text-gray-400 mb-4">Max payout: <span className="font-bold" style={{ color: "#00E676" }}>₹{plan.payout}</span></p>
              <ul className="space-y-2 flex-1 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <span style={{ color: "#00E676" }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link to="/register" className="w-full py-3 rounded-full font-bold text-white text-center block transition-opacity hover:opacity-90"
                style={{ background: plan.recommended ? "#FF6B2C" : "transparent", border: plan.recommended ? "none" : "2px solid #FF6B2C" }}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center">
        <p className="text-xl font-extrabold mb-1" style={{ color: "#FF6B2C" }}>🛡️ GigShield</p>
        <p className="text-gray-500 text-sm">Because Ravi deserves a safety net. | Guidewire DEVTrails 2026</p>
      </footer>
    </div>
  );
}
