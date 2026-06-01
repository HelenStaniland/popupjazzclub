import AboutSection from "@/components/AboutSection";
import FeaturePanels from "@/components/FeaturePanels";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturePanels />
      <GallerySection />
      <AboutSection />
    </>
  );
}
