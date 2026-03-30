import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <section className="py-24 bg-gradient-to-b from-aarvasa-bg to-[#070e20]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Your Portfolio, Powered by Intelligence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-aarvasa-muted"
          >
            A real-time command center for serious investors
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel rounded-2xl overflow-hidden shadow-2xl border-aarvasa-cyan/30"
        >
          {/* Dashboard Header */}
          <div className="bg-[#0b1d3a]/50 border-b border-white/10 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm font-medium text-white/70 ml-4 tracking-wider">AARVASA TERMINAL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs text-green-400 font-semibold tracking-widest">LIVE DATA</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[500px]">
            {/* Left Sidebar */}
            <div className="border-r border-white/10 p-6 flex flex-col gap-8 bg-[#050a18]/40">
              <div>
                <h4 className="text-xs text-aarvasa-muted uppercase mb-2">Total Invested</h4>
                <div className="text-3xl font-bold text-white">₹45.2L</div>
              </div>
              <div>
                <h4 className="text-xs text-aarvasa-muted uppercase mb-2">Current Value</h4>
                <div className="text-3xl font-bold text-gradient-gold">₹53.8L</div>
              </div>
              <div>
                <h4 className="text-xs text-aarvasa-muted uppercase mb-2">Overall Return</h4>
                <div className="text-2xl font-bold text-green-400">+19.2%</div>
              </div>
              <div className="mt-auto">
                <button className="w-full py-3 bg-aarvasa-cyan/10 border border-aarvasa-cyan/50 text-aarvasa-cyan rounded-md text-sm font-bold hover:bg-aarvasa-cyan hover:text-black transition-colors">
                  Deposit Funds
                </button>
              </div>
            </div>

            {/* Main Chart Area */}
            <div className="lg:col-span-2 p-6 flex flex-col relative bg-[#050a18]/20">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="text-lg font-bold">Portfolio Performance</h3>
                  <p className="text-sm text-aarvasa-muted">Last 12 Months</p>
                </div>
                <div className="flex gap-2">
                  {['1M', '3M', '6M', '1Y', 'ALL'].map(t => (
                    <button key={t} className={`px-2 py-1 text-xs rounded ${t === '1Y' ? 'bg-white/20 text-white' : 'text-aarvasa-muted hover:text-white'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 w-full relative min-h-[300px]">
                {/* SVG Chart */}
                <svg viewBox="0 0 800 300" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00d1ff" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00d1ff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid lines */}
                  <line x1="0" y1="50" x2="800" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <line x1="0" y1="250" x2="800" y2="250" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  
                  {/* Path */}
                  <path 
                    d="M 0 250 C 100 240, 150 200, 250 210 C 350 220, 400 160, 500 140 C 600 120, 700 80, 800 40" 
                    fill="none" 
                    stroke="#00d1ff" 
                    strokeWidth="3"
                    className="drop-shadow-[0_0_8px_rgba(0,209,255,0.8)]"
                  />
                  
                  {/* Area under curve */}
                  <path 
                    d="M 0 250 C 100 240, 150 200, 250 210 C 350 220, 400 160, 500 140 C 600 120, 700 80, 800 40 L 800 300 L 0 300 Z" 
                    fill="url(#chartGradient)" 
                  />
                  
                  {/* Current point */}
                  <circle cx="800" cy="40" r="6" fill="#00d1ff" className="animate-pulse" />
                  <circle cx="800" cy="40" r="12" fill="#00d1ff" fillOpacity="0.3" className="animate-ping" />
                </svg>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="border-l border-white/10 p-6 bg-[#050a18]/40">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-aarvasa-muted">Top Properties</h3>
              <div className="flex flex-col gap-4">
                {[
                  { name: "Prestige Skyline", roi: "+19.2%", risk: "8.4" },
                  { name: "Lodha Altamount", roi: "+14.8%", risk: "9.1" },
                  { name: "DLF Magnolias", roi: "+16.3%", risk: "8.7" }
                ].map((p, i) => (
                  <div key={i} className="p-3 bg-white/5 rounded-lg border border-white/5 hover:border-aarvasa-cyan/30 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-sm">{p.name}</span>
                      <span className="text-green-400 text-sm font-bold">{p.roi}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded border border-green-500/30">Risk: {p.risk}/10</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10 bg-[#050a18]/60">
            <div className="p-4 text-center border-r border-white/10">
              <div className="text-xs text-aarvasa-muted mb-1">Monthly Rental Income</div>
              <div className="font-bold text-lg">₹1.2L</div>
            </div>
            <div className="p-4 text-center border-r border-white/10">
              <div className="text-xs text-aarvasa-muted mb-1">Portfolio Diversification</div>
              <div className="font-bold text-lg">6 Cities</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-xs text-aarvasa-muted mb-1">Next Maturity</div>
              <div className="font-bold text-lg">42 Days</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
