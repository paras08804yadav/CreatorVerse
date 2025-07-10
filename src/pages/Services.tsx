
import { Users, Zap, BarChart3, Target, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";



const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Influencer Generated Content",
      description: "Ignite your brand's presence with authentic influencer-generated content from the best influencer management agency!",
      features: [
        "Strategic Storytelling",
        "Impactful Engagement",
        "Authentic Product Integration",
        "Enhanced Social Media Reach"
      ],
      targetAudience: "Fashion, Beauty, Food, Fitness — all lifestyle-driven brands thrive with Influencer Generated Content.",
      image: "https://images.pexels.com/photos/6347558/pexels-photo-6347558.jpeg?_gl=1*1o14338*_ga*MTI3MDcyNjM0My4xNzUxODgzNDE4*_ga_8JE65Q40S6*czE3NTE4ODM0MTgkbzEkZzEkdDE3NTE4ODU4MzkkajU4JGwwJGgw"
    },
    {
      icon: Zap,
      title: "UGC Production",
      description: "Build trust with authentic user-generated content (UGC) from the best user-generated content platform. Boost your brand with real-world videos!",
      features: [
        "Community-driven storytelling",
        "Real Stories, Real Impact",
        "Increased Social Media Engagement",
        "Multi-format content delivery"
      ],
      targetAudience: "UGC is powerful for travel, home decor, consumer tech, and pet care brands—where real customer moments spark trust and sales.",
      image: "https://cdn.taggbox.com/v7/ugc101.com/wp-content/uploads/2024/10/63fe447f5cf873cbe1373fc1_UGC-pos.jpg"
    },
    {
      icon: BarChart3,
      title: "Viral Content Production",
      description: "Data-driven insights that optimize your campaigns and maximize ROI across all channels.",
      features: [
        "Real-time campaign monitoring",
        "ROI tracking & attribution",
        "Audience insights & demographics",
        "Competitive analysis & benchmarking"
      ],
      targetAudience: "Growth-focused businesses, marketing teams, agencies",
      image: "https://static.vecteezy.com/system/resources/previews/002/945/116/non_2x/viral-content-word-concepts-banner-vector.jpg"
    },
    {
      icon: Target,
      title: "Content Strategy",
      description: "Comprehensive content planning that aligns with your brand goals and audience preferences.",
      features: [
        "Audience research & persona development",
        "Content calendar planning",
        "Platform-specific optimization",
        "Trend analysis & forecasting"
      ],
      targetAudience: "Established brands, startups, marketing departments",
      image: "https://img.freepik.com/free-vector/happy-seo-planning-campaign-social-media-isolated-flat-illustration_74855-10793.jpg"
    },
      {
      icon: Target,
      title: "Reel Script Writing (Any Niche)",
      description: "Comprehensive content planning that aligns with your brand goals and audience preferences.",
      features: [
        "Audience research & persona development",
        "Content calendar planning",
        "Platform-specific optimization",
        "Trend analysis & forecasting"
      ],
      targetAudience: "Established brands, startups, marketing departments",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71Gtw1SPCtYJMbp7aBZLXvRaOWYUDKYNN2w&s"
    },
    {
      icon: Target, 
      title: "Professional Voice Over Services",
      description: "Elevate your content with studio-quality voice overs in multiple languages and styles, perfect for commercials, explainers, and brand narratives.",
      features: [
        "Native-speaking voice artists",
        "Multiple language options",
        "Commercial & conversational styles",
        "Fast 24-48 hour turnaround",
        "Audio post-production included",
        "Unlimited revisions"
      ],
      targetAudience: "Video producers, ad agencies, e-learning platforms, content creators needing professional narration",
      image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg"
    }
  ];

  return (
    <div className="min-h-screen  bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden">
        
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 opacity-10 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500 opacity-5 rounded-full blur-[140px] animate-float-delayed"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Services That
            <span className="gold-gradient block mt-2">
              Drive Results
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            From strategy to execution, we provide end-to-end creator marketing solutions 
            that connect your brand with authentic audiences and deliver measurable growth.
          </p>
        </div>
      </section>

      {/* Services Grid - Modified Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 md:space-y-20 relative z-10"> {/* Changed space-y-20 to space-y-8 on mobile */}
            {/* Background elements unchanged */}
            
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border border-white/10 group hover:border-amber-400/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  {/* Mobile Layout - Column */}
                  <div className="flex flex-col md:hidden">
                    {/* Service Header */}
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-lg flex items-center justify-center mr-3">
                        <service.icon className="h-5 w-5 md:h-6 md:w-6 text-black" />
                      </div>
                      <h2 className="text-xl font-bold text-white">{service.title}</h2>
                    </div>
                    
                    {/* Image - Top on mobile */}
                    <div className="relative mb-6 rounded-xl overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <p className="text-gray-300">{service.description}</p>
                      
                      <div>
                        <h3 className="font-semibold text-white mb-2">What's Included:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-white mb-1">Perfect For:</h3>
                        <p className="text-gray-300 text-sm">{service.targetAudience}</p>
                      </div>
                      
                      <Link to="/contact" className="block mt-4">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-medium"
                        >
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  
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

export default Services;