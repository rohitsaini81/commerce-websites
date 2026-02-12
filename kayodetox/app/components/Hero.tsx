"use client";

import Link from "next/link";
import { useState } from "react";

const heroImage =
  "https://kayodetox.com/cdn/shop/files/founder_message_dc.jpg?v=1765803249&width=1600";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <section className="relative bg-[#f7f3ed]">
      <div
        className="mx-auto min-h-[520px] max-w-6xl overflow-hidden rounded-[32px] bg-cover bg-center px-6 py-24"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {showPopup && (
          <div className="max-w-md rounded-3xl bg-white/80 p-8 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7762]">
              Doctor-Formulated Detox
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#3f2f21]">
              Reset your body with clean, herbal detox rituals.
            </h1>
            <p className="mt-4 text-sm leading-6 text-[#6f5b48]">
              Made with natural herbs and clinically guided blends to support
              digestion, liver health, and daily energy.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="/collections/shop"
                className="rounded-full bg-[#3f2f21] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                onClick={() => setShowPopup(false)}
              >
                Shop Now
              </Link>
              <Link
                href="/collections/detox"
                className="rounded-full border border-[#3f2f21] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f2f21]"
                onClick={() => setShowPopup(false)}
              >
                Take the Quiz
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
