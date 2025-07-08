
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
      title: "Product Shoot (Add-on)",
      description: "Comprehensive content planning that aligns with your brand goals and audience preferences.",
      features: [
        "Audience research & persona development",
        "Content calendar planning",
        "Platform-specific optimization",
        "Trend analysis & forecasting"
      ],
      targetAudience: "Established brands, startups, marketing departments",
      image: "https://cdn.pixabay.com/photo/2021/07/14/17/23/photography-6466671_640.jpg"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20 relative z-10">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400 opacity-5 rounded-full blur-[140px] animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500 opacity-5 rounded-full blur-[140px] animate-float-delayed"></div>
            </div>
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''} group animate-fade-in-up`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-size-200 group-hover:bg-pos-100 rounded-lg flex items-center justify-center mr-4 transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-400/20">
                      <service.icon className="h-6 w-6 text-black" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-8">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-2">Perfect For:</h3>
                    <p className="text-gray-300">{service.targetAudience}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-size-200 hover:bg-pos-100 text-black font-bold transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/20">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full border border-white/10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-amber-400/20 backdrop-blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
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
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500"></div>
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
