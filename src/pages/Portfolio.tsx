
import { TrendingUp, Users, Eye, Heart, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const caseStudies = [
    {
      title: "Club Buddy Pre Launch Campaign",
      client: "Club Buddy",
      category: "Clubbiing APP",
      challenge: "Launch a new fitness app and acquire 100K users in 3 months with limited brand awareness.",
      solution: "Partnered with 50 fitness micro-influencers to create authentic workout content featuring the app. Developed a 30-day challenge campaign with user-generated content incentives.",
      results: [
        { metric: "App Downloads", value: "150K+", icon: TrendingUp },
        { metric: "Campaign Reach", value: "2.5M", icon: Eye },
        { metric: "Engagement Rate", value: "8.4%", icon: Heart },
        { metric: "Cost per Install", value: "$1.20", icon: Users }
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      testimonial: "CreatorVerse exceeded our expectations. The quality of creators and the results speak for themselves.",
      clientRole: "Sarah Kim, CMO at FitLife Technologies"
    },
    {
      title: "NexDhara - Tech Startup Launch",
      client: "NexDhara",
      category: "Technology & Innovation",
      challenge: "Increase brand awareness and sales for a sustainable fashion brand targeting Gen Z consumers.",
      solution: "Created an influencer campaign focused on sustainability storytelling. Partnered with eco-conscious creators to showcase the brand's impact and style versatility.",
      results: [
        { metric: "Revenue Increase", value: "340%", icon: TrendingUp },
        { metric: "Brand Mentions", value: "15K+", icon: Users },
        { metric: "Video Views", value: "5M+", icon: Eye },
        { metric: "Conversion Rate", value: "12%", icon: Heart }
      ],
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop",
      testimonial: "The authentic storytelling approach transformed how our audience perceives our brand.",
      clientRole: "Marcus Thompson, Founder of EcoStyle"
    },
    {
      title: "TasteBud - Food Delivery Growth",
      client: "TasteBud App",
      category: "Food & Technology",
      challenge: "Compete with established food delivery apps and increase market share in major cities.",
      solution: "Leveraged food bloggers and local influencers to create mouth-watering content. Developed location-specific campaigns highlighting unique restaurant partners.",
      results: [
        { metric: "Order Volume", value: "+280%", icon: TrendingUp },
        { metric: "New Users", value: "75K", icon: Users },
        { metric: "Content Pieces", value: "200+", icon: Eye },
        { metric: "ROI", value: "450%", icon: Heart }
      ],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      testimonial: "CreatorVerse helped us break into competitive markets with authentic, local content.",
      clientRole: "Alex Rivera, Head of Growth at TasteBud"
    }
  ];

  const clientLogos = [
    "FITLIFE", "ECOSTYLE", "TASTEBUD", "TECHSTART", "BEAUTYCO", "GAMEDEV"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success Stories That
            <span className="gold-gradient block mt-2">
              Speak for Themselves
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover how we've helped brands transform their marketing with authentic 
            creator partnerships and data-driven strategies.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-gray-300">Campaigns Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">50M+</div>
              <div className="text-gray-300">Total Reach</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">320%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">95%</div>
              <div className="text-gray-300">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In-depth looks at how we've solved real challenges for real businesses
            </p>
          </div>
          
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-all duration-300 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-400 text-black">{study.category}</Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-amber-400 font-medium mb-6">{study.client}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-2">Solution</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-white mb-4">Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="text-center p-3 bg-black/40 rounded-lg border border-white/10">
                              <result.icon className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                              <div className="text-lg font-bold text-white">{result.value}</div>
                              <div className="text-xs text-gray-300">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-amber-400/10 p-4 rounded-lg border border-amber-400/20">
                        <p className="text-gray-300 italic mb-2">"{study.testimonial}"</p>
                        <p className="text-sm text-amber-400 font-medium">{study.clientRole}</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Trusted by Leading Brands</h3>
            <p className="text-gray-300">Join the companies that have transformed their marketing with CreatorVerse</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((logo, index) => (
              <div key={index} className="h-12 bg-white/10 rounded flex items-center justify-center border border-white/10">
                <span className="font-bold text-gray-300 text-sm">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-400 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Let's create a campaign that delivers the results your business deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Start Your Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              <ExternalLink className="mr-2 h-5 w-5" />
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
