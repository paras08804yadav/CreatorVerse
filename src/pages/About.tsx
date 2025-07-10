
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
      bio: "3+ years experience in content writing.",
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
<section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[500px]">
  {/* Background Image - Moved outside z-0 div */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.pexels.com/photos/599982/pexels-photo-599982.jpeg"
      className="w-full h-full object-cover opacity-80"
      alt="Background"
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111]/90 to-[#0a0a0a] z-1"></div>

  {/* Animated elements - now on top of image but below content */}
  <div className="absolute inset-0 z-2">
    <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 opacity-10 rounded-full blur-[120px] animate-float"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500 opacity-5 rounded-full blur-[140px] animate-float-delayed"></div>
  </div>

  {/* Content */}
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <h1 className="py-8 text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
      We're Redefining
      <span className="gold-gradient block mt-2">
        Creator Marketing
      </span>
    </h1>
    <p className="text-xl text-white/90 leading-relaxed sm:text-base">
      CreatorVerse was born from a simple belief: authentic content from real creators 
      drives better results than traditional advertising. We're here to make that connection seamless.
    </p>
  </div>
</section>

{/* Story Section - Centered Heading All Screens */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
  <div className="max-w-7xl mx-auto">
    {/* Centered heading for all screens */}
    <div className="text-center mb-12 lg:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        Our Story
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Text Content - Left on desktop */}
      <div className="order-2 lg:order-1">
        <div className="space-y-6 text-gray-300 text-base lg:text-lg leading-relaxed">
<p className="transition-all duration-300 hover:text-white lg:hover:pl-2">Two guys.
          <span className="block transition-all duration-300 hover:text-white lg:hover:pl-2">Tired of chasing 9 to 5s they never wanted. </span></p>
          <p className="transition-all duration-300 hover:text-white lg:hover:pl-2">
            After building 100M+ views across the internet, growing multiple pages, and still facing the same question:
            "Why is there no creator-first agency in our own city?"
          </p>
          <p className="transition-all duration-300 hover:text-white lg:hover:pl-2">
            We realized something big was missing — not just in Kanpur, but in India's tier-2 & tier-3 cities:
          </p>
          <p className="transition-all duration-300 hover:text-white lg:hover:pl-2">
            No structure. No scripting. No proper influencer support.
            Only unplanned, unpolished content — and creators getting left behind.
          </p>
          <p className="transition-all duration-300 hover:text-white lg:hover:pl-2">
            That's when we decided — enough.
          </p>
          <p className="transition-all duration-300 hover:text-white lg:hover:pl-2">
            We didn't want to work for brands anymore.
            We wanted to build something that builds creators.
          </p>
          <p className="transition-all duration-300 hover:text-white lg:hover:pl-2">
            And that's how CreatorVerse was born.
            Not just a team. Not just a company.
          </p>
          <p className="transition-all duration-300 hover:text-white lg:hover:pl-2">
            From scripting to execution, we believe creators need more than likes —
            They need direction, structure, and a team that actually gets it.
          </p>
          <p className="transition-all duration-300 hover:text-white lg:hover:pl-2">
            A revolution — for creators and brands, starting right here in Kanpur.
          </p>
        </div>
      </div>

      {/* Image - Right on desktop, after heading on mobile */}
      <div className="order-1 lg:order-2 relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80" 
          alt="Team collaboration"
          className="relative rounded-2xl shadow-xl lg:shadow-2xl border border-white/10 w-full h-auto max-h-[500px] object-cover transform transition-all duration-300 group-hover:lg:scale-[1.02] z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl z-10"></div>
      </div>
    </div>
  </div>
</section>

      {/* Team Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
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
