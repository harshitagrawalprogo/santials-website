"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Brain, Beaker, Compass, CheckCircle2 } from "lucide-react";
import { PERFUMES } from "@/lib/data";

const STEPS = [
  { id: 1, title: "Favourites", icon: Brain },
  { id: 2, title: "Preferences", icon: Beaker },
  { id: 3, title: "Analysis", icon: Compass },
];

export default function AIFinderPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(false);

  // Form state
  const [loved, setLoved] = useState("");
  const [notes, setNotes] = useState("");
  const [vibe, setVibe] = useState("Dark & Mysterious");
  const [season, setSeason] = useState("Winter");

  const handleAnalyse = () => {
    setLoading(true);
    setStep(3);
    setTimeout(() => {
      setLoading(false);
      setResults(true);
    }, 2500);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="page-header py-16 px-6 text-center">
        <span className="badge-gold inline-block mb-4">SANTIALLS Engine</span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-3">
          AI Scent Finder
        </h1>
        <p className="text-ivory-muted max-w-xl mx-auto leading-relaxed">
          Our proprietary artificial intelligence analyses over 50,000 fragrances to find your exact olfactive signature.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Progress Tracker */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-charcoal-mid -z-10" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-gold transition-all duration-500 -z-10" style={{ width: `${((step - 1) / 2) * 100}%` }} />
          
          {STEPS.map((s) => (
            <div key={s.id} className="flex flex-col items-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                step > s.id ? "bg-gold border-gold text-obsidian" :
                step === s.id ? "bg-charcoal border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]" :
                "bg-obsidian border-charcoal-mid text-charcoal-mid"
              }`}>
                {step > s.id ? <CheckCircle2 size={20} /> : <s.icon size={20} />}
              </div>
              <span className={`text-xs tracking-widest uppercase font-medium ${step >= s.id ? "text-gold" : "text-charcoal-mid"}`}>
                {s.title}
              </span>
            </div>
          ))}
        </div>

        {/* Wizard Content */}
        {!results ? (
          <div className="glass rounded-2xl p-8 md:p-12 border border-gold/20 min-h-[400px] flex flex-col justify-center animate-fade-in relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

            {loading ? (
              <div className="text-center py-12">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-gold/20" />
                  <div className="absolute inset-0 rounded-full border-t-2 border-gold animate-spin" />
                  <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold animate-pulse" size={24} />
                </div>
                <h2 className="font-display text-2xl font-semibold text-ivory mb-2">Analysing Fragrance Profiles</h2>
                <p className="text-ivory-muted text-sm">Cross-referencing your preferences with 50,000+ formulations...</p>
              </div>
            ) : step === 1 ? (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-ivory mb-3">What are your current favourites?</h2>
                  <p className="text-ivory-muted text-sm">Tell us 1-3 fragrances you currently own and love.</p>
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder="e.g. I love Dior Sauvage for everyday, and Creed Aventus for special occasions..."
                    value={loved}
                    onChange={(e) => setLoved(e.target.value)}
                    className="luxury-input w-full p-5 rounded-lg text-sm"
                  />
                </div>
                <div className="flex justify-end">
                  <button onClick={() => setStep(2)} className="btn-gold px-8 py-3.5 text-xs rounded-sm tracking-widest">
                    Next Step
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8 animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-ivory mb-3">Refine your signature</h2>
                  <p className="text-ivory-muted text-sm">Tell us what you&apos;re looking for in your next scent.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-xs text-gold tracking-widest uppercase mb-3 block">Specific Notes (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Vanilla, Oud, Bergamot..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="luxury-input w-full px-5 py-3.5 rounded-sm text-sm"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs text-gold tracking-widest uppercase mb-3 block">Desired Vibe</label>
                      <select value={vibe} onChange={(e) => setVibe(e.target.value)} className="luxury-input w-full px-5 py-3.5 rounded-sm text-sm">
                        <option>Dark & Mysterious</option>
                        <option>Fresh & Professional</option>
                        <option>Warm & Cozy</option>
                        <option>Bold & Commanding</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-gold tracking-widest uppercase mb-3 block">Primary Season</label>
                      <select value={season} onChange={(e) => setSeason(e.target.value)} className="luxury-input w-full px-5 py-3.5 rounded-sm text-sm">
                        <option>Winter</option>
                        <option>Spring</option>
                        <option>Summer</option>
                        <option>Fall</option>
                        <option>All Year Signature</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8 pt-6 border-t border-white/5">
                  <button onClick={() => setStep(1)} className="text-xs text-ivory-muted hover:text-gold uppercase tracking-widest">
                    Back
                  </button>
                  <button onClick={handleAnalyse} className="btn-gold px-8 py-3.5 text-xs rounded-sm tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <Sparkles size={14} /> Run Analysis
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Results */
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <span className="badge-gold inline-block mb-3">Analysis Complete</span>
              <h2 className="font-display text-3xl font-semibold text-ivory">Your Olfactive Matches</h2>
              <p className="text-ivory-muted mt-3 text-sm">We&apos;ve found 3 perfect matches based on your profile.</p>
            </div>

            <div className="space-y-6">
              {PERFUMES.slice(0, 3).map((p, i) => (
                <Link key={p.id} href={`/perfume/${p.id}`} className="block group">
                  <div className="glass rounded-2xl p-6 md:p-8 border border-gold/15 hover:border-gold/40 transition-all flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-32 h-44 shrink-0">
                      <div className="absolute inset-0 bg-gold/10 blur-xl rounded-xl" />
                      <Image src={p.imageUrl} alt={p.name} fill className="object-cover rounded-xl shadow-lg border border-white/5" />
                      {i === 0 && (
                        <div className="absolute -top-3 -right-3 badge-gold shadow-gold shadow-sm flex items-center gap-1 z-10">
                          <CheckCircle2 size={10} /> 99% Match
                        </div>
                      )}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-xs text-gold tracking-widest uppercase mb-1">{p.brand}</p>
                      <h3 className="font-display text-2xl font-semibold text-ivory mb-2 group-hover:text-gold transition-colors">{p.name}</h3>
                      <p className="text-sm text-ivory-muted mb-4 leading-relaxed max-w-md mx-auto md:mx-0 line-clamp-2">{p.description}</p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                        {p.topNotes.slice(0, 3).map(n => <span key={n} className="note-pill">{n}</span>)}
                      </div>
                      <span className="text-gold font-semibold">{p.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <button onClick={() => { setResults(false); setStep(1); }} className="btn-outline-gold px-8 py-3.5 text-xs rounded-sm tracking-widest">
                Start New Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
