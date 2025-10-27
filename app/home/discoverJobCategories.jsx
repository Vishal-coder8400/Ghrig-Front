import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

const jobCategories = [
  ["Financial Services", "Banking"],
  ["IT", "Insaurance"],
  ["Housing", "FMCG"],
];

export const DiscoverJobCategories = () => {
  return (
    <section className="w-full rounded-2xl mx-auto max-w-[1152px] bg-gradient-to-b from-purple-500 to-indigo-500 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="[font-family:'Outfit',Helvetica] font-bold text-4xl md:text-4xl leading-tight">
            Discover jobs categories in industry
          </h2>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative">
              <img
                className="w-16 md:w-20 h-auto object-contain pointer-events-none select-none"
                alt="Star 1"
                src="/assets/images/Star 1.png"
              />
              <img
                className="absolute -top-2 -right-16 w-12 md:w-16 h-auto object-contain pointer-events-none select-none opacity-70 z-10"
                alt="Star 2"
                src="/assets/images/Star 1.png"
              />
            </div>
            <img
              className="w-40 md:w-60 h-auto object-contain pointer-events-none select-none"
              alt="Person illustration"
              src="/assets/images/apple.png"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-4">
          {jobCategories.flat().map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="flex items-center justify-between w-full px-8 py-6 md:px-10 md:py-7 bg-white/20 hover:bg-white/30 text-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-lg md:text-xl tracking-[-0.2px]">
                {category}
              </span>
              <ArrowRightIcon className="w-6 h-6" />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};