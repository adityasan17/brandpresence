import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = ({ data }) => {
  const scrollToConsultation = () => {
    document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold animate-fade-in">
              <Sparkles size={16} className="animate-pulse" />
              <span>Where Creativity Meets Technology</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-up">
              {data.headline.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={index >= 3 ? "text-blue-600" : ""}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {word}{" "}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 animate-fade-in-delay">
              {data.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2">
              <Button
                onClick={scrollToConsultation}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                {data.ctaText}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4 text-sm text-gray-600 animate-fade-in-delay-3">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-700 border-2 border-white"></div>
                </div>
                <span className="font-semibold">200+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★★★★★</span>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:block hidden animate-fade-in-delay">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTc3MDQwMDU2MXww&ixlib=rb-4.1.0&q=85"
                  alt="Team Collaboration"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Projects Delivered</p>
                    <p className="text-2xl font-bold text-gray-900">500+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-float animation-delay-2000">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    📈
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Avg. ROI</p>
                    <p className="text-2xl font-bold text-gray-900">350%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};
