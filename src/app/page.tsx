import Hero from "@/components/landing/Hero";
import Features from "@/components/feature/Features";
import Stats from "@/components/stats/Stats";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Stats />
    </div>
  );
}
