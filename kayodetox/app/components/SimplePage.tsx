import Link from "next/link";

export default function SimplePage({
  title,
  description,
  ctaHref,
  ctaLabel,
}: {
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7762]">
          Kayo Detox
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[#3f2f21]">
          {title}
        </h1>
        <p className="mt-4 text-sm leading-6 text-[#6f5b48]">
          {description}
        </p>
        {ctaHref && ctaLabel ? (
          <Link
            href={ctaHref}
            className="mt-8 inline-flex rounded-full border border-[#3f2f21] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2f21]"
          >
            {ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
