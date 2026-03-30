import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Mail, Phone, Building2, MapPin, Shield, CheckCircle2,
  ChevronRight, ChevronLeft, Eye, EyeOff, Lock, Zap, ArrowRight,
  BadgeCheck, TrendingUp, Brain,
} from "lucide-react";

const steps = ["Personal Info", "Investment Profile", "Security & KYC", "Review & Start"];

const cities = ["Bangalore", "Mumbai", "Delhi NCR", "Hyderabad", "Pune", "Chennai", "Ahmedabad", "Kolkata"];
const budgets = ["₹25L – ₹50L", "₹50L – ₹1 Crore", "₹1 Crore – ₹5 Crore", "₹5 Crore+"];
const riskLevels = [
  { id: "conservative", label: "Conservative", desc: "Stable returns, lower risk. Prioritize capital safety.", color: "#22c55e" },
  { id: "moderate", label: "Moderate", desc: "Balanced risk-return. Diversified portfolio approach.", color: "#00D1FF" },
  { id: "aggressive", label: "Aggressive", desc: "High ROI potential. Comfortable with higher volatility.", color: "#D4AF37" },
];
const goals = ["Long-term Wealth Building", "Rental Income", "Capital Appreciation", "Portfolio Diversification", "Retirement Planning"];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  budget: string;
  risk: string;
  selectedCities: string[];
  selectedGoals: string[];
  pan: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
};

