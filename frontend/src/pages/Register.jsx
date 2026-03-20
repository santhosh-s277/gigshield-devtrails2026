import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", password: "", city: "", pinCode: "", platform: "Zomato", experience: "" });
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Name is required";
    if (!form.mobile || form.mobile.length !== 10) e.mobile = "Enter valid 10-digit mobile";
    if (!form.email) e.email = "Email is required";
    if (!form.password || form.password.length < 6) e.password = "Min 6 characters";
    if (!form.city) e.city = "Select a city";
    if (!form.pinCode || form.pinCode.length !== 6) e.pinCode = "Enter valid 6-digit pin code";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    login("rider");
    navigate("/plans");
  };

  const Field = ({ name, label, type = "text", placeholder }) => (
    <div>
      <label className="text-sm text-gray-400 mb-1 block">{label}</label>
      <input value={form[name]} onChange={e => setForm({ ...form, [name]: e.target.value })}
        type={type} placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl text-white outline-none text-sm"
        style={{ background: "#0A0F2C", border: `1px solid ${errors[name] ? "#FF4444" : "rgba(255,255,255,0.1)"}` }} />
      {errors[name] && <p className="text-red-400 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10" style={{ background: "#0A0F2C" }}>
      <div className="w-full max-w-lg rounded-2xl p-8 border border-white/10" style={{ background: "#0F1535" }}>
        <div className="text-center mb-8">
          <p className="text-4xl mb-2">🛡️</p>
          <h1 className="text-2xl font-extrabold text-white">Create your account</h1>
          <p className="text-gray-400 text-sm mt-1">Get protected in 2 minutes</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field name="name" label="Full Name" placeholder="Ravi Kumar" />
          <Field name="mobile" label="Mobile Number" placeholder="9876543210" />
          <Field name="email" label="Email" type="email" placeholder="ravi@example.com" />
          <Field name="password" label="Password" type="password" placeholder="Min 6 characters" />
          <div>
            <label className="text-sm text-gray-400 mb-1 block">City</label>
            <select value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-white outline-none text-sm"
              style={{ background: "#0A0F2C", border: `1px solid ${errors.city ? "#FF4444" : "rgba(255,255,255,0.1)"}` }}>
              <option value="">Select city</option>
              {["Chennai", "Mumbai", "Bangalore", "Hyderabad", "Delhi"].map(c => <option key={c}>{c}</option>)}
            </select>
            {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
          </div>
          <Field name="pinCode" label="Pin Code" placeholder="600001" />
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Delivery Platform</label>
            <div className="flex gap-4">
              {["Swiggy", "Zomato", "Both"].map(p => (
                <label key={p} className="flex items-center gap-2 cursor-pointer text-sm text-gray-300">
                  <input type="radio" value={p} checked={form.platform === p} onChange={e => setForm({ ...form, platform: e.target.value })}
                    style={{ accentColor: "#FF6B2C" }} />
                  {p}
                </label>
              ))}
            </div>
          </div>
          <Field name="experience" label="Years of Experience" type="number" placeholder="2" />
          <button type="submit"
            className="w-full py-3 rounded-full font-bold text-white text-lg mt-2 transition-opacity hover:opacity-90"
            style={{ background: "#FF6B2C" }}>
            Create Account
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account? <Link to="/login" className="font-semibold" style={{ color: "#FF6B2C" }}>Login</Link>
        </p>
      </div>
    </div>
  );
}
