const founderImage =
  "https://kayodetox.com/cdn/shop/files/founder_message_dc.jpg?v=1765803249&width=1600";

export default function FounderSection() {
  return (
    <section className="bg-[#f7f3ed] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-[#efe4d7] bg-white p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7762]">
              Founder Message
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#3f2f21]">
              Detox is not a trend. It is a lifestyle reset.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#6f5b48]">
              We created Kayo Detox to make clean, science-backed herbal
              solutions accessible for everyone. Our formulas are designed to
              help your body recover, restore balance, and thrive every day.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#3f2f21]">
              Dr. Kayo Team
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#efe4d7]">
            <img
              src={founderImage}
              alt="Kayo Detox founder message"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
