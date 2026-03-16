// Central data store for SANTIALLS — all perfume, blog, event data

export interface Perfume {
  id: string;
  name: string;
  brand: string;
  year: number;
  perfumer: string;
  family: string;
  concentration: string;
  gender: string;
  rating: number;
  reviews: number;
  longevity: number;   // out of 10
  projection: number;  // out of 10
  price: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  seasons: string[];
  occasions: string[];
  description: string;
  imageUrl: string;
  season: string; // primary
  tags: string[];
  retailers: { name: string; price: string; url: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  imageUrl: string;
  featured?: boolean;
  author: string;
  authorAvatar: string;
}

export interface Event {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  city: string;
  country: string;
  attendees: number;
  imageUrl: string;
  price: string;
  description: string;
}

// ─── PERFUME DATA ───────────────────────────────────────────────────────────

export const PERFUMES: Perfume[] = [
  {
    id: "baccarat-rouge-540",
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    year: 2015, perfumer: "Francis Kurkdjian",
    family: "Amber Floral Woody", concentration: "Eau de Parfum",
    gender: "Unisex", rating: 4.8, reviews: 14820,
    longevity: 9, projection: 8, price: "$325",
    topNotes: ["Saffron", "Jasmine"],
    heartNotes: ["Amberwood", "Ambergris"],
    baseNotes: ["Fir Resin", "Cedar"],
    seasons: ["Fall", "Winter"], occasions: ["Evening", "Date Night", "Office"],
    description: "An iconic amber floral that opened the doors to a new olfactory era. Luminous, mysterious, and deeply addictive — a modern masterpiece that transcends passing trends.",
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=85&auto=format&fit=crop",
    season: "Winter", tags: ["Bestseller", "Iconic", "Unisex"],
    retailers: [
      { name: "Sephora", price: "$325", url: "#" },
      { name: "Notino", price: "$298", url: "#" },
      { name: "Amazon", price: "$315", url: "#" },
    ],
  },
  {
    id: "black-orchid",
    name: "Black Orchid",
    brand: "Tom Ford", year: 2006, perfumer: "David Apel",
    family: "Floral Oriental", concentration: "Eau de Parfum",
    gender: "Unisex", rating: 4.7, reviews: 11200,
    longevity: 9, projection: 9, price: "$190",
    topNotes: ["Truffle", "Bergamot", "Black Currant"],
    heartNotes: ["Black Orchid", "Ylang-Ylang", "Jasmine"],
    baseNotes: ["Patchouli", "Vetiver", "Sandalwood"],
    seasons: ["Fall", "Winter"], occasions: ["Evening", "Date Night"],
    description: "Voluptuous and dark — a floral oriental of extraordinary depth. Black Orchid is the opening note of seduction, a scent that commands attention in any room.",
    imageUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=85&auto=format&fit=crop",
    season: "Fall", tags: ["Dark", "Seductive", "Iconic"],
    retailers: [
      { name: "Tom Ford Beauty", price: "$190", url: "#" },
      { name: "Sephora", price: "$195", url: "#" },
      { name: "Notino", price: "$178", url: "#" },
    ],
  },
  {
    id: "oud-wood",
    name: "Oud Wood",
    brand: "Tom Ford Private Blend", year: 2007, perfumer: "Pierre Negrin",
    family: "Oriental Woody", concentration: "Eau de Parfum",
    gender: "Unisex", rating: 4.6, reviews: 9540,
    longevity: 8, projection: 7, price: "$290",
    topNotes: ["Oud", "Rosewood", "Cardamom"],
    heartNotes: ["Sandalwood", "Vetiver", "Papyrus Wood"],
    baseNotes: ["Tonka Bean", "Amber"],
    seasons: ["Fall", "Winter"], occasions: ["Evening", "Office"],
    description: "The fragrance that brought oud to the Western mainstream. Smooth, warm, and refined — Oud Wood is effortless luxury in a bottle.",
    imageUrl: "https://images.unsplash.com/photo-1547887538-047f814e8ebc?w=600&q=85&auto=format&fit=crop",
    season: "All Year", tags: ["Oud", "Woody", "Unisex"],
    retailers: [
      { name: "Tom Ford Beauty", price: "$290", url: "#" },
      { name: "Sephora", price: "$295", url: "#" },
      { name: "Notino", price: "$272", url: "#" },
    ],
  },
  {
    id: "tobacco-vanille",
    name: "Tobacco Vanille",
    brand: "Tom Ford Private Blend", year: 2007, perfumer: "Yann Vasnier",
    family: "Oriental Spicy", concentration: "Eau de Parfum",
    gender: "Unisex", rating: 4.5, reviews: 8900,
    longevity: 10, projection: 8, price: "$290",
    topNotes: ["Tobacco Leaf", "Spicy Notes"],
    heartNotes: ["Vanilla", "Cacao", "Tonka Bean"],
    baseNotes: ["Amber", "Dried Fruit", "Woody Notes"],
    seasons: ["Fall", "Winter"], occasions: ["Evening", "Casual"],
    description: "A fireplace in a bottle. Rich, warm, and supremely comforting — Tobacco Vanille wraps you in a luxurious blanket of spiced vanilla on a cold winter night.",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffbb6c9e4f3?w=600&q=85&auto=format&fit=crop",
    season: "Winter", tags: ["Gourmand", "Warm", "Cosy"],
    retailers: [
      { name: "Tom Ford Beauty", price: "$290", url: "#" },
      { name: "Sephora", price: "$295", url: "#" },
    ],
  },
  {
    id: "aventus",
    name: "Aventus",
    brand: "Creed", year: 2010, perfumer: "Olivier Creed",
    family: "Chypre Fruity", concentration: "Eau de Parfum",
    gender: "Masculine", rating: 4.9, reviews: 19400,
    longevity: 8, projection: 8, price: "$550",
    topNotes: ["Blackcurrant", "Apple", "Bergamot", "Pineapple"],
    heartNotes: ["Jasmine", "Rose", "Dry Birch"],
    baseNotes: ["Ambergris", "Oak Moss", "Musk", "Sandalwood"],
    seasons: ["Spring", "Fall"], occasions: ["Office", "Casual", "Date Night"],
    description: "The scent of ambition and success. Aventus celebrates strength, vision and success — a fragrance worn by kings, presidents, and the modern connoisseur.",
    imageUrl: "https://images.unsplash.com/photo-1563170351-be8e1c30c3e8?w=600&q=85&auto=format&fit=crop",
    season: "Spring", tags: ["Masculine", "Fresh", "Powerful", "Bestseller"],
    retailers: [
      { name: "Creed Boutique", price: "$550", url: "#" },
      { name: "Sephora", price: "$560", url: "#" },
      { name: "Notino", price: "$520", url: "#" },
    ],
  },
  {
    id: "grand-soir",
    name: "Grand Soir",
    brand: "Maison Francis Kurkdjian", year: 2016, perfumer: "Francis Kurkdjian",
    family: "Oriental Vanilla", concentration: "Eau de Parfum",
    gender: "Unisex", rating: 4.6, reviews: 6700,
    longevity: 9, projection: 7, price: "$325",
    topNotes: ["Benzoin", "Tonka Bean"],
    heartNotes: ["Amber", "Ethyl Maltol"],
    baseNotes: ["Vanilla", "Styrax", "Patchouli"],
    seasons: ["Fall", "Winter"], occasions: ["Evening", "Date Night"],
    description: "For the grandest of evenings. Grand Soir is a modern oriental masterpiece — a dense, amber-rich composition that evolves on skin into something deeply personal.",
    imageUrl: "https://images.unsplash.com/photo-1615397587950-3cbb55f95b91?w=600&q=85&auto=format&fit=crop",
    season: "Winter", tags: ["Warm", "Vanilla", "Evening"],
    retailers: [
      { name: "MFK Boutique", price: "$325", url: "#" },
      { name: "Sephora", price: "$330", url: "#" },
    ],
  },
  {
    id: "neroli-portofino",
    name: "Neroli Portofino",
    brand: "Tom Ford", year: 2011, perfumer: "Rodrigo Flores-Roux",
    family: "Aromatic Citrus", concentration: "Eau de Parfum",
    gender: "Unisex", rating: 4.4, reviews: 5500,
    longevity: 6, projection: 6, price: "$205",
    topNotes: ["Neroli", "Bergamot", "Lemon", "Mandarin"],
    heartNotes: ["African Orange Flower", "Jasmine", "Lavender"],
    baseNotes: ["Amber", "Musk", "Sandalwood"],
    seasons: ["Spring", "Summer"], occasions: ["Casual", "Office", "Travel"],
    description: "A bottled Italian Riviera escape. Neroli Portofino captures the sun-drenched freshness of the Italian coast with extraordinary finesse and elegance.",
    imageUrl: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=85&auto=format&fit=crop",
    season: "Summer", tags: ["Fresh", "Citrus", "Summer"],
    retailers: [
      { name: "Tom Ford Beauty", price: "$205", url: "#" },
      { name: "Sephora", price: "$210", url: "#" },
    ],
  },
  {
    id: "sauvage-elixir",
    name: "Sauvage Elixir",
    brand: "Dior", year: 2021, perfumer: "François Demachy",
    family: "Fougère Spicy", concentration: "Parfum",
    gender: "Masculine", rating: 4.7, reviews: 13800,
    longevity: 9, projection: 8, price: "$185",
    topNotes: ["Grapefruit", "Cinnamon"],
    heartNotes: ["Cardamom", "Nutmeg"],
    baseNotes: ["Haitian Vetiver", "Sandalwood", "Patchouli"],
    seasons: ["Fall", "Winter"], occasions: ["Evening", "Office", "Date Night"],
    description: "The most intense Sauvage. A powerhouse of spice and woods built for the man who settles for nothing less than extraordinary.",
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=85&auto=format&fit=crop",
    season: "All Year", tags: ["Spicy", "Masculine", "Powerful"],
    retailers: [
      { name: "Dior Beauty", price: "$185", url: "#" },
      { name: "Sephora", price: "$190", url: "#" },
      { name: "Amazon", price: "$178", url: "#" },
    ],
  },
  {
    id: "interlude-man",
    name: "Interlude Man",
    brand: "Amouage", year: 2012, perfumer: "Pierre Negrin",
    family: "Amber Spicy", concentration: "Eau de Parfum",
    gender: "Masculine", rating: 4.8, reviews: 7200,
    longevity: 10, projection: 9, price: "$295",
    topNotes: ["Oregano", "Cinnamon", "Bergamot"],
    heartNotes: ["Incense", "Patchouli", "Amber"],
    baseNotes: ["Sandalwood", "Leather", "Agarwood"],
    seasons: ["Fall", "Winter"], occasions: ["Evening", "Date Night"],
    description: "A journey through fire and smoke to a place of deep contemplation. Interlude Man is Amouage at its most complex — not for the faint-hearted.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=85&auto=format&fit=crop",
    season: "Fall", tags: ["Niche", "Complex", "Oud", "Powerful"],
    retailers: [
      { name: "Amouage Boutique", price: "$295", url: "#" },
      { name: "Notino", price: "$278", url: "#" },
    ],
  },
  {
    id: "club-nuit-intense",
    name: "Club de Nuit Intense Man",
    brand: "Armaf", year: 2015, perfumer: "Unknown",
    family: "Chypre Fruity", concentration: "Eau de Parfum",
    gender: "Masculine", rating: 4.6, reviews: 18700,
    longevity: 8, projection: 9, price: "$40",
    topNotes: ["Blackcurrant", "Apple", "Pineapple", "Lemon"],
    heartNotes: ["Jasmine", "Rose", "Birch"],
    baseNotes: ["Ambergris", "Musk", "Vanilla"],
    seasons: ["Spring", "Fall"], occasions: ["Office", "Casual", "Date Night"],
    description: "The legendary Aventus dupe that started a revolution. Remarkably close to its inspiration for a fraction of the price — proof that luxury doesn't have to be expensive.",
    imageUrl: "https://images.unsplash.com/photo-1564415315949-7be8b3c7e41d?w=600&q=85&auto=format&fit=crop",
    season: "Spring", tags: ["Best Value", "Dupe", "Bestseller"],
    retailers: [
      { name: "Amazon", price: "$40", url: "#" },
      { name: "FragranceNet", price: "$38", url: "#" },
    ],
  },
  {
    id: "badee-oud-amethyst",
    name: "Bade'e Al Oud Amethyst",
    brand: "Lattafa", year: 2020, perfumer: "Unknown",
    family: "Floral Fruity Musk", concentration: "Eau de Parfum",
    gender: "Unisex", rating: 4.4, reviews: 8200,
    longevity: 8, projection: 7, price: "$28",
    topNotes: ["Plum", "Bergamot", "Black Currant"],
    heartNotes: ["Oud", "Rose", "Jasmine"],
    baseNotes: ["Ambergris", "Sandalwood", "Musk"],
    seasons: ["All Year"], occasions: ["Casual", "Office"],
    description: "Lattafa's crown jewel. A mesmerising floral-oud that punches far above its price point, rivalling mainstream designer scents with ease.",
    imageUrl: "https://images.unsplash.com/photo-1616604426432-a4fc3b3a03fa?w=600&q=85&auto=format&fit=crop",
    season: "All Year", tags: ["Middle Eastern", "Value", "Oud"],
    retailers: [
      { name: "Amazon", price: "$28", url: "#" },
      { name: "FragranceNet", price: "$26", url: "#" },
    ],
  },
  {
    id: "la-yuqawam",
    name: "La Yuqawam",
    brand: "Rasasi", year: 2013, perfumer: "Antoine Lie",
    family: "Oriental Woody", concentration: "Eau de Parfum",
    gender: "Masculine", rating: 4.5, reviews: 5800,
    longevity: 9, projection: 8, price: "$65",
    topNotes: ["Rose", "Bergamot", "Grapefruit"],
    heartNotes: ["Oud", "Vetiver", "Patchouli"],
    baseNotes: ["Sandalwood", "Ambergris", "Musk"],
    seasons: ["Fall", "Winter"], occasions: ["Office", "Evening"],
    description: "An Arabian symphony of rose and oud that speaks to centuries of Middle Eastern perfumery tradition, crafted for the modern connoisseur.",
    imageUrl: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=85&auto=format&fit=crop",
    season: "Fall", tags: ["Middle Eastern", "Rose", "Oud"],
    retailers: [
      { name: "Amazon", price: "$65", url: "#" },
      { name: "iFragrance", price: "$60", url: "#" },
    ],
  },
  {
    id: "portrait-lady",
    name: "Portrait of a Lady",
    brand: "Frédéric Malle", year: 2010, perfumer: "Dominique Ropion",
    family: "Floral Oriental", concentration: "Eau de Parfum",
    gender: "Feminine", rating: 4.7, reviews: 9100,
    longevity: 9, projection: 8, price: "$395",
    topNotes: ["Turkish Rose", "Blackcurrant", "Cinnamon"],
    heartNotes: ["Rose Absolute", "Raspberry"],
    baseNotes: ["Patchouli", "Sandalwood", "Benzoin"],
    seasons: ["Fall", "Winter"], occasions: ["Evening", "Date Night"],
    description: "A celebration of the great rose fragrances of the past, reimagined with fierce modernity. Portrait of a Lady is commanding, sensual, and utterly unforgettable.",
    imageUrl: "https://images.unsplash.com/photo-1590156446258-b55e0a8afd20?w=600&q=85&auto=format&fit=crop",
    season: "Winter", tags: ["Feminine", "Rose", "Niche", "Luxury"],
    retailers: [
      { name: "Frédéric Malle", price: "$395", url: "#" },
      { name: "Sephora", price: "$400", url: "#" },
    ],
  },
  {
    id: "bleu-de-chanel",
    name: "Bleu de Chanel",
    brand: "Chanel", year: 2010, perfumer: "Jacques Polge",
    family: "Aromatic Fougère", concentration: "Eau de Parfum",
    gender: "Masculine", rating: 4.6, reviews: 22400,
    longevity: 7, projection: 7, price: "$145",
    topNotes: ["Grapefruit", "Lemon", "Mint"],
    heartNotes: ["Ginger", "Nutmeg", "Pink Pepper"],
    baseNotes: ["Cedar", "Sandalwood", "Labdanum"],
    seasons: ["All Year"], occasions: ["Office", "Casual", "Date Night"],
    description: "The definition of effortless French class. Bleu de Chanel has earned its place among the all-time great masculines — versatile, refined, and perpetually modern.",
    imageUrl: "https://images.unsplash.com/photo-1615479856870-20e9de9a89e2?w=600&q=85&auto=format&fit=crop",
    season: "All Year", tags: ["Bestseller", "Versatile", "Classic"],
    retailers: [
      { name: "Chanel", price: "$145", url: "#" },
      { name: "Sephora", price: "$150", url: "#" },
      { name: "Amazon", price: "$138", url: "#" },
    ],
  },
  {
    id: "good-girl",
    name: "Good Girl",
    brand: "Carolina Herrera", year: 2016, perfumer: "Louise Turner",
    family: "Floral Gourmand", concentration: "Eau de Parfum",
    gender: "Feminine", rating: 4.5, reviews: 15600,
    longevity: 8, projection: 7, price: "$105",
    topNotes: ["Almond", "Coffee"],
    heartNotes: ["Tuberose", "Jasmine"],
    baseNotes: ["Tonka Bean", "Cocoa", "Sandalwood", "Patchouli"],
    seasons: ["Fall", "Winter"], occasions: ["Evening", "Date Night", "Casual"],
    description: "The iconic stiletto-shaped flacon holds a complex duality — white florals by day, dark gourmand by night. Good Girl is simultaneously innocent and dangerous.",
    imageUrl: "https://images.unsplash.com/photo-1599459182658-4bb34d475b58?w=600&q=85&auto=format&fit=crop",
    season: "Fall", tags: ["Feminine", "Gourmand", "Iconic"],
    retailers: [
      { name: "Sephora", price: "$105", url: "#" },
      { name: "Amazon", price: "$98", url: "#" },
    ],
  },
  {
    id: "dior-homme",
    name: "Dior Homme Intense",
    brand: "Dior", year: 2011, perfumer: "François Demachy",
    family: "Oriental Fougère", concentration: "Eau de Parfum",
    gender: "Masculine", rating: 4.6, reviews: 10300,
    longevity: 8, projection: 7, price: "$140",
    topNotes: ["Pear", "Bergamot"],
    heartNotes: ["Iris", "Lavender", "Ambrette Seed"],
    baseNotes: ["Ambergris", "Vetiver", "Sandalwood"],
    seasons: ["Fall", "Winter"], occasions: ["Office", "Evening", "Date Night"],
    description: "A masterclass in masculine elegance. Iris taken to its darkest, most powdery extreme — Dior Homme Intense is the fragrance equivalent of a perfectly-cut charcoal suit.",
    imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=85&auto=format&fit=crop",
    season: "Winter", tags: ["Iris", "Elegant", "Masculine"],
    retailers: [
      { name: "Dior Beauty", price: "$140", url: "#" },
      { name: "Sephora", price: "$145", url: "#" },
    ],
  },
];

// ─── BLOG DATA ───────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "best-winter-2026",
    title: "The 10 Best Perfumes for Winter 2026",
    excerpt: "From rich woody ouds to warm amber orientals, these are the defining fragrances of the cold season — chosen by our panel of experts.",
    category: "Seasonal Guide",
    readTime: "6 min",
    date: "Mar 2026",
    imageUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=800&q=85&auto=format&fit=crop",
    featured: true,
    author: "Alexandre Moreau",
    authorAvatar: "AM",
  },
  {
    slug: "middle-eastern-houses",
    title: "The Rise of Middle Eastern Fragrance Houses",
    excerpt: "How brands like Amouage, Rasasi, and Lattafa are redefining global luxury perfumery from the Arabian Peninsula.",
    category: "Industry",
    readTime: "8 min",
    date: "Feb 2026",
    imageUrl: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&q=85&auto=format&fit=crop",
    author: "Khalid Al-Rashid",
    authorAvatar: "KA",
  },
  {
    slug: "niche-vs-designer",
    title: "Niche vs Designer: Where to Invest Your Budget",
    excerpt: "A connoisseur's guide to building a fragrance collection that balances prestige, uniqueness, and value without regret.",
    category: "Buying Guide",
    readTime: "5 min",
    date: "Feb 2026",
    imageUrl: "https://images.unsplash.com/photo-1615397587950-3cbb55f95b91?w=800&q=85&auto=format&fit=crop",
    author: "Sophia Kessler",
    authorAvatar: "SK",
  },
  {
    slug: "history-of-perfumery",
    title: "5,000 Years of Perfumery: From Ancient Egypt to Niche Houses",
    excerpt: "The extraordinary story of scent — from burning kyphi in the temples of Karnak to the modern niche revolution.",
    category: "Deep Dive",
    readTime: "12 min",
    date: "Jan 2026",
    imageUrl: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=85&auto=format&fit=crop",
    author: "Dr. Elena Vasquez",
    authorAvatar: "EV",
  },
  {
    slug: "beginners-collection",
    title: "Your First 5 Bottles: A Beginner's Fragrance Guide",
    excerpt: "Five essential fragrances spanning all seasons and occasions that every newcomer should own. Curated for impact, not hype.",
    category: "For Beginners",
    readTime: "7 min",
    date: "Jan 2026",
    imageUrl: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=85&auto=format&fit=crop",
    author: "James Richardson",
    authorAvatar: "JR",
  },
  {
    slug: "tom-ford-guide",
    title: "The Complete Tom Ford Private Blend Guide",
    excerpt: "Every expression in the Private Blend line ranked, reviewed, and contextualised for the serious collector. From Oud Wood to Soleil Blanc.",
    category: "Brand Spotlight",
    readTime: "15 min",
    date: "Dec 2025",
    imageUrl: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&q=85&auto=format&fit=crop",
    author: "Mei Lin",
    authorAvatar: "ML",
  },
  {
    slug: "oud-101",
    title: "Oud 101: The World's Most Luxurious Ingredient Explained",
    excerpt: "Everything you need to know about agarwood — from the forests of Assam to the souks of Dubai. Price, quality, sustainability.",
    category: "Learn",
    readTime: "10 min",
    date: "Dec 2025",
    imageUrl: "https://images.unsplash.com/photo-1547887538-047f814e8ebc?w=800&q=85&auto=format&fit=crop",
    author: "Khalid Al-Rashid",
    authorAvatar: "KA",
  },
  {
    slug: "top-dupes-2026",
    title: "Best Fragrance Dupes of 2026: Luxury Scents at Fraction Prices",
    excerpt: "Our lab-tested list of the most accurate designer clones — including the legendary Aventus alternatives that rival the original.",
    category: "Buying Guide",
    readTime: "9 min",
    date: "Nov 2025",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffbb6c9e4f3?w=800&q=85&auto=format&fit=crop",
    author: "Alexandre Moreau",
    authorAvatar: "AM",
  },
];

