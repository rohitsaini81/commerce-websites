const trustImages = [
  "https://kayodetox.com/cdn/shop/files/Untitled_400_x_200_px_1.png?v=1765560800",
  "https://kayodetox.com/cdn/shop/files/Untitled_400_x_200_px.png?v=1765560084",
  "https://kayodetox.com/cdn/shop/files/1_1ccca101-f8a3-4af2-a3b8-486b66cb2445.png?v=1765465147",
  "https://kayodetox.com/cdn/shop/files/3_974a933a-444b-4740-a134-135839b94afa.png?v=1765465147",
  "https://kayodetox.com/cdn/shop/files/2_43501466-c3c6-41f3-987e-38a4f593bb76.png?v=1765465147",
];

const trustCards = Array.from({ length: 10 }, (_, index) =>
  trustImages[index % trustImages.length]
);

export default function TrustSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7762]">
          Reason To Trust
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#3f2f21]">
          Backed by doctors. Loved by customers.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustCards.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="flex items-center justify-center rounded-2xl border border-[#efe4d7] bg-[#fbf8f3] p-4"
            >
              <img src={image} alt="Trust badge" className="h-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
