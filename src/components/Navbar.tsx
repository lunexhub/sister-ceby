import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm will-change-transform">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                <div className="text-primary font-bold text-xl">+</div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground leading-tight">Unique Medical</span>
              <span className="text-xs text-muted-foreground">Quality & Affordable Care</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-semibold transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-[29px] left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
            <Button size="sm" variant="gradient" asChild>
              <a href="tel:+27635899884">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-lg hover:bg-muted transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in bg-background/98 backdrop-blur-md">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 min-h-[48px] flex items-center ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "text-foreground hover:bg-muted active:bg-muted/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button variant="gradient" className="w-full h-12 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <a href="tel:+27635899884">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
