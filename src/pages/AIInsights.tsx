import { motion } from "framer-motion";
import { Brain, TrendingUp, TrendingDown, BarChart3, Globe, Zap, ArrowUpRight, ChevronRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const cityHeatmap = [
  { city: "Bangalore", score: 92, trend: "+4.2%", type: "Hot", color: "#00D1FF" },
  { city: "Mumbai", score: 88, trend: "+2.8%", type: "Strong", color: "#22c55e" },
  { city: "Hyderabad", score: 85, trend: "+5.1%", type: "Hot", color: "#00D1FF" },
  { city: "Pune", score: 79, trend: "+3.4%", type: "Growing", color: "#F5D76E" },
  { city: "Gurgaon", score: 76, trend: "+1.9%", type: "Stable", color: "#A0A8C0" },
  { city: "Chennai", score: 72, trend: "+2.2%", type: "Stable", color: "#A0A8C0" },
];

const signals = [
  { icon: CheckCircle2, color: "#22c55e", label: "Strong Buy Signal", desc: "Whitefield, Bangalore — 3BHK segment showing 23% demand surge over 60 days" },
  { icon: CheckCircle2, color: "#22c55e", label: "High Appreciation Zone", desc: "Baner, Pune — Infrastructure development accelerating price growth (+18% YoY)" },
  { icon: AlertTriangle, color: "#F5D76E", label: "Monitor Closely", desc: "Noida Expressway — Oversupply risk detected. Rental yields under pressure." },
  { icon: AlertTriangle, color: "#F5D76E", label: "Wait & Watch", desc: "South Mumbai — Premium segment cooling. AI signals a 6-month correction phase." },
];

const predictions = [
  { label: "Bangalore Tech Corridor", value: "+22.4%", period: "12-month", confidence: 91 },
  { label: "Hyderabad Financial District", value: "+19.8%", period: "12-month", confidence: 87 },
  { label: "Pune NIBM Road", value: "+16.3%", period: "12-month", confidence: 83 },
  { label: "Mumbai Thane Micro-market", value: "+14.1%", period: "12-month", confidence: 79 },
  { label: "Chennai OMR Tech Park Zone", value: "+13.7%", period: "12-month", confidence: 76 },
];

const chartPoints = [
  [0, 180], [60, 160], [120, 145], [180, 165], [240, 150], [300, 130], [360, 100], [420, 75], [480, 60], [540, 40], [600, 20],
];
const chartPath = chartPoints.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");

const insights = [
  { icon: Brain, title: "AI Market Scan", value: "1,240", label: "data points analyzed today", color: "#00D1FF" },
  { icon: Globe, title: "Cities Monitored", value: "18", label: "tier-1 & tier-2 markets", color: "#D4AF37" },
  { icon: TrendingUp, title: "Opportunities Flagged", value: "34", label: "high-confidence buy signals", color: "#22c55e" },
  { icon: Zap, title: "Avg Prediction Accuracy", value: "89.3%", label: "backtested over 5 years", color: "#a78bfa" },
];

export default function AIInsights() {
  return (
    <div className="min-h-screen bg-[#050A18] text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/3 w-96 h-96 rounded-full bg-[#00D1FF]/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#a78bfa]/5 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div {...fadeUp()}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D1FF]/30 bg-[#00D1FF]/5 text-[#00D1FF] text-xs font-semibold mb-6 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse" />
              Powered by Aarvasa ML Engine v4.2
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
              AI-Powered Market{" "}
              <span style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Intelligence
              </span>
            </h1>
            <p className="text-[#A0A8C0] text-lg max-w-2xl">
              Our AI ingests macro trends, micro-market signals, infrastructure data, and transaction history to surface opportunities before they become obvious.
            </p>
          </motion.div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="px-6 pb-14">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {insights.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-[#00D1FF]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: item.color + "18" }}>
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <p className="text-2xl font-black text-white mb-0.5" style={{ color: item.color }}>{item.value}</p>
                <p className="text-xs text-[#A0A8C0] leading-snug">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Forecast Chart */}
      <section className="px-6 pb-14">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp()} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">Projected Appreciation Curve</h2>
                <p className="text-sm text-[#A0A8C0] mt-1">AI model forecast — Bangalore Tech Corridor, next 12 months</p>
              </div>
              <span className="text-[#22c55e] font-bold text-lg">+22.4%</span>
            </div>

            <div className="relative h-40">
              <svg viewBox="0 0 600 200" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#00D1FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={`${chartPath} L600,200 L0,200 Z`} fill="url(#chartGrad)" />
                <path d={chartPath} fill="none" stroke="#00D1FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                {chartPoints.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3.5" fill="#00D1FF" opacity={i === chartPoints.length - 1 ? 1 : 0.4} />
                ))}
              </svg>
              <div className="absolute top-2 right-2 text-xs text-[#A0A8C0]">
                <span className="inline-block w-3 h-0.5 bg-[#00D1FF] mr-1 align-middle" />
                AI Forecast
              </div>
            </div>

            <div className="mt-4 flex gap-6 text-sm text-[#A0A8C0]">
              <span>Jan 2025</span>
              <span className="ml-auto">Dec 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* City Heatmap */}
      <section className="px-6 pb-14">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp()} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Market Heat Index</h2>
            <p className="text-[#A0A8C0]">AI-generated demand-supply scoring across India's top real estate markets</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityHeatmap.map((c, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-[#00D1FF]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{c.city}</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ color: c.color, backgroundColor: c.color + "18" }}>{c.type}</span>
                </div>
                <div className="flex items-end gap-3 mb-3">
                  <span className="text-4xl font-black" style={{ color: c.color }}>{c.score}</span>
                  <span className="text-sm text-[#22c55e] mb-1 font-medium">{c.trend} YoY</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}88)` }}
                  />
                </div>
                <p className="text-xs text-[#A0A8C0] mt-2">Market Score out of 100</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Signals */}
      <section className="px-6 pb-14">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp()} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Live AI Signals</h2>
            <p className="text-[#A0A8C0]">Updated every 4 hours from market data feeds</p>
          </motion.div>
          <div className="flex flex-col gap-4">
            {signals.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex items-start gap-4 hover:border-[#00D1FF]/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center" style={{ backgroundColor: s.color + "18" }}>
                  <s.icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white mb-1" style={{ color: s.color }}>{s.label}</p>
                  <p className="text-sm text-[#A0A8C0]">{s.desc}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A0A8C0] group-hover:text-[#00D1FF] transition-colors flex-shrink-0 mt-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Predictions Table */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp()} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Top Appreciation Predictions</h2>
            <p className="text-[#A0A8C0]">AI confidence-weighted forecasts for the next 12 months</p>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-xs font-semibold text-[#A0A8C0] uppercase tracking-widest px-6 py-4">Micro-market</th>
                  <th className="text-center text-xs font-semibold text-[#A0A8C0] uppercase tracking-widest px-4 py-4">Forecast</th>
                  <th className="text-center text-xs font-semibold text-[#A0A8C0] uppercase tracking-widest px-4 py-4">Period</th>
                  <th className="text-right text-xs font-semibold text-[#A0A8C0] uppercase tracking-widest px-6 py-4">AI Confidence</th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((p, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-white">{p.label}</td>
                    <td className="px-4 py-4 text-center">
                      <span className="font-bold text-[#22c55e]">{p.value}</span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-[#A0A8C0]">{p.period}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3 justify-end">
                        <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#00D1FF]"
                            style={{ width: `${p.confidence}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-[#00D1FF] w-10 text-right">{p.confidence}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
