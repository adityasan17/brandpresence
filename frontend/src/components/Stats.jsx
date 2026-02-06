import React from "react";
import { Briefcase, Heart, TrendingUp, Star } from "lucide-react";

const iconMap = {
  Briefcase: Briefcase,
  Heart: Heart,
  TrendingUp: TrendingUp,
  Star: Star
};

export const Stats = ({ stats }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div
                key={stat.id}
                className="text-center group hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  {IconComponent && <IconComponent size={32} className="text-white" />}
                </div>
                
                {/* Value */}
                <p className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                
                {/* Label */}
                <p className="text-base lg:text-lg text-blue-100">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
