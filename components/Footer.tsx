import Link from "next/link";
import { Crown, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Discover: [
    { label: "Perfume Database", href: "/database" },
    { label: "Find My Dupe", href: "/find-dupe" },
    { label: "AI Scent Finder", href: "/ai-finder" },
    { label: "Trending", href: "/database?sort=trending" },
  ],
  Community: [
    { label: "Blog", href: "/blog" },
    { label: "Learn Perfumery", href: "/learn" },
    { label: "Meetups & Events", href: "/events" },
    { label: "Influencer Reviews", href: "/blog?tab=reviews" },
  ],
  Premium: [
    { label: "Membership", href: "/premium" },
    { label: "Private Community", href: "/premium#community" },
    { label: "Exclusive Events", href: "/premium#events" },
    { label: "AI Access", href: "/ai-finder" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Crown size={18} className="text-gold" />
              <span className="font-cinzel text-lg font-600 tracking-[0.25em] gold-text">
                SANTIALLS
              </span>
            </div>
            <p className="text-ivory-muted text-sm leading-relaxed mb-6">
              The intelligence of luxury fragrance. Discover, compare, and experience the world's most refined scents.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-ivory-muted hover:text-gold hover:border-gold/50 transition-all duration-300"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory-muted hover:text-ivory transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gold-divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory-muted">
          <p>© 2026 SANTIALLS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gold transition-colors">Cookie Policy</Link>
          </div>
          <p className="font-cinzel tracking-widest text-gold/50 text-xs">
            LUXURY FRAGRANCE INTELLIGENCE
          </p>
        </div>
      </div>
    </footer>
  );
}