export default function SignUp() {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState<FormState>({
    firstName: "", lastName: "", email: "", phone: "",
    budget: "", risk: "", selectedCities: [], selectedGoals: [],
    pan: "", password: "", confirmPassword: "", agree: false,
  });

  const toggleCity = (city: string) => {
    setForm((f) => ({
      ...f,
      selectedCities: f.selectedCities.includes(city)
        ? f.selectedCities.filter((c) => c !== city)
        : [...f.selectedCities, city],
    }));
  };

  const toggleGoal = (goal: string) => {
    setForm((f) => ({
      ...f,
      selectedGoals: f.selectedGoals.includes(goal)
        ? f.selectedGoals.filter((g) => g !== goal)
        : [...f.selectedGoals, goal],
    }));
  };

  const handleSubmit = () => setCompleted(true);

  if (completed) {
    return (
      <div className="min-h-screen bg-[#050A18] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center relative"
            style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)" }}>
            <CheckCircle2 className="w-12 h-12 text-black" />
            <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)" }} />
          </div>
          <h1 className="text-4xl font-black text-white mb-3">You're In.</h1>
          <p className="text-[#A0A8C0] mb-2">Welcome to Aarvasa, <span className="text-white font-semibold">{form.firstName}</span>.</p>
          <p className="text-[#A0A8C0] mb-8 text-sm">Your investor profile is being set up. Our AI is already scanning properties matching your criteria. You'll receive a personalized report within 24 hours.</p>
          <div className="bg-white/[0.04] border border-[#00D1FF]/20 rounded-2xl p-4 mb-8 text-left">
            <p className="text-xs text-[#A0A8C0] mb-3 uppercase tracking-widest font-semibold">Blockchain confirmation</p>
            <div className="flex items-center gap-2 text-sm">
              <BadgeCheck className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
              <span className="text-[#A0A8C0]">Identity verified on-chain</span>
              <span className="ml-auto text-[#22c55e] font-mono text-xs">0x7f3a...9c2d</span>
            </div>
            <div className="flex items-center gap-2 text-sm mt-2">
              <BadgeCheck className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
              <span className="text-[#A0A8C0]">Investor profile minted</span>
              <span className="ml-auto text-[#22c55e] font-mono text-xs">Block #4,291,847</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/dashboard"
              className="flex-1 py-3 rounded-xl text-sm font-bold text-black text-center transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)" }}
            >
              Go to Dashboard
            </Link>
            <Link href="/properties"
              className="flex-1 py-3 rounded-xl text-sm font-bold text-white border border-[#00D1FF]/40 text-center hover:bg-[#00D1FF]/10 transition-all"
            >
              Browse Properties
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050A18] text-white font-sans flex flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="hidden lg:flex flex-col justify-between w-[420px] flex-shrink-0 p-10 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#0B1D3A 0%,#050A18 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#00D1FF]/5 blur-3xl" />
          <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-[#D4AF37]/4 blur-3xl" />
        </div>

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 group mb-16">
            <div className="w-6 h-6 rotate-45 border-2 border-[#D4AF37]" />
            <span className="text-2xl font-bold" style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Aarvasa
            </span>
          </Link>

          <h2 className="text-4xl font-black leading-tight mb-4">
            Start Building<br />
            <span style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Real Wealth
            </span>
          </h2>
          <p className="text-[#A0A8C0] text-sm leading-relaxed mb-10">
            Join 2,400+ investors who've moved from gut-feel to data-driven real estate decisions — powered by AI and secured by blockchain.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { icon: Brain, color: "#00D1FF", title: "AI-matched properties", desc: "Your first recommendations in under 2 minutes" },
              { icon: Shield, color: "#22c55e", title: "Blockchain-secured profile", desc: "Your identity & transactions on-chain, always" },
              { icon: TrendingUp, color: "#D4AF37", title: "Avg 18.3% projected ROI", desc: "Across our current verified listings" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/[0.03] border border-white/8 rounded-xl p-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color + "18" }}>
                  <item.icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-[#A0A8C0] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-10">
          <div className="flex items-center gap-2 text-xs text-[#A0A8C0]">
            <Lock className="w-3.5 h-3.5 text-[#22c55e]" />
            256-bit encrypted · RERA registered · SEBI compliant
          </div>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 min-h-screen">
        {/* Mobile logo */}
        <Link href="/" className="flex items-center gap-2 mb-8 lg:hidden self-start">
          <div className="w-5 h-5 rotate-45 border-2 border-[#D4AF37]" />
          <span className="text-xl font-bold" style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Aarvasa
          </span>
        </Link>

        <div className="w-full max-w-lg">
          {/* Steps indicator */}
          <div className="flex items-center gap-0 mb-10">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      i < step ? "text-black" : i === step ? "text-black" : "bg-white/10 text-[#A0A8C0]"
                    }`}
                    style={i <= step ? { background: "linear-gradient(135deg,#D4AF37,#F5D76E)" } : {}}
                  >
                    {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                  </div>
                  <span className={`text-[10px] mt-1.5 text-center leading-tight hidden sm:block ${i === step ? "text-white font-semibold" : "text-[#A0A8C0]"}`}>
                    {s}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-[2px] flex-1 mx-1 rounded-full transition-all duration-500 ${i < step ? "" : "bg-white/10"}`}
                    style={i < step ? { background: "linear-gradient(90deg,#D4AF37,#F5D76E)" } : {}} />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Personal Info */}
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <h2 className="text-3xl font-black mb-1">Create your account</h2>
                <p className="text-[#A0A8C0] text-sm mb-8">Start with your basic details. Takes about 30 seconds.</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <FormField label="First Name" icon={<User className="w-4 h-4" />} placeholder="Rohan" value={form.firstName} onChange={(v) => setForm({ ...form, firstName: v })} />
                  <FormField label="Last Name" placeholder="Mehta" value={form.lastName} onChange={(v) => setForm({ ...form, lastName: v })} />
                </div>
                <FormField label="Email Address" icon={<Mail className="w-4 h-4" />} placeholder="rohan@example.com" value={form.email} onChange={(v) => setForm({ ...form, email: v })} className="mb-4" />
                <FormField label="Phone Number" icon={<Phone className="w-4 h-4" />} placeholder="+91 98765 43210" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} className="mb-8" />
                <p className="text-xs text-[#A0A8C0] mb-6 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#22c55e]" />
                  Your data is encrypted and never shared with third parties.
                </p>
              </motion.div>
            )}

            {/* Step 2: Investment Profile */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <h2 className="text-3xl font-black mb-1">Your investment profile</h2>
                <p className="text-[#A0A8C0] text-sm mb-8">Help our AI build the right portfolio strategy for you.</p>

                <div className="mb-6">
                  <label className="block text-xs text-[#A0A8C0] mb-2 uppercase tracking-widest">Investment Budget</label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgets.map((b) => (
                      <button key={b} onClick={() => setForm({ ...form, budget: b })}
                        className={`py-3 px-4 rounded-xl border text-sm font-medium text-left transition-all duration-200 ${form.budget === b ? "border-[#D4AF37] text-white" : "border-white/10 text-[#A0A8C0] hover:border-white/30"}`}
                        style={form.budget === b ? { background: "rgba(212,175,55,0.08)" } : {}}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs text-[#A0A8C0] mb-2 uppercase tracking-widest">Risk Appetite</label>
                  <div className="flex flex-col gap-2">
                    {riskLevels.map((r) => (
                      <button key={r.id} onClick={() => setForm({ ...form, risk: r.id })}
                        className={`py-3.5 px-4 rounded-xl border text-left transition-all duration-200 ${form.risk === r.id ? "border-opacity-60" : "border-white/10 hover:border-white/30"}`}
                        style={form.risk === r.id ? { borderColor: r.color + "90", background: r.color + "0d" } : {}}
                      >
                        <span className="font-semibold text-sm text-white block" style={form.risk === r.id ? { color: r.color } : {}}>{r.label}</span>
                        <span className="text-xs text-[#A0A8C0] mt-0.5 block">{r.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs text-[#A0A8C0] mb-2 uppercase tracking-widest">Preferred Cities (select all that apply)</label>
                  <div className="flex flex-wrap gap-2">
                    {cities.map((c) => (
                      <button key={c} onClick={() => toggleCity(c)}
                        className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 ${form.selectedCities.includes(c) ? "border-[#00D1FF] text-[#00D1FF] bg-[#00D1FF]/10" : "border-white/10 text-[#A0A8C0] hover:border-white/30"}`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-xs text-[#A0A8C0] mb-2 uppercase tracking-widest">Investment Goals</label>
                  <div className="flex flex-col gap-2">
                    {goals.map((g) => (
                      <button key={g} onClick={() => toggleGoal(g)}
                        className={`flex items-center gap-3 py-3 px-4 rounded-xl border text-sm text-left transition-all duration-200 ${form.selectedGoals.includes(g) ? "border-[#00D1FF]/60 bg-[#00D1FF]/8 text-white" : "border-white/10 text-[#A0A8C0] hover:border-white/30"}`}
                      >
                        <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${form.selectedGoals.includes(g) ? "bg-[#00D1FF] border-[#00D1FF]" : "border-white/20"}`}>
                          {form.selectedGoals.includes(g) && <CheckCircle2 className="w-3 h-3 text-black" />}
                        </div>
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Security & KYC */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <h2 className="text-3xl font-black mb-1">Security & Verification</h2>
                <p className="text-[#A0A8C0] text-sm mb-8">Your profile will be verified and minted on blockchain for maximum security.</p>

                <div className="bg-white/[0.03] border border-[#00D1FF]/20 rounded-2xl p-5 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-[#00D1FF]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Blockchain Identity Layer</p>
                      <p className="text-xs text-[#A0A8C0]">Your investor profile will be cryptographically secured</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {["Identity hash stored on Ethereum L2", "All transactions signed with your wallet key", "RERA compliance auto-verified on-chain"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#A0A8C0]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <FormField label="PAN Number" icon={<BadgeCheck className="w-4 h-4" />} placeholder="ABCDE1234F" value={form.pan} onChange={(v) => setForm({ ...form, pan: v.toUpperCase() })} className="mb-4" />

                <div className="mb-4 relative">
                  <label className="block text-xs text-[#A0A8C0] mb-2 uppercase tracking-widest">Create Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A8C0]" />
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Min 8 characters"
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-11 py-3 text-sm text-white placeholder-[#A0A8C0]/50 focus:outline-none focus:border-[#00D1FF]/50 transition-colors"
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A0A8C0] hover:text-white transition-colors">
                      {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <FormField
                  label="Confirm Password" icon={<Lock className="w-4 h-4" />}
                  placeholder="Re-enter password" value={form.confirmPassword}
                  onChange={(v) => setForm({ ...form, confirmPassword: v })}
                  type="password" className="mb-6"
                />

                <label className="flex items-start gap-3 cursor-pointer mb-8">
                  <div onClick={() => setForm({ ...form, agree: !form.agree })}
                    className={`w-5 h-5 rounded border mt-0.5 flex items-center justify-center flex-shrink-0 transition-all ${form.agree ? "bg-[#D4AF37] border-[#D4AF37]" : "border-white/20"}`}>
                    {form.agree && <CheckCircle2 className="w-3.5 h-3.5 text-black" />}
                  </div>
                  <span className="text-sm text-[#A0A8C0] leading-relaxed">
                    I agree to Aarvasa's <span className="text-white underline cursor-pointer">Terms of Service</span>, <span className="text-white underline cursor-pointer">Privacy Policy</span>, and consent to KYC verification and on-chain identity storage.
                  </span>
                </label>
              </motion.div>
            )}

            {/* Step 4: Review */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <h2 className="text-3xl font-black mb-1">Review & Launch</h2>
                <p className="text-[#A0A8C0] text-sm mb-8">Everything looks good — confirm and your AI portfolio engine starts immediately.</p>

                <div className="flex flex-col gap-3 mb-6">
                  <ReviewSection title="Personal Info">
                    <ReviewRow label="Name" value={`${form.firstName} ${form.lastName}`} />
                    <ReviewRow label="Email" value={form.email} />
                    <ReviewRow label="Phone" value={form.phone} />
                  </ReviewSection>
                  <ReviewSection title="Investment Profile">
                    <ReviewRow label="Budget" value={form.budget || "—"} />
                    <ReviewRow label="Risk" value={form.risk ? form.risk.charAt(0).toUpperCase() + form.risk.slice(1) : "—"} />
                    <ReviewRow label="Cities" value={form.selectedCities.length > 0 ? form.selectedCities.join(", ") : "—"} />
                    <ReviewRow label="Goals" value={form.selectedGoals.length > 0 ? `${form.selectedGoals.length} selected` : "—"} />
                  </ReviewSection>
                  <ReviewSection title="Security">
                    <ReviewRow label="PAN" value={form.pan ? form.pan.slice(0, 3) + "•••••" + form.pan.slice(-2) : "—"} />
                    <ReviewRow label="Blockchain ID" value="Will be assigned on submission" color="#00D1FF" />
                  </ReviewSection>
                </div>

                <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-4 mb-8 flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <p className="text-sm text-[#A0A8C0]">
                    <span className="text-[#D4AF37] font-semibold">AI activation:</span> Your first 5 matched properties will appear on your dashboard within 2 minutes of submission.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between gap-4">
            {step > 0 ? (
              <button onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-sm font-medium text-[#A0A8C0] hover:text-white hover:border-white/30 transition-all">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            ) : (
              <Link href="/" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-sm font-medium text-[#A0A8C0] hover:text-white hover:border-white/30 transition-all">
                <ChevronLeft className="w-4 h-4" /> Home
              </Link>
            )}

            {step < steps.length - 1 ? (
              <button onClick={() => setStep(step + 1)}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-black transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)" }}>
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={handleSubmit}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-black transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)" }}>
                Start Investing <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          <p className="text-center text-sm text-[#A0A8C0] mt-6">
            Already have an account?{" "}
            <Link href="/dashboard" className="text-[#00D1FF] hover:underline font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function FormField({
  label, icon, placeholder, value, onChange, className = "", type = "text",
}: {
  label: string; icon?: React.ReactNode; placeholder: string; value: string;
  onChange: (v: string) => void; className?: string; type?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs text-[#A0A8C0] mb-2 uppercase tracking-widest">{label}</label>
      <div className="relative">
        {icon && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A8C0]">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-white/5 border border-white/10 rounded-xl ${icon ? "pl-11" : "pl-4"} pr-4 py-3 text-sm text-white placeholder-[#A0A8C0]/50 focus:outline-none focus:border-[#00D1FF]/50 transition-colors`}
        />
      </div>
    </div>
  );
}

function ReviewSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
      <div className="px-4 py-2.5 border-b border-white/5 text-xs font-semibold text-[#A0A8C0] uppercase tracking-widest">{title}</div>
      <div className="p-4 flex flex-col gap-2">{children}</div>
    </div>
  );
}

function ReviewRow({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-[#A0A8C0]">{label}</span>
      <span className="font-medium" style={{ color: color || "white" }}>{value}</span>
    </div>
  );
}
