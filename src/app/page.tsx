import FlashCards from "@/custom/ui/FlashCards/FlashCards";
import HeroBanner from "@/custom/ui/HeroBanner/HeroBanner";


export default function Home() {
  return (
    <section>
      <HeroBanner />
      <div className="max-w-screen-xl mx-auto">
        <FlashCards />
      </div>
    </section>
  );
}
