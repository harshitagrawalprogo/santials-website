"use client";
import { useState } from "react";
import PerfumeCard from "@/components/PerfumeCard";
import { PERFUMES } from "@/lib/data";
import { SlidersHorizontal, X, Search } from "lucide-react";

const FAMILIES = ["All", "Amber Floral Woody", "Floral Oriental", "Oriental Woody", "Oriental Spicy", "Chypre Fruity", "Aromatic Citrus", "Fougère Spicy", "Amber Spicy", "Oriental Vanilla", "Aromatic Fougère", "Floral Gourmand", "Oriental Fougère", "Floral Fruity Musk"];
const SEASONS = ["All", "Winter", "Spring", "Summer", "Fall", "All Year"];
const GENDERS = ["All", "Masculine", "Feminine", "Unisex"];
const SORT_OPTIONS = ["Highest Rated", "Most Reviews", "Newest", "Oldest", "Price: High to Low", "Price: Low to High"];

export default function DatabasePage() {
  const [family, setFamily] = useState("All");
  const [season, setSeason] = useState("All");
  const [gender, setGender] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Highest Rated");
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = PERFUMES.filter((p) => {
    const matchFamily = family === "All" || p.family === family;
    const matchSeason = season === "All" || p.seasons.includes(season) || p.season === season;
    const matchGender = gender === "All" || p.gender === gender;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase()) ||
      p.topNotes.some((n) => n.toLowerCase().includes(search.toLowerCase()));
    return matchFamily && matchSeason && matchGender && matchSearch;
  }).sort((a, b) => {
    if (sort === "Highest Rated") return b.rating - a.rating;
    if (sort === "Most Reviews") return b.reviews - a.reviews;
    if (sort === "Newest") return b.year - a.year;
    if (sort === "Oldest") return a.year - b.year;
    if (sort === "Price: High to Low") return parseFloat(b.price.replace(/[^0-9.]/g, "")) - parseFloat(a.price.replace(/[^0-9.]/g, ""));
    if (sort === "Price: Low to High") return parseFloat(a.price.replace(/[^0-9.]/g, "")) - parseFloat(b.price.replace(/[^0-9.]/g, ""));
    return 0;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="page-header py-16 px-6 text-center">
        <span className="badge-gold inline-block mb-4">The Archive</span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-3">
          Perfume Database
        </h1>
        <p className="text-ivory-muted max-w-lg mx-auto">
          50,000+ fragrances catalogued with detailed profiles, notes pyramids, performance data, and community ratings.
        </p>
        <div className="gold-divider w-16 mx-auto mt-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Search + sort bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ivory-muted pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name, brand, or notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="luxury-input w-full pl-10 pr-4 py-3 rounded-sm text-sm"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="luxury-input px-4 py-3 rounded-sm text-sm min-w-[180px]"
          >
            {SORT_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className={`btn-outline-gold px-5 py-3 text-xs rounded-sm tracking-widest flex items-center gap-2 ${filterOpen ? "border-gold bg-gold/10 text-gold" : ""}`}
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
        </div>

        {/* Filter panel */}
        {filterOpen && (
          <div className="glass rounded-xl p-6 mb-6 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-sm font-semibold text-ivory">Refine Results</h3>
              <button onClick={() => setFilterOpen(false)} className="text-ivory-muted hover:text-gold transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <label className="text-xs text-gold tracking-widest uppercase mb-3 block">Gender</label>
                <div className="flex flex-wrap gap-2">
                  {GENDERS.map((g) => (
                    <button key={g} onClick={() => setGender(g)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${gender === g ? "border-gold bg-gold/15 text-gold" : "border-gold/20 text-ivory-muted hover:border-gold/40"}`}>
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs text-gold tracking-widest uppercase mb-3 block">Season</label>
                <div className="flex flex-wrap gap-2">
                  {SEASONS.map((s) => (
                    <button key={s} onClick={() => setSeason(s)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${season === s ? "border-gold bg-gold/15 text-gold" : "border-gold/20 text-ivory-muted hover:border-gold/40"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs text-gold tracking-widest uppercase mb-3 block">Family</label>
                <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto pr-1">
                  {FAMILIES.map((f) => (
                    <button key={f} onClick={() => setFamily(f)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 shrink-0 ${family === f ? "border-gold bg-gold/15 text-gold" : "border-gold/20 text-ivory-muted hover:border-gold/40"}`}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {(family !== "All" || season !== "All" || gender !== "All") && (
              <button
                onClick={() => { setFamily("All"); setSeason("All"); setGender("All"); }}
                className="mt-5 text-xs text-ivory-muted hover:text-gold transition-colors underline underline-offset-2"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Active filters */}
        {(family !== "All" || season !== "All" || gender !== "All" || search) && (
          <div className="flex flex-wrap gap-2 mb-5">
            {search && (
              <span className="badge-gold flex items-center gap-1.5">
                &quot;{search}&quot;
                <button onClick={() => setSearch("")}><X size={10} /></button>
              </span>
            )}
            {gender !== "All" && (
              <span className="badge-gold flex items-center gap-1.5">
                {gender} <button onClick={() => setGender("All")}><X size={10} /></button>
              </span>
            )}
            {season !== "All" && (
              <span className="badge-gold flex items-center gap-1.5">
                {season} <button onClick={() => setSeason("All")}><X size={10} /></button>
              </span>
            )}
            {family !== "All" && (
              <span className="badge-gold flex items-center gap-1.5">
                {family} <button onClick={() => setFamily("All")}><X size={10} /></button>
              </span>
            )}
          </div>
        )}

        {/* Results count */}
        <p className="text-xs text-ivory-muted mb-7 tracking-wider">
          Showing <span className="text-gold font-semibold">{filtered.length}</span> of {PERFUMES.length} fragrances
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => <PerfumeCard key={p.id} perfume={p} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-5xl mb-5">🔍</p>
            <p className="font-display text-xl text-ivory mb-2">No fragrances found</p>
            <p className="text-ivory-muted text-sm mb-6">Try adjusting your filters or search term</p>
            <button
              onClick={() => { setFamily("All"); setSeason("All"); setGender("All"); setSearch(""); }}
              className="btn-outline-gold px-6 py-2 text-xs rounded-sm tracking-widest"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
