import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0f2c]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What Our Investors Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel p-8 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-6xl text-white/5 font-serif leading-none">"</div>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#D4AF37] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-lg text-white/90 mb-8 leading-relaxed relative z-10">
                "{test.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full ${test.color} flex items-center justify-center font-bold text-white shadow-lg`}>
                  {test.initials}
                </div>
                <div>
                  <div className="font-bold text-white">{test.name}</div>
                  <div className="text-sm text-aarvasa-muted">{test.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
