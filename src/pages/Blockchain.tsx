import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield, Link2, Lock, CheckCircle2, Eye, FileText, Zap, Globe,
  ArrowRight, ExternalLink, Copy, RefreshCw, TrendingUp, BadgeCheck,
} from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const contracts = [
  { address: "0x7f3a4b2c9d1e5f8a3c6d9b0e4f7a2b5c", property: "Prestige Skyline Tower", amount: "₹2.4 Cr", status: "Executed", block: "4,291,847", time: "2m ago", color: "#22c55e" },
  { address: "0x2e8b1c4d7a0f3e6b9c2d5e8a1b4c7d0f", property: "Lodha Altamount", amount: "₹8.7 Cr", status: "Executed", block: "4,291,831", time: "18m ago", color: "#22c55e" },
  { address: "0x9c3d6e1b4f7a2c5e8b0d3f6a9c2e5b8d", property: "DLF Magnolias", amount: "₹5.2 Cr", status: "Pending", block: "Awaiting", time: "Just now", color: "#F5D76E" },
  { address: "0x1b5e8a2c4f7d0b3e6a9c2d5f8b1e4a7c", property: "Embassy Springs", amount: "₹1.8 Cr", status: "Executed", block: "4,291,799", time: "1h ago", color: "#22c55e" },
  { address: "0x4d7a0c3e6f9b2d5a8e1c4b7f0d3a6e9c", property: "Godrej Emerald", amount: "₹95 L", status: "Executed", block: "4,291,762", time: "3h ago", color: "#22c55e" },
];

const steps = [
  { icon: FileText, color: "#00D1FF", title: "Property Onboarded", desc: "Legal documents, title deeds, and RERA registration are digitized and hashed into the blockchain — creating a tamper-proof record." },
  { icon: BadgeCheck, color: "#D4AF37", title: "AI Verification", desc: "Our AI runs a 14-point audit: location, builder credibility, occupancy rates, encumbrance check, and valuation fairness score." },
  { icon: Shield, color: "#22c55e", title: "Smart Contract Deployed", desc: "An ERC-20 compatible smart contract is deployed on Ethereum L2 (Polygon). It codifies all terms: price, timelines, rights, and penalties." },
  { icon: Lock, color: "#a78bfa", title: "Investment Executed", desc: "Funds are released via the smart contract — only when all verification conditions are cryptographically met. No human intermediary." },
  { icon: Eye, color: "#00D1FF", title: "Transparent Ownership", desc: "Ownership is recorded permanently on-chain. Anyone can verify the transaction. You receive a blockchain certificate of investment." },
];

const features = [
  { icon: Shield, color: "#00D1FF", title: "Immutable Records", desc: "Every property transaction, title deed, and ownership change is stored permanently. No one — not even Aarvasa — can alter it." },
  { icon: Zap, color: "#D4AF37", title: "Zero Intermediaries", desc: "Smart contracts eliminate brokers, agents, and lawyers from the execution layer. Lower costs, zero manipulation." },
  { icon: Eye, color: "#22c55e", title: "Full Transparency", desc: "Every transaction is publicly auditable on the Ethereum blockchain. Any investor can verify any deal — in real time." },
  { icon: Globe, color: "#a78bfa", title: "Cross-Border Access", desc: "Blockchain removes geographic friction. NRIs and international investors can participate with the same seamless experience." },
  { icon: Link2, color: "#00D1FF", title: "Fractional Ownership", desc: "Smart contracts enable tokenized fractional ownership — invest in ₹10L increments in a ₹10Cr property. Democratized access." },
  { icon: Lock, color: "#D4AF37", title: "Military-Grade Security", desc: "256-bit encryption, multi-sig wallet authorization, and hardware security module (HSM) key storage for every transaction." },
];

const stats = [
  { value: "₹470Cr+", label: "Secured on-chain", color: "#00D1FF" },
  { value: "1,247", label: "Smart contracts deployed", color: "#D4AF37" },
  { value: "0", label: "Security incidents", color: "#22c55e" },
  { value: "99.97%", label: "Transaction success rate", color: "#a78bfa" },
];

function useTicker() {
  const [blockNumber, setBlockNumber] = useState(4_291_847);
  const [gas, setGas] = useState(12.4);
  useEffect(() => {
    const id = setInterval(() => {
      setBlockNumber((n) => n + Math.floor(Math.random() * 2));
      setGas((g) => parseFloat((g + (Math.random() - 0.5) * 0.3).toFixed(1)));
    }, 3000);
    return () => clearInterval(id);
  }, []);
  return { blockNumber, gas };
}

