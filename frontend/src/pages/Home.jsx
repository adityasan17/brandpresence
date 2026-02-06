import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { MarketingTruths } from "../components/MarketingTruths";
import { Portfolio } from "../components/Portfolio";
import { Stats } from "../components/Stats";
import { Testimonials } from "../components/Testimonials";
import { BookConsultation } from "../components/BookConsultation";
import { Footer } from "../components/Footer";
import { mockData } from "../mock";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero data={mockData.hero} />
      <Services services={mockData.services} />
      <MarketingTruths truths={mockData.marketingTruths} />
      <WhyChooseUs features={mockData.whyChooseUs} />
      <Stats stats={mockData.stats} />
      <Portfolio projects={mockData.portfolio} />
      <Testimonials testimonials={mockData.testimonials} />
      <BookConsultation contactInfo={mockData.contact} />
      <Footer contactInfo={mockData.contact} />
    </div>
  );
};

export default Home;
