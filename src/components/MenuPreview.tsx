import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import menuPreview from "@/assets/menu-preview.jpg";

const MenuPreview = () => {
  const highlights = [
    {
      name: "Signature Burger",
      description: "Aged beef, artisan cheese, house sauce",
      price: "$18",
    },
    {
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon, seasonal vegetables",
      price: "$24",
    },
    {
      name: "Truffle Pasta",
      description: "House-made pasta, black truffle, parmesan",
      price: "$22",
    },
  ];

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR MENU</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted menu featuring fresh, locally-sourced ingredients 
            and innovative culinary techniques. Every dish tells a story of passion and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={menuPreview}
              alt="Gourmet burger with fresh ingredients"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover:border-primary transition-colors duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-primary text-xl font-bold">{item.price}</span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}

            <Button variant="hero" size="lg" className="w-full mt-8">
              View Full Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
