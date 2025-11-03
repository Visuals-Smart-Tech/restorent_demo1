import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-[#3d5643]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80"
              alt="Delicious dessert"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-white order-1 lg:order-2">
            <div className="flex items-center justify-end mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="text-center">
                    <Star className="w-8 h-8 text-primary mx-auto mb-1" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-xs uppercase tracking-wider" style={{ 
                    transform: 'rotate(-90deg)',
                    transformOrigin: 'center',
                    width: '200px'
                  }}>
                    <span className="inline-block animate-spin-slow">
                      KINDLY SERVED • PRESERVE • FRESHLY MADE • SPOT • 
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              REVIEWS
            </h2>
            
            <Card className="bg-transparent border-none text-white">
              <p className="text-xl font-bold mb-6 uppercase tracking-wide">
                "THE NICEST STAFF SERVING THE BEST FOOD"
              </p>
              <p className="text-base leading-relaxed mb-6 opacity-90">
                "Use this space to share a testimonial quote about the business, 
                its products or its services. Insert a quote from a real customer 
                or client here to build trust and win over site visitors."
              </p>
              <p className="font-bold tracking-wider mb-4">LINDA S.</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-primary" />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
