import { getFeaturedProducts } from "@/app/data/catalog";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function ExploreCollection() {
  const products = getFeaturedProducts();

  return (
    <section className="bg-[#fbf8f3] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7762]">
              Explore Collection
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#3f2f21]">
              Doctor-curated detox essentials.
            </h2>
          </div>
          <Link
            href="/collections/shop"
            className="hidden rounded-full border border-[#3f2f21] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2f21] lg:block"
          >
            Shop All
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
