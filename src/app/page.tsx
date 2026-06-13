import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import TheCounter from "@/components/TheCounter";
import BakeTimes from "@/components/BakeTimes";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Story />
      <TheCounter />
      <BakeTimes />
      <Visit />
      <Footer />
    </main>
  );
}
