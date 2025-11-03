import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Reservations = () => {
  const [selectedTime, setSelectedTime] = useState("12:15 PM");
  
  const timeSlots = [
    "10:30 AM", "10:45 AM", "11:00 AM", "11:15 AM", "11:30 AM",
    "11:45 AM", "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM",
    "1:00 PM", "1:15 PM", "1:30 PM", "1:45 PM", "2:00 PM"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-[#3d5643] py-8">
          <div className="container mx-auto px-6">
            <div className="text-sm text-white/80 mb-4">
              <span>Home</span>
              <span className="mx-2">›</span>
              <span>RESERVATIONS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              REQUEST A RESERVATION
            </h1>
            <p className="text-white/90 text-lg">
              Share some details to make your request
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <label className="block text-sm font-medium mb-3">Party size</label>
                <select className="w-full p-3 border border-border rounded-lg bg-background">
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                  <option>5 guests</option>
                  <option>6+ guests</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3">Date</label>
                <input 
                  type="date" 
                  defaultValue="2025-11-02"
                  className="w-full p-3 border border-border rounded-lg bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3">Time</label>
                <select className="w-full p-3 border border-border rounded-lg bg-background">
                  <option>12:15 PM</option>
                  <option>12:30 PM</option>
                  <option>1:00 PM</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Choose an available time slot:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "destructive" : "default"}
                    className={`${
                      selectedTime === time 
                        ? "bg-[#c76b6b] hover:bg-[#b55555]" 
                        : "bg-[#3d5643] hover:bg-[#4d6653]"
                    } text-white`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium mb-3">First Name *</label>
                <input 
                  type="text"
                  className="w-full p-3 border border-border rounded-lg bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3">Last Name *</label>
                <input 
                  type="text"
                  className="w-full p-3 border border-border rounded-lg bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3">Email *</label>
                <input 
                  type="email"
                  className="w-full p-3 border border-border rounded-lg bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3">Phone *</label>
                <input 
                  type="tel"
                  className="w-full p-3 border border-border rounded-lg bg-background"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Special Requests</label>
              <textarea 
                rows={4}
                className="w-full p-3 border border-border rounded-lg bg-background"
                placeholder="Any dietary restrictions or special occasions?"
              />
            </div>

            <Button 
              size="lg" 
              className="bg-[#3d5643] hover:bg-[#4d6653] text-white px-12"
            >
              REQUEST RESERVATION
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reservations;
