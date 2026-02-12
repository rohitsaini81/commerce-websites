import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getProductsByCategory,
} from "@/app/data/catalog";
import ProductCard from "@/app/components/ProductCard";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const related = getProductsByCategory(
    product.categories[0] ?? "shop"
  ).filter((item) => item.slug !== product.slug);

  return (
    <div className="bg-white text-[#3f2f21]">
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-3xl border border-[#efe4d7] bg-[#fbf8f3]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7762]">
              Product Detail
            </p>
            <h1 className="mt-3 text-4xl font-semibold">{product.name}</h1>
            <p className="mt-4 text-sm leading-6 text-[#6f5b48]">
              {product.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {product.categories.map((category) => (
                <Link
                  key={category}
                  href={`/collections/${category}`}
                  className="rounded-full border border-[#d8c9b6] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2f21]"
                >
                  {category.replace("-", " ")}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="text-xl font-semibold">
                {product.salePrice ? (
                  <span className="flex items-center gap-3">
                    <span>{product.salePrice}</span>
                    <span className="text-sm font-normal text-[#8d7762] line-through">
                      {product.price}
                    </span>
                  </span>
                ) : (
                  product.price
                )}
              </div>
              {product.badge ? (
                <span className="rounded-full bg-[#3f2f21] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  {product.badge}
                </span>
              ) : null}
            </div>
            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-[#3f2f21] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Add to Cart
              </button>
              <Link
                href="/collections/shop"
                className="rounded-full border border-[#3f2f21] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2f21]"
              >
                Continue Shopping
              </Link>
            </div>
            {product.rating ? (
              <p className="mt-6 text-sm text-[#6f5b48]">
                Rating: {product.rating}
              </p>
            ) : null}
          </div>
        </div>
      </section>
      <section className="bg-[#fbf8f3] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7762]">
                Related
              </p>
              <h2 className="mt-3 text-3xl font-semibold">You may also like</h2>
            </div>
            <Link
              href="/collections/shop"
              className="hidden rounded-full border border-[#3f2f21] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2f21] lg:block"
            >
              Shop All
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {related.slice(0, 4).map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
