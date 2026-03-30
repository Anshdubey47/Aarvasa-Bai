import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp, TrendingDown, Building2, IndianRupee, BarChart3, ShieldCheck,
  Bell, Settings, ArrowUpRight, Clock, Plus, Download, Wallet,
} from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { properties } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const portfolioStats = [
  { label: "Total Invested", value: "₹45.2L", change: null, icon: Wallet, color: "#D4AF37" },
  { label: "Current Value", value: "₹53.8L", change: "+19.2%", positive: true, icon: TrendingUp, color: "#22c55e" },
  { label: "Monthly Income", value: "₹1.2L", change: "+8.4%", positive: true, icon: IndianRupee, color: "#00D1FF" },
  { label: "Total Properties", value: "6", change: null, icon: Building2, color: "#a78bfa" },
];

const recentActivity = [
  { type: "dividend", desc: "Rental income credited — Prestige Skyline", amount: "+₹38,400", time: "2h ago", positive: true },
  { type: "analysis", desc: "AI re-scored — Embassy Springs (8.1 → 8.4)", amount: "Score ↑", time: "6h ago", positive: true },
  { type: "alert", desc: "Market signal: Buy opportunity — Hyderabad", amount: "New Signal", time: "1d ago", positive: true },
  { type: "valuation", desc: "Portfolio valuation updated", amount: "+₹1.4L", time: "2d ago", positive: true },
  { type: "contract", desc: "Smart contract renewed — DLF Magnolias", amount: "Renewed", time: "3d ago", positive: null },
];

const portfolioProperties = [
  { name: "Prestige Skyline Tower", location: "Bangalore", invested: "₹8.4L", current: "₹10.2L", roi: "21.4%", risk: 8.4, status: "Active" },
  { name: "Lodha Altamount", location: "Mumbai", invested: "₹12.1L", current: "₹14.0L", roi: "15.7%", risk: 9.1, status: "Active" },
  { name: "DLF Magnolias", location: "Gurgaon", invested: "₹9.6L", current: "₹11.0L", roi: "14.6%", risk: 8.7, status: "Active" },
  { name: "Embassy Springs", location: "Bangalore", invested: "₹6.2L", current: "₹7.5L", roi: "20.9%", risk: 7.9, status: "Active" },
  { name: "Godrej Emerald", location: "Pune", invested: "₹4.8L", current: "₹5.6L", roi: "16.7%", risk: 8.2, status: "Active" },
  { name: "Phoenix Palladium", location: "Chennai", invested: "₹4.1L", current: "₹5.5L", roi: "34.1%", risk: 8.8, status: "Active" },
];

const roiCurveX = [0, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600];
const roiCurveY = [160, 148, 135, 142, 122, 108, 90, 72, 55, 38, 20];
const roiPath = roiCurveX.map((x, i) => `${i === 0 ? "M" : "L"}${x},${roiCurveY[i]}`).join(" ");

