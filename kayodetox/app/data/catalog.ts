export type Category = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlight?: string;
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  price: string;
  salePrice?: string;
  image: string;
  categories: string[];
  badge?: string;
  rating?: string;
  featured?: boolean;
  combo?: boolean;
};

export const categories: Category[] = [
  {
    slug: "shop",
    title: "Shop",
    subtitle: "Everything detox",
    description:
      "Explore every Kayo Detox essential for gut health, immunity, and daily wellness.",
    image:
      "https://kayodetox.com/cdn/shop/files/Detox7.jpg?v=1765365806&width=1200",
  },
  {
    slug: "liver",
    title: "Liver",
    subtitle: "Cleanse & protect",
    description:
      "Support healthy liver function with ayurvedic botanicals and targeted detox blends.",
    image:
      "https://kayodetox.com/cdn/shop/files/Detox7.jpg?v=1765365806&width=1200",
  },
  {
    slug: "gut-issues",
    title: "Gut Issues",
    subtitle: "Digestive balance",
    description:
      "Gentle herbal cleanses to reset digestion, reduce bloating, and restore gut comfort.",
    image:
      "https://kayodetox.com/cdn/shop/files/1_1813c0cb-9265-456d-8300-c020b695f2bb.jpg?v=1765106349&width=1200",
  },
  {
    slug: "mind",
    title: "Mind",
    subtitle: "Calm & clarity",
    description:
      "Nourish the nervous system with calming, sleep-supporting formulas.",
    image:
      "https://kayodetox.com/cdn/shop/files/2.jpg?v=1765103711&width=1200",
  },
  {
    slug: "strength",
    title: "Gym & Wellness",
    subtitle: "Energy & recovery",
    description:
      "Daily wellness support for an active lifestyle, strength, and endurance.",
    image:
      "https://kayodetox.com/cdn/shop/files/3.jpg?v=1765103711&width=1200",
  },
  {
    slug: "detox",
    title: "Detox",
    subtitle: "Full body reset",
    description:
      "Complete detox systems to reset, rejuvenate, and balance the body from within.",
    image:
      "https://kayodetox.com/cdn/shop/files/Detox7.jpg?v=1765365806&width=1200",
  },
  {
    slug: "lungs",
    title: "Lungs",
    subtitle: "Breathe easy",
    description:
      "Lung cleansing blends to clear congestion and support respiratory wellness.",
    image:
      "https://kayodetox.com/cdn/shop/files/1.jpg?v=1765103711&width=1200",
  },
  {
    slug: "immunity",
    title: "Immunity",
    subtitle: "Daily defense",
    description:
      "Strengthen your natural defenses with immunity-boosting botanicals.",
    image:
      "https://kayodetox.com/cdn/shop/files/1_1813c0cb-9265-456d-8300-c020b695f2bb.jpg?v=1765106349&width=1200",
  },
  {
    slug: "men",
    title: "Men's",
    subtitle: "Men's detox kits",
    description:
      "Focused herbal support for men’s wellness, energy, and vitality.",
    image:
      "https://kayodetox.com/cdn/shop/collections/2_0d2052ac-4121-40b6-b279-b930d489bfcb.png?v=1765209579&width=1600",
  },
  {
    slug: "womens",
    title: "Women's",
    subtitle: "Women's wellness",
    description:
      "Herbal balance blends for hormonal support and feminine wellness.",
    image:
      "https://kayodetox.com/cdn/shop/collections/1_72e7fa08-59ab-49df-87f2-99f3293a9d04.png?v=1765209415&width=1600",
  },
  {
    slug: "combo",
    title: "Combo",
    subtitle: "Wellness bundles",
    description:
      "Curated combo kits that pair detox with targeted wellness support.",
    image:
      "https://kayodetox.com/cdn/shop/files/4.jpg?v=1765103711&width=1200",
  },
];

