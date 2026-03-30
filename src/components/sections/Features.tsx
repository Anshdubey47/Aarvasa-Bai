import { motion } from "framer-motion";
import { features } from "@/lib/data";
import { Brain, Eye, ShieldCheck, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Eye,
  ShieldCheck,
  TrendingUp
};

export default function Features() {
  return (
    <section className="py-24 bg-aarvasa-bg relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            The Intelligence Behind Your Investment
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-aarvasa-muted"
          >
            Four pillars that put you light-years ahead of the market
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-panel p-8 rounded-xl group transition-all duration-300 hover:bg-white/5 glow-cyan-hover cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-aarvasa-cyan/10 flex items-center justify-center mb-6 group-hover:bg-aarvasa-cyan/20 transition-colors">
                  {IconComponent && <IconComponent className="w-7 h-7 text-aarvasa-cyan" />}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-aarvasa-muted leading-relaxed">
                  {feature.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
