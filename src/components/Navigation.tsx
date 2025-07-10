
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside); // Add this
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('touchstart', handleClickOutside); // Add this
  };
}, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-20 w-14 object-contain py-0 my-0" />

            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight">
                Creator
                <span className="text-2xl font-bold text-amber-400 tracking-tight">
                Verse
              </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-all duration-300 relative group ${
                  isActive(link.href)
                    ? "text-amber-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-400 text-black font-semibold py-3 rounded-xl"
              >
                <a
                  href="https://wa.me/919219135156"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Campaign
                </a>
              </Button>
            </div>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden bg-black/98 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-amber-400 bg-amber-400/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
            <div className="px-4 pt-4">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-400 text-black font-semibold py-3 rounded-xl"
              >
                <a
                  href="https://wa.me/919219135156"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Campaign
                </a>
              </Button>
            </div>

              
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
