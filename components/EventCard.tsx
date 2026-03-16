"use client";
import Image from "next/image";
import { MapPin, Calendar, Users } from "lucide-react";
import type { Event } from "@/lib/data";
import { useState } from "react";

export default function EventCard({ event }: { event: Event }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="perfume-card glass rounded-xl overflow-hidden group flex flex-col">
      {/* Image header */}
      <div className="relative h-44 overflow-hidden shrink-0">
        {!imgError ? (
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light to-obsidian" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="badge-gold">{event.type}</span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-xs font-semibold text-gold bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-gold/30">
            {event.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-base font-semibold text-ivory mb-2 group-hover:text-gold transition-colors leading-snug">
          {event.title}
        </h3>
        <p className="text-ivory-muted text-xs leading-relaxed mb-4 line-clamp-2">
          {event.description}
        </p>

        <div className="space-y-2 text-xs text-ivory-muted mt-auto">
          <div className="flex items-center gap-2">
            <Calendar size={12} className="text-gold shrink-0" />
            <span>{event.date} · {event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-gold shrink-0" />
            <span>
              {event.location},{" "}
              <span className="text-gold font-medium">{event.city}</span>
              {", "}{event.country}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={12} className="text-gold shrink-0" />
            <span>{event.attendees.toLocaleString()} attending</span>
          </div>
        </div>

        <button className="btn-outline-gold w-full mt-5 py-2.5 rounded-sm text-xs tracking-widest">
          Reserve Spot
        </button>
      </div>
    </div>
  );
}
