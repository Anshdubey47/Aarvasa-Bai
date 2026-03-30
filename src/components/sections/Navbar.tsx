import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Shield } from "lucide-react";

const navLinks = [
  { label: "Properties", href: "/properties" },
  { label: "AI Insights", href: "/ai-insights" },
  { label: "Blockchain", href: "/blockchain" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Investors", href: "/investors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isSignup = location === "/signup";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050A18]/85 backdrop-blur-xl border-b border-[#00D1FF]/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 rotate-45 border-2 border-[#D4AF37] group-hover:shadow-[0_0_10px_#D4AF37] transition-all duration-300" />
            <span
              className="text-2xl font-bold tracking-tight"
              style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Aarvasa
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((item) => {
              const active = location === item.href;
              const isBlockchain = item.href === "/blockchain";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group flex items-center gap-1.5 ${
                    active ? "text-white" : "text-[#A0A8C0] hover:text-white"
                  }`}
                >
                  {isBlockchain && (
                    <Shield className="w-3.5 h-3.5 text-[#00D1FF] flex-shrink-0" />
                  )}
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={{ background: isBlockchain ? "#00D1FF" : "#00D1FF" }}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/signup"
              className={`hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-black rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] ${isSignup ? "opacity-70 pointer-events-none" : ""}`}
              style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)" }}
            >
              Start Investing
            </Link>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-[#050A18]/95 backdrop-blur-xl border-b border-[#00D1FF]/20 py-6 px-6 flex flex-col gap-4"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-[#A0A8C0] hover:text-white transition-colors py-2 border-b border-white/5 flex items-center gap-2"
              >
                {item.href === "/blockchain" && <Shield className="w-4 h-4 text-[#00D1FF]" />}
                {item.label}
              </Link>
            ))}
            <Link
              href="/signup"
              className="mt-2 w-full text-center py-3 text-sm font-semibold text-black rounded-md"
              style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)" }}
            >
              Start Investing
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
