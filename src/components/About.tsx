import { Button } from "@/components/ui/button";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">ABOUT US</h2>
            <div className="w-20 h-1 bg-primary" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to The Riverside, where culinary excellence meets warm hospitality. 
              Our family restaurant has been serving the community for over two decades, 
              offering an unforgettable dining experience that combines traditional flavors 
              with modern innovation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From our carefully curated menu to our inviting atmosphere, every detail 
              is designed to make your visit memorable. Whether you're joining us for 
              a casual lunch, intimate dinner, or special celebration, we're committed 
              to providing exceptional food and service.
            </p>
            <Button variant="outline" size="lg" className="mt-4">
              Read Our Story
            </Button>
          </div>

          <div className="relative">
            <img
              src={restaurantInterior}
              alt="Elegant restaurant interior with warm lighting"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-sm tracking-wider">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
