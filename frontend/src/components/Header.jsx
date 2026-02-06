import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#portfolio" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-xl"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://customer-assets.emergentagent.com/job_growth-nexus-24/artifacts/g962a0xk_Screenshot%202026-02-06%20190500.png"
              alt="Brandpresence Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-900 hover:text-blue-600 font-bold transition-colors duration-200 text-base uppercase tracking-wider relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#consultation")}
              className="bg-blue-600 hover:bg-gray-900 text-white px-8 py-6 rounded-none font-black text-sm uppercase tracking-wider shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t-4 border-blue-600 shadow-2xl">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-900 hover:text-blue-600 font-bold py-3 text-lg uppercase tracking-wider transition-colors border-b border-gray-200 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#consultation")}
              className="w-full bg-blue-600 hover:bg-gray-900 text-white px-8 py-6 rounded-none font-black uppercase tracking-wider"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
