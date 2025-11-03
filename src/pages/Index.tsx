import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollingMarquee from "@/components/ScrollingMarquee";
import About from "@/components/About";
import DiningOptions from "@/components/DiningOptions";
import MenuPreview from "@/components/MenuPreview";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ScrollingMarquee />
        <About />
        <DiningOptions />
        <MenuPreview />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
