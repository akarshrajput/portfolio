import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Rank from "@/components/Rank";
import RetroGrid from "@/components/magicui/retrogrid";

export default function Home() {
  return (
    <div className="p-2 flex flex-col gap-2">
      <Hero />
      <div className="grid grid-cols-2 gap-2 z-10">
        <Rank />
      </div>
      <RetroGrid />
    </div>
  );
}
