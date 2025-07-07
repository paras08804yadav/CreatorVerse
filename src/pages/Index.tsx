import { ArrowRight, Play, Users, TrendingUp, Star, Zap, Pause, Volume2, VolumeX, Award, CheckCircle, Globe, Target, Crown, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const VideoDemo = ({ src, title, coverImage }: { src: string, title: string, coverImage: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative group rounded-2xl overflow-hidden bg-gray-900 border border-white/10 hover:border-amber-400/30 transition-all duration-500 aspect-[9/16]">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={coverImage}
        muted={isMuted}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button
          onClick={togglePlay}
          className="bg-white/20 backdrop-blur-sm rounded-full p-3 mr-2 hover:bg-white/30 transition-all duration-300 border border-white/20"
        >
          {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
        </button>
        <button
          onClick={toggleMute}
          className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 border border-white/20"
        >
          {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
        </button>
      </div>
      
      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium border border-white/10">
        {title}
      </div>
    </div>
  );
};

const Index = () => {
  const demoVideos = [
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "Luxury Brand Campaign",
      coverImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title: "Premium UGC Content", 
      coverImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=600&fit=crop"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "Viral Social Campaign",
      coverImage: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=600&fit=crop"
    },
    {
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title: "Celebrity Collaboration",
      coverImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80"
            alt="Professional team collaboration"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90"></div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              
              <h1 className="text-5xl mt-4 md:text-7xl font-bold text-white mb-8 leading-tight">
                UGC & Influencer
                <span className="gold-gradient block mt-2">
                Marketing Power
                </span>
                <span className="text-white block">
                For Brands 
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                We don't just connect brands with creators—we orchestrate premium campaigns that 
                redefine industry standards. We specialize in viral-ready scripts, seamless content execution, and creator strategies that put your brand in the spotlight—authentic, engaging, and made to trend.

              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button size="lg" className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-400 text-black font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 group">
                  Connect Now
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl group transition-all duration-300">
                  <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Success Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <Sparkles className="h-4 w-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-medium">Exclusive Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Industry Leaders
              <span className="gold-gradient block">Choose CreatorVerse</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our premium platform combines cutting-edge technology with exclusive creator relationships 
              to deliver campaigns that exceed expectations and set new industry benchmarks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Crown className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Elite Creator Network</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Access to verified, premium creators with millions of engaged followers. Each creator 
                  is hand-selected and rigorously vetted for brand safety and authenticity.
                </p>
                <div className="flex items-center text-amber-400 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>25,000+ Verified Creators</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Matching</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our proprietary AI algorithm analyzes audience demographics, engagement patterns, 
                  and brand compatibility to ensure perfect creator-brand alignment.
                </p>
                <div className="flex items-center text-amber-400 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>97% Campaign Success Rate</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Global Reach</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Execute campaigns across 150+ countries with localized strategies. Our international 
                  network ensures cultural relevance and maximum impact in every market.
                </p>
                <div className="flex items-center text-amber-400 font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>150+ Countries Covered</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Videos Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <Play className="h-4 w-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-medium">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Campaigns That
              <span className="gold-gradient block">Broke Records</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Witness the power of premium creator marketing through our award-winning campaigns 
              that have generated billions in revenue and redefined industry standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {demoVideos.map((video, index) => (
              <VideoDemo
                key={index}
                src={video.src}
                title={video.title}
                coverImage={video.coverImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Stats */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Numbers That Speak
              <span className="gold-gradient block">Louder Than Words</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold gold-gradient mb-4 group-hover:scale-110 transition-transform">0K+</div>
              <div className="text-gray-300 text-lg font-medium">Premium Creators</div>
              <div className="text-sm text-gray-500 mt-2">Verified & Vetted</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold gold-gradient mb-4 group-hover:scale-110 transition-transform">0K+</div>
              <div className="text-gray-300 text-lg font-medium">Enterprise Clients</div>
              <div className="text-sm text-gray-500 mt-2">Fortune 500 Companies</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold gold-gradient mb-4 group-hover:scale-110 transition-transform">0B+</div>
              <div className="text-gray-300 text-lg font-medium">Content Impressions</div>
              <div className="text-sm text-gray-500 mt-2">Monthly Reach</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold gold-gradient mb-4 group-hover:scale-110 transition-transform">0%</div>
              <div className="text-gray-300 text-lg font-medium">Average ROI</div>
              <div className="text-sm text-gray-500 mt-2">Campaign Performance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <Zap className="h-4 w-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-medium">Premium Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Full-Service
              <span className="gold-gradient block">Creator Marketing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From strategic planning to campaign execution and performance optimization, 
              we handle every aspect of your creator marketing journey with unmatched expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-amber-400/30">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Elite Influencer Marketing</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Connect with A-list creators and mega-influencers who command millions of followers. 
                  Our exclusive relationships with top-tier talent ensure your brand reaches the most 
                  valuable audiences with authentic, high-impact content.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-3" />
                    Celebrity & Mega-Influencer Access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-3" />
                    Brand Safety Guarantee
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-3" />
                    360° Campaign Management
                  </li>
                </ul>
                <Link to="/services" className="text-amber-400 font-semibold hover:text-yellow-400 inline-flex items-center group transition-colors">
                  Explore Premium Influencers 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-amber-400/30">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Premium UGC Production</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Award-winning user-generated content that doesn't just engage—it converts. Our creative 
                  directors work with top creators to produce content that feels authentic while driving 
                  measurable business results.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-3" />
                    Creative Direction & Strategy
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-3" />
                    Multi-Platform Optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-3" />
                    Performance-Driven Content
                  </li>
                </ul>
                <Link to="/services" className="text-amber-400 font-semibold hover:text-yellow-400 inline-flex items-center group transition-colors">
                  View Content Portfolio 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-amber-400/30">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics & AI</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Cutting-edge analytics powered by machine learning that provide real-time insights 
                  and predictive modeling. Make data-driven decisions that maximize ROI and optimize 
                  every aspect of your creator marketing investment.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-3" />
                    Real-Time Performance Tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-3" />
                    Predictive ROI Modeling
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-3" />
                    Competitive Intelligence
                  </li>
                </ul>
                <Link to="/services" className="text-amber-400 font-semibold hover:text-yellow-400 inline-flex items-center group transition-colors">
                  See Analytics Demo 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <Star className="h-4 w-4 text-amber-400 mr-2" />
              <span className="text-amber-400 text-sm font-medium">Client Success</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              What Industry Leaders
              <span className="gold-gradient block">Say About Us</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "CreatorVerse transformed our marketing strategy completely. The quality of creators 
                  they connected us with and the results we achieved exceeded every expectation. 
                  Our brand engagement increased by 340% in just 6 months."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                    alt="CMO" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="text-white font-semibold">Paras Yadav</div>
                    <div className="text-amber-400 text-sm">CMO, Club Budddy</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "Working with CreatorVerse feels like having an extension of our internal team. 
                  Their strategic approach and attention to detail is unmatched. They've become 
                  our go-to partner for all creator marketing initiatives."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face" 
                    alt="CMO" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="text-white font-semibold">Pushpendra Kumar</div>
                    <div className="text-amber-400 text-sm">CEO, NexDhara</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-white/10 hover:border-amber-400/30 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "The ROI we've achieved through CreatorVerse campaigns is unprecedented. 
                  Their data-driven approach and premium creator network delivered results 
                  that traditional advertising never could. Simply exceptional."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                    alt="Marketing Director" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="text-white font-semibold">Indrajit</div>
                    <div className="text-amber-400 text-sm">CEO, RegisCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden">
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
            Join the ranks of Fortune 500 companies and luxury brands who trust CreatorVerse 
            to amplify their message and drive unprecedented growth through premium creator partnerships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-400 text-black font-bold px-12 py-6 rounded-2xl shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 text-lg group">
              Start Your Premium Campaign
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black px-12 py-6 rounded-2xl text-lg transition-all duration-300">
              Schedule Strategy Call
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-4">Trusted by 1,200+ Enterprise Clients</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center px-6 border border-white/10">
                <span className="font-bold text-amber-400 text-lg">FORTUNE 500</span>
              </div>
              <div className="h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center px-6 border border-white/10">
                <span className="font-bold text-amber-400 text-lg">LUXURY BRANDS</span>
              </div>
              <div className="h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center px-6 border border-white/10">
                <span className="font-bold text-amber-400 text-lg">UNICORN STARTUPS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
