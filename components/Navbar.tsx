"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Crown } from "lucide-react";

const navLinks = [
  { label: "Explore", href: "/database" },
  { label: "Find My Dupe", href: "/find-dupe" },
  { label: "AI Finder", href: "/ai-finder" },
  { label: "Blog", href: "/blog" },
  { label: "Learn", href: "/learn" },
  { label: "Events", href: "/events" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark shadow-glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Crown
            size={20}
            className="text-gold transition-all duration-300 group-hover:scale-110"
          />
          <span className="font-cinzel text-xl font-700 tracking-[0.25em] gold-shimmer">
            SANTIALLS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.12em] uppercase font-medium transition-all duration-300 hover:text-gold relative group ${
                pathname === link.href ? "text-gold" : "text-ivory-muted"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gold-gradient transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-ivory-muted hover:text-gold transition-colors duration-300">
            <Search size={18} />
          </button>
          <Link
            href="/premium"
            className="btn-gold px-5 py-2 text-xs rounded-sm tracking-widest"
          >
            Premium
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-ivory hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-dark border-t border-gold/10 mt-2">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xs tracking-[0.15em] uppercase font-medium text-ivory-muted hover:text-gold transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/premium"
              className="btn-gold px-5 py-2 text-xs rounded-sm tracking-widest text-center mt-2"
            >
              Premium
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
