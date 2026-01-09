import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  Stethoscope, 
  Baby, 
  Syringe, 
  Activity,
  ArrowRight,
  Phone
} from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Comprehensive Care",
      description: "Full range of medical services for all ages"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Professional healthcare services"
    },
    {
      icon: Stethoscope,
      title: "Modern Facilities",
      description: "State-of-the-art medical equipment"
    },
    {
      icon: Activity,
      title: "Affordable Pricing",
      description: "Quality healthcare at accessible rates"
    }
  ];

  const services = [
    { icon: Baby, name: "Maternal & Child Health", color: "text-primary" },
    { icon: Syringe, name: "IV Therapy & Drips", color: "text-secondary" },
    { icon: Stethoscope, name: "General Consultations", color: "text-accent" },
    { icon: Heart, name: "Chronic Disease Care", color: "text-primary" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen sm:min-h-[95vh] lg:min-h-[100vh] flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ backgroundImage: `url(${heroImage})`, transform: 'translateZ(0)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/85 to-secondary/80" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 z-10 w-full">
          <div className="grid grid-cols-1 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
                Quality & Affordable
                <span className="block text-accent drop-shadow-lg">Medical Care</span>
              </h1>
              {/* Trust Badge - Registration Numbers */}
              <div className="mb-3 sm:mb-4 animate-fade-in" style={{ animationDelay: '50ms' }}>
                <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-md">
                  <span className="text-white/90 text-[9px] sm:text-[10px] font-medium leading-tight">
                    ✓ Licensed: PR 1185918 | REG 2024/457886/07 | PR 1246100
                  </span>
                </div>
              </div>
              <div className="mb-3 sm:mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-white text-sm sm:text-base font-semibold shadow-lg">
                  20+ Years Experience
                </span>
              </div>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/95 mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 leading-relaxed px-2 sm:px-0">
                Your trusted healthcare partner in Kempton Park. Comprehensive medical services for the whole family.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="hero" className="text-sm sm:text-base lg:text-lg h-11 sm:h-12 lg:h-14 shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto" asChild>
                  <a href="https://wa.me/27635899884" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Book Appointment
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary text-sm sm:text-base lg:text-lg h-11 sm:h-12 lg:h-14 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" asChild>
                  <Link to="/services">
                    View Services
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center shadow-lg">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Trust & Qualifications Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="group relative overflow-hidden border-0 shadow-lg bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative py-6 sm:py-8 px-4 sm:px-6">
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                  Professional Qualifications & Credentials
                </h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base text-muted-foreground">
                <span className="font-semibold text-foreground">Registered Nurse</span>
                <span className="text-primary">|</span>
                <span className="font-semibold text-foreground">Midwife</span>
                <span className="text-primary">|</span>
                <span className="font-semibold text-foreground">Nurse Clinician</span>
                <span className="text-primary">|</span>
                <span className="font-semibold text-foreground">Infection Prevention and Control Practitioner</span>
                <span className="text-primary">|</span>
                <span className="font-semibold text-foreground">NIMART Trained</span>
                <span className="text-primary">|</span>
                <span className="font-semibold text-foreground">Diabetes Educator</span>
                <span className="text-primary">|</span>
                <span className="font-semibold text-foreground">Peer Educator</span>
                <span className="text-primary">|</span>
                <span className="font-semibold text-foreground">Wellness Promoter</span>
                <span className="text-primary">|</span>
                <span className="font-semibold text-foreground">Dispensing Licence</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Why Choose Us</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Excellence in healthcare delivered with compassion
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500" />
                
                <CardContent className="relative pt-6 pb-6 sm:pt-8 sm:pb-8 px-4 sm:px-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary via-primary to-secondary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                  
                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Our Services</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive healthcare services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-gradient-to-br from-card to-card/95 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center space-x-4 sm:space-x-5">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 ${service.color} bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors block">{service.name}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </div>
                  
                  {/* Hover gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="gradient" className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 animate-fade-in drop-shadow-lg">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: '150ms' }}>
            Book your appointment today and experience quality healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Button size="lg" variant="hero" className="text-base sm:text-lg h-12 sm:h-14 shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
              <a href="tel:+27635899884">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                +27 63 589 9884
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
