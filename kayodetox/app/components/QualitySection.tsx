import Link from "next/link";

const qualityBadges = [
  {
    title: "Natural Herbs",
    image:
      "https://kayodetox.com/cdn/shop/files/Untitled_design_14.svg?v=1765007677&width=600",
  },
  {
    title: "No Added Sugar",
    image:
      "https://kayodetox.com/cdn/shop/files/Untitled_design_15.svg?v=1765007845&width=600",
  },
  {
    title: "100% Vegetarian",
    image:
      "https://kayodetox.com/cdn/shop/files/Untitled_design_-_2025-12-08T204530.463.png?v=1765206946&width=600",
  },
  {
    title: "No Artificial Colors",
    image:
      "https://kayodetox.com/cdn/shop/files/Untitled_design_21.svg?v=1765008945&width=600",
  },
  {
    title: "Gluten Free",
    image:
      "https://kayodetox.com/cdn/shop/files/Untitled_design_17.svg?v=1765008249&width=600",
  },
  {
    title: "AYUSH Approved",
    image:
      "https://kayodetox.com/cdn/shop/files/Untitled_design_20.svg?v=1765008865&width=600",
  },
  {
    title: "Doctor-Formulated",
    image:
      "https://kayodetox.com/cdn/shop/files/Untitled_design_22.svg?v=1765010018&width=600",
  },
  {
    title: "Holistic Approach",
    image:
      "https://kayodetox.com/cdn/shop/files/Untitled_design_23.svg?v=1765010336&width=600",
  },
];

export default function QualitySection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7762]">
              Quality Promise
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#3f2f21]">
              Clean formulas. Honest sourcing. Real results.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#6f5b48]">
              Every formula is rooted in ayurvedic science and crafted with
              plant-based ingredients. We skip artificial fillers so your body
              can reset naturally.
            </p>
            <Link
              href="/about-us"
              className="mt-6 inline-flex rounded-full bg-[#3f2f21] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
            >
              Learn More
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {qualityBadges.map((badge) => (
              <div
                key={badge.title}
                className="rounded-2xl border border-[#efe4d7] bg-[#fbf8f3] p-4 text-center"
              >
                <img
                  src={badge.image}
                  alt={badge.title}
                  className="mx-auto h-16 w-16"
                />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#5a4634]">
                  {badge.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
