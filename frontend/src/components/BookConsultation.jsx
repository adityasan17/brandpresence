import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export const BookConsultation = ({ contactInfo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission
    setTimeout(() => {
      toast.success("Got it! We'll call you faster than your competitor can say 'digital marketing' 😎", {
        duration: 5000,
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hi! I'd like to discuss my project with Brandpresence`, '_blank');
  };

  return (
    <section id="consultation" className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Fun */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none">
            Let's Make
            <br />
            <span className="text-blue-600">Something Awesome</span>
          </h2>
          <div className="w-32 h-2 bg-blue-600 mx-auto"></div>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-2xl mx-auto font-medium">
            No pressure. No sales pitch. Just a real conversation about your goals.
            <br />
            <span className="text-sm text-gray-600">(We promise we won't bore you to death 😴)</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-4 border-gray-200 shadow-xl hover:border-blue-600 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-3xl font-black text-gray-900">Drop Us a Line</CardTitle>
              <CardDescription className="text-base">Fill this out and we'll get back to you in less than 24 hours. Pinky promise 🤙</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="What should we call you?"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-300 focus:border-blue-600 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-300 focus:border-blue-600 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-bold">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-300 focus:border-blue-600 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="font-bold">What Do You Need?</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-medium h-12"
                  >
                    <option value="">Pick one (or we'll guess 🎯)</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="seo">SEO & Digital Marketing</option>
                    <option value="social">Social Media Management</option>
                    <option value="leads">Lead Generation</option>
                    <option value="brand">Brand Building</option>
                    <option value="influencer">Influencer Marketing</option>
                    <option value="legal">Legal Consulting</option>
                    <option value="all">Everything! (We like your style 😎)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-bold">Tell Us More</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What's on your mind? The more we know, the better we can help!"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-2 border-gray-300 focus:border-blue-600"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-gray-900 text-white py-7 rounded-none font-black text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    "Sending Your Awesomeness..."
                  ) : (
                    <>
                      Send It! <Send className="ml-2" size={20} />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info - Fun Style */}
          <div className="space-y-8">
            {/* Main Contact Card */}
            <Card className="border-0 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-3xl font-black mb-2">Or Just Call/Text</h3>
                  <p className="text-blue-100">We're real people. We answer calls. Crazy, right?</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="font-black mb-1 text-lg">Email</p>
                      <p className="text-blue-100">{contactInfo.email}</p>
                      <p className="text-sm text-blue-200 mt-1">(We check this obsessively)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="font-black mb-1 text-lg">Call Us</p>
                      <p className="text-blue-100">{contactInfo.phone}</p>
                      <p className="text-blue-100">{contactInfo.phone2}</p>
                      <p className="text-sm text-blue-200 mt-1">(Yes, even on weekends)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="font-black mb-1 text-lg">Visit Us</p>
                      <p className="text-blue-100">{contactInfo.address}</p>
                      <p className="text-sm text-blue-200 mt-1">(Coffee's on us ☕)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="border-4 border-green-500 bg-green-50 hover:bg-green-100 transition-colors cursor-pointer" onClick={handleWhatsAppClick}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-500 flex items-center justify-center">
                    <MessageCircle size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-xl text-gray-900 mb-1">WhatsApp Us!</h4>
                    <p className="text-gray-700 font-medium">Fastest way to reach us. Literally.</p>
                  </div>
                  <ArrowRight size={24} className="text-green-600" />
                </div>
              </CardContent>
            </Card>

            {/* Fun Note */}
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <p className="text-lg font-black text-gray-900 mb-2">⚡ Response Time</p>
                <p className="text-gray-700">
                  <span className="font-bold">Weekdays:</span> Within 2 hours<br />
                  <span className="font-bold">Weekends:</span> We still check (we're obsessed)<br />
                  <span className="text-sm">(Unlike other agencies who ghost you 👻)</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
