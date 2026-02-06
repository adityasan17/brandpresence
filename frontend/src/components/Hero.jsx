import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = ({ data }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % data.headlineRotate.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [data.headlineRotate]);

  const scrollToConsultation = () => {
    document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Background with geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border-4 border-blue-600 rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full border-4 border-blue-600"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              <Sparkles size={18} className="animate-pulse" />
              <span>{data.badge}</span>
            </div>
          </div>

          {/* Main Headline - Extra Bold and Large */}
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight animate-slide-up">
              {data.headline}
            </h1>
            
            {/* Rotating Word with underline effect */}
            <div className="relative inline-block animate-fade-in-delay">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent leading-none tracking-tight">
                {data.headlineRotate[currentWordIndex]}
              </h1>
              <div className="absolute -bottom-4 left-0 right-0 h-3 bg-blue-600 transform -skew-x-12"></div>
            </div>

            {/* Subheadlines with attitude */}
            <div className="mt-12 space-y-3 animate-fade-in-delay-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 italic">
                {data.subheadline}
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 italic">
                {data.subheadline2}
              </p>
            </div>
          </div>

          {/* CTA Buttons - Bigger and Bolder */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-delay-3">
            <Button
              onClick={scrollToConsultation}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-wider shadow-2xl hover:shadow-blue-600/50 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {data.ctaText}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Button>
            
            <Button
              onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="border-4 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:rotate-1"
            >
              {data.secondaryCtaText}
            </Button>
          </div>

          {/* Stats Strip - Bold Numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in-delay-3">
            {[
              { number: "500+", label: "Projects Crushed" },
              { number: "200+", label: "Brands Elevated" },
              { number: "50M+", label: "Eyes Reached" },
              { number: "350%", label: "Avg. ROI" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-4xl lg:text-6xl font-black text-blue-600 mb-2 group-hover:text-blue-700">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base font-bold text-gray-700 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-900 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-900 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};