export const products: Product[] = [
  {
    slug: "detox-7-kit",
    name: "Detox 7 Kit",
    description: "7-day full body detox challenge",
    price: "₹ 1,999.00",
    salePrice: "₹ 1,499.00",
    image:
      "https://kayodetox.com/cdn/shop/files/Detox7.jpg?v=1765365806&width=1200",
    categories: ["shop", "detox", "liver"],
    badge: "25% Off",
    rating: "4.3 | 9",
    featured: true,
  },
  {
    slug: "she-detox",
    name: "She Detox",
    description: "Hormonal balance + cleanse",
    price: "₹ 1,499.00",
    salePrice: "₹ 1,124.00",
    image:
      "https://kayodetox.com/cdn/shop/files/1_1813c0cb-9265-456d-8300-c020b695f2bb.jpg?v=1765106349&width=1200",
    categories: ["shop", "womens", "gut-issues"],
    badge: "25% Off",
    rating: "4.9 | 7",
    featured: true,
  },
  {
    slug: "after-smoke-shots",
    name: "After Smoke Shots",
    description: "Lung detox concentrate",
    price: "₹ 1,099.00",
    salePrice: "₹ 879.00",
    image: "https://kayodetox.com/cdn/shop/files/1.jpg?v=1765103711&width=1200",
    categories: ["shop", "lungs"],
    badge: "20% Off",
    rating: "4.7 | 18",
    featured: true,
  },
  {
    slug: "stress-out",
    name: "Stress Out",
    description: "Calm + sleep support",
    price: "₹ 1,299.00",
    salePrice: "₹ 974.00",
    image: "https://kayodetox.com/cdn/shop/files/2.jpg?v=1765103711&width=1200",
    categories: ["shop", "mind"],
    badge: "25% Off",
    rating: "4.0 | 2",
    featured: true,
  },
  {
    slug: "liv-detox",
    name: "Liv Detox",
    description: "Liver care + cleanse",
    price: "₹ 1,099.00",
    salePrice: "₹ 879.00",
    image: "https://kayodetox.com/cdn/shop/files/3.jpg?v=1765103711&width=1200",
    categories: ["shop", "liver"],
    badge: "20% Off",
    rating: "5.0 | 1",
  },
  {
    slug: "man-buddy",
    name: "Man Buddy",
    description: "Men’s wellness capsules",
    price: "₹ 1,499.00",
    salePrice: "₹ 1,124.00",
    image: "https://kayodetox.com/cdn/shop/files/4.jpg?v=1765103711&width=1200",
    categories: ["shop", "men"],
    badge: "25% Off",
    rating: "5.0 | 1",
  },
  {
    slug: "immune-booster-plus-shots",
    name: "Immune Booster Plus Shots",
    description: "Daily immunity boost",
    price: "₹ 1,499.00",
    salePrice: "₹ 1,124.00",
    image:
      "https://kayodetox.com/cdn/shop/files/1_1813c0cb-9265-456d-8300-c020b695f2bb.jpg?v=1765106349&width=1200",
    categories: ["shop", "immunity"],
    badge: "25% Off",
    rating: "5.0 | 1",
  },
  {
    slug: "ojas-gold",
    name: "Ojas Gold",
    description: "Daily vitality tonic",
    price: "₹ 2,499.00",
    salePrice: "₹ 1,875.00",
    image:
      "https://kayodetox.com/cdn/shop/files/Detox7.jpg?v=1765365806&width=1200",
    categories: ["shop", "strength"],
    badge: "24% Off",
    rating: "5.0 | 1",
  },
  {
    slug: "detox-stress-out-combo",
    name: "Detox + Stress Out",
    description: "Complete detox & calm",
    price: "₹ 3,299.00",
    salePrice: "₹ 2,309.00",
    image:
      "https://kayodetox.com/cdn/shop/files/2.jpg?v=1765103711&width=1200",
    categories: ["combo", "detox", "mind"],
    badge: "30% Off",
    combo: true,
  },
  {
    slug: "detox-liv-detox-combo",
    name: "Detox + Liv Detox",
    description: "Deep detox + liver care",
    price: "₹ 3,099.00",
    salePrice: "₹ 2,169.00",
    image:
      "https://kayodetox.com/cdn/shop/files/3.jpg?v=1765103711&width=1200",
    categories: ["combo", "detox", "liver"],
    badge: "30% Off",
    combo: true,
  },
  {
    slug: "detox-she-detox-combo",
    name: "Detox + She Detox",
    description: "Women’s detox reset",
    price: "₹ 3,499.00",
    salePrice: "₹ 2,449.00",
    image:
      "https://kayodetox.com/cdn/shop/files/1_1813c0cb-9265-456d-8300-c020b695f2bb.jpg?v=1765106349&width=1200",
    categories: ["combo", "womens", "detox"],
    badge: "30% Off",
    combo: true,
  },
  {
    slug: "detox-after-smoke-combo",
    name: "Detox + After Smoke",
    description: "Clean lungs + body",
    price: "₹ 3,099.00",
    salePrice: "₹ 2,169.00",
    image:
      "https://kayodetox.com/cdn/shop/files/1.jpg?v=1765103711&width=1200",
    categories: ["combo", "lungs", "detox"],
    badge: "30% Off",
    combo: true,
  },
  {
    slug: "detox-immune-booster-combo",
    name: "Detox + Immune Booster",
    description: "Detox + daily defense",
    price: "₹ 3,499.00",
    salePrice: "₹ 2,449.00",
    image:
      "https://kayodetox.com/cdn/shop/files/1_1813c0cb-9265-456d-8300-c020b695f2bb.jpg?v=1765106349&width=1200",
    categories: ["combo", "immunity", "detox"],
    badge: "30% Off",
    combo: true,
  },
  {
    slug: "man-buddy-ojas-gold-combo",
    name: "Man Buddy + Ojas Gold",
    description: "Men’s wellness combo",
    price: "₹ 3,999.00",
    salePrice: "₹ 2,799.00",
    image:
      "https://kayodetox.com/cdn/shop/files/4.jpg?v=1765103711&width=1200",
    categories: ["combo", "men", "strength"],
    badge: "30% Off",
    combo: true,
  },
];

export const navCollections = [
  "shop",
  "liver",
  "gut-issues",
  "mind",
  "strength",
  "detox",
  "lungs",
  "immunity",
  "men",
  "womens",
  "combo",
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getProductsByCategory = (slug: string) =>
  products.filter((product) =>
    slug === "shop" ? product.categories.includes("shop") : product.categories.includes(slug)
  );

export const getFeaturedProducts = () =>
  products.filter((product) => product.featured);

export const getComboProducts = () =>
  products.filter((product) => product.combo);

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);
