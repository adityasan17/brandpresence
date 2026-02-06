import React from "react";
import { Zap, Target, Award, Shield } from "lucide-react";

const iconMap = {
  Zap: Zap,
  Target: Target,
  Award: Award,
  Shield: Shield
};

export const WhyChooseUs = ({ features }) => {
  return (
    <section id="why-us" className="py-32 bg-white relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border-8 border-gray-900 transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 border-8 border-gray-900 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-none">
            Why We're
            <br />
            <span className="text-blue-600">Different</span>
          </h2>
          <div className="w-32 h-2 bg-blue-600 mb-8"></div>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl font-medium">
            We're not here to be another agency in your contacts. We're here to be the <span className="font-black text-blue-600">only one</span> you'll ever need.
          </p>
        </div>

        {/* Features Grid - Bold Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  {/* Icon - Bold Square */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-blue-600 flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                      {IconComponent && (
                        <IconComponent size={40} className="text-white" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                    {/* Animated underline */}
                    <div className="w-0 h-1 bg-blue-600 mt-4 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-24 p-12 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-3xl lg:text-5xl font-black italic leading-tight">
              "Good agencies follow trends.
              <br />
              <span className="text-blue-400">We set them.</span>"
            </p>
            <button
              onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-block bg-blue-600 hover:bg-white hover:text-gray-900 text-white px-12 py-6 font-black text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105 mt-8"
            >
              Join The Movement →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
