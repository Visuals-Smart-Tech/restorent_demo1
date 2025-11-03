import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroFood})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-32">
        <div className="mb-6">
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 font-light">
            The Riverside
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">
            THE<br />RIVERSIDE
          </h1>
          <div className="flex items-center justify-center gap-4 text-lg md:text-xl font-light tracking-wider mb-12">
            <span>Bar</span>
            <span className="text-primary">+</span>
            <span>Restaurant</span>
            <span className="text-primary">+</span>
            <span>Café</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <Link to="/order-online">
            <Button 
              variant="hero" 
              size="lg" 
              className="min-w-[200px] text-base"
            >
              ORDER ONLINE
            </Button>
          </Link>
          <Link to="/reservations">
            <Button 
              variant="hero" 
              size="lg" 
              className="min-w-[200px] text-base"
            >
              RESERVATIONS
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
