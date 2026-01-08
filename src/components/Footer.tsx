import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center">
                  <div className="text-primary font-bold">+</div>
                </div>
              </div>
              <span className="font-bold text-lg">Unique Medical Centre</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Quality and Affordable Medical Care for you and your family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>+27 63 589 9884</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground break-all">
                  uniquemedicalcentreza@gmail.com
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  8 Monument Road, Kempton Park
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Operating Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium">Mon - Fri:</div>
                  <div>09:00 AM - 17:30 PM</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium">Saturday:</div>
                  <div>09:00 AM - 15:00 PM</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium">Sunday:</div>
                  <div>By appointment only</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Unique Medical Centre. All rights reserved.</p>
          <p className="mt-2">
            PR: 1185918 | REG NO: 2024/457886/07 | PR No: 1246100
          </p>
          <p className="mt-3">
            Built by{" "}
            <a 
              href="https://www.lunexweb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium transition-colors"
            >
              Lunexweb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
