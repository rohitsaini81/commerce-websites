import CombosSection from "./components/CombosSection";
import ExploreCollection from "./components/ExploreCollection";
import Footer from "./components/Footer";
import FounderSection from "./components/FounderSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PromoBar from "./components/PromoBar";
import QualitySection from "./components/QualitySection";
import ShopByConcern from "./components/ShopByConcern";
import TopMarquee from "./components/TopMarquee";
import TrustSection from "./components/TrustSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#3f2f21]">
      <TopMarquee />
      <PromoBar />
      <Header />
      <main>
        <Hero />
        <ShopByConcern />
        <ExploreCollection />
        <QualitySection />
        <CombosSection />
        <TrustSection />
        <FounderSection />
      </main>
      <Footer />
    </div>
  );
}
