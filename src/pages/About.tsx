
import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Punnet Singh Chauhan",
      role: "Founder",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQG7pQy0llD8sQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718287821597?e=1757548800&v=beta&t=xuc3OdpAVMMnPh-IFFV0EAQd2THSnz6CgRnQKef8eU8",
      bio: "6+ years experience in content creation.",
    },
    {
      name: "Tanisha Bhati",
      role: "Content Writer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHCYjQjctgbpw/profile-displayphoto-crop_800_800/B4DZd9q8L4HAAU-/0/1750160098829?e=1757548800&v=beta&t=5oseMxrtc3AFT_EY6bzNCsl062EUk33Lgr4mWoN6v_Q",
      bio: "3+ years experiemce in content writing.",
    },
    {
      name: "Naman Soni",
      role: "Head of creator partnerships",
      image: "https://ig.socialapi-v2.workers.dev/?q=Zk3YpkB9murhltrR5XJR5do-p0TomGSRlt3RZyKh5Xgep0gMm0i-zjrtmEToBjfuOQ6omG8KmhcHOQ6HBh6EBonLOQatBQ8tih6Kih8KBQ6uBgnoBG6uiCSuBQluBQ6tBhTYiQvf4tfRZe2eWEiYpQovpETMZe2e4tcH4EBLiG2fBGcH4E3YiqDwz0iwZkTrpti-ze3xzeTMzE1vijYum0ivz0xRpE3VDE1VzjKCztY04tKC4tiV5QYLBQT04tKC4trCWJ8tloFucc6LcXnL50M_yQgxJobQ4ovoioThjebHmJiHcyLwjvoNDGxoit5CltbtDc3WlvLKit5eBG2DTxbXBypu5EcKOyrJ1xrRlor-ZXBrBtKqJJb-yGgNcEi3itMO5e5kOQ8EJQS04tKC4t5bDQoJDy3oBxJjyQD-OcKADvM2jJThBoJ310JvzGo2Gh3AJGxgTvg2Tc80ltiqWGpMijDbDorClyiFDJrAD4vr3YikioJfi0MAc0xgzYi_Tcg8jx2Ezt3WygrfjX1t3yK2ccgdmyiClCpMijD-ZQYHBgr2DxTMiy5qGC6tzESoito9DxgRzo534h3wGY5ZGGV4pvxEOgi05gpt4oFHix3E10rxWGlfihBfThaL1xrRlorhZyTrBGlYlhgv",
      bio: "4+ years experience in creator partnerships.",
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
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 opacity-10 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500 opacity-5 rounded-full blur-[140px] animate-float-delayed"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10 animate-fade-in-up">
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
                At CreatorVerse, we’re driven by one clear vision — to make creator-brand collaborations effortless and impactful. 
                In today’s fast-moving digital world, we noticed a gap: creators had the creativity, brands had the mission — but the connection was missing.
              </p>
              <p>
                Our team brings deep experience from both marketing and creator ecosystems. We've worked behind the scenes of successful brand campaigns and know what it takes to deliver real engagement, not vanity metrics.
              </p>
              <p>
                CreatorVerse isn't just a service — it's a partner for brands ready to grow through meaningful content. 
                With every project, we aim to deliver more than results — we deliver relevance, creativity, and connection.
              </p>

              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl border border-white/10"
              />
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
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10 hover:border-amber-400/30 transition-all duration-500 backdrop-blur-sm hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-400/20 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-size-200 group-hover:bg-pos-100 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-400/20">
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
              <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10 hover:border-amber-400/30 transition-all duration-500 backdrop-blur-sm hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-400/20 group">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-all duration-500 border-2 border-amber-400/20 group-hover:border-amber-400/50 shadow-lg group-hover:shadow-xl group-hover:shadow-amber-400/20"
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
