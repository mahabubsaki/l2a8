import Categories from "@/custom/ui/Categories/Categories";
import FlashCards from "@/custom/ui/FlashCards/FlashCards";
import Footer from "@/custom/ui/Footer/Footer";
import HeroBanner from "@/custom/ui/HeroBanner/HeroBanner";
import TrendingProducts from "@/custom/ui/TrendingProducts/TrendingProducts";


export default function Home() {
  return (
    <section>
      <HeroBanner />
      <div className="max-w-screen-xl mx-auto">
        <FlashCards />
        <Categories />
        <TrendingProducts />
        <Footer />
      </div>
    </section>
  );
}
