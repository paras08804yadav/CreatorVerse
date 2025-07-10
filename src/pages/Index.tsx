import { ArrowRight, Play, Users, TrendingUp, Star, Zap, Pause, Volume2, VolumeX, Award, CheckCircle, Globe, Target, Crown, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import reel1 from "@/assets/reel1.mp4";
import reel2 from "@/assets/reel2.mp4";
import reel3 from "@/assets/reel3.mp4";
import reel4 from "@/assets/reel4.mp4"


const VideoDemo = ({
  src,
  title,
  coverImage,
  isPlayingGlobal,
  onPlayRequest,
}: {
  src: string;
  title: string;
  coverImage: string;
  isPlayingGlobal: boolean;
  onPlayRequest: () => void;
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlayingGlobal) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlayingGlobal]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      onClick={onPlayRequest}
      className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-amber-400/30 transition-all duration-500 aspect-[9/16] hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-400/20"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted={isMuted}
        onEnded={() => {}}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPlayRequest(); // set activeIndex
          }}
          className="bg-white/20 backdrop-blur-sm rounded-full p-3 mr-2 hover:bg-white/30 transition-all duration-300 border border-white/20"
        >
          {isPlayingGlobal ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 border border-white/20"
        >
          {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
        </button>
      </div>

      <div className="absolute bottom-3 left-3 ml-6 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium border border-white/10">
        {title}
      </div>
    </div>
  );
};


