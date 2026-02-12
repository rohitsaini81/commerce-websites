import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blogs", href: "/blogs" },
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#3f2f21] py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#e5dacd]">
            Kayo Detox
          </p>
          <h3 className="mt-3 text-2xl font-semibold">
            Cleanse. Heal. Thrive.
          </h3>
          <p className="mt-2 text-sm text-[#e5dacd]">
            Herbal detox essentials for modern life.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-semibold">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-[#f7f3ed]">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
