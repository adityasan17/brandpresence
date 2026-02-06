import React from "react";

export const MarketingTruths = ({ truths }) => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none">
            Marketing <span className="text-blue-600">Truths</span>
            <br />
            <span className="text-3xl lg:text-4xl">Nobody Tells You</span>
          </h2>
          <div className="w-32 h-2 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not here to sugarcoat things. Here's what you actually need to know.
          </p>
        </div>

        {/* Truths Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {truths.map((item, index) => (
            <div
              key={item.id}
              className="bg-gray-50 border-l-4 border-blue-600 p-8 hover:bg-gray-900 hover:border-blue-400 group transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Myth/Truth */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 group-hover:bg-red-400 flex items-center justify-center font-black text-white text-sm transition-colors">
                    ❌
                  </div>
                  <p className="text-lg font-bold text-gray-900 group-hover:text-gray-300 italic transition-colors">
                    "{item.truth}"
                  </p>
                </div>

                {/* Reality */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 group-hover:bg-green-400 flex items-center justify-center font-black text-white text-sm transition-colors">
                    ✓
                  </div>
                  <p className="text-lg font-bold text-blue-600 group-hover:text-blue-400 transition-colors">
                    {item.reality}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center space-y-6">
          <p className="text-2xl lg:text-3xl font-black text-gray-900 italic max-w-3xl mx-auto">
            Ready for an agency that tells you the truth? <br />
            <span className="text-blue-600">Even when it's uncomfortable?</span>
          </p>
          <button
            onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-block bg-blue-600 hover:bg-gray-900 text-white px-12 py-6 font-black text-lg uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
          >
            Hell Yes, Let's Talk →
          </button>
        </div>
      </div>
    </section>
  );
};