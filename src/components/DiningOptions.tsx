import { Sparkles } from "lucide-react";

const DiningOptions = () => {
  return (
    <section id="dining" className="py-24 bg-[#2d4a36]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <Sparkles className="w-8 h-8 text-primary mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              DINING OPTIONS
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              This is the space to introduce the Services section. Briefly describe
              the types of services offered and highlight any special benefits or
              features.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Whether you're looking for an intimate dinner, a family celebration,
              or a casual meal with friends, we offer the perfect setting for every
              occasion.
            </p>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden bg-[#1a2e1f]">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white/60 text-lg">Video Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningOptions;