// ─── EVENTS DATA ─────────────────────────────────────────────────────────────

export const EVENTS: Event[] = [
  {
    id: "dubai-scent-summit",
    title: "Dubai Scent Summit 2026",
    type: "Conference",
    date: "Apr 15, 2026", time: "10:00 AM",
    location: "Burj Al Arab", city: "Dubai", country: "UAE",
    attendees: 340,
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=85&auto=format&fit=crop",
    price: "AED 450",
    description: "The premier annual gathering of fragrance industry leaders, niche house founders, and enthusiasts from across the Gulf.",
  },
  {
    id: "london-niche-workshop",
    title: "London Niche Fragrance Workshop",
    type: "Workshop",
    date: "Apr 22, 2026", time: "2:00 PM",
    location: "Liberty London", city: "London", country: "UK",
    attendees: 45,
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85&auto=format&fit=crop",
    price: "£75",
    description: "Intimate hands-on session exploring the rarest niche fragrances in the Liberty London collection, led by master perfumer Jean-Claude Ellena.",
  },
  {
    id: "ny-perfumer-masterclass",
    title: "New York Perfumer Masterclass",
    type: "Masterclass",
    date: "May 3, 2026", time: "11:00 AM",
    location: "Bergdorf Goodman", city: "New York", country: "USA",
    attendees: 30,
    imageUrl: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=85&auto=format&fit=crop",
    price: "$120",
    description: "Exclusive three-hour masterclass with world-renowned perfumer Francis Kurkdjian. Limited to 30 attendees for an unparalleled intimate experience.",
  },
  {
    id: "paris-meetup",
    title: "Paris Fragrance Lovers Meetup",
    type: "Meetup",
    date: "May 10, 2026", time: "7:00 PM",
    location: "Palais Garnier Area", city: "Paris", country: "France",
    attendees: 120,
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=85&auto=format&fit=crop",
    price: "Free",
    description: "Monthly Paris fragrance meetup in the heart of the opera district. Bring your decants, share your discoveries, and meet fellow Parisian connoisseurs.",
  },
  {
    id: "mumbai-oud-festival",
    title: "Mumbai Oud & Attar Festival",
    type: "Festival",
    date: "May 18, 2026", time: "12:00 PM",
    location: "ITC Grand Central", city: "Mumbai", country: "India",
    attendees: 250,
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&auto=format&fit=crop",
    price: "₹2,000",
    description: "A celebration of India's extraordinary attar-making heritage alongside modern luxury fragrances. Over 40 exhibitors from the subcontinent and Gulf.",
  },
  {
    id: "singapore-luxury-night",
    title: "Singapore Luxury Fragrance Night",
    type: "Gala",
    date: "Jun 5, 2026", time: "8:00 PM",
    location: "Marina Bay Sands", city: "Singapore", country: "Singapore",
    attendees: 180,
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=85&auto=format&fit=crop",
    price: "SGD 90",
    description: "Asia's most exclusive fragrance gala returns to the iconic Marina Bay Sands. Black-tie optional. Live music, chef's menu, and rare fragrance presentations.",
  },
];
