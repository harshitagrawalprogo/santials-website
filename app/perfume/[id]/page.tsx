"use client";
import Image from "next/image";
import Link from "next/link";
import { Star, Wind, ShoppingCart, Youtube, ArrowLeft, Check } from "lucide-react";
import { PERFUMES } from "@/lib/data";
import { useState } from "react";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={14} className={s <= Math.round(rating) ? "text-gold fill-gold" : "text-charcoal-mid"} />
      ))}
    </div>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-ivory-muted w-24 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-charcoal-mid rounded-full overflow-hidden">
        <div className="h-full bg-gold-gradient rounded-full" style={{ width: `${value * 10}%` }} />
      </div>
      <span className="text-xs text-gold w-7 text-right shrink-0 font-medium">{value}/10</span>
    </div>
  );
}

const COMMUNITY_REVIEWS = [
  { author: "Alexandre M.", avatar: "AM", rating: 5, text: "The most complimented fragrance I've ever worn. A masterpiece of modern perfumery that I keep returning to year after year.", date: "Jan 2026" },
  { author: "Sophia K.", avatar: "SK", rating: 5, text: "Absolutely divine. The way this evolves on skin throughout the day is remarkable — it genuinely improves with time.", date: "Dec 2025" },
  { author: "James R.", avatar: "JR", rating: 4, text: "Incredible sillage. Can be challenging in warm weather but absolutely perfect for autumn and winter evenings.", date: "Nov 2025" },
  { author: "Mei L.", avatar: "ML", rating: 5, text: "Worth every penny. I've tried dozens of alternatives but none come close to the original. An icon for a reason.", date: "Oct 2025" },
];

