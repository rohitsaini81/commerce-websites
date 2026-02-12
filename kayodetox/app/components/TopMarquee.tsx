const marqueeText = "Chemical-Free | 100% Natural | Herbal | Detox | Natural Herbs";

export default function TopMarquee() {
  return (
    <div className="bg-[#f5e1c8] text-[#5a4634] text-xs uppercase tracking-[0.2em] py-2 overflow-hidden">
      <div className="flex whitespace-nowrap gap-10 animate-[marquee_18s_linear_infinite]">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className="font-semibold">
            {marqueeText}
          </span>
        ))}
      </div>
    </div>
  );
}
