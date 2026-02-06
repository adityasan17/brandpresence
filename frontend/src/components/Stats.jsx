import React from "react";
import { Briefcase, Heart, TrendingUp, Star, Clock, Coffee, Smile, Target } from "lucide-react";

const iconMap = {
  Briefcase: Briefcase,
  Heart: Heart,
  TrendingUp: TrendingUp,
  Star: Star,
  Clock: Clock,
  Coffee: Coffee,
  Smile: Smile,
  Target: Target
};

export const Stats = ({ stats }) => {
  return (
    <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 opacity-10 rounded-full filter blur-3xl"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bold Statement */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-none">
            What Makes Us
            <br />
            <span className="text-blue-400">Different</span>
          </h2>
          <div className="w-32 h-2 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
            We're new. We're hungry. And we're not trying to impress you with fake numbers.
          </p>
        </div>

        {/* Stats Grid - Honest & Fun */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div
                key={stat.id}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon - Minimalist */}
                <div className="w-16 h-16 border-4 border-white/20 flex items-center justify-center mx-auto mb-6 group-hover:border-blue-400 group-hover:rotate-12 transition-all duration-300">
                  {IconComponent && <IconComponent size={32} className="text-blue-400" />}
                </div>
                
                {/* Value - Extra Bold */}
                <p className="text-4xl lg:text-6xl font-black mb-4 group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </p>
                
                {/* Label - Uppercase Bold */}
                <p className="text-base lg:text-lg font-bold uppercase tracking-widest text-gray-400">
                  {stat.label}
                </p>

                {/* Underline on hover */}
                <div className="w-0 h-1 bg-blue-600 mx-auto mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement - Honest */}
        <div className="mt-24 text-center space-y-6">
          <div className="max-w-4xl mx-auto bg-blue-600/10 border-2 border-blue-600 p-8">
            <p className="text-2xl lg:text-3xl font-black italic text-white leading-relaxed">
              "We're not going to lie to you with inflated numbers. <br />
              We're a <span className="text-blue-400">new agency</span> with fresh ideas, hungry mindset, and <span className="text-blue-400">zero fake promises</span>."
            </p>
          </div>
          
          <p className="text-lg text-gray-400">
            (See? Honesty feels nice, doesn't it?)
          </p>
        </div>
      </div>
    </section>
  );
};
