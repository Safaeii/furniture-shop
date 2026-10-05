import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import PromoBanner from "./components/PromoBanner";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategorySection />
      <ProductSection />
      <PromoBanner />
      <WhyChooseUs />
    </main>
  );
}