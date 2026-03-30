import { motion } from "framer-motion";
import arvrImg from "@/assets/arvr-bg.png";

export default function ArVr() {
  return (
    <section className="relative py-32 bg-aarvasa-bg overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={arvrImg} 
          alt="AR/VR Real Estate Experience" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A18] via-[#050A18]/80 to-transparent" />
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aarvasa-cyan/20 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Experience Properties Before You Invest
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-aarvasa-muted mb-10 leading-relaxed"
          >
            Our AR/VR tours put you inside the property. Walk the corridors, feel the sunlight, measure the space — all from your screen.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="px-8 py-4 bg-gradient-gold text-black font-bold rounded-md hover:scale-105 glow-gold-hover transition-all duration-300 mb-12">
              Experience Properties in 3D
            </button>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-2xl font-bold text-white mb-1">1,200+</div>
                <div className="text-sm text-aarvasa-muted uppercase tracking-wider">Properties in 3D</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">50ms</div>
                <div className="text-sm text-aarvasa-muted uppercase tracking-wider">Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">All Devices</div>
                <div className="text-sm text-aarvasa-muted uppercase tracking-wider">Compatible</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
