import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Cta() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0f2c] to-[#050A18]">
      {/* Background glow and effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aarvasa-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Floating geometric elements */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-[20%] w-32 h-32 border border-aarvasa-cyan/20 rounded-lg opacity-50"
      />
      <motion.div 
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-[20%] w-40 h-40 border border-[#D4AF37]/20 rounded-full opacity-50"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
          >
            Your Next Investment Should Be <span className="text-transparent bg-clip-text bg-gradient-to-r from-aarvasa-cyan to-blue-500">Data-Driven</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-aarvasa-muted mb-12"
          >
            Join 2,400+ investors who trust AI to find their next property.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/signup" className="w-full sm:w-auto px-10 py-5 bg-gradient-gold text-black text-lg font-bold rounded-md hover:scale-105 glow-gold-hover transition-all duration-300 inline-flex items-center justify-center">
              Start Investing
            </Link>
            <Link href="/investors" className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-aarvasa-cyan text-white text-lg font-semibold rounded-md hover:bg-aarvasa-cyan/10 glow-cyan-hover transition-all duration-300 inline-flex items-center justify-center">
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
