
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Mail, Crown, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Logo" className="h-25 w-20 object-contain" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">CreatorVerse</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              The Kanpur's most exclusive creator marketing agency. We connect brands 
              with creators to produce campaigns that redefine industry standards and 
              deliver unprecedented ROI.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 text-amber-400 mr-3" />
                <span>+91 9219135156</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 text-amber-400 mr-3" />
                <span>support@creatorverse.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 text-amber-400 mr-3" />
                <span>Swaroup Nagar, Kanpur Nagar, Uttar Pradesh</span>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/thecreatorverse.official/" 
                className="w-12 h-12 bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/30 rounded-xl flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/thecreatorverse.official/" 
                className="w-12 h-12 bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/30 rounded-xl flex items-center justify-center transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/thecreatorverse.official/" 
                className="w-12 h-12 bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/30 rounded-xl flex items-center justify-center transition-all duration-300 group"
              >
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                >
                  About CreatorVerse
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                >
                  Services
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                >
                  Blog
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                >
                  Get Started
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight">
              Services
            </h3>
<ul className="space-y-4">
  <li>
    <Link to="/services" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
      Influencer Generated Content
    </Link>
  </li>
  <li>
    <Link to="/services" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
      UGC Production
    </Link>
  </li>
  <li>
    <Link to="/services" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
      Viral Content Production
    </Link>
  </li>
  <li>
    <Link to="/services" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
      Content Strategy
    </Link>
  </li>
  <li>
    <Link to="/services" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
      Reel Script Writing
    </Link>
  </li>
  <li>
    <Link to="/services" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
      Product Shoot
    </Link>
  </li>
</ul>

          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-12 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex space-x-6">
              <div className="flex flex-col space-y-2">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
