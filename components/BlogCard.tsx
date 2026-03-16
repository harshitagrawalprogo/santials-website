"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/data";
import { useState } from "react";

export default function BlogCard({ post, featured }: { post: BlogPost; featured?: boolean }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className={`perfume-card glass rounded-xl overflow-hidden ${featured ? "lg:flex h-full" : "flex flex-col"}`}>
        {/* Cover image */}
        <div className={`relative overflow-hidden ${featured ? "lg:w-1/2 min-h-[240px]" : "h-48"} shrink-0`}>
          {!imgError ? (
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light to-obsidian" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/10 to-transparent" />
          {/* Subtle horizontal lines overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(212,175,55,0.5) 24px, rgba(212,175,55,0.5) 25px)" }}
          />
          <div className="absolute bottom-0 left-0 p-4 z-10">
            <span className="badge-gold">{post.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className={`p-5 flex flex-col justify-between flex-1 ${featured ? "lg:p-8" : ""}`}>
          <div>
            <h3 className={`font-display font-semibold text-ivory leading-snug mb-2 group-hover:text-gold transition-colors duration-300 ${featured ? "text-xl lg:text-2xl" : "text-base"}`}>
              {post.title}
            </h3>
            <p className="text-ivory-muted text-sm leading-relaxed line-clamp-2 mb-4">
              {post.excerpt}
            </p>
          </div>

          {/* Meta */}
          <div className="flex items-center justify-between pt-4 border-t border-gold/10">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold shrink-0">
                {post.authorAvatar}
              </div>
              <div>
                <p className="text-xs text-ivory font-medium">{post.author}</p>
                <p className="text-xs text-ivory-muted flex items-center gap-1 mt-0.5">
                  <Clock size={10} /> {post.readTime} · {post.date}
                </p>
              </div>
            </div>
            <span className="text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <ArrowRight size={15} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
