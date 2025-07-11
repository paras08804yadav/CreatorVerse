import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";
const FORM_DATA_KEY = 'creatorverse_contact_form';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    company: "",
    budget: "",
    message: "",
    service: searchParams.get("service") || "",
    socialPlatform: "",
    socialUsername: "",
    contactNumber: ""
  });

  // Load saved form data on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem(FORM_DATA_KEY);
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      setFormData(prev => ({
        ...prev,
        ...parsedData,
        service: searchParams.get("service") || parsedData.service
      }));
    }
  }, []);

  // Save form data as user types
  useEffect(() => {
    localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
  }, [formData]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx81tYKunws1TmhG4gPU78ozNK76Ikh6tm65m1D23XkdFTRuK3jWeiNYPPfq0IeOk0M/exec',{
        method: 'POST',
        body: JSON.stringify(formData),
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      

      toast.success("Thank you! We'll get back to you within 24 hours.");
      
      // Clear form and localStorage
      setFormData({
        name: "",
        email: "",
        userType: "",
        company: "",
        budget: "",
        message: "",
        service: searchParams.get("service") || "",
        socialPlatform: "",
        socialUsername: "",
        contactNumber: ""
      });
      localStorage.removeItem(FORM_DATA_KEY);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error('Error submitting form:', error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@creatorverse.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9219135156",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Swaroop Nagar, Kanpur"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "less than 24 hours"
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
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 opacity-10 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500 opacity-5 rounded-full blur-[140px] animate-float-delayed"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10 animate-fade-in-up">
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
<section className="py-20 px-4 sm:px-6 lg:px-8 relative">
  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] opacity-50"></div>
  <div className="max-w-4xl mx-auto">
    <div className="relative z-10">
      <div className="mx-auto"> 
        <div className="text-center mb-10"> 
          <h2 className="text-3xl font-bold text-white mb-4">Get Started Today</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tell us about your project and we'll craft a custom strategy that delivers results.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto"> 
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
                      className="w-full bg-gray-900/50 border-white/20 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-amber-400/50 focus:ring-amber-400/50 hover:border-amber-400/30"
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
                      className="w-full bg-gray-900/50 border-white/20 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-amber-400/50 focus:ring-amber-400/50 hover:border-amber-400/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    You are a *
                  </label>
                  <Select value={formData.userType} onValueChange={(value) => handleInputChange("userType", value)} required>
                    <SelectTrigger className="w-full bg-gray-900/50 border-white/20 text-white hover:border-amber-400/30 transition-all duration-300">
                      <SelectValue placeholder="Select your type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900/90 border-white/20">
                      <SelectItem value="creator">Creator</SelectItem>
                      <SelectItem value="organization">Organization</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.userType === 'organization' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Company Name *
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company"
                        required
                        className="w-full bg-gray-900/50 border-white/20 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-amber-400/50 focus:ring-amber-400/50 hover:border-amber-400/30"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Interested Service *
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)} required>
                        <SelectTrigger className="w-full bg-gray-900/50 border-white/20 text-white hover:border-amber-400/30 transition-all duration-300">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900/90 border-white/20">
                          <SelectItem value="Influencer Generated Content">Influencer Generated Content</SelectItem>
                          <SelectItem value="User Generated Content">User Generated Content</SelectItem>
                          <SelectItem value="Viral Content Production">Viral Content Production</SelectItem>
                          <SelectItem value="Content Strategy">Content Strategy</SelectItem>
                          <SelectItem value="Reel Script Writing">Reel Script Writing</SelectItem>
                          <SelectItem value="Product Shoot">Voice Over</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {formData.userType === 'creator' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Social Media Platform *
                      </label>
                      <Select value={formData.socialPlatform} onValueChange={(value) => handleInputChange("socialPlatform", value)} required>
                        <SelectTrigger className="w-full bg-gray-900/50 border-white/20 text-white hover:border-amber-400/30 transition-all duration-300">
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900/90 border-white/20">
                          <SelectItem value="Instagram">Instagram</SelectItem>
                          <SelectItem value="YouTube">YouTube</SelectItem>
                          <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Social Media Username *
                      </label>
                      <Input
                        value={formData.socialUsername}
                        onChange={(e) => handleInputChange("socialUsername", e.target.value)}
                        placeholder="@username"
                        required
                        className="w-full bg-gray-900/50 border-white/20 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-amber-400/50 focus:ring-amber-400/50 hover:border-amber-400/30"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Contact Number *
                  </label>
                  <Input
                    type="tel"
                    value={formData.contactNumber}
                    onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                    placeholder="Your contact number"
                    required
                    className="w-full bg-gray-900/50 border-white/20 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-amber-400/50 focus:ring-amber-400/50 hover:border-amber-400/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us more about your requirements..."
                    rows={5}
                    required
                    className="w-full bg-gray-900/50 border-white/20 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-amber-400/50 focus:ring-amber-400/50 hover:border-amber-400/30 min-h-[120px] resize-y"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-size-200 hover:bg-pos-100 text-black font-bold transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-400/20"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
            
          </div>
        </div>
      </section>


<section className="py-12 px-4 sm:px-6 lg:px-8 relative">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Contact Info Card */}
      <div className="bg-gray-900/50 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-amber-400/30 transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-4 hover:bg-gray-800/30 rounded-lg transition-colors duration-200"
            >
              <div className="p-3 bg-amber-400/10 rounded-lg flex-shrink-0">
                <info.icon className="h-5 w-5 text-amber-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-medium text-white text-base">{info.title}</h4>
                <p className="text-amber-400 text-sm">{info.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Card */}
      <div className="bg-gray-900/50 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-amber-400/30 transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-6">
          Why Choose CreatorVerse
        </h3>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-amber-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-base">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400 opacity-5 rounded-full blur-[140px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 opacity-5 rounded-full blur-[140px] animate-float-delayed"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 relative z-10 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Quick answers to common questions about working with CreatorVerse</p>
          </div>
          
          <div className="space-y-6 relative z-10">
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
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10 hover:border-amber-400/30 transition-all duration-500 backdrop-blur-sm hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-400/20 group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300 relative">{faq.question}</h3>
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
