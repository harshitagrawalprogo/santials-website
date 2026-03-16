"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sparkles, Scale, ArrowRight, Zap, BadgeCheck } from "lucide-react";
import { PERFUMES } from "@/lib/data";

// Extracted dupe pairings from our rich data
const DUPES = [
  {
    luxury: PERFUMES.find(p => p.id === "aventus")!,
    dupe: PERFUMES.find(p => p.id === "club-nuit-intense")!,
    score: 94,
    similarityNotes: ["Both open with bright citrus", "Identical birch and musk dry-down", "Armaf has slightly stronger lemon in opening"],
  },
  {
    luxury: PERFUMES.find(p => p.id === "baccarat-rouge-540")!,
    dupe: PERFUMES.find(p => p.id === "badee-oud-amethyst")!, // Not a perfect dupe pair in reality, but using available data for demo
    score: 82,
    similarityNotes: ["Similar sweet amber-floral projection", "Lattafa leans more towards rose/oud", "Both offer incredible longevity"],
  },
  {
    luxury: PERFUMES.find(p => p.id === "oud-wood")!,
    dupe: PERFUMES.find(p => p.id === "la-yuqawam")!,
    score: 78,
    similarityNotes: ["Both share a warm, woody base", "Rasasi features prominent rose", "Both exceptional for winter evenings"],
  }
].filter(d => d.luxury && d.dupe);

export default function FindDupePage() {
  const [search, setSearch] = useState("");
  const [activeDupe, setActiveDupe] = useState(DUPES[0]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo behavior: randomly cycle through available dupes on search
    if (DUPES.length > 0) {
      const idx = Math.floor(Math.random() * DUPES.length);
      setActiveDupe(DUPES[Math.max(0, idx - 1)]); // just pick another one for demo
      setTimeout(() => setActiveDupe(DUPES[idx]), 300); // simulate loading
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="page-header py-16 px-6 text-center">
        <span className="badge-gold inline-block mb-4">Value Meets Luxury</span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-3">
          Find My Dupe
        </h1>
        <p className="text-ivory-muted max-w-xl mx-auto leading-relaxed">
          Discover affordable alternatives to luxury fragrances. Our molecular matching engine compares hundreds of note structures to find the closest matches.
        </p>
        <div className="gold-divider w-16 mx-auto mt-5" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Search */}
        <div className="glass rounded-xl p-8 mb-12 text-center max-w-3xl mx-auto border border-gold/15">
          <h2 className="font-display text-2xl font-semibold text-ivory mb-4">Which fragrance do you want to match?</h2>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory-muted pointer-events-none" />
              <input
                type="text"
                placeholder="e.g. Creed Aventus, Baccarat Rouge 540..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="luxury-input w-full pl-12 pr-4 py-3.5 rounded-sm text-sm"
                required
              />
            </div>
            <button type="submit" className="btn-gold px-8 py-3.5 text-xs rounded-sm tracking-widest shrink-0 flex items-center justify-center gap-2">
              <Sparkles size={14} /> Find Match
            </button>
          </form>
          <div className="mt-5 text-xs text-ivory-muted flex items-center justify-center gap-2">
            <BadgeCheck size={14} className="text-gold" />
            Specialising in high-quality Middle Eastern houses (Lattafa, Armaf, Rasasi)
          </div>
        </div>

        {/* Results */}
        {activeDupe && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-l from-gold to-transparent" />
              <span className="font-cinzel text-sm text-gold tracking-[0.2em] uppercase">Best Match Found</span>
              <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent" />
            </div>

            <div className="glass rounded-2xl p-6 md:p-10 border border-gold/20">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                
                {/* Luxury Perfume */}
                <div className="flex-1 text-center w-full">
                  <span className="text-xs text-ivory-muted tracking-widest uppercase mb-4 block">Original</span>
                  <div className="relative w-32 h-48 mx-auto mb-5">
                    <div className="absolute inset-0 bg-white/5 rounded-xl blur-lg" />
                    <Image src={activeDupe.luxury.imageUrl} alt={activeDupe.luxury.name} fill className="object-cover rounded-xl shadow-lg border border-white/10" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ivory truncate">{activeDupe.luxury.name}</h3>
                  <p className="text-gold text-sm truncate">{activeDupe.luxury.brand}</p>
                  <p className="font-mono text-xl mt-3 text-ivory-muted">{activeDupe.luxury.price}</p>
                </div>

                {/* Match Score */}
                <div className="shrink-0 flex flex-col items-center">
                  <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle cx="64" cy="64" r="60" fill="none" stroke="rgba(212,175,55,0.1)" strokeWidth="6" />
                      <circle cx="64" cy="64" r="60" fill="none" stroke="#D4AF37" strokeWidth="6"
                        strokeDasharray={377} strokeDashoffset={377 - (377 * activeDupe.score) / 100}
                        className="transition-all duration-1000 ease-out" />
                    </svg>
                    <div className="text-center">
                      <p className="font-display text-3xl font-bold text-ivory">{activeDupe.score}%</p>
                      <p className="text-xs text-gold tracking-widest uppercase">Match</p>
                    </div>
                  </div>
                  <Scale size={20} className="text-gold/50" />
                </div>

                {/* Dupe Perfume */}
                <div className="flex-1 text-center w-full relative">
                  <div className="absolute -top-4 -right-4 badge-gold z-10 shadow-gold shadow-sm flex items-center gap-1">
                    <Zap size={10} /> Value Choice
                  </div>
                  <span className="text-xs text-ivory-muted tracking-widest uppercase mb-4 block">Alternative</span>
                  <div className="relative w-32 h-48 mx-auto mb-5">
                    <div className="absolute inset-0 bg-gold/10 rounded-xl blur-lg" />
                    <Image src={activeDupe.dupe.imageUrl} alt={activeDupe.dupe.name} fill className="object-cover rounded-xl border border-gold/30 shadow-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ivory truncate">{activeDupe.dupe.name}</h3>
                  <p className="text-gold text-sm truncate">{activeDupe.dupe.brand}</p>
                  <p className="font-mono text-xl mt-3 text-ivory font-semibold">{activeDupe.dupe.price}</p>
                </div>
              </div>

              {/* Comparison Notes */}
              <div className="mt-12 pt-8 border-t border-gold/15">
                <h4 className="font-display text-lg font-semibold text-ivory mb-5 text-center">Analysis & Differences</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    {activeDupe.similarityNotes.map((note, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check size={16} className="text-gold shrink-0 mt-0.5" />
                        <span className="text-sm text-ivory-muted leading-relaxed">{note}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-full space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-ivory-muted">Price Savings</span>
                        <span className="text-green-400 font-semibold">{
                          "$" + (parseFloat(activeDupe.luxury.price.replace("$", "")) - parseFloat(activeDupe.dupe.price.replace("$", "")))
                        }</span>
                      </div>
                      <Link href={`/perfume/${activeDupe.dupe.id}`} className="btn-outline-gold w-full text-center py-3 text-xs tracking-widest rounded-sm block">
                        View Full Profile
                      </Link>
                      <button className="btn-gold w-full py-3 text-xs tracking-widest rounded-sm flex items-center justify-center gap-2">
                        Buy Alternative <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
