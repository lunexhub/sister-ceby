import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[60vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden py-8 sm:py-12 lg:py-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://res.cloudinary.com/dnnwvmh3n/image/upload/v1760143661/johannesburg-4322256_1280_neqyrj.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/85 to-secondary/80" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                Get in Touch
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto lg:mx-0 animate-fade-in px-2 sm:px-4 lg:px-0 mb-4 sm:mb-0" style={{ animationDelay: '150ms' }}>
                We're here to help. Reach out to us for appointments or inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <Card className="group relative overflow-hidden text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500" />
              <CardContent className="relative pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary via-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors">Call Us</h3>
                <a href="tel:+27635899884" className="text-sm sm:text-base text-primary hover:text-secondary font-semibold hover:underline block transition-colors">+27 63 589 9884</a>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm" style={{ animationDelay: '100ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-accent/0 group-hover:from-secondary/5 group-hover:to-accent/5 transition-all duration-500" />
              <CardContent className="relative pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary via-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-foreground group-hover:text-secondary transition-colors">Email Us</h3>
                <a href="mailto:uniquemedicalcentreza@gmail.com" className="text-xs sm:text-sm text-primary hover:text-secondary font-semibold hover:underline block break-all transition-colors">
                  uniquemedicalcentreza@gmail.com
                </a>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm" style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-500" />
              <CardContent className="relative pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-accent via-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-foreground group-hover:text-accent transition-colors">Visit Us</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  8 Monument Road<br />
                  Kempton Park
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm" style={{ animationDelay: '300ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500" />
              <CardContent className="relative pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary via-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors">Opening Hours</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Mon-Fri: 09:00-17:30<br />
                  Sat: 09:00-14:00
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>
          </div>

          {/* Operating Hours & Additional Info */}
          <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500" />
                <CardHeader className="relative">
                  <CardTitle className="flex items-center space-x-2 sm:space-x-3 text-lg sm:text-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <span className="group-hover:text-primary transition-colors">Operating Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-border">
                    <span className="font-semibold text-sm sm:text-base">Monday - Friday</span>
                    <span className="text-muted-foreground text-xs sm:text-sm">09:00 AM - 17:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-border">
                    <span className="font-semibold text-sm sm:text-base">Saturday</span>
                    <span className="text-muted-foreground text-xs sm:text-sm">09:00 AM - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3">
                    <span className="font-semibold text-sm sm:text-base">Sunday</span>
                    <span className="text-muted-foreground text-xs sm:text-sm">By appointment only</span>
                  </div>
                  <div className="mt-4 sm:mt-5 p-4 sm:p-5 bg-gradient-to-r from-accent/10 via-accent/8 to-secondary/10 rounded-xl border border-accent/20 shadow-md">
                    <p className="text-xs sm:text-sm font-semibold text-accent">
                      💚 House calls offered by arrangements
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="group relative overflow-hidden border-0 shadow-2xl animate-fade-in bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative p-0">
              <div className="aspect-video w-full bg-gradient-to-br from-primary/10 via-primary/8 to-secondary/10 flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">Find Us Here</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">8 Monument Road, Kempton Park</p>
                  <Button variant="gradient" className="h-11 sm:h-12 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=8+Monument+Road+Kempton+Park" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
