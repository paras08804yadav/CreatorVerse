import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Mail, Crown, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion"; // Added for animations

const Footer = () => {
  // Smooth scroll to top on route change
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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
              The most exclusive creator marketing agency. We connect brands 
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
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/thecreatorverse.official/" 
                className="w-12 h-12 bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/30 rounded-xl flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/company/creatorverse/" 
                className="w-12 h-12 bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/30 rounded-xl flex items-center justify-center transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com/creatorverse" 
                className="w-12 h-12 bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/30 rounded-xl flex items-center justify-center transition-all duration-300 group"
              >
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight">
              Company
            </h3>
            <ul className="space-y-4">
              {[
                { to: "/about", text: "About CreatorVerse" },
                { to: "/services", text: "Services" },
                { to: "/blog", text: "Blog" },
                { to: "/contact", text: "Get Started" }
              ].map((item) => (
                <motion.li 
                  key={item.to}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to={item.to} 
                    onClick={handleClick}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                  >
                    {item.text}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight">
              Services
            </h3>
            <ul className="space-y-4">
              {[
                "Influencer Generated Content",
                "UGC Production",
                "Viral Content Production",
                "Content Strategy",
                "Reel Script Writing",
                "Product Shoot"
              ].map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    to="/services" 
                    onClick={handleClick}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 block"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-12 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex space-x-6">
              <div className="flex flex-col space-y-2">
                {[
                  { to: "/privacy-policy", text: "Privacy Policy" },
                  { to: "/terms-of-service", text: "Terms of Service" },
                  { to: "/cookie-policy", text: "Cookie Policy" }
                ].map((item) => (
                  <motion.div
                    key={item.to}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      to={item.to} 
                      onClick={handleClick}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.text}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <motion.p 
            whileHover={{ scale: 1.02 }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} CreatorVerse. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;