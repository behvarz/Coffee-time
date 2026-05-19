import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import ScrollHero from "@/components/hero/ScrollHero";
import Footer from "@/components/layout/Footer";

function SectionFallback() {
  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 py-24 md:px-10 lg:px-16">
      <div className="h-44 animate-pulse rounded-3xl border border-[#E0A85A]/15 bg-[#2A1810]/35" />
    </div>
  );
}

const CollectionSection = dynamic(
  () => import("@/components/sections/CollectionSection"),
  { loading: SectionFallback },
);
const RitualStorySection = dynamic(
  () => import("@/components/sections/RitualStorySection"),
  { loading: SectionFallback },
);
const ExperienceSection = dynamic(
  () => import("@/components/sections/ExperienceSection"),
  { loading: SectionFallback },
);
const InstagramSection = dynamic(
  () => import("@/components/sections/InstagramSection"),
  { loading: SectionFallback },
);
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), {
  loading: SectionFallback,
});

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />

      <main>
        <ScrollHero />
        <CollectionSection />
        <RitualStorySection />
        <ExperienceSection />
        <InstagramSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
