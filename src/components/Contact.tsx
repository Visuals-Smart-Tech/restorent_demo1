import { Card } from "@/components/ui/card";
import { Clock, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const info = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Riverside Drive", "Downtown District, NY 10001"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Thu: 11am - 10pm", "Fri-Sat: 11am - 11pm", "Sun: 10am - 9pm"],
    },
    {
      icon: Phone,
      title: "Contact",
      details: ["(555) 123-4567", "info@riverside.com"],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">VISIT US</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to welcome you to The Riverside. Stop by for a meal or contact us 
            to make a reservation for your next special occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {info.map((item, index) => (
            <Card key={index} className="p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-muted-foreground">
                  {detail}
                </p>
              ))}
            </Card>
          ))}
        </div>

        <div className="bg-muted rounded-lg h-[400px] flex items-center justify-center">
          <p className="text-muted-foreground">Map Integration Area</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
