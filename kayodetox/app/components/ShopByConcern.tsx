import Link from "next/link";
import { categories } from "@/app/data/catalog";

const focusSlugs = [
  "detox",
  "liver",
  "lungs",
  "gut-issues",
  "immunity",
  "mind",
  "strength",
];

const focusCategories = categories.filter((category) =>
  focusSlugs.includes(category.slug)
);

const genderCategories = categories.filter((category) =>
  ["men", "womens"].includes(category.slug)
);

export default function ShopByConcern() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7762]">
              Shop By Concern
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#3f2f21]">
              Targeted detox for every body.
            </h2>
          </div>
          <Link
            href="/collections/shop"
            className="hidden rounded-full border border-[#3f2f21] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2f21] lg:block"
          >
            View All
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-[#efe4d7] bg-[#fbf8f3] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8d7762]">
              Choose Your Focus
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {focusCategories.map((concern) => (
                <Link
                  key={concern.slug}
                  href={`/collections/${concern.slug}`}
                  className="rounded-full border border-[#d8c9b6] bg-white px-4 py-2 text-sm font-semibold text-[#3f2f21]"
                >
                  {concern.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {genderCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/collections/${category.slug}`}
                className="overflow-hidden rounded-3xl border border-[#efe4d7] bg-[#fbf8f3] transition-shadow hover:shadow-lg"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#3f2f21]">
                    {category.title}
                  </h3>
                  <p className="text-sm text-[#6f5b48]">
                    {category.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
