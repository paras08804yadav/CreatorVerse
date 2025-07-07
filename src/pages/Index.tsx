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
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[780px]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
          poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
      </div>

        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative mt-20 pl-12 z-20">
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

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
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
      <div className="group relative overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition duration-300 border border-white/10 hover:border-amber-400/20 shadow-lg hover:shadow-amber-400/10">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
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
              />
            ))}
          </div>
        </div>
      </section>

      



      {/* Services Preview */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black to-gray-900">
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

    <div className="grid md:grid-cols-3 gap-10">
      {/* 1. Influencer Generated Content */}
      <Card className="group bg-gradient-to-br from-gray-900 to-black hover:shadow-2xl hover:border-amber-400/30 border-white/10 border transition-all duration-500">
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
          <div className="flex flex-wrap gap-4">
            <Link to="/get-started" className="text-amber-400 font-semibold hover:text-yellow-400">Get Started</Link>
            <Link to="/case-studies" className="text-gray-400 hover:text-white">View Case Studies</Link>
          </div>
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
          <div className="flex flex-wrap gap-4">
            <Link to="/get-started" className="text-amber-400 font-semibold hover:text-yellow-400">Get Started</Link>
            <Link to="/case-studies" className="text-gray-400 hover:text-white">View Case Studies</Link>
          </div>
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
          <div className="flex flex-wrap gap-4">
            <Link to="/get-started" className="text-amber-400 font-semibold hover:text-yellow-400">Get Started</Link>
            <Link to="/case-studies" className="text-gray-400 hover:text-white">View Case Studies</Link>
          </div>
        </CardContent>
      </Card>

      {/* 4. Content Strategy */}
      <Card className="group bg-gradient-to-br from-gray-900 to-black hover:shadow-2xl hover:border-amber-400/30 border-white/10 border transition-all duration-500">
        <CardContent className="p-10">
          <h3 className="text-2xl font-bold text-white mb-4">Content Strategy</h3>
          <p className="text-gray-300 mb-6">
            Plan content that aligns with your audience and goals.
          </p>
          <ul className="space-y-2 text-gray-300 mb-4 text-sm">
            <li>• Audience Persona Development</li>
            <li>• Calendar Planning</li>
            <li>• Platform Optimization</li>
            <li>• Trend Forecasting</li>
          </ul>
          <p className="text-xs text-gray-400 mb-4">Perfect for: Startups, D2C, Corporates</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/get-started" className="text-amber-400 font-semibold hover:text-yellow-400">Get Started</Link>
            <Link to="/case-studies" className="text-gray-400 hover:text-white">View Case Studies</Link>
          </div>
        </CardContent>
      </Card>

      {/* 5. Reel Script Writing */}
      <Card className="group bg-gradient-to-br from-gray-900 to-black hover:shadow-2xl hover:border-amber-400/30 border-white/10 border transition-all duration-500">
        <CardContent className="p-10">
          <h3 className="text-2xl font-bold text-white mb-4">Reel Script Writing</h3>
          <p className="text-gray-300 mb-6">
            Hook-focused, niche-specific scripts that convert scrolls to sales.
          </p>
          <ul className="space-y-2 text-gray-300 mb-4 text-sm">
            <li>• Research-Based Hooks</li>
            <li>• CTA Integration</li>
            <li>• Viral Style Formatting</li>
            <li>• Niche Personalization</li>
          </ul>
          <p className="text-xs text-gray-400 mb-4">Perfect for: Creators, D2C Brands, Agencies</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/get-started" className="text-amber-400 font-semibold hover:text-yellow-400">Get Started</Link>
            <Link to="/case-studies" className="text-gray-400 hover:text-white">View Case Studies</Link>
          </div>
        </CardContent>
      </Card>

      {/* 6. Product Shoot (Add-on) */}
      <Card className="group bg-gradient-to-br from-gray-900 to-black hover:shadow-2xl hover:border-amber-400/30 border-white/10 border transition-all duration-500">
        <CardContent className="p-10">
          <h3 className="text-2xl font-bold text-white mb-4">Product Shoot (Add-on)</h3>
          <p className="text-gray-300 mb-6">
            Sharp, studio-grade visuals that elevate your brand content.
          </p>
          <ul className="space-y-2 text-gray-300 mb-4 text-sm">
            <li>• Lighting & Studio Setup</li>
            <li>• Multi-Angle Shots</li>
            <li>• Styled for Reels/UGC</li>
            <li>• Quick Delivery</li>
          </ul>
          <p className="text-xs text-gray-400 mb-4">Perfect for: Product Brands, Instagram Shops</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/get-started" className="text-amber-400 font-semibold hover:text-yellow-400">Get Started</Link>
            <Link to="/case-studies" className="text-gray-400 hover:text-white">View Case Studies</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>




      {/* Testimonials */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
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
            "Our brand visibility skyrocketed with CreatorVerse. Their creator collaborations were not only beautifully executed but deeply aligned with our audience."
          </p>
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
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
            "CreatorVerse became more than a vendor—they’re a strategic ally. They get creators, they get data, and they understand what performance really means."
          </p>
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face" 
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
            "We've run over 20 campaigns together and CreatorVerse continues to outperform traditional agencies. Their UGC workflows are a game changer."
          </p>
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
              alt="Client 3" 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="text-white font-semibold">Indrajit Singh</div>
              <div className="text-amber-400 text-sm">Founder, RegisCorp</div>
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
          
          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
