import { getComboProducts } from "@/app/data/catalog";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function CombosSection() {
  const combos = getComboProducts().slice(0, 3);

  return (
    <section className="bg-[#f7f3ed] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7762]">
              Wellness Combos
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#3f2f21]">
              Build your detox ritual.
            </h2>
          </div>
          <Link
            href="/collections/combo"
            className="hidden rounded-full border border-[#3f2f21] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2f21] lg:block"
          >
            View Combos
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {combos.map((combo) => (
            <ProductCard key={combo.slug} product={combo} />
          ))}
        </div>
      </div>
    </section>
  );
}
