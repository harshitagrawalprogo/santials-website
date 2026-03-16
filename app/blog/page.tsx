import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CATEGORIES = ["All", "Seasonal Guide", "Industry", "Buying Guide", "Deep Dive", "For Beginners", "Brand Spotlight", "Learn"];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src="/images/blog-hero.png"
          alt="SANTIALLS Journal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-obsidian/30 to-obsidian" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="badge-gold inline-block mb-4">Editorial</span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-ivory mb-3">
            The Journal
          </h1>
          <p className="text-ivory-muted max-w-lg mx-auto text-lg">
            Expert fragrance journalism. Buying guides, deep dives, and cultural commentary.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className="text-xs px-4 py-2 rounded-full border border-gold/20 text-ivory-muted hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured + grid */}
        <div className="mb-10">
          <BlogCard post={BLOG_POSTS[0]} featured />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(1).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="btn-outline-gold px-8 py-3 text-xs rounded-sm tracking-widest inline-flex items-center gap-2">
            Load More Articles <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
