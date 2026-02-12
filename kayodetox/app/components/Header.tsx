import Link from "next/link";
import { categories, navCollections } from "@/app/data/catalog";

const collectionMap = new Map(
  categories.map((category) => [category.slug, category])
);

const navItems = navCollections
  .map((slug) => collectionMap.get(slug))
  .filter(Boolean);

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full border border-[#d8c9b6]" />
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#8d7762]">
              Kayo Detox
            </p>
            <p className="text-xl font-semibold text-[#3f2f21]">
              Cleanse. Heal. Thrive.
            </p>
          </div>
        </Link>
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#5a4634]">
          <Link
            href="/about-us"
            className="hidden rounded-full border border-[#e5dacd] px-4 py-2 lg:inline-flex"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="hidden rounded-full border border-[#e5dacd] px-4 py-2 lg:inline-flex"
          >
            Contact
          </Link>
          <Link
            href="/cart"
            className="rounded-full border border-[#3f2f21] px-4 py-2"
          >
            Cart (0)
          </Link>
        </div>
      </div>
      <nav className="border-t border-[#efe4d7] bg-white">
        <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-6 py-3 text-sm font-semibold text-[#3f2f21]">
          {navItems.map((item) => (
            <Link
              key={item?.slug}
              href={`/collections/${item?.slug}`}
              className="whitespace-nowrap hover:text-[#8d7762]"
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
