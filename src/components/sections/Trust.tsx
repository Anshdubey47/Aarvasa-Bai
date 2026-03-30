import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Brain } from "lucide-react";

export default function Trust() {
  return (
    <section className="py-24 bg-[#050A18] relative border-y border-aarvasa-cyan/20">
      {/* Decorative horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-aarvasa-cyan to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-aarvasa-cyan to-transparent opacity-50" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Built for Serious Investors
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-aarvasa-muted"
          >
            Every layer of Aarvasa is engineered for trust
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center p-8 glass-panel rounded-xl"
          >
            <div className="w-16 h-16 rounded-full bg-aarvasa-cyan/10 flex items-center justify-center mb-6 border border-aarvasa-cyan/30 shadow-[0_0_20px_rgba(0,209,255,0.2)]">
              <ShieldCheck className="w-8 h-8 text-aarvasa-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-3">Blockchain Security</h3>
            <p className="text-aarvasa-muted">
              Every rupee, every transaction, secured on-chain. Immutable. Transparent.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col items-center text-center p-8 glass-panel rounded-xl border-amber-500/20"
          >
            <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/30 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <BadgeCheck className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Verified Listings</h3>
            <p className="text-aarvasa-muted">
              All properties undergo 14-point AI verification. No frauds. No surprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center text-center p-8 glass-panel rounded-xl"
          >
            <div className="w-16 h-16 rounded-full bg-aarvasa-cyan/10 flex items-center justify-center mb-6 border border-aarvasa-cyan/30 shadow-[0_0_20px_rgba(0,209,255,0.2)]">
              <Brain className="w-8 h-8 text-aarvasa-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Risk Scoring</h3>
            <p className="text-aarvasa-muted">
              Proprietary 0-10 risk scoring trained on 50,000+ Indian real estate transactions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
