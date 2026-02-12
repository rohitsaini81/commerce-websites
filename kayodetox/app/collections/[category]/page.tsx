import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getProductsByCategory,
  navCollections,
} from "@/app/data/catalog";
import ProductCard from "@/app/components/ProductCard";

export function generateStaticParams() {
  return navCollections.map((slug) => ({ category: slug }));
}

export default function CollectionPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(params.category);

  return (
    <div className="bg-white text-[#3f2f21]">
      <section className="bg-[#f7f3ed] py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7762]">
              Collection
            </p>
            <h1 className="mt-3 text-4xl font-semibold">
              {category.title}
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#6f5b48]">
              {category.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#d8c9b6] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2f21]">
                {category.subtitle}
              </span>
              <Link
                href="/collections/shop"
                className="rounded-full border border-[#3f2f21] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2f21]"
              >
                Shop All
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#efe4d7] bg-white">
            <img
              src={category.image}
              alt={category.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7762]">
                Products
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                {products.length} essentials in {category.title}
              </h2>
            </div>
            <span className="hidden rounded-full border border-[#3f2f21] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2f21] lg:inline-flex">
              Doctor-Curated
            </span>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
