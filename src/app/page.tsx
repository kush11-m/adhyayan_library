import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
