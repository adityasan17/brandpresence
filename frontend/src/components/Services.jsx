import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MessageCircle, Users, Code, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const iconMap = {
  MessageCircle: MessageCircle,
  Users: Users,
  Code: Code
};

export const Services = ({ services }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to amplify your brand's reach and drive measurable growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-500 transform hover:-translate-y-2 bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    {IconComponent && (
                      <IconComponent
                        size={32}
                        className="text-blue-600 group-hover:text-white transition-colors duration-300"
                      />
                    )}
                  </div>

                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                    onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for? We offer custom solutions too.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};
