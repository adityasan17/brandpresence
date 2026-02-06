import React from "react";
import { Linkedin, Instagram, Twitter, Facebook, Mail, Phone } from "lucide-react";

export const Footer = ({ contactInfo }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: contactInfo.social.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: contactInfo.social.instagram, label: "Instagram" },
    { icon: Twitter, href: contactInfo.social.twitter, label: "Twitter" },
    { icon: Facebook, href: contactInfo.social.facebook, label: "Facebook" }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              src="https://customer-assets.emergentagent.com/job_growth-nexus-24/artifacts/g962a0xk_Screenshot%202026-02-06%20190500.png"
              alt="Brandpresence Logo"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              Elevating brands through creative marketing and innovative technology solutions.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Why Us", href: "#why-us" },
                { label: "Book Consultation", href: "#consultation" }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>WhatsApp Marketing</li>
              <li>Influencer Marketing</li>
              <li>Web Development</li>
              <li>App Development</li>
              <li>Digital Strategy</li>
              <li>Brand Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>{contactInfo.phone}</p>
                  <p className="text-xs mt-1">WhatsApp: {contactInfo.whatsapp}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Brandpresence. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
