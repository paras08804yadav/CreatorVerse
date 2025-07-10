
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
      icon: Target, // Changed to microphone/voice icon
      title: "Professional Voice Over Services",
      description: "Elevate your content with studio-quality voice overs in multiple languages and styles, perfect for commercials, explainers, and brand narratives.",
      features: [
        "Native-speaking voice artists",
        "Multiple language options",
        "Commercial & conversational styles",
        "Audio post-production included",
        
      ],
      targetAudience: "Video producers, ad agencies, e-learning platforms, content creators needing professional narration",
      image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg"
    }
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

      {/* Services Grid */}


    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 md:space-y-20">
          {services.map((service, index) => (
            <div key={index}>
              {/* Mobile View */}
              <div className="md:hidden mb-10">
                <Card className="bg-gray-900/50 border border-white/10 hover:border-amber-400/30 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center mr-3">
                        <service.icon className="h-5 w-5 text-black" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                    </div>
                    
                    <div className="relative mb-6 rounded-xl overflow-hidden h-48">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-gray-300">{service.description}</p>
                      
                      <div>
                        <h3 className="font-semibold text-white mb-2">Includes:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-gray-300 text-sm">
                              <CheckCircle className="h-4 w-4 text-amber-400 mr-2 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link to="/contact" className="block mt-4">
                        <Button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Desktop View */}
              <div className="hidden md:grid grid-cols-2 gap-12 items-center group">
                <div className={index % 2 === 1 ? 'order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-black" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-8">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Includes:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-amber-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold hover:shadow-lg hover:shadow-amber-400/20">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 group-hover:shadow-2xl group-hover:shadow-amber-400/20 transition-all">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover aspect-video"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures every campaign delivers exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400 opacity-5 rounded-full blur-[180px] animate-float-slow"></div>
            </div>
            {[
              { step: "01", title: "Discovery", description: "We dive deep into your brand, goals, and target audience" },
              { step: "02", title: "Strategy", description: "Develop a comprehensive campaign strategy and creator matching" },
              { step: "03", title: "Execution", description: "Launch campaigns with our vetted creators and manage every detail" },
              { step: "04", title: "Optimization", description: "Monitor performance and optimize for maximum ROI and engagement" }
            ].map((phase, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10 hover:border-amber-400/30 transition-all duration-500 backdrop-blur-sm hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-400/20 group relative">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-amber-400 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-300">{phase.description}</p>
                </CardContent>
            {index < 3 && (
              <div className="hidden md:block absolute top-1/2 right-0 translate-x-full w-8 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500"></div>
            )}
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
