import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Menu = () => {
  const [activeTab, setActiveTab] = useState<"food" | "drinks">("food");

  const menuData = {
    food: [
      {
        category: "STARTERS & SIDES",
        items: [
          { name: "Bread and Butter", price: "$4", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined },
          { name: "Soup of The Day", price: "$7.5", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined },
          { name: "Our Niçoise", price: "$13", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined },
        ]
      },
      {
        category: "ALL DAY BREAKFAST",
        items: [
          { name: "Avo Toast & Poached Egg", price: "$13", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: "Vegetarian", tags: undefined },
          { name: "Salmon Bagel", price: "$13", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: undefined },
          { name: "Fried Chicken Waffle", price: "$15", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: undefined },
          { name: "Breakfast Burrito", price: "$12", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: undefined },
        ]
      },
      {
        category: "SHARES (FAMILY SIZE)",
        items: [
          { name: "Signature Nachos", price: "$22", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: ["Vegetarian", "Mild"] },
          { name: "Classic Pizza Margarita", price: "$17", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: undefined },
          { name: "Sausage & Broccolini Pizza", price: "$18.5", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: "Mild", tags: undefined },
          { name: "Whole Roasted Chicken", price: "$23", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: undefined },
          { name: "Roasted Broccolini & Brussel Sprouts", price: "$16", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: undefined },
        ]
      }
    ],
    drinks: [
      {
        category: "COCKTAILS",
        items: [
          { name: "Riverside Old", price: "$14", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: undefined },
          { name: "Classic Margarita", price: "$8.5", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: undefined },
          { name: "Bloody Mary", price: "$8.5", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: undefined },
          { name: "Martini", price: "$8.5", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: undefined },
        ]
      },
      {
        category: "NON-ALCOHOLIC",
        items: [
          { name: "Apple Tonic", price: "$6", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: undefined },
          { name: "Virgin Mary", price: "$6", description: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", tag: undefined, tags: undefined },
        ]
      }
    ]
  };

  const currentMenu = activeTab === "food" ? menuData.food : menuData.drinks;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
          {/* Left side - Image */}
          <div className="relative h-[400px] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"
              alt="Restaurant food"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Menu */}
          <div className="bg-[#3d5643] text-white p-8 lg:p-12 overflow-y-auto">
            <div className="flex justify-end gap-8 mb-12">
              <button
                onClick={() => setActiveTab("food")}
                className={`text-xl font-bold pb-2 transition-all ${
                  activeTab === "food"
                    ? "border-b-2 border-white"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                FOOD
              </button>
              <button
                onClick={() => setActiveTab("drinks")}
                className={`text-xl font-bold pb-2 transition-all ${
                  activeTab === "drinks"
                    ? "border-b-2 border-white"
                    : "text-white/60 hover:text-white/80"
                }`}
              >
                DRINKS
              </button>
            </div>

            <h1 className="text-6xl font-bold mb-8">
              {activeTab === "food" ? "FOOD" : "DRINKS"}
            </h1>

            {activeTab === "food" && (
              <div className="mb-8">
                <p className="text-base mb-2">Served daily using local ingredients.</p>
                <p className="text-base">
                  All menu items are subject to change according to seasonality and availability.
                </p>
              </div>
            )}

            {currentMenu.map((section, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl font-bold mb-8 tracking-wide">
                  {section.category}
                </h2>
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="mb-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <span className="text-lg ml-4">{item.price}</span>
                    </div>
                    <p className="text-sm text-white/80 mb-2">{item.description}</p>
                    {item.tag && (
                      <span className="text-xs text-white/70">🌿 {item.tag}</span>
                    )}
                    {item.tags && (
                      <div className="flex gap-3 text-xs text-white/70">
                        {item.tags.map((tag, tagIdx) => (
                          <span key={tagIdx}>🌿 {tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
