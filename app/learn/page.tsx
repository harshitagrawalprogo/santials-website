import Image from "next/image";
import { BookOpen, Droplets, Beaker, Leaf, ChevronRight } from "lucide-react";

const NOTE_FAMILIES = [
  { name: "Floral", description: "Rose, Jasmine, Iris, Ylang-Ylang, Peony, Violet, Lavender. The largest of all families — romantic, powdery, soft.", color: "from-pink-900/50 to-rose-950" },
  { name: "Woody", description: "Sandalwood, Cedarwood, Vetiver, Guaiac Wood, Birch, Patchouli. Grounded, warm, and sophisticated.", color: "from-amber-900/50 to-stone-950" },
  { name: "Oriental", description: "Amber, Oud, Musk, Vanilla, Incense, Benzoin, Frankincense. The richest and most opulent family.", color: "from-orange-900/50 to-amber-950" },
  { name: "Fresh", description: "Bergamot, Lemon, Green Tea, Oceanic, Cucumber, Mint. Clean, airy, and invigorating.", color: "from-cyan-900/50 to-teal-950" },
  { name: "Gourmand", description: "Caramel, Chocolate, Praline, Coffee, Tonka Bean, Coconut. Edible-adjacent compositions that feel warm and comforting.", color: "from-yellow-900/50 to-amber-950" },
  { name: "Chypre", description: "Oak Moss, Labdanum, Bergamot, Costus — the classic 1917 family born from Coty's Chypre. Complex and timeless.", color: "from-emerald-900/50 to-green-950" },
];

