
import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
      bio: "Former VP of Marketing at a leading social platform. 8+ years building creator communities.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Creator Relations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Ex-influencer manager with deep connections across all major platforms and niches.",
    },
    {
      name: "Emma Thompson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning content strategist who's created viral campaigns for Fortune 500 brands.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Authenticity First",
      description: "We believe in genuine connections between creators and brands that resonate with real audiences.",
    },
    {
      icon: Target,
      title: "Performance Driven",
      description: "Every campaign is optimized for measurable results that directly impact your bottom line.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We're building a thriving ecosystem where creators and brands grow together.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We're Redefining
            <span className="gold-gradient block mt-2">
              Creator Marketing
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            CreatorVerse was born from a simple belief: authentic content from real creators 
            drives better results than traditional advertising. We're here to make that connection seamless.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2022, CreatorVerse emerged from the recognition that the creator economy 
                  was fragmented. Brands struggled to find the right creators, and creators couldn't 
                  connect with brands that aligned with their values.
                </p>
                <p>
                  Our founding team, with decades of combined experience in marketing and creator 
                  management, set out to build the bridge between these two worlds. Today, we're 
                  proud to facilitate thousands of successful partnerships.
                </p>
                <p>
                  We've grown from a small team with big dreams to a thriving agency that's helped 
                  over 500 brands amplify their message through authentic creator content.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl border border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
                <div className="text-2xl font-bold text-amber-400 mb-2">500+</div>
                <div className="text-sm text-gray-300">Brands Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do, from creator partnerships to client relationships
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate experts with deep experience in creator marketing and brand strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform border-2 border-amber-400/20"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-amber-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
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

export default About;
