import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { TrendingUp, Shield, MapPin, Star } from "lucide-react";
import heroBuildingImg from "@/assets/hero-building.png";

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [value, duration]);
  return <>{count}</>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z' fill='%2300d1ff'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-[#050A18] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00D1FF]/3 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D1FF]/30 bg-[#00D1FF]/5 text-[#00D1FF] text-xs font-semibold mb-6 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse" />
              India's #1 AI-Powered PropTech
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Invest Smarter<br />
              in Real Estate<br />
              <span
                style={{
                  background: "linear-gradient(135deg,#D4AF37,#F5D76E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                with AI
              </span>
            </h1>

            <p className="text-lg text-[#A0A8C0] mb-10 max-w-lg leading-relaxed">
              Data-driven insights. Blockchain-backed security. Every property scored across 200+ parameters so you never invest blind again.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <Link
                href="/signup"
                className="px-8 py-4 text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg,#D4AF37,#F5D76E)",
                  boxShadow: "0 0 30px rgba(212,175,55,0.3)",
                }}
              >
                Start Investing Free
              </Link>
              <Link
                href="/properties"
                className="px-8 py-4 bg-transparent border border-[#00D1FF]/40 text-white font-semibold rounded-xl hover:bg-[#00D1FF]/10 hover:border-[#00D1FF] transition-all duration-300 inline-flex items-center justify-center"
              >
                Explore Properties
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-1.5 text-sm text-[#A0A8C0]">
                <Shield className="w-4 h-4 text-[#22c55e]" />
                RERA Registered
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-1.5 text-sm text-[#A0A8C0]">
                <Shield className="w-4 h-4 text-[#00D1FF]" />
                SEBI Compliant
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-1.5 text-sm text-[#A0A8C0]">
                <Star className="w-4 h-4 text-[#D4AF37]" />
                4.9/5 Investor Rating
              </div>
            </div>
          </motion.div>

          {/* Right — Building Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative hidden lg:block"
          >
            {/* Glow behind image */}
            <div
              className="absolute inset-4 rounded-3xl blur-2xl opacity-30"
              style={{ background: "linear-gradient(135deg,#00D1FF,#0B1D3A)" }}
            />

            {/* Main image frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10"
              style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,209,255,0.1)" }}
            >
              <img
                src={heroBuildingImg}
                alt="Luxury residential building"
                className="w-full h-[560px] object-cover"
              />
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-transparent to-transparent" />

              {/* Bottom info strip */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="bg-[#050A18]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#A0A8C0] mb-1">
                        <MapPin className="w-3 h-3 text-[#00D1FF]" />
                        Whitefield, Bangalore
                      </div>
                      <p className="text-white font-bold text-sm">Prestige Skyline Tower</p>
                      <p className="text-[#A0A8C0] text-xs mt-0.5">3 BHK · 1,840 sq ft · Ready to Move</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs text-[#A0A8C0] mb-0.5">AI Score</p>
                      <p className="text-xl font-black" style={{ color: "#D4AF37" }}>8.9/10</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-[10px] text-[#A0A8C0] uppercase tracking-wider mb-0.5">Price</p>
                      <p className="text-sm font-bold text-white">₹2.4 Cr</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#A0A8C0] uppercase tracking-wider mb-0.5">Yield</p>
                      <p className="text-sm font-bold" style={{ color: "#22c55e" }}>+19.2%</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#A0A8C0] uppercase tracking-wider mb-0.5">Risk</p>
                      <p className="text-sm font-bold text-[#00D1FF]">Low</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top-right badge */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#22c55e]/15 border border-[#22c55e]/30 text-[#22c55e]">
                  <TrendingUp className="w-3 h-3" />
                  AI Verified
                </div>
              </div>
            </div>

            {/* Floating ROI pill */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/3 bg-[#0B1D3A] border border-[#D4AF37]/30 rounded-2xl px-4 py-3 shadow-xl"
              style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.4), 0 0 20px rgba(212,175,55,0.1)" }}
            >
              <p className="text-[10px] text-[#A0A8C0] uppercase tracking-widest mb-1">Avg Portfolio ROI</p>
              <p className="text-2xl font-black" style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                +18.3%
              </p>
              <p className="text-[10px] text-[#A0A8C0] mt-0.5">across 1,247 investors</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 border-t border-white/10 pt-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                ₹<AnimatedCounter value={470} />Cr+
              </div>
              <div className="text-sm text-[#A0A8C0] uppercase tracking-wider">Assets On-Chain</div>
            </div>
            <div className="text-center md:border-l border-white/10">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                <AnimatedCounter value={200} />+
              </div>
              <div className="text-sm text-[#A0A8C0] uppercase tracking-wider">AI Data Points</div>
            </div>
            <div className="text-center md:border-l border-white/10">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                <AnimatedCounter value={18} />.3%
              </div>
              <div className="text-sm text-[#A0A8C0] uppercase tracking-wider">Avg ROI Prediction</div>
            </div>
            <div className="text-center md:border-l border-white/10">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                <AnimatedCounter value={2400} />+
              </div>
              <div className="text-sm text-[#A0A8C0] uppercase tracking-wider">Verified Investors</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
