import Hero from "./components/Hero";
import IconsSection from "./components/IconsSection";
import ProblemSection from "./components/ProblemSection";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <IconsSection />
      <ProblemSection />
    </div>
  );
}
