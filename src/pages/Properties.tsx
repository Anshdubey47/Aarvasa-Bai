import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, MapPin, TrendingUp, ShieldCheck, Star, ArrowUpRight, X } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { properties } from "@/lib/data";

const allProperties = [
  ...properties,
  {
    id: 7,
    name: "Sobha Dream Acres",
    location: "Bangalore",
    price: "₹72L",
    roi: "20.1%",
    risk: "8.0/10",
    image: properties[0].image,
  },
  {
    id: 8,
    name: "Omkar 1973",
    location: "Mumbai",
    price: "₹12.4 Cr",
    roi: "13.6%",
    risk: "9.3/10",
    image: properties[1].image,
  },
  {
    id: 9,
    name: "M3M Golf Estate",
    location: "Gurgaon",
    price: "₹3.2 Cr",
    roi: "17.9%",
    risk: "8.5/10",
    image: properties[2].image,
  },
  {
    id: 10,
    name: "Brigade Utopia",
    location: "Bangalore",
    price: "₹1.4 Cr",
    roi: "22.3%",
    risk: "7.6/10",
    image: properties[3].image,
  },
  {
    id: 11,
    name: "Kolte Patil Life Republic",
    location: "Pune",
    price: "₹88L",
    roi: "18.8%",
    risk: "8.1/10",
    image: properties[4].image,
  },
  {
    id: 12,
    name: "Prestige OMR Tech Park",
    location: "Chennai",
    price: "₹4.1 Cr",
    roi: "16.2%",
    risk: "8.9/10",
    image: properties[5].image,
  },
];

const cities = ["All Cities", "Bangalore", "Mumbai", "Gurgaon", "Pune", "Chennai", "Hyderabad"];
const types = ["All Types", "Residential", "Commercial", "Villa", "Office Space"];
const sortOptions = ["Highest ROI", "Lowest Price", "Highest Price", "Best Risk Score"];

const riskColor = (score: string) => {
  const n = parseFloat(score);
  if (n >= 9) return "#22c55e";
  if (n >= 8) return "#00D1FF";
  return "#F5D76E";
};

export default function Properties() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All Cities");
  const [type, setType] = useState("All Types");
  const [sort, setSort] = useState("Highest ROI");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = allProperties.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
    const matchCity = city === "All Cities" || p.location === city;
    return matchSearch && matchCity;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "Highest ROI") return parseFloat(b.roi) - parseFloat(a.roi);
    if (sort === "Best Risk Score") return parseFloat(b.risk) - parseFloat(a.risk);
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#050A18] text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[#00D1FF]/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D1FF]/30 bg-[#00D1FF]/5 text-[#00D1FF] text-xs font-semibold mb-6 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-pulse" />
              {allProperties.length} AI-Verified Properties
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
              Find Your Next{" "}
              <span style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                High-ROI
              </span>{" "}
              Investment
            </h1>
            <p className="text-[#A0A8C0] text-lg max-w-2xl">
              Every property scored, verified, and ranked by our AI engine across 200+ data points. No guesswork. Just data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="px-6 pb-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-md"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A8C0]" />
                <input
                  type="text"
                  placeholder="Search by name or city..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-[#A0A8C0] focus:outline-none focus:border-[#00D1FF]/50 transition-colors"
                />
              </div>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D1FF]/50 transition-colors cursor-pointer"
                style={{ backgroundImage: "none" }}
              >
                {cities.map((c) => <option key={c} value={c} className="bg-[#0A0F2C]">{c}</option>)}
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00D1FF]/50 transition-colors cursor-pointer"
                style={{ backgroundImage: "none" }}
              >
                {sortOptions.map((s) => <option key={s} value={s} className="bg-[#0A0F2C]">{s}</option>)}
              </select>
            </div>
          </motion.div>

          {/* Stats bar */}
          <div className="mt-4 flex items-center gap-6 text-sm text-[#A0A8C0]">
            <span>{sorted.length} properties found</span>
            <span className="text-[#00D1FF]">Avg ROI: {(sorted.reduce((acc, p) => acc + parseFloat(p.roi), 0) / sorted.length || 0).toFixed(1)}%</span>
            <span>Sorted by: <span className="text-white">{sort}</span></span>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onMouseEnter={() => setHovered(property.id)}
                onMouseLeave={() => setHovered(null)}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-[#00D1FF]/40 transition-all duration-400 hover:shadow-[0_0_30px_rgba(0,209,255,0.12)] cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-xs text-white">
                    <MapPin className="w-3 h-3 text-[#00D1FF]" />
                    {property.location}
                  </div>
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full backdrop-blur-md border text-xs font-bold"
                    style={{ color: riskColor(property.risk), borderColor: riskColor(property.risk) + "50", backgroundColor: riskColor(property.risk) + "15" }}
                  >
                    AI Score {property.risk}
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    animate={{ opacity: hovered === property.id ? 1 : 0, y: hovered === property.id ? 0 : 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                  >
                    <button
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black"
                      style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)" }}
                    >
                      View Details <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-semibold text-white mb-1 group-hover:text-[#00D1FF] transition-colors">{property.name}</h3>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-xs text-[#A0A8C0]">Price</p>
                      <p
                        className="text-lg font-bold"
                        style={{ background: "linear-gradient(135deg,#D4AF37,#F5D76E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                      >
                        {property.price}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#A0A8C0]">Projected ROI</p>
                      <p className="text-lg font-bold text-[#00D1FF]">{property.roi}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[#A0A8C0]">AI Score</p>
                      <p className="text-lg font-bold text-white">{property.risk}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(parseFloat(property.risk) / 10) * 100}%`,
                          background: `linear-gradient(90deg, ${riskColor(property.risk)}, ${riskColor(property.risk)}aa)`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-[#A0A8C0]">Risk</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {sorted.length === 0 && (
            <div className="text-center py-24 text-[#A0A8C0]">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg">No properties match your search.</p>
              <button onClick={() => { setSearch(""); setCity("All Cities"); }} className="mt-4 text-[#00D1FF] underline text-sm">Clear filters</button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
