import React from "react";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";

export const Portfolio = ({ projects }) => {
  return (
    <section id="portfolio" className="py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Aggressive Style */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-none">
                We Don't Just Talk.
                <br />
                <span className="text-blue-600">We Deliver.</span>
              </h2>
              <div className="w-32 h-2 bg-blue-600"></div>
            </div>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-xl font-medium">
              Real brands. Real results. Real ROI. Check out how we've turned underdogs into market leaders.
            </p>
          </div>
        </div>

        {/* Portfolio Grid - Masonry Style */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden bg-gray-900 cursor-pointer transform hover:-translate-y-2 transition-all duration-500 ${
                index === 0 ? "lg:row-span-2" : ""
              }`}
              style={{ minHeight: index === 0 ? "600px" : "400px" }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top */}
                <div className="flex justify-between items-start">
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-sm font-black uppercase">
                    {project.category}
                  </Badge>
                  <div className="w-12 h-12 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="text-gray-900" size={24} />
                  </div>
                </div>

                {/* Bottom */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-base lg:text-lg text-gray-300 font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics - Bold Numbers */}
                  <div className="flex flex-wrap gap-8">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx}>
                        <p className="text-3xl lg:text-4xl font-black text-blue-400">
                          {value}
                        </p>
                        <p className="text-sm text-gray-400 uppercase tracking-wider font-bold">
                          {key}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Line Animation */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center space-y-6">
          <p className="text-2xl lg:text-3xl font-black text-gray-900 italic">
            Want to be our next success story?
          </p>
          <button
            onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-block bg-gray-900 hover:bg-blue-600 text-white px-12 py-6 font-black text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
          >
            Let's Make It Happen →
          </button>
        </div>
      </div>
    </section>
  );
};
