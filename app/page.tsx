"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import PerfumeCard from "@/components/PerfumeCard";
import BlogCard from "@/components/BlogCard";
import { PERFUMES, BLOG_POSTS } from "@/lib/data";
import { Sparkles, ArrowRight, Crown, TrendingUp, Zap, Star, Shield, Users } from "lucide-react";

const STATS = [
  { value: "50,000+", label: "Perfumes Catalogued" },
  { value: "2,800+", label: "Brands Covered" },
  { value: "250K+", label: "Community Members" },
  { value: "98%", label: "AI Accuracy Rate" },
];

const AWARDS = [
  { label: "#1 Fragrance Platform", source: "Fragrance Community Awards 2025" },
  { label: "Best AI Product", source: "Beauty Tech Innovation 2025" },
  { label: "Editor's Choice", source: "Vogue Business 2025" },
];

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-14">
      {eyebrow && <span className="badge-gold inline-block mb-4">{eyebrow}</span>}
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-3">{title}</h2>
      {subtitle && (
        <p className="text-ivory-muted max-w-xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className="gold-divider w-16 mx-auto mt-5" />
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian">
        {/* Radial glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-900/6 rounded-full blur-3xl" />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 pt-24">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 badge-gold mb-8">
              <Crown size={11} /> Luxury Fragrance Intelligence Platform
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-ivory leading-[1.05] mb-6">
              The Intelligence of{" "}
              <em className="gold-text not-italic">Luxury</em>{" "}
              Fragrance
            </h1>
            <p className="text-ivory-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Discover, compare, and experience the world&apos;s most refined scents. Powered by AI intelligence. Curated by connoisseurs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/database"
                className="btn-gold px-8 py-3.5 text-sm rounded-sm tracking-widest inline-flex items-center gap-2"
              >
                Explore Perfumes <ArrowRight size={15} />
              </Link>
              <Link
                href="/ai-finder"
                className="btn-outline-gold px-8 py-3.5 text-sm rounded-sm tracking-widest inline-flex items-center gap-2"
              >
                <Sparkles size={15} /> AI Scent Finder
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-14 justify-center lg:justify-start">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-semibold gold-text">{s.value}</p>
                  <p className="text-xs text-ivory-muted tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero bottle */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative w-72 h-96 animate-float">
              <div className="absolute inset-0 bg-gold/8 rounded-full blur-3xl scale-110" />
              <Image
                src="/images/hero-bottle.png"
                alt="Luxury Perfume"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            {/* Floating note pills around bottle */}
            <div className="absolute top-8 right-4 note-pill animate-float" style={{ animationDelay: "0.5s" }}>Oud</div>
            <div className="absolute bottom-16 right-0 note-pill animate-float" style={{ animationDelay: "1s" }}>Saffron</div>
            <div className="absolute top-20 left-4 note-pill animate-float" style={{ animationDelay: "1.5s" }}>Jasmine</div>
            <div className="absolute bottom-24 left-2 note-pill animate-float" style={{ animationDelay: "0.8s" }}>Amber</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-xs text-gold tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* ── AWARDS BAR ── */}
      <section className="border-y border-gold/10 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {AWARDS.map((a) => (
              <div key={a.label} className="flex items-center gap-2 text-ivory-muted">
                <Shield size={13} className="text-gold shrink-0" />
                <span className="text-xs">
                  <strong className="text-ivory font-medium">{a.label}</strong>
                  {" "}· {a.source}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE ICONS ── */}
      <section className="border-b border-gold/8 bg-charcoal/50">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: TrendingUp, label: "50K+ Perfumes", sub: "Curated global database" },
            { icon: Sparkles, label: "AI Scent Finder", sub: "Personalised recommendations" },
            { icon: Zap, label: "Find My Dupe", sub: "Affordable alternatives" },
            { icon: Star, label: "Expert Reviews", sub: "Influencer insights" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-gold/25 flex items-center justify-center shrink-0 bg-gold/5">
                <Icon size={17} className="text-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-ivory">{label}</p>
                <p className="text-xs text-ivory-muted mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRENDING PERFUMES ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto reveal">
        <SectionHeader
          eyebrow="Most Coveted"
          title="Trending Right Now"
          subtitle="The fragrances dominating conversations among connoisseurs worldwide this season."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PERFUMES.slice(0, 8).map((p) => (
            <PerfumeCard key={p.id} perfume={p} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/database"
            className="btn-outline-gold px-8 py-3 text-xs rounded-sm tracking-widest inline-flex items-center gap-2"
          >
            Browse Full Library <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ── COLLECTION PHOTO BANNER ── */}
      <section className="py-12 px-6 max-w-7xl mx-auto reveal">
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
          <Image
            src="/images/perfume-collection.png"
            alt="Luxury Perfume Collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div className="max-w-md">
              <span className="badge-gold mb-4 block w-fit">50,000+ Fragrances</span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-4 leading-tight">
                The World&apos;s Most Complete Fragrance Library
              </h2>
              <Link
                href="/database"
                className="btn-gold px-7 py-3 text-xs rounded-sm tracking-widest inline-flex items-center gap-2"
              >
                Explore Archive <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI FINDER TEASER ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-obsidian" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center reveal">
          <div className="inline-flex items-center gap-2 badge-gold mb-6">
            <Sparkles size={11} /> AI-Powered
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-5 leading-tight">
            Find Your Perfect Scent with{" "}
            <span className="gold-text italic">AI Intelligence</span>
          </h2>
          <p className="text-ivory-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us your favourite perfumes, preferred notes, and occasion — our AI draws from 50,000+ fragrances to find your perfect match in seconds.
          </p>
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="e.g. I love Baccarat Rouge, prefer woody and amber notes..."
                className="luxury-input flex-1 px-4 py-3 rounded-sm text-sm"
              />
              <Link
                href="/ai-finder"
                className="btn-gold px-6 py-3 text-xs rounded-sm tracking-widest shrink-0 flex items-center justify-center gap-2"
              >
                <Sparkles size={14} /> Analyse
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {["Woody & Warm", "Fresh & Citrus", "Floral & Elegant", "Dark & Mysterious"].map((tag) => (
                <button
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full border border-gold/20 text-ivory-muted hover:bg-gold/10 hover:text-gold transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DUPE FINDER TEASER ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto reveal">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="badge-gold inline-block mb-5">Smart Savings</span>
            <h2 className="font-display text-4xl font-semibold text-ivory mb-4 leading-tight">
              Luxury Scents at <span className="gold-text">Fraction Prices</span>
            </h2>
            <p className="text-ivory-muted leading-relaxed mb-6 text-base">
              Our molecular similarity engine compares over 200 chemical compounds to find you the closest fragrance alternatives. Special focus on Middle Eastern houses that master affordable luxury.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-ivory-muted mb-8">
              {["Lattafa", "Armaf", "Rasasi", "Al Haramain", "Afnan"].map((brand) => (
                <span key={brand} className="px-3 py-1.5 rounded-full border border-gold/20 text-gold/90">
                  {brand}
                </span>
              ))}
            </div>
            <Link
              href="/find-dupe"
              className="btn-gold px-7 py-3 text-xs rounded-sm tracking-widest inline-flex items-center gap-2"
            >
              Find My Dupe <ArrowRight size={14} />
            </Link>
          </div>

          <div className="glass rounded-2xl p-6">
            <p className="text-xs text-gold tracking-widest uppercase mb-4">Live Dupe Matches</p>
            {[
              { luxury: "Baccarat Rouge 540", luxBrand: "MFK", luxPrice: "$325", dupe: "Bade'e Al Oud 786", dupeBrand: "Lattafa", dupePrice: "$28", score: 94 },
              { luxury: "Aventus", luxBrand: "Creed", luxPrice: "$550", dupe: "Club de Nuit Intense", dupeBrand: "Armaf", dupePrice: "$40", score: 91 },
              { luxury: "Oud Wood", luxBrand: "Tom Ford", luxPrice: "$290", dupe: "Al Haramain Amber Oud", dupeBrand: "Al Haramain", dupePrice: "$60", score: 88 },
            ].map((item) => (
              <div
                key={item.luxury}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/2 border border-gold/10 hover:border-gold/30 transition-all mb-3 last:mb-0 group cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-ivory truncate">{item.luxury}</p>
                  <p className="text-xs text-ivory-muted">{item.luxBrand} · {item.luxPrice}</p>
                  <div className="flex items-center gap-1 mt-1.5">
                    <ArrowRight size={9} className="text-gold/60" />
                    <p className="text-xs text-gold truncate">{item.dupe} · {item.dupePrice}</p>
                  </div>
                </div>
                <div className="text-center shrink-0">
                  <p className="text-lg font-bold text-gold font-display">{item.score}%</p>
                  <p className="text-xs text-ivory-muted">match</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="py-24 px-6 bg-charcoal/30">
        <div className="max-w-7xl mx-auto reveal">
          <SectionHeader
            eyebrow="Editorial"
            title="From The Journal"
            subtitle="Luxury fragrance insights, buying guides, and deep dives from our expert editorial team."
          />
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <BlogCard post={BLOG_POSTS[0]} featured />
            </div>
            <div className="flex flex-col gap-6">
              {BLOG_POSTS.slice(1, 3).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="btn-outline-gold px-8 py-3 text-xs rounded-sm tracking-widest inline-flex items-center gap-2"
            >
              Read The Journal <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY NUMBERS ── */}
      <section className="py-20 px-6 max-w-7xl mx-auto reveal">
        <div className="glass rounded-2xl p-10 md:p-14 border border-gold/15 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { icon: Users, value: "250,000+", label: "Active Members" },
              { icon: Star, value: "4.8 / 5", label: "Average Rating" },
              { icon: Sparkles, value: "2.4M+", label: "AI Queries/Month" },
              { icon: Crown, value: "12,000+", label: "Premium Members" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon size={22} className="text-gold mx-auto mb-3" />
                <p className="font-display text-2xl md:text-3xl font-semibold gold-text">{value}</p>
                <p className="text-xs text-ivory-muted mt-1 tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREMIUM CTA ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto reveal">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-obsidian" />
          <div className="absolute inset-0 border border-gold/20 rounded-2xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="relative z-10 p-12 lg:p-20 text-center">
            <Crown size={30} className="text-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-4 leading-tight">
              Join the Elite Circle
            </h2>
            <p className="text-ivory-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Unlock advanced AI recommendations, exclusive niche reviews, private community access, and invitations to curated fragrance events worldwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/premium" className="btn-gold px-10 py-4 text-sm rounded-sm tracking-widest inline-flex items-center gap-2">
                <Crown size={16} /> Explore Premium
              </Link>
              <Link href="/database" className="btn-outline-gold px-10 py-4 text-sm rounded-sm tracking-widest">
                Start Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
