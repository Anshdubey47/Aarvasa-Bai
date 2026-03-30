import { motion } from "framer-motion";
import { properties } from "@/lib/data";

export default function Showcase() {
  return (
    <section id="properties" className="py-24 bg-aarvasa-bg relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Curated. Verified. AI-Scored.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-aarvasa-muted"
          >
            Exclusive opportunities vetted by our intelligence engine.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel rounded-2xl overflow-hidden group border-white/5 hover:border-aarvasa-cyan/30 transition-all duration-500 hover:-translate-y-2 glow-cyan-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={prop.image} 
                  alt={prop.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-aarvasa-bg/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center translate-y-4 group-hover:translate-y-0">
                  <button className="px-6 py-2.5 bg-gradient-gold text-black font-bold rounded-md hover:scale-105 transition-transform">
                    View Details
                  </button>
                </div>

                <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-xs font-medium border-white/10 bg-black/40 backdrop-blur-md">
                  {prop.location}
                </div>
                
                <div className="absolute top-4 right-4 bg-green-500/20 border border-green-500/50 px-3 py-1 rounded-full text-xs font-bold text-green-400 backdrop-blur-md shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                  Risk: {prop.risk}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-aarvasa-cyan transition-colors">{prop.name}</h3>
                
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <div className="text-xs text-aarvasa-muted uppercase tracking-wider mb-1">Investment</div>
                    <div className="text-lg font-bold text-gradient-gold">{prop.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-aarvasa-muted uppercase tracking-wider mb-1">Proj. ROI</div>
                    <div className="text-lg font-bold text-aarvasa-cyan">{prop.roi}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-transparent border border-aarvasa-cyan text-white font-semibold rounded-md hover:bg-aarvasa-cyan/10 glow-cyan-hover transition-all duration-300">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
