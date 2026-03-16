"use client";
import { useState } from "react";
import EventCard from "@/components/EventCard";
import { EVENTS } from "@/lib/data";
import { MapPin } from "lucide-react";

const CITIES = ["All Cities", "Dubai", "London", "New York", "Paris", "Mumbai", "Singapore"];
const TYPES = ["All Types", "Conference", "Workshop", "Masterclass", "Meetup", "Festival", "Gala"];

export default function EventsPage() {
  const [city, setCity] = useState("All Cities");
  const [type, setType] = useState("All Types");

  const filtered = EVENTS.filter((e) => {
    const matchCity = city === "All Cities" || e.city === city;
    const matchType = type === "All Types" || e.type === type;
    return matchCity && matchType;
  });

  return (
    <div className="min-h-screen pt-20">
      <div className="page-header py-16 px-6 text-center">
        <span className="badge-gold inline-block mb-4">Community</span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-ivory mb-3">
          Meetups & Events
        </h1>
        <p className="text-ivory-muted max-w-lg mx-auto">
          Connect with fragrance enthusiasts, attend masterclasses with master perfumers, and discover new scents at curated events worldwide.
        </p>
        <div className="gold-divider w-16 mx-auto mt-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Filters */}
        <div className="glass rounded-xl p-6 mb-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={13} className="text-gold" />
                <label className="text-xs text-gold tracking-widest uppercase">City</label>
              </div>
              <div className="flex flex-wrap gap-2">
                {CITIES.map((c) => (
                  <button key={c} onClick={() => setCity(c)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${city === c ? "border-gold bg-gold/15 text-gold" : "border-gold/20 text-ivory-muted hover:border-gold/40"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-gold tracking-widest uppercase mb-3 block">Event Type</label>
              <div className="flex flex-wrap gap-2">
                {TYPES.map((t) => (
                  <button key={t} onClick={() => setType(t)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${type === t ? "border-gold bg-gold/15 text-gold" : "border-gold/20 text-ivory-muted hover:border-gold/40"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-ivory-muted mb-7 tracking-wider">
          <span className="text-gold font-semibold">{filtered.length}</span> upcoming events
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-5xl mb-5">📅</p>
            <p className="font-display text-xl text-ivory mb-2">No events found</p>
            <p className="text-ivory-muted text-sm">Try different filters</p>
          </div>
        )}

        {/* Host CTA */}
        <div className="mt-16 glass rounded-2xl p-10 text-center border border-gold/20">
          <h2 className="font-display text-2xl font-semibold text-ivory mb-3">Host a Fragrance Event</h2>
          <p className="text-ivory-muted max-w-md mx-auto mb-6 text-sm leading-relaxed">
            Are you a perfumer, retailer, boutique, or enthusiast? List your event on SANTIALLS and reach over 250,000 fragrance lovers worldwide.
          </p>
          <button className="btn-gold px-8 py-3 text-xs rounded-sm tracking-widest">
            Submit Your Event
          </button>
        </div>
      </div>
    </div>
  );
}
