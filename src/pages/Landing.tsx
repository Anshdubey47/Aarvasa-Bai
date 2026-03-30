import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Dashboard from "@/components/sections/Dashboard";
import Showcase from "@/components/sections/Showcase";
import Trust from "@/components/sections/Trust";
import WhyAarvasa from "@/components/sections/WhyAarvasa";
import ArVr from "@/components/sections/ArVr";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-aarvasa-bg text-white font-sans overflow-x-hidden selection:bg-aarvasa-cyan selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <Showcase />
        <Trust />
        <WhyAarvasa />
        <ArVr />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
