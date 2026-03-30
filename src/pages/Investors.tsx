import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck, Brain, TrendingUp, Zap, CheckCircle2, ArrowRight, Users,
  Building2, Globe, Phone, Mail, MessageSquare, ChevronDown, ChevronUp,
} from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const tiers = [
  {
    name: "Starter",
    min: "₹25L",
    color: "#A0A8C0",
    border: "border-white/20",
    features: [
      "Access to 50+ verified properties",
      "Basic AI Risk Scoring",
      "Monthly portfolio report",
      "Email support",
      "1 city focus",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    min: "₹1 Cr",
    color: "#00D1FF",
    border: "border-[#00D1FF]/50",
    glow: "shadow-[0_0_40px_rgba(0,209,255,0.15)]",
    features: [
      "Access to all 200+ properties",
      "Advanced AI Investment Engine",
      "Weekly insights & market signals",
      "Priority support + dedicated RM",
      "Multi-city portfolio diversification",
      "AR/VR tours for all properties",
      "Smart contract automation",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Elite",
    min: "₹5 Cr+",
    color: "#D4AF37",
    border: "border-[#D4AF37]/40",
    glow: "shadow-[0_0_40px_rgba(212,175,55,0.1)]",
    features: [
      "Everything in Growth",
      "Dedicated investment advisor",
      "Off-market deal access",
      "Co-investment opportunities",
      "Custom AI model training",
      "RERA compliance management",
      "Tax & LTCG optimization",
      "Quarterly 1:1 review calls",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const process = [
  { step: "01", title: "Sign Up & KYC", desc: "Complete your profile and KYC in under 10 minutes. Fully digital, zero paperwork." },
  { step: "02", title: "Set Your Goals", desc: "Tell our AI your risk appetite, budget, and preferred cities. It builds your investment thesis." },
  { step: "03", title: "Browse AI-Ranked Properties", desc: "Every property is ranked by ROI, risk score, and fit to your profile. No noise, just signal." },
  { step: "04", title: "Invest via Smart Contract", desc: "Commit your investment through tamper-proof blockchain contracts. Instant, transparent, secure." },
  { step: "05", title: "Track & Grow", desc: "Monitor your portfolio on the dashboard. Get alerts, insights, and quarterly reviews." },
];

const stats = [
  { value: "₹470Cr+", label: "Total AUM Managed", icon: Building2, color: "#00D1FF" },
  { value: "2,400+", label: "Active Investors", icon: Users, color: "#D4AF37" },
  { value: "18 Cities", label: "Across India", icon: Globe, color: "#a78bfa" },
  { value: "92%", label: "Investor Satisfaction", icon: Zap, color: "#22c55e" },
];

const faqs = [
  { q: "What is the minimum investment amount?", a: "You can start investing from ₹25 Lakhs on our Starter plan. Our Growth plan starts at ₹1 Crore, and Elite is for investments above ₹5 Crore." },
  { q: "How does the AI risk scoring work?", a: "Our proprietary ML model analyzes 200+ data points per property including location fundamentals, supply-demand dynamics, builder reputation, legal status, rental yield history, and macro-economic indicators." },
  { q: "Are my investments secure?", a: "Yes. All transactions are executed via blockchain smart contracts which are immutable, transparent, and auditable. We are also RERA registered and comply with all SEBI guidelines." },
  { q: "Can I exit my investment early?", a: "Yes. Our platform facilitates secondary market transactions for most property types. Liquidity timelines vary by property, but our team helps structure exits efficiently." },
  { q: "Do I get rental income?", a: "For rental-yield properties, income is credited to your linked account monthly. Average rental yields on our platform range from 4-7% per annum." },
];

export default function Investors() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", amount: "", message: "" });

  return (
    <div className="min-h-screen bg-[#050A18] text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00D1FF]/4 blur-3xl" />
          <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/4 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div {...fadeUp()}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-xs font-semibold mb-6 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              For HNI & Serious Investors
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Institutional-Grade Returns,{" "}
              <br />
              <span style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Individual Access
              </span>
            </h1>
            <p className="text-[#A0A8C0] text-lg max-w-2xl mx-auto mb-10">
              Join 2,400+ investors who use Aarvasa to build wealth through verified, AI-scored real estate — with the same intelligence that institutional funds use.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#plans"
                className="px-8 py-3.5 rounded-xl text-sm font-bold text-black transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)" }}
              >
                View Investment Plans
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl text-sm font-bold text-white border border-[#00D1FF]/40 hover:bg-[#00D1FF]/10 hover:border-[#00D1FF] transition-all"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}
                className="text-center bg-white/[0.03] border border-white/10 rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-xl mx-auto flex items-center justify-center mb-3" style={{ backgroundColor: s.color + "18" }}>
                  <s.icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
                <p className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.value}</p>
                <p className="text-xs text-[#A0A8C0]">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section id="plans" className="px-6 pb-20">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Investment Plans</h2>
            <p className="text-[#A0A8C0] max-w-xl mx-auto">Choose the plan that matches your investment capacity. All plans include blockchain-secured transactions and AI analytics.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div key={i} {...fadeUp(i * 0.12)}
                className={`relative rounded-2xl border p-6 flex flex-col ${tier.border} ${tier.glow || ""} ${tier.popular ? "bg-white/[0.06]" : "bg-white/[0.03]"}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-black" style={{ background: "linear-gradient(135deg,#00D1FF,#0090cc)" }}>
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-xs text-[#A0A8C0] mb-3">Starting from</p>
                  <p className="text-4xl font-black" style={{ color: tier.color }}>{tier.min}</p>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[#A0A8C0]">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: tier.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-all ${
                    tier.popular
                      ? "text-black hover:shadow-[0_0_20px_rgba(0,209,255,0.4)]"
                      : "text-white border hover:bg-white/5"
                  }`}
                  style={tier.popular
                    ? { background: "linear-gradient(135deg,#00D1FF,#0090cc)" }
                    : { borderColor: tier.color + "60", color: tier.color }
                  }
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#00D1FF]/3 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">How It Works</h2>
            <p className="text-[#A0A8C0]">From sign-up to first return — a streamlined, digital-first process</p>
          </motion.div>
          <div className="flex flex-col gap-4">
            {process.map((p, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}
                className="flex items-start gap-6 bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#00D1FF]/30 transition-all duration-300 group"
              >
                <div className="text-4xl font-black opacity-20 group-hover:opacity-40 transition-opacity flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {p.step}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5 group-hover:text-[#00D1FF] transition-colors">{p.title}</h3>
                  <p className="text-sm text-[#A0A8C0] leading-relaxed">{p.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#A0A8C0] group-hover:text-[#00D1FF] transition-colors flex-shrink-0 mt-1 ml-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-3xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Frequently Asked Questions</h2>
            <p className="text-[#A0A8C0]">Everything serious investors ask before signing up</p>
          </motion.div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}
                className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-white text-sm">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 text-[#00D1FF] flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-[#A0A8C0] flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-[#A0A8C0] leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Consultation */}
      <section id="contact" className="px-6 pb-24">
        <div className="container mx-auto max-w-2xl">
          <motion.div {...fadeUp()} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Book a Consultation</h2>
            <p className="text-[#A0A8C0]">Speak to an investment advisor — no commitment, no pressure. Just clarity.</p>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-[#A0A8C0] mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Rohan Mehta"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#A0A8C0]/50 focus:outline-none focus:border-[#00D1FF]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#A0A8C0] mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="rohan@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#A0A8C0]/50 focus:outline-none focus:border-[#00D1FF]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#A0A8C0] mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#A0A8C0]/50 focus:outline-none focus:border-[#00D1FF]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#A0A8C0] mb-2">Investment Budget</label>
                <select
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D1FF]/50 transition-colors"
                >
                  <option value="" className="bg-[#0A0F2C]">Select budget</option>
                  <option value="25L-50L" className="bg-[#0A0F2C]">₹25L – ₹50L</option>
                  <option value="50L-1Cr" className="bg-[#0A0F2C]">₹50L – ₹1 Crore</option>
                  <option value="1Cr-5Cr" className="bg-[#0A0F2C]">₹1 Crore – ₹5 Crore</option>
                  <option value="5Cr+" className="bg-[#0A0F2C]">₹5 Crore+</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-xs text-[#A0A8C0] mb-2">Message (optional)</label>
              <textarea
                placeholder="Tell us about your investment goals..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#A0A8C0]/50 focus:outline-none focus:border-[#00D1FF]/50 transition-colors resize-none"
              />
            </div>
            <button
              className="w-full py-3.5 rounded-xl text-sm font-bold text-black transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)" }}
            >
              Book My Consultation — Free
            </button>
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-[#A0A8C0]">
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-[#00D1FF]" /> hello@aarvasa.in</span>
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-[#00D1FF]" /> +91 98765 43210</span>
              <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4 text-[#00D1FF]" /> 24/7 Live Chat</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
