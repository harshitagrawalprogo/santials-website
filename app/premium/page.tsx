import { Crown, Check, Sparkles, Users, Zap, Lock } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    name: "Explorer",
    price: "Free",
    period: "",
    description: "Perfect for fragrance beginners discovering their taste.",
    features: [
      "Access to perfume database",
      "Basic search & filters",
      "Community reviews",
      "Blog access",
      "Find My Dupe (5/month)",
    ],
    cta: "Get Started",
    ctaStyle: "btn-outline-gold",
    featured: false,
  },
  {
    name: "Connoisseur",
    price: "$9",
    period: "/month",
    description: "For serious fragrance enthusiasts who want deeper intelligence.",
    features: [
      "Everything in Explorer",
      "Unlimited AI Scent Finder",
      "Advanced fragrance analytics",
      "Unlimited dupe finder",
      "Exclusive niche reviews",
      "Early access to new features",
      "Personal fragrance wardrobe",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaStyle: "btn-gold",
    featured: true,
  },
  {
    name: "Collector",
    price: "$24",
    period: "/month",
    description: "The ultimate platform for dedicated collectors and professionals.",
    features: [
      "Everything in Connoisseur",
      "Private fragrance community",
      "Exclusive meetup invitations",
      "Direct access to perfumers",
      "API access for developers",
      "Concierge fragrance curation",
      "Early product releases",
      "VIP event access worldwide",
    ],
    cta: "Join the Elite",
    ctaStyle: "btn-outline-gold",
    featured: false,
  },
];

const BENEFITS = [
  { icon: Sparkles, title: "Advanced AI Scent Finder", desc: "Unlimited personalised recommendations powered by our proprietary AI trained on 50,000+ fragrances." },
  { icon: Users, title: "Private Community", desc: "Join an exclusive community of serious fragrance collectors, perfumers, and industry insiders." },
  { icon: Zap, title: "Exclusive Reviews", desc: "Access in-depth reviews of rare and niche fragrances before they're publicly released." },
  { icon: Lock, title: "VIP Events", desc: "Curated invitations to exclusive fragrance events, masterclasses, and perfumer meet-and-greets." },
];

export default function PremiumPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="page-header py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="relative z-10">
          <Crown size={32} className="text-gold mx-auto mb-5" />
          <span className="badge-gold inline-block mb-5">Exclusive Membership</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-ivory mb-4 leading-tight">
            Elevate Your<br /><span className="gold-text italic">Fragrance Journey</span>
          </h1>
          <p className="text-ivory-muted max-w-lg mx-auto text-lg leading-relaxed">
            Join the elite circle of fragrance connoisseurs. Unlock intelligence, exclusivity, and community.
          </p>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 relative ${plan.featured ? "pricing-featured shadow-gold" : "glass"}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="badge-gold px-4 py-1.5 text-xs bg-obsidian">Most Popular</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-cinzel text-sm tracking-[0.2em] uppercase text-gold mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="font-display text-4xl font-semibold text-ivory">{plan.price}</span>
                  {plan.period && <span className="text-ivory-muted text-sm mb-1">{plan.period}</span>}
                </div>
                <p className="text-ivory-muted text-sm">{plan.description}</p>
              </div>

              <div className="gold-divider mb-6" />

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={14} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-ivory-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/database"
                className={`${plan.ctaStyle} block text-center w-full py-3 text-xs rounded-sm tracking-widest`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-ivory-muted text-xs mt-6">
          All plans include a 14-day money-back guarantee. No questions asked.
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-charcoal/40 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-ivory text-center mb-3">Why Premium?</h2>
          <p className="text-ivory-muted text-center mb-12 max-w-xl mx-auto">Premium members get access to tools and community that transform how you experience fragrance.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-xl p-6 flex gap-5">
                <div className="w-12 h-12 rounded-xl border border-gold/25 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ivory mb-1">{title}</h3>
                  <p className="text-ivory-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-ivory text-center mb-10">What Our Members Say</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { name: "Victoria S.", location: "London", quote: "SANTIALLS completely changed how I discover fragrances. The AI recommendations are frighteningly accurate.", tier: "Connoisseur" },
            { name: "Khalid A.", location: "Dubai", quote: "The dupe finder alone is worth every penny. Found my perfect MFK alternative for a fraction of the price.", tier: "Collector" },
            { name: "Mei L.", location: "Singapore", quote: "The private community is extraordinary. Conversations with perfumers I'd never otherwise access.", tier: "Collector" },
          ].map((t) => (
            <div key={t.name} className="glass rounded-xl p-6">
              <p className="text-ivory-muted text-sm leading-relaxed italic mb-5">&quot;{t.quote}&quot;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-ivory">{t.name}</p>
                  <p className="text-xs text-ivory-muted">{t.location}</p>
                </div>
                <span className="badge-gold">{t.tier}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <div className="relative glass rounded-2xl p-12 border border-gold/20">
          <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
          <Crown size={28} className="text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl font-semibold text-ivory mb-3">Ready to Join?</h2>
          <p className="text-ivory-muted mb-8">Start your 14-day free trial. Cancel anytime.</p>
          <Link href="/database" className="btn-gold px-10 py-4 text-sm rounded-sm tracking-widest inline-flex items-center gap-2">
            <Crown size={16} /> Begin Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
}
