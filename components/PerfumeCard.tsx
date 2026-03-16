"use client";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart } from "lucide-react";
import type { Perfume } from "@/lib/data";
import { useState } from "react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={11}
          className={s <= Math.round(rating) ? "text-gold fill-gold" : "text-charcoal-mid"}
        />
      ))}
      <span className="text-ivory-muted text-xs ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function PerfumeCard({ perfume }: { perfume: Perfume }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <Link href={`/perfume/${perfume.id}`} className="block group">
      <div className="perfume-card glass rounded-xl overflow-hidden cursor-pointer relative">
        {/* Gold corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-r-[48px] border-t-transparent border-r-gold/25" />
        </div>

        {/* Image area */}
        <div className="relative h-56 bg-charcoal overflow-hidden">
          {!imgError ? (
            <Image
              src={perfume.imageUrl}
              alt={perfume.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Fallback gradient bottle */
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light to-obsidian flex items-center justify-center">
              <div className="animate-float flex flex-col items-center gap-1">
                <div className="w-14 h-24 rounded-t-full rounded-b-lg bg-gradient-to-b from-white/15 to-white/5 border border-white/20 flex items-end justify-center pb-2">
                  <div className="w-9 h-3 rounded-full bg-gold/40" />
                </div>
                <div className="w-5 h-3 rounded-sm bg-gold/30" />
              </div>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

          {/* Wishlist btn */}
          <button
            onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted); }}
            className={`absolute top-3 left-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 z-10 ${wishlisted ? "text-gold" : "text-ivory-muted hover:text-gold"}`}
          >
            <Heart size={14} className={wishlisted ? "fill-gold" : ""} />
          </button>

          {/* Season badge */}
          <div className="absolute bottom-3 right-3">
            <span className="badge-gold text-xs">{perfume.season}</span>
          </div>

          {/* Concentration */}
          <div className="absolute bottom-3 left-3">
            <span className="text-xs text-ivory-muted/70 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
              {perfume.concentration}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-1 gap-2">
            <div className="min-w-0">
              <p className="text-xs text-gold tracking-widest uppercase font-medium truncate">
                {perfume.brand}
              </p>
              <h3 className="font-display text-base font-semibold text-ivory leading-tight mt-0.5 group-hover:text-gold transition-colors duration-300 line-clamp-1">
                {perfume.name}
              </h3>
            </div>
            <span className="text-xs text-ivory-muted opacity-60 shrink-0 font-mono">{perfume.year}</span>
          </div>

          <div className="mt-2 mb-3">
            <StarRating rating={perfume.rating} />
            <p className="text-xs text-ivory-muted/60 mt-0.5">{perfume.reviews.toLocaleString()} ratings</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="badge-gold">{perfume.family}</span>
            <span className="text-gold font-semibold text-sm">{perfume.price}</span>
          </div>

          {/* Top notes preview */}
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gold/10">
            {perfume.topNotes.slice(0, 3).map((note) => (
              <span key={note} className="note-pill">{note}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