export default function PerfumeDetailPage({ params }: { params: { id: string } }) {
  const [imgError, setImgError] = useState(false);
  const perfume = PERFUMES.find((p) => p.id === params.id) ?? PERFUMES[0];

  return (
    <div className="min-h-screen pt-20">
      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link href="/database" className="inline-flex items-center gap-2 text-xs text-ivory-muted hover:text-gold transition-colors tracking-wider uppercase">
          <ArrowLeft size={13} /> Back to Database
        </Link>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Background from perfume image */}
        <div className="absolute inset-0">
          {!imgError && (
            <Image
              src={perfume.imageUrl}
              alt={perfume.name}
              fill
              className="object-cover blur-2xl scale-110 opacity-20"
              onError={() => setImgError(true)}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/60 to-obsidian" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Perfume image */}
            <div className="relative w-52 h-72 shrink-0">
              <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-xl" />
              {!imgError ? (
                <Image
                  src={perfume.imageUrl}
                  alt={perfume.name}
                  fill
                  className="object-cover rounded-2xl border border-gold/20 shadow-gold animate-float"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="absolute inset-0 rounded-2xl bg-charcoal border border-gold/20 flex items-center justify-center animate-float">
                  <div className="w-16 h-28 rounded-t-full rounded-b-lg bg-white/10 border border-white/20 flex items-end justify-center pb-3">
                    <div className="w-10 h-3 rounded-full bg-gold/40" />
                  </div>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="flex-1 text-center md:text-left">
              <span className="badge-gold inline-block mb-3">{perfume.family}</span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-2 leading-tight">
                {perfume.name}
              </h1>
              <p className="text-gold text-lg font-medium tracking-wide mb-1">{perfume.brand}</p>
              <p className="text-ivory-muted text-sm mb-5">
                {perfume.year} · {perfume.perfumer} · {perfume.concentration} · {perfume.gender}
              </p>
              <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
                <Stars rating={perfume.rating} />
                <span className="text-gold font-bold text-lg">{perfume.rating}</span>
                <span className="text-ivory-muted text-sm">({perfume.reviews.toLocaleString()} ratings)</span>
              </div>
              <p className="text-ivory-muted leading-relaxed max-w-2xl mb-6 text-sm">
                {perfume.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                {perfume.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-gold/25 text-gold/80">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <span className="font-display text-3xl font-semibold text-ivory">{perfume.price}</span>
                <a href="#buy" className="btn-gold px-6 py-3 text-xs rounded-sm tracking-widest inline-flex items-center gap-2">
                  <ShoppingCart size={14} /> Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
        {/* Left — main */}
        <div className="lg:col-span-2 space-y-10">
          {/* Fragrance Pyramid */}
          <section className="glass rounded-xl p-8">
            <h2 className="font-display text-xl font-semibold text-ivory mb-8">Fragrance Pyramid</h2>
            <div className="flex flex-col items-center gap-0">
              {/* Top */}
              <div className="w-full max-w-xs">
                <p className="text-center text-xs text-gold tracking-widest uppercase mb-2">Top Notes · First 30 Min</p>
                <div className="bg-gradient-to-b from-gold/25 to-gold/10 border border-gold/35 rounded-t-3xl py-5 text-center">
                  <div className="flex flex-wrap justify-center gap-2 px-4">
                    {perfume.topNotes.map((n) => <span key={n} className="note-pill">{n}</span>)}
                  </div>
                </div>
              </div>
              {/* Heart */}
              <div className="w-full max-w-sm">
                <p className="text-center text-xs text-gold tracking-widest uppercase mb-2 mt-1">Heart Notes · 30 Min – 4 Hrs</p>
                <div className="bg-gradient-to-b from-gold/18 to-gold/8 border-x border-gold/25 py-5 text-center">
                  <div className="flex flex-wrap justify-center gap-2 px-4">
                    {perfume.heartNotes.map((n) => <span key={n} className="note-pill">{n}</span>)}
                  </div>
                </div>
              </div>
              {/* Base */}
              <div className="w-full max-w-md">
                <p className="text-center text-xs text-gold tracking-widest uppercase mb-2 mt-1">Base Notes · 4+ Hrs</p>
                <div className="bg-gradient-to-b from-gold/10 to-transparent border border-gold/20 rounded-b-3xl py-5 text-center">
                  <div className="flex flex-wrap justify-center gap-2 px-4">
                    {perfume.baseNotes.map((n) => <span key={n} className="note-pill">{n}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Performance */}
          <section className="glass rounded-xl p-8">
            <h2 className="font-display text-xl font-semibold text-ivory mb-6">Performance Metrics</h2>
            <div className="space-y-4">
              <Bar label="Longevity" value={perfume.longevity} />
              <Bar label="Projection" value={perfume.projection} />
              <Bar label="Versatility" value={7} />
              <Bar label="Value" value={6} />
              <Bar label="Uniqueness" value={9} />
            </div>
          </section>

          {/* Best For */}
          <section className="glass rounded-xl p-8">
            <h2 className="font-display text-xl font-semibold text-ivory mb-6">Best For</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-gold tracking-widest uppercase mb-3">Seasons</p>
                <div className="flex flex-wrap gap-2">
                  {perfume.seasons.map((s) => <span key={s} className="note-pill">{s}</span>)}
                </div>
              </div>
              <div>
                <p className="text-xs text-gold tracking-widest uppercase mb-3">Occasions</p>
                <div className="flex flex-wrap gap-2">
                  {perfume.occasions.map((o) => <span key={o} className="note-pill">{o}</span>)}
                </div>
              </div>
            </div>
          </section>

          {/* Community Reviews */}
          <section className="glass rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-semibold text-ivory">Community Reviews</h2>
              <div className="text-right">
                <p className="text-gold font-bold text-2xl font-display">{perfume.rating}</p>
                <p className="text-xs text-ivory-muted">{perfume.reviews.toLocaleString()} ratings</p>
              </div>
            </div>
            <div className="space-y-6">
              {COMMUNITY_REVIEWS.map((r, i) => (
                <div key={i} className="border-b border-gold/10 last:border-0 pb-6 last:pb-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold shrink-0">
                        {r.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-ivory">{r.author}</p>
                        <p className="text-xs text-ivory-muted">{r.date}</p>
                      </div>
                    </div>
                    <Stars rating={r.rating} />
                  </div>
                  <p className="text-ivory-muted text-sm leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* YouTube */}
          <section className="glass rounded-xl p-8">
            <h2 className="font-display text-xl font-semibold text-ivory mb-6 flex items-center gap-2">
              <Youtube size={18} className="text-gold" /> Video Reviews
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {["dQw4w9WgXcQ", "3JZ_D3ELwOQ"].map((vid) => (
                <div key={vid} className="rounded-xl overflow-hidden border border-gold/15">
                  <iframe
                    width="100%" height="200"
                    src={`https://www.youtube.com/embed/${vid}`}
                    title="Fragrance Review"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen className="block"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Buy options */}
          <div id="buy" className="glass rounded-xl p-6">
            <h3 className="font-display text-base font-semibold text-ivory mb-5 flex items-center gap-2">
              <ShoppingCart size={15} className="text-gold" /> Buy Now
            </h3>
            <div className="space-y-3">
              {perfume.retailers.map((r) => (
                <a key={r.name} href={r.url}
                  className="flex items-center justify-between p-3.5 rounded-lg border border-gold/15 hover:border-gold/45 hover:bg-gold/5 transition-all group">
                  <span className="text-sm text-ivory group-hover:text-gold transition-colors">{r.name}</span>
                  <span className="text-gold font-semibold">{r.price}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick facts */}
          <div className="glass rounded-xl p-6">
            <h3 className="font-display text-base font-semibold text-ivory mb-5">Quick Facts</h3>
            <div className="space-y-3">
              {[
                ["Brand", perfume.brand],
                ["Launch Year", String(perfume.year)],
                ["Perfumer", perfume.perfumer],
                ["Concentration", perfume.concentration],
                ["Family", perfume.family],
                ["Gender", perfume.gender],
              ].map(([lbl, val]) => (
                <div key={lbl} className="flex justify-between items-start border-b border-gold/10 pb-2.5 last:border-0 last:pb-0">
                  <span className="text-xs text-ivory-muted">{lbl}</span>
                  <span className="text-xs text-ivory text-right ml-4 max-w-[55%]">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Similars */}
          <div className="glass rounded-xl p-6">
            <h3 className="font-display text-base font-semibold text-ivory mb-5">You May Also Like</h3>
            <div className="space-y-3">
              {PERFUMES.filter((p) => p.id !== perfume.id && p.family === perfume.family).slice(0, 3).map((p) => (
                <Link key={p.id} href={`/perfume/${p.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-gold/10 hover:border-gold/30 transition-all group">
                  <div className="relative w-10 h-12 rounded-md overflow-hidden shrink-0 bg-charcoal">
                    <Image src={p.imageUrl} alt={p.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-ivory group-hover:text-gold transition-colors truncate">{p.name}</p>
                    <p className="text-xs text-ivory-muted truncate">{p.brand}</p>
                    <p className="text-xs text-gold">{p.price}</p>
                  </div>
                </Link>
              ))}
              {PERFUMES.filter((p) => p.id !== perfume.id && p.family === perfume.family).length === 0 &&
                PERFUMES.filter((p) => p.id !== perfume.id).slice(0, 3).map((p) => (
                  <Link key={p.id} href={`/perfume/${p.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gold/10 hover:border-gold/30 transition-all group">
                    <div className="relative w-10 h-12 rounded-md overflow-hidden shrink-0 bg-charcoal">
                      <Image src={p.imageUrl} alt={p.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-ivory group-hover:text-gold transition-colors truncate">{p.name}</p>
                      <p className="text-xs text-ivory-muted truncate">{p.brand}</p>
                      <p className="text-xs text-gold">{p.price}</p>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
