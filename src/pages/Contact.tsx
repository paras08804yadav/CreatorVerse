import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", company: "", budget: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@creatorverse.com",
      subtitle: "We'll respond within 4 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      subtitle: "Schedule an in-person meeting"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 hours",
      subtitle: "Average first response time"
    }
  ];

  const benefits = [
    "Free campaign strategy consultation",
    "Custom creator matching and vetting",
    "Transparent pricing with no hidden fees",
    "Dedicated account management",
    "Real-time campaign tracking and reporting"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Create Something
            <span className="gold-gradient block mt-2">
              Amazing Together
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to transform your marketing with authentic creator partnerships? 
            Get in touch and let's discuss your goals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get Started Today</h2>
              <p className="text-gray-300 mb-8">
                Tell us about your project and we'll craft a custom strategy that delivers results.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your name"
                      required
                      className="w-full bg-gray-900 border-white/20 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-gray-900 border-white/20 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Company Name
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Your company"
                    className="w-full bg-gray-900 border-white/20 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Budget Range
                  </label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger className="w-full bg-gray-900 border-white/20 text-white">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/20">
                      <SelectItem value="under-10k">Under $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="over-100k">Over $100,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Tell us about your project *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe your goals, target audience, and what you're looking to achieve..."
                    rows={5}
                    required
                    className="w-full bg-gray-900 border-white/20 text-white placeholder-gray-400"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-400 text-black font-bold"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
            
            {/* Contact Info & Benefits */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-5 w-5 text-black" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{info.title}</h4>
                            <p className="text-white font-medium">{info.details}</p>
                            <p className="text-sm text-gray-300">{info.subtitle}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* What You Get */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
                <Card className="bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border-amber-400/20">
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              {/* Quick Stats */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "24hr", label: "Response Time" },
                    { number: "95%", label: "Client Retention" },
                    { number: "22K+", label: "Active Creators" },
                    { number: "320%", label: "Average ROI" }
                  ].map((stat, index) => (
                    <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-white/10 text-center">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold text-amber-400 mb-1">{stat.number}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Quick answers to common questions about working with CreatorVerse</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly can we start a campaign?",
                answer: "Most campaigns can be launched within 1-2 weeks after strategy approval. Rush campaigns are available for urgent needs."
              },
              {
                question: "What platforms do you work with?",
                answer: "We work across all major platforms including Instagram, TikTok, YouTube, Twitter, and emerging platforms as they gain traction."
              },
              {
                question: "How do you measure campaign success?",
                answer: "We track comprehensive metrics including reach, engagement, conversions, ROI, and brand sentiment using advanced analytics tools."
              },
              {
                question: "What's included in your management fee?",
                answer: "Strategy development, creator sourcing and vetting, campaign management, content approval, and detailed reporting are all included."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-white/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
