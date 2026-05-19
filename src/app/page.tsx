import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { Stats } from "@/components/Stats";
import { Facilities } from "@/components/Facilities";
import { Admissions } from "@/components/Admissions";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Programs />
        <Stats />
        <Facilities />
        <Admissions />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
