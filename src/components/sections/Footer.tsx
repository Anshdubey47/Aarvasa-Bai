import { Link } from "wouter";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050A18] pt-20 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-block">
              <div className="w-6 h-6 rotate-45 border-2 border-[#D4AF37] group-hover:glow-gold transition-all duration-300 inline-block align-middle" />
              <span className="text-2xl font-bold tracking-tight text-gradient-gold inline-block align-middle ml-2">Aarvasa</span>
            </Link>
            <p className="text-aarvasa-muted mb-6 max-w-sm">
              Invest with Intelligence. India's first AI-powered real estate investment platform for serious investors.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-aarvasa-muted hover:text-aarvasa-cyan hover:bg-aarvasa-cyan/10 hover:shadow-[0_0_15px_rgba(0,209,255,0.3)] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'Properties', href: '/properties' },
                { label: 'AI Insights', href: '/ai-insights' },
                { label: 'Blockchain', href: '/blockchain' },
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Investors', href: '/investors' },
              ].map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-aarvasa-muted hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About', 'Blog', 'Careers', 'Press'].map(item => (
                <li key={item}>
                  <a href="#" className="text-aarvasa-muted hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="flex flex-col gap-4">
              {['Privacy', 'Terms', 'Compliance', 'RERA'].map(item => (
                <li key={item}>
                  <a href="#" className="text-aarvasa-muted hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-aarvasa-muted">
            © 2025 Aarvasa Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-aarvasa-muted">
            <span>hello@aarvasa.in</span>
            <span className="hidden sm:inline">•</span>
            <span>+91 98765 43210</span>
            <span className="hidden sm:inline">•</span>
            <span>Mumbai, MH</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-white/50 border border-white/10 px-2 py-0.5 rounded text-xs">RERA Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
