import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { CaseStudies } from "@/components/sections/case-studies";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Founder } from "@/components/sections/founder";
import { Guarantee } from "@/components/sections/guarantee";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Trust />
        <CaseStudies />
        <HowItWorks />
        <Founder />
        <Guarantee />
      </main>
      <Footer />
    </>
  );
}
