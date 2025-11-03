import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.jpg";

const OrderOnline = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div 
          className="relative h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroFood})` }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="container mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            ONLINE ORDERING
          </h1>
          
          <p className="text-lg mb-8 max-w-2xl">
            You can order online! Browse our menu items and choose what you'd like to order from us.
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-12 inline-flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-destructive" />
            <span className="font-medium">Not Accepting Orders</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 text-lg"
            >
              Pickup
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-lg opacity-50"
              disabled
            >
              Delivery
            </Button>
          </div>

          <div className="mb-8">
            <p className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Pickup Address: 500 terry francine, San Francisco, CA
            </p>
          </div>

          <div className="border-2 border-border rounded-lg p-16 text-center max-w-4xl">
            <p className="text-2xl font-serif italic mb-4 text-muted-foreground">
              There are no items to show here yet
            </p>
            <p className="text-lg text-muted-foreground">
              Come back soon to see what we have to offer
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderOnline;
