import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function WhyAarvasa() {
  const rows = [
    { feature: "Investment Research", traditional: "Manual & slow", aarvasa: "AI-powered in seconds" },
    { feature: "Risk Assessment", traditional: "None or generic", aarvasa: "Proprietary 0-10 AI Score" },
    { feature: "Transparency", traditional: "Black box", aarvasa: "Blockchain-verified" },
    { feature: "Property Verification", traditional: "Trust-based", aarvasa: "14-point AI audit" },
    { feature: "ROI Prediction", traditional: "Guess work", aarvasa: "ML-based projections" },
    { feature: "Support", traditional: "Phone calls", aarvasa: "24/7 AI + expert network" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#050A18] to-aarvasa-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Why Investors Choose Aarvasa
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel rounded-2xl overflow-hidden border-l-4 border-l-aarvasa-cyan"
        >
          <div className="grid grid-cols-3 bg-[#0b1d3a]/60 border-b border-white/10">
            <div className="p-6 font-bold text-white tracking-wide uppercase text-sm">Feature</div>
            <div className="p-6 font-bold text-aarvasa-muted tracking-wide uppercase text-sm border-l border-white/5">Traditional Platforms</div>
            <div className="p-6 font-bold text-aarvasa-cyan tracking-wide uppercase text-sm border-l border-white/5 bg-aarvasa-cyan/5">Aarvasa</div>
          </div>
          
          {rows.map((row, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-3 border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <div className="p-6 text-white font-medium flex items-center">
                {row.feature}
              </div>
              <div className="p-6 text-aarvasa-muted flex items-center gap-3 border-l border-white/5">
                <X className="w-5 h-5 text-red-500/70 shrink-0" />
                <span>{row.traditional}</span>
              </div>
              <div className="p-6 text-white flex items-center gap-3 border-l border-white/5 bg-aarvasa-cyan/5">
                <Check className="w-5 h-5 text-green-400 shrink-0" />
                <span className="font-semibold text-white/90">{row.aarvasa}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
