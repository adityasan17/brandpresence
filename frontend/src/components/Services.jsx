import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MessageCircle, Users, Code, CheckCircle, ArrowRight, Search, TrendingUp, Sparkles, Scale } from "lucide-react";
import { Button } from "./ui/button";

const iconMap = {
  MessageCircle: MessageCircle,
  Users: Users,
  Code: Code,
  Search: Search,
  TrendingUp: TrendingUp,
  Sparkles: Sparkles,
  Scale: Scale
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
            Everything you need to <span className="text-blue-600 font-bold">dominate</span> your market. No BS. No bloat. Just results.
          </p>
        </div>

        {/* Services Grid - 3 columns for 6 services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div
                key={service.id}
                className="group bg-white hover:bg-gray-900 transition-all duration-500 p-8 border-2 border-gray-200 hover:border-gray-900 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-600 group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                    {IconComponent && (
                      <IconComponent size={32} className="text-white group-hover:text-gray-900 transition-colors duration-300" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-gray-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-700 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-blue-600 group-hover:text-blue-400 flex-shrink-0 transition-colors duration-300" />
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Line */}
                <div className="w-0 h-1 bg-blue-600 mt-6 group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6">
          <p className="text-xl text-gray-700 font-medium">
            Don't see what you need? We probably do that too.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-gray-900 text-white px-12 py-8 rounded-none font-black text-xl uppercase tracking-wider shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Talk About It
          </Button>
        </div>
      </div>
    </section>
  );
};