const Index = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const demoVideos = [
    { src: reel2, title: "Brand Storytelling", coverImage: "..." },
    { src: reel3, title: "Educational Content", coverImage: "..." },
    { src: reel1, title: "Pre Launching Campaign", coverImage: "..." },
    { src: reel4, title: "Software promotion", coverImage: "..." },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
<section className="pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[780px] bg-[#0a0a0a]">
  {/* Background Video */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-80 scale-105 transform transition-transform duration-[20s] hover:scale-110"
      poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80"
    >
      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/95 via-[#0a0a0a]/85 to-[#0a0a0a]/95 backdrop-blur-sm" />
  </div>

  {/* Light Gradient Blurs */}
  <div className="absolute inset-0 z-10 pointer-events-none animate-pulse">
    <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 opacity-20 rounded-full blur-[120px] animate-float"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500 opacity-10 rounded-full blur-[140px] animate-float-delayed"></div>
    <div className="absolute top-40 right-20 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-[100px] animate-float-slow"></div>
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto relative z-20">
    <div className="flex flex-col items-center justify-center text-center mt-52">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8 text-center">
        UGC & Influencer
        <span className="gold-gradient animate-fade-in-up"> Marketing Agency</span>
        {/* <span className="text-white "> For Brands</span> */}
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w mx-auto mb-10 leading-relaxed">
        Elevate your brand with authentic content creation and strategic influencer partnerships that drive real results.
      </p>

<div className="flex flex-col sm:flex-row gap-6 justify-center">
  <Link to="/contact">
    <Button
      size="lg" 
      className="relative bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black font-bold px-10 py-6 rounded-xl shadow-2xl hover:shadow-amber-400/25 transition-all duration-500 group overflow-hidden hover:scale-105 text-lg" 
    >
      Get Started Now
      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" /> {/* Increased icon size */}
    </Button>
  </Link>
  <Button
    size="lg" 
    variant="outline"
    className="border-white/20 text-white hover:bg-white hover:text-black px-10 py-6 rounded-xl group transition-all duration-300 text-lg"
    asChild
  >
    <a
      href="https://wa.me/919219135156"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
    >
      <Phone className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" /> {/* Increased icon size */}
      Schedule a Meeting
    </a>
  </Button>
</div>
    </div>
  </div>
</section>


<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0a0a] to-[#111111] relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
        <Sparkles className="h-4 w-4 text-amber-400 mr-2" />
        <span className="text-amber-400 text-sm font-medium">Exclusive Features</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        What Makes
        <span className="gold-gradient block">CreatorVerse Different</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-4xl mx-auto">
        Built for modern brands — we blend real creators, content strategy, and trend-based execution to help you grow online.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 hover:to-white/5 transition-all duration-500 border border-white/10 hover:border-amber-400/20 shadow-lg hover:shadow-amber-400/10 backdrop-blur-sm">
        <img
          src="https://images.pexels.com/photos/3270230/pexels-photo-3270230.jpeg?_gl=1*16qbcn3*_ga*MTI3MDcyNjM0My4xNzUxODgzNDE4*_ga_8JE65Q40S6*czE3NTE5MTk4MTMkbzMkZzEkdDE3NTE5MTk5MjUkajgkbDAkaDA."
          alt="Verified Creators"
          className="h-48 w-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-3">Verified Creators</h3>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            Work with creators who are trusted, reliable, and consistent — not just viral once. Every face is verified by us.
          </p>
          <div className="flex items-center text-amber-400 font-medium text-sm">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>Real Faces, Real Impact</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group relative overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition duration-300 border border-white/10 hover:border-amber-400/20 shadow-lg hover:shadow-amber-400/10">
        <img
          src="https://images.pexels.com/photos/51159/letter-handwriting-family-letters-written-51159.jpeg?_gl=1*1yfihvk*_ga*MTI3MDcyNjM0My4xNzUxODgzNDE4*_ga_8JE65Q40S6*czE3NTE5MTk4MTMkbzMkZzEkdDE3NTE5MjAwMDkkajMxJGwwJGgw"
          alt="Script to Post"
          className="h-48 w-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-3">Script-to-Post Creation</h3>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            Don’t worry about ideas — we handle everything. From creative scripting to final reel delivery in your brand voice.
          </p>
          <div className="flex items-center text-amber-400 font-medium text-sm">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>Fully Done-for-You</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group relative overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition duration-300 border border-white/10 hover:border-amber-400/20 shadow-lg hover:shadow-amber-400/10">
        <img
          src="https://images.pexels.com/photos/32858589/pexels-photo-32858589.jpeg?_gl=1*1vfqx7c*_ga*MTI3MDcyNjM0My4xNzUxODgzNDE4*_ga_8JE65Q40S6*czE3NTE5MTk4MTMkbzMkZzEkdDE3NTE5MjAxMDAkajQkbDAkaDA."
          alt="Trend-Focused Creators"
          className="h-48 w-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-3">Trend-Focused Creators</h3>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            We match your brand with creators who are early on trends — ensuring you stay relevant, fresh, and top of mind.
          </p>
          <div className="flex items-center text-amber-400 font-medium text-sm">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span>Ride the Algorithm</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Demo Videos Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <Play className="h-4 w-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-medium">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Campaigns That
              <span className="gold-gradient block">Actually Performed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real brands. Real creators. Real growth. These campaigns made waves across reels, shorts, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {demoVideos.map((video, index) => (
            <VideoDemo
              key={index}
              src={video.src}
              title={video.title}
              coverImage={video.coverImage}
              isPlayingGlobal={activeIndex === index}
              onPlayRequest={() => setActiveIndex(prev => (prev === index ? null : index))}
            />
          ))}
          </div>
        </div>
      </section>

      



      {/* Services Preview */}
{/* Services Preview */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
        <Zap className="h-4 w-4 text-amber-400 mr-2" />
        <span className="text-amber-400 text-sm font-medium">Our Services</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Everything You Need
        <span className="gold-gradient block">To Grow Online</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-4xl mx-auto">
        From real creators to performance insights — our end-to-end services are built to scale your brand fast.
      </p>
    </div>

    {/* Top 3 Services Only */}
    <div className="grid md:grid-cols-3 gap-10">
      {/* 1. Influencer Generated Content */}
      <Card className="group bg-gradient-to-br from-gray-900/50 to-black/50 hover:shadow-2xl hover:border-amber-400/30 border-white/10 border transition-all duration-500 backdrop-blur-sm hover:scale-[1.02]">
        <CardContent className="p-10">
          <h3 className="text-2xl font-bold text-white mb-4">Influencer Generated Content</h3>
          <p className="text-gray-300 mb-6">
            Authentic creator content that drives reach and trust.
          </p>
          <ul className="space-y-2 text-gray-300 mb-4 text-sm">
            <li>• Strategic Storytelling</li>
            <li>• Impactful Engagement</li>
            <li>• Product Integration</li>
            <li>• Social Media Boost</li>
          </ul>
          <p className="text-xs text-gray-400 mb-4">Perfect for: Fashion, Beauty, Food, Fitness</p>
          <Link to="/contact?service=Influencer Generated Content">
            <Button className="w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black font-semibold hover:scale-105 transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* 2. UGC Production */}
      <Card className="group bg-gradient-to-br from-gray-900 to-black hover:shadow-2xl hover:border-amber-400/30 border-white/10 border transition-all duration-500">
        <CardContent className="p-10">
          <h3 className="text-2xl font-bold text-white mb-4">User Generated Content</h3>
          <p className="text-gray-300 mb-6">
            Real stories from real users to build real trust.
          </p>
          <ul className="space-y-2 text-gray-300 mb-4 text-sm">
            <li>• Community Storytelling</li>
            <li>• Relatable Content</li>
            <li>• Format Flexibility</li>
            <li>• Platform Optimization</li>
          </ul>
          <p className="text-xs text-gray-400 mb-4">Perfect for: Travel, Decor, Tech, Pets</p>
          <Link to="/contact?service=User Generated Content">
            <Button className="w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black font-semibold hover:scale-105 transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* 3. Viral Content Production */}
      <Card className="group bg-gradient-to-br from-gray-900 to-black hover:shadow-2xl hover:border-amber-400/30 border-white/10 border transition-all duration-500">
        <CardContent className="p-10">
          <h3 className="text-2xl font-bold text-white mb-4">Viral Content Production</h3>
          <p className="text-gray-300 mb-6">
            Data-backed, trend-powered content that delivers.
          </p>
          <ul className="space-y-2 text-gray-300 mb-4 text-sm">
            <li>• Real-Time Campaign Monitoring</li>
            <li>• ROI Tracking</li>
            <li>• Audience Insights</li>
            <li>• Competitive Analysis</li>
          </ul>
          <p className="text-xs text-gray-400 mb-4">Perfect for: Growth Teams, Agencies</p>
          <Link to="/contact?service=Viral Content Production">
            <Button className="w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black font-semibold hover:scale-105 transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>

    {/* View All Services Button */}
    <div className="mt-16 text-center">
      <Link to="/services">
        <Button
          size="lg"
          className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-400/20"
        >
          View All Services
          <ArrowRight className="ml-3 h-5 w-5" />
        </Button>
      </Link>
    </div>
  </div>
</section>





      {/* Testimonials */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
        <Star className="h-4 w-4 text-amber-400 mr-2" />
        <span className="text-amber-400 text-sm font-medium">Client Success</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        What Our Clients
        <span className="gold-gradient block">Say About Us</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        We partner with brands that are shaping culture. Here’s how CreatorVerse has helped them scale faster, smarter, and more creatively.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-10">
      {/* Testimonial 1 */}
      <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-all duration-500">
        <CardContent className="p-8">
          <div className="flex mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="text-gray-300 mb-6 italic leading-relaxed">
            "CreatorVerse played a huge role in our pre-launch success. Their content helped us reach over 2 million people organically and generated more than 25,000 app registrations. The videos were not just creative — they were truly magical and viral."
          </p>
          <div className="flex items-center">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQEi1GMEv5YKYw/profile-displayphoto-shrink_800_800/B56ZRrEjltHsAg-/0/1736963145520?e=1757548800&v=beta&t=vzi9Y-5XgTQ-EQ8SE421z80wRtGRvXG8YU3WvurpH5I" 
              alt="Client 1" 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="text-white font-semibold">Paras Yadav</div>
              <div className="text-amber-400 text-sm">CMO, Club Buddy</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testimonial 2 */}
      <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-all duration-500">
        <CardContent className="p-8">
          <div className="flex mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="text-gray-300 mb-6 italic leading-relaxed">
            "CreatorVerse didn’t just deliver content — they helped us generate high-quality leads through impactful UGC. The team is incredibly polite, professional, and easy to work with."
          </p>
          <div className="flex items-center">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5635AQHIwf-mcuOSsA/profile-framedphoto-shrink_400_400/B56ZfbalyBGQAg-/0/1751732870629?e=1752616800&v=beta&t=fosOOn62A_KavfkIqCaloOT6nsJDEwR05HCv7jr8Yig" 
              alt="Client 2" 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="text-white font-semibold">Pushpendra Kumar</div>
              <div className="text-amber-400 text-sm">CEO, NexDhara</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testimonial 3 */}
      <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-all duration-500">
        <CardContent className="p-8">
          <div className="flex mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="text-gray-300 mb-6 italic leading-relaxed">
            "I truly appreciate the work I’ve done with CreatorVerse. They’re not only excellent at what they do, but also far more affordable than other agencies."
          </p>
          <div className="flex items-center">
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
              alt="Client 3" 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="text-white font-semibold">Aman Singh</div>
              <div className="text-amber-400 text-sm">Founder, FMS</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-400/10 to-yellow-500/10"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-amber-400/10 border border-amber-400/20 mb-8">
            <Crown className="h-5 w-5 text-amber-400 mr-2" />
            <span className="text-amber-400 font-medium">Ready to Dominate?</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Brand Into
            <span className="gold-gradient block">An Industry Legend</span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the ranks of companies and luxury brands who trust CreatorVerse 
            to amplify their message and drive unprecedented growth through premium creator partnerships.
          </p>
          
<div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
  {/* Start Your Campaign Button */}
  <Button asChild size="lg" className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-size-200 hover:bg-pos-100 text-black font-bold px-12 py-6 rounded-2xl shadow-2xl hover:shadow-amber-400/25 transition-all duration-500 text-lg group hover:scale-105 relative overflow-hidden">
    <Link to="/contact">
      Start Your Campaign
      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
    </Link>
  </Button>

  {/* WhatsApp Button */}
  <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black px-12 py-6 rounded-2xl text-lg transition-all duration-300">
    <a
      href="https://wa.me/919219135156"
      target="_blank"
      rel="noopener noreferrer"
    >
      Schedule Strategy Call
    </a>
  </Button>
</div>

          
          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