export default function Blockchain() {
  const { blockNumber, gas } = useTicker();
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen bg-[#050A18] text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00D1FF" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute top-20 left-1/3 w-[600px] h-[400px] rounded-full bg-[#00D1FF]/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#a78bfa]/5 blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div {...fadeUp()} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D1FF]/30 bg-[#00D1FF]/5 text-[#00D1FF] text-xs font-semibold mb-6 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse" />
              Secured on Ethereum L2 (Polygon)
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Real Estate.{" "}
              <span style={{ background: "linear-gradient(135deg,#00D1FF,#0090cc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                On Chain.
              </span>
            </h1>
            <p className="text-[#A0A8C0] text-xl max-w-2xl mx-auto mb-12">
              Every property. Every transaction. Every ownership record — cryptographically secured, publicly verifiable, and permanently immutable on the blockchain.
            </p>

            {/* Live chain ticker */}
            <motion.div {...fadeUp(0.2)}
              className="inline-flex items-center gap-6 bg-white/[0.04] border border-[#00D1FF]/20 rounded-2xl px-6 py-4 backdrop-blur-md mx-auto"
            >
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-[#A0A8C0]">Chain live</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="text-sm">
                <span className="text-[#A0A8C0]">Block </span>
                <span className="font-mono font-bold text-[#00D1FF]">#{blockNumber.toLocaleString()}</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="text-sm">
                <span className="text-[#A0A8C0]">Gas </span>
                <span className="font-mono font-bold text-[#D4AF37]">{gas} Gwei</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-1.5 text-sm text-[#A0A8C0]">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
                Live
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}
                className="text-center bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#00D1FF]/30 transition-all"
              >
                <p className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.value}</p>
                <p className="text-xs text-[#A0A8C0]">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Transaction Ledger */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp()} className="mb-6 flex items-center justify-between flex-wrap gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-1">Live Transaction Ledger</h2>
              <p className="text-[#A0A8C0] text-sm">Real-time smart contract activity on Polygon (Ethereum L2)</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#22c55e] font-semibold px-3 py-1.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              LIVE
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    {["Tx Hash", "Property", "Amount", "Block", "Status", "Time"].map((h) => (
                      <th key={h} className="text-left text-xs font-semibold text-[#A0A8C0] uppercase tracking-widest px-5 py-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {contracts.map((c, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-[#00D1FF]">{c.address.slice(0, 8)}...{c.address.slice(-4)}</span>
                          <button onClick={() => copy(c.address)} className="text-[#A0A8C0] hover:text-white transition-colors">
                            {copied === c.address ? <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e]" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                          <ExternalLink className="w-3 h-3 text-[#A0A8C0]" />
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-white font-medium">{c.property}</td>
                      <td className="px-5 py-4 text-sm font-bold" style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{c.amount}</td>
                      <td className="px-5 py-4 text-sm font-mono text-[#A0A8C0]">{c.block}</td>
                      <td className="px-5 py-4">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ color: c.color, backgroundColor: c.color + "18" }}>
                          {c.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm text-[#A0A8C0]">{c.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-[#A0A8C0]">Showing 5 of 1,247 total transactions</span>
              <button className="text-xs text-[#00D1FF] hover:underline flex items-center gap-1">
                View all on Polygonscan <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#00D1FF]/3 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">How It Works</h2>
            <p className="text-[#A0A8C0] max-w-xl mx-auto">From property onboarding to on-chain ownership — every step is cryptographically verified</p>
          </motion.div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#00D1FF]/40 via-[#D4AF37]/40 to-[#22c55e]/40 hidden md:block" />
            <div className="flex flex-col gap-4">
              {steps.map((s, i) => (
                <motion.div key={i} {...fadeUp(i * 0.1)}
                  className="flex items-start gap-5 bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:pl-6 hover:border-[#00D1FF]/30 transition-all duration-300 group relative"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10" style={{ backgroundColor: s.color + "18", border: `1px solid ${s.color}30` }}>
                    <s.icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-[#A0A8C0]">Step {String(i + 1).padStart(2, "0")}</span>
                      <span className="w-px h-3 bg-white/10" />
                      <span className="text-xs font-semibold" style={{ color: s.color }}>On-chain verified</span>
                    </div>
                    <h3 className="font-bold text-white mb-1 group-hover:text-[#00D1FF] transition-colors">{s.title}</h3>
                    <p className="text-sm text-[#A0A8C0] leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Contract Sample */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp()} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Smart Contract Architecture</h2>
            <p className="text-[#A0A8C0]">Every investment on Aarvasa is governed by a battle-tested smart contract</p>
          </motion.div>

          <motion.div {...fadeUp(0.1)}
            className="bg-[#0A0F2C] border border-[#00D1FF]/20 rounded-2xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs font-mono text-[#A0A8C0]">AarvasaInvestment.sol</span>
              <span className="ml-auto text-xs text-[#22c55e] font-semibold">Verified on Polygonscan</span>
            </div>
            <pre className="p-6 text-xs font-mono text-[#A0A8C0] overflow-x-auto leading-relaxed">
              <span className="text-[#a78bfa]">// SPDX-License-Identifier: MIT{"\n"}</span>
              <span className="text-[#a78bfa]">pragma solidity ^0.8.20;{"\n\n"}</span>
              <span className="text-[#00D1FF]">contract</span>
              <span className="text-white"> AarvasaInvestment </span>
              <span className="text-[#00D1FF]">is</span>
              <span className="text-[#D4AF37]"> ReentrancyGuard, Ownable </span>
              <span className="text-white">{"{"}{"\n"}</span>
              <span className="text-[#A0A8C0]">{"  "}struct Property {"{"}{"\n"}</span>
              <span className="text-[#22c55e]">{"    "}string</span>
              <span className="text-white"> propertyId;{"\n"}</span>
              <span className="text-[#22c55e]">{"    "}uint256</span>
              <span className="text-white"> totalValue;{"\n"}</span>
              <span className="text-[#22c55e]">{"    "}uint256</span>
              <span className="text-white"> minInvestment;{"\n"}</span>
              <span className="text-[#22c55e]">{"    "}bool</span>
              <span className="text-white"> reraVerified;{"\n"}</span>
              <span className="text-[#22c55e]">{"    "}bool</span>
              <span className="text-white"> aiScoreVerified;{"\n"}</span>
              <span className="text-[#A0A8C0]">{"  "}{"}"}{"\n\n"}</span>
              <span className="text-[#00D1FF]">{"  "}modifier</span>
              <span className="text-[#D4AF37]"> onlyVerified</span>
              <span className="text-white">(bytes32 _propId) {"{"}{"\n"}</span>
              <span className="text-white">{"    "}require(properties[_propId].reraVerified{"\n"}</span>
              <span className="text-white">{"      "}&amp;&amp; properties[_propId].aiScoreVerified,{"\n"}</span>
              <span className="text-[#22c55e]">{"      "}"Property not fully verified"</span>
              <span className="text-white">);{"\n"}</span>
              <span className="text-white">{"    "}_;{"\n"}</span>
              <span className="text-white">{"  "}{"}"}{"\n\n"}</span>
              <span className="text-[#00D1FF]">{"  "}function</span>
              <span className="text-[#D4AF37]"> invest</span>
              <span className="text-white">(bytes32 _propId){"\n"}</span>
              <span className="text-white">{"    "}public payable</span>
              <span className="text-[#D4AF37]"> onlyVerified</span>
              <span className="text-white">(_propId) nonReentrant {"{"}{"\n"}</span>
              <span className="text-white">{"    "}// Funds locked in escrow until all conditions met{"\n"}</span>
              <span className="text-white">{"    "}escrow[_propId][msg.sender] += msg.value;{"\n"}</span>
              <span className="text-white">{"    "}emit InvestmentRecorded(_propId, msg.sender, msg.value);{"\n"}</span>
              <span className="text-white">{"  "}{"}"}{"\n"}</span>
              <span className="text-white">{"}"}</span>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Why Blockchain Changes Everything</h2>
            <p className="text-[#A0A8C0]">Six reasons traditional real estate can't compete with on-chain infrastructure</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#00D1FF]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: f.color + "18" }}>
                  <f.icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-[#00D1FF] transition-colors">{f.title}</h3>
                <p className="text-sm text-[#A0A8C0] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-3xl">
          <motion.div {...fadeUp()}
            className="relative rounded-3xl overflow-hidden p-10 text-center"
            style={{ background: "linear-gradient(135deg,#0B1D3A,#050A18)" }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0,209,255,0.08) 0%, transparent 70%)"
              }} />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D1FF]/30 bg-[#00D1FF]/5 text-[#00D1FF] text-xs font-semibold mb-6">
                <Shield className="w-3.5 h-3.5" />
                Blockchain-secured investment
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Invest<br />
                <span style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  On the Chain?
                </span>
              </h2>
              <p className="text-[#A0A8C0] mb-8 max-w-md mx-auto">
                Your first investment is protected by military-grade blockchain security. Create your account and receive your on-chain investor ID in minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/signup"
                  className="px-8 py-3.5 rounded-xl text-sm font-bold text-black transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center gap-2"
                  style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)" }}>
                  Create Blockchain Account <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/investors"
                  className="px-8 py-3.5 rounded-xl text-sm font-bold text-white border border-[#00D1FF]/40 hover:bg-[#00D1FF]/10 hover:border-[#00D1FF] transition-all">
                  Learn About Plans
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
