import Link from "next/link";
import type { Product } from "@/app/data/catalog";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group rounded-3xl border border-[#efe4d7] bg-white p-4 transition-shadow hover:shadow-lg"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full rounded-2xl object-cover"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-[#3f2f21] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#3f2f21]">
          {product.name}
        </h3>
        <p className="text-sm text-[#6f5b48]">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-semibold text-[#3f2f21]">
            {product.salePrice ? (
              <span className="flex items-center gap-2">
                <span>{product.salePrice}</span>
                <span className="text-xs font-normal text-[#8d7762] line-through">
                  {product.price}
                </span>
              </span>
            ) : (
              product.price
            )}
          </div>
          <span className="rounded-full border border-[#3f2f21] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2f21]">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