const CHAPTERS = [
  {
    icon: BookOpen,
    title: "Fragrance Concentration Guide",
    items: [
      "Parfum / Extrait — 20–40% aromatic compounds · 12–24 hr longevity",
      "Eau de Parfum (EdP) — 15–20% · 6–8 hr · Most popular concentration",
      "Eau de Toilette (EdT) — 5–15% · 4–5 hr · Ideal for daytime wear",
      "Eau de Cologne (EdC) — 2–5% · 2–3 hr · Originated in Cologne, Germany",
      "Eau Fraîche — 1–3% · 1–2 hr · Mostly water, very light",
    ],
  },
  {
    icon: Droplets,
    title: "How to Apply Perfume Correctly",
    items: [
      "Apply to pulse points: wrists, neck, inner elbows, behind knees",
      "Spray from 15–20 cm distance for even distribution",
      "Never rub — rubbing crushes the molecular structure and alters development",
      "Apply before getting dressed to avoid staining delicate fabrics",
      "Layer with matching body lotion for up to 3× longer wear time",
    ],
  },
  {
    icon: Beaker,
    title: "Perfume Chemistry Explained",
    items: [
      "Top notes: highly volatile molecules (citrus, spice) — first impression · 15–30 min",
      "Heart notes: medium volatility (florals, spice) — the core character · 30 min – 4 hrs",
      "Base notes: heavy molecules (wood, musk, resin) — lasting foundation · 4 hrs+",
      "Sillage = the invisible scent trail a fragrance leaves as you move",
      "Tenacity = the persistence of a fragrance on fabric and skin over time",
    ],
  },
  {
    icon: Leaf,
    title: "Natural vs Synthetic Ingredients",
    items: [
      "Naturals: rose absolute, oud, ambergris — expensive, batch-variable, but soulful",
      "Synthetics: consistent, ethical alternatives that extend what's naturally possible",
      "Ambroxan: the dominant modern synthetic — clean ambergris-like quality",
      "ISO E Super: versatile cedar-woody note used in Sauvage, Fahrenheit, and many classics",
      "Most great perfumes blend both: naturals for character, synthetics for projection",
    ],
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Ingredient Sourcing", desc: "Natural raw materials from around the world — roses from Bulgaria, oud from Cambodia, iris from Florence, bergamot from Calabria." },
  { step: "02", title: "Extraction", desc: "Steam distillation, cold press, solvent extraction, or enfleurage. Each method preserves different aromatic compounds and characteristics." },
  { step: "03", title: "Blending", desc: "The perfumer (or 'nose') composes the formula, often working with 50–200+ ingredients, carefully balancing top, heart, and base accords." },
  { step: "04", title: "Maceration", desc: "The blend matures in high-grade alcohol for weeks or months. This harmonises all ingredients before filtration, quality testing, and bottling." },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="page-header py-16 px-6 text-center">
        <span className="badge-gold inline-block mb-4">Perfumery School</span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-3">
          Learn Perfumery
        </h1>
        <p className="text-ivory-muted max-w-lg mx-auto">
          From the chemistry of scent to the history of great fragrance houses — everything you need to become a true connoisseur.
        </p>
        <div className="gold-divider w-16 mx-auto mt-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Ingredients hero image */}
        <section>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/ingredients.png"
              alt="Natural Perfume Ingredients"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/40 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10">
              <div className="max-w-md">
                <span className="badge-gold mb-4 block w-fit">The Ingredients</span>
                <h2 className="font-display text-3xl font-semibold text-ivory mb-3">
                  Thousands of ingredients. Infinite compositions.
                </h2>
                <p className="text-ivory-muted leading-relaxed text-sm">
                  From rare oud resin to synthetic musks invented in Swiss laboratories — the world of fragrance ingredients is endlessly fascinating.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Note Families */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-ivory mb-2 text-center">
            The Six Fragrance Families
          </h2>
          <p className="text-ivory-muted text-center mb-10 max-w-xl mx-auto text-sm">
            All perfumes can be classified into one of six major olfactory families, often with overlap and sub-families.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NOTE_FAMILIES.map((f) => (
              <div key={f.name} className="perfume-card glass rounded-xl overflow-hidden">
                <div className={`h-20 bg-gradient-to-br ${f.color} flex items-center px-5`}>
                  <h3 className="font-display text-xl font-semibold text-ivory">{f.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-ivory-muted text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fragrance Wheel */}
        <section className="text-center">
          <h2 className="font-display text-2xl font-semibold text-ivory mb-3">The Fragrance Wheel</h2>
          <p className="text-ivory-muted mb-10 max-w-xl mx-auto text-sm">
            Developed by perfume critic Michael Edwards in 1983, the fragrance wheel maps the relationships between all scent families.
          </p>
          <div className="relative w-72 h-72 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-gold/25" />
            <div className="absolute inset-8 rounded-full border border-gold/15" />
            <div className="absolute inset-16 rounded-full border border-gold/10 bg-charcoal/60 backdrop-blur-sm" />
            {[
              { label: "Floral", angle: -90 },
              { label: "Oriental", angle: 0 },
              { label: "Woody", angle: 90 },
              { label: "Fresh", angle: 180 },
            ].map(({ label, angle }) => {
              const rad = (angle * Math.PI) / 180;
              const x = 50 + 42 * Math.cos(rad);
              const y = 50 + 42 * Math.sin(rad);
              return (
                <div
                  key={label}
                  className="absolute text-xs font-semibold text-gold tracking-wider font-cinzel"
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
                >
                  {label}
                </div>
              );
            })}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-cinzel text-xs gold-text tracking-[0.2em]">SCENT</p>
                <p className="font-cinzel text-xs gold-text tracking-[0.2em]">WHEEL</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapters */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-ivory mb-8 text-center">
            Perfumery Fundamentals
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CHAPTERS.map(({ icon: Icon, title, items }) => (
              <div key={title} className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-full border border-gold/25 bg-gold/5 flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-gold" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ivory">{title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ivory-muted leading-relaxed">
                      <ChevronRight size={13} className="text-gold shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How Perfumes Are Made */}
        <section className="glass rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-2xl font-semibold text-ivory mb-10 text-center">
            How Perfumes Are Made
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map(({ step, title, desc }) => (
              <div key={step}>
                <p className="font-cinzel text-4xl gold-text font-bold mb-4">{step}</p>
                <h3 className="font-display text-sm font-semibold text-ivory mb-2">{title}</h3>
                <p className="text-ivory-muted text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