const allocationData = [
  { city: "Bangalore", pct: 35, color: "#00D1FF" },
  { city: "Mumbai", pct: 27, color: "#D4AF37" },
  { city: "Gurgaon", pct: 21, color: "#a78bfa" },
  { city: "Pune", pct: 10, color: "#22c55e" },
  { city: "Chennai", pct: 7, color: "#f97316" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"portfolio" | "activity">("portfolio");

  return (
    <div className="min-h-screen bg-[#050A18] text-white font-sans overflow-x-hidden">
      <Navbar />

      <div className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Top bar */}
          <motion.div {...fadeUp()} className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-black text-white">Investor Dashboard</h1>
              <p className="text-[#A0A8C0] text-sm mt-1">Welcome back, Rohan — your portfolio is performing well</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A0A8C0] hover:text-[#00D1FF] transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A0A8C0] hover:text-[#00D1FF] transition-colors">
                <Settings className="w-4 h-4" />
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-black"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)" }}
              >
                <Plus className="w-4 h-4" />
                Add Property
              </button>
            </div>
          </motion.div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {portfolioStats.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-[#00D1FF]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: s.color + "18" }}>
                    <s.icon className="w-4 h-4" style={{ color: s.color }} />
                  </div>
                  {s.change && (
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.positive ? "text-[#22c55e] bg-[#22c55e]/10" : "text-red-400 bg-red-400/10"}`}>
                      {s.change}
                    </span>
                  )}
                </div>
                <p className="text-2xl font-black text-white mb-1">{s.value}</p>
                <p className="text-xs text-[#A0A8C0]">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* ROI Chart */}
            <motion.div {...fadeUp(0.15)} className="lg:col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-white">Portfolio Performance</h3>
                  <p className="text-xs text-[#A0A8C0] mt-0.5">Past 12 months value growth</p>
                </div>
                <div className="flex items-center gap-1.5 text-[#22c55e] text-sm font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  +19.2% overall
                </div>
              </div>
              <div className="relative h-36">
                <svg viewBox="0 0 600 180" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="roiGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[0, 60, 120, 180].map((y) => (
                    <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  ))}
                  <path d={`${roiPath} L600,180 L0,180 Z`} fill="url(#roiGrad)" />
                  <path d={roiPath} fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="600" cy="20" r="5" fill="#22c55e" />
                  <circle cx="600" cy="20" r="10" fill="#22c55e" opacity="0.2">
                    <animate attributeName="r" values="5;14;5" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0;0.2" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
              <div className="flex justify-between text-xs text-[#A0A8C0] mt-2">
                {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => <span key={m}>{m}</span>)}
              </div>
            </motion.div>

            {/* Allocation */}
            <motion.div {...fadeUp(0.2)} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-1">City Allocation</h3>
              <p className="text-xs text-[#A0A8C0] mb-5">Portfolio diversification</p>
              <div className="flex flex-col gap-3">
                {allocationData.map((a, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#A0A8C0]">{a.city}</span>
                      <span className="font-semibold text-white">{a.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${a.pct}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: a.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-xs text-[#A0A8C0]">Diversification Score</p>
                <p className="text-2xl font-black text-[#00D1FF] mt-1">8.4<span className="text-sm text-[#A0A8C0] font-normal">/10</span></p>
              </div>
            </motion.div>
          </div>

          {/* Tabs: Portfolio Table + Activity */}
          <motion.div {...fadeUp(0.25)} className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
            <div className="flex border-b border-white/10">
              {(["portfolio", "activity"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-semibold transition-colors capitalize ${
                    activeTab === tab ? "text-white border-b-2 border-[#00D1FF]" : "text-[#A0A8C0] hover:text-white"
                  }`}
                >
                  {tab === "portfolio" ? "My Properties" : "Recent Activity"}
                </button>
              ))}
              <div className="ml-auto flex items-center pr-6">
                <button className="flex items-center gap-1.5 text-xs text-[#A0A8C0] hover:text-[#00D1FF] transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  Export
                </button>
              </div>
            </div>

            {activeTab === "portfolio" && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/5">
                      {["Property", "Location", "Invested", "Current", "ROI", "AI Score", "Status"].map((h) => (
                        <th key={h} className="text-left text-xs font-semibold text-[#A0A8C0] uppercase tracking-widest px-5 py-4">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {portfolioProperties.map((p, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                        <td className="px-5 py-4 text-sm font-medium text-white group-hover:text-[#00D1FF] transition-colors">{p.name}</td>
                        <td className="px-5 py-4 text-sm text-[#A0A8C0]">{p.location}</td>
                        <td className="px-5 py-4 text-sm text-[#A0A8C0]">{p.invested}</td>
                        <td className="px-5 py-4 text-sm font-semibold text-white">{p.current}</td>
                        <td className="px-5 py-4 text-sm font-bold text-[#22c55e]">{p.roi}</td>
                        <td className="px-5 py-4">
                          <span className="text-sm font-bold text-[#00D1FF]">{p.risk}</span>
                        </td>
                        <td className="px-5 py-4">
                          <span className="text-xs px-2 py-1 rounded-full bg-[#22c55e]/10 text-[#22c55e] font-medium">{p.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "activity" && (
              <div className="divide-y divide-white/5">
                {recentActivity.map((a, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.02] transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#A0A8C0]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white font-medium truncate">{a.desc}</p>
                      <p className="text-xs text-[#A0A8C0] mt-0.5">{a.time}</p>
                    </div>
                    <span className={`text-sm font-bold flex-shrink-0 ${a.positive ? "text-[#22c55e]" : "text-[#A0A8C0]"}`}>{a.amount}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Bottom metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { label: "Next Maturity", value: "42 days", sub: "Phoenix Palladium contract", color: "#F5D76E" },
              { label: "Rental Income YTD", value: "₹14.4L", sub: "Across 4 properties", color: "#22c55e" },
              { label: "Tax Saved (LTCG)", value: "₹2.1L", sub: "Estimated FY2025-26", color: "#00D1FF" },
            ].map((m, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5"
              >
                <p className="text-xs text-[#A0A8C0] mb-1">{m.label}</p>
                <p className="text-2xl font-black mb-0.5" style={{ color: m.color }}>{m.value}</p>
                <p className="text-xs text-[#A0A8C0]">{m.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
