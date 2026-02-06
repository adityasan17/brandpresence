import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MessageCircle, Users, Code, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const iconMap = {
  MessageCircle: MessageCircle,
  Users: Users,
  Code: Code
};

export const Services = ({ services }) => {
  return (
    <section id="services" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 opacity-5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Bold and Creative */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-4 leading-none">
              What We Do
            </h2>
            <div className="h-2 bg-blue-600 transform -skew-x-12"></div>
          </div>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Not your average digital agency. We're the secret weapon behind brands that <span className="text-blue-600 font-bold">dominate</span> their market.
          </p>
        </div>

        {/* Services Grid - Staggered Layout */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Icon Side */}
                <div className="flex-shrink-0 lg:w-1/3">
                  <div className="relative">
                    <div className="w-32 h-32 lg:w-48 lg:h-48 bg-blue-600 flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform duration-300">
                      {IconComponent && (
                        <IconComponent size={80} className="text-white transform -rotate-6" />
                      )}
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 lg:w-48 lg:h-48 border-4 border-gray-900"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List - Bold Style */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-blue-600 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <CheckCircle size={20} className="text-white" />
                        </div>
                        <span className="text-base font-bold text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    size="lg"
                    className="bg-gray-900 hover:bg-blue-600 text-white px-8 py-6 rounded-none font-black text-base uppercase tracking-wider transition-all duration-300 transform hover:scale-105 group"
                    onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Let's Talk
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="text-center mt-24 space-y-6">
          <p className="text-2xl lg:text-4xl font-black text-gray-900 italic max-w-4xl mx-auto leading-tight">
            "Good marketing makes the company look smart. <span className="text-blue-600">Great marketing</span> makes the customer feel smart."
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-gray-900 text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-wider shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
          >
            Make Your Brand Smart
          </Button>
        </div>
      </div>
    </section>
  );
};
