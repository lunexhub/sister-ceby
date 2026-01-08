import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Baby, 
  Heart, 
  Syringe, 
  Stethoscope,
  Users,
  Shield,
  Activity,
  Droplets,
  Sparkles,
  TestTube,
  Pill,
  FileCheck,
  Hand,
  Zap,
  Target,
  Waves,
  Flower2
} from "lucide-react";
import woodTherapyImage from "@/assets/WhatsApp Image 2026-01-06 at 17.25.59.jpeg";

// Static data - moved outside component to prevent recreation on each render
const ivTherapy = [
  {
    name: "General Hydration Drip",
    description: "This drip contains no vitamin, but a range of electrolytes designed to rehydrate and restore your fluid reserves.",
    ingredients: "Ringer's Lactate (Sodium Chloride, Sodium Lactate, Potassium Chloride and Calcium Chloride)"
  },
  {
    name: "Immune Booster Drip",
    description: "This high dose vitamin C drip will also help reduce inflammation and boost energy levels.",
    ingredients: "High dose Vitamin C in Normal Saline or Ringers Lactate"
  },
  {
    name: "Jet Fuel Drip",
    description: "This powerhouse mix will boost your energy, mood and immune system, all while detoxing and rehydrating your body from within. Also perfect for hangovers.",
    ingredients: "Thiamine (Vitamin B1), Vitamin B12, Vitamin B complex, Magnesium Sulphate (MgSo4) and Vitamin C in Ringers Lactate"
  },
  {
    name: "Detox Drip",
    description: "This drip helps fight infections, relieve stress, supports weight loss and improves general wellbeing.",
    ingredients: "Glutathione and Vitamin C in Ringers Lactate or Normal Saline"
  },
  {
    name: "Skin Glow Drip With Glutathione",
    description: "Reduces marked pigmentation, fine lines and wrinkles and gives you a healthy, youthful glow.",
    ingredients: "High dose Glutathione, Vitamin C and Vitamin B complex in Normal Saline or Ringers Lactate"
  },
  {
    name: "Libido Booster",
    description: "Assists men by increasing sexual drive and desire. Enhances fertility, energy levels, and sexual health through improved blood flow and hormone regulation.",
    ingredients: "L-carnitine (promotes sperm motility and maturation), Vitamin B12 (supports fertility and energy), Tri-amino acids (increases blood flow for sexual health), Super BCO (double boost of B complex vitamins for energy and hormone regulation)"
  }
];

const wellnessServices = [
  { 
    category: "Massage Therapy", 
    icon: Hand,
    services: [
      "Full body massage",
      "Back massage",
      "Head and shoulder massage",
      "Foot and calf massage"
    ]
  },
  { 
    category: "Facials", 
    icon: Sparkles,
    services: [
      {
        name: "Deep cleansing glow",
        description: "Includes cleansing, exfoliation, extraction, and moisturizing"
      }
    ]
  }
];

const aestheticTreatments = [
  { 
    category: "Cavitation - Cellulite & Weight Loss", 
    icon: Zap,
    services: [
      "Cavitation single session",
      "X4 Cavitation sessions",
      "X8 Cavitation sessions",
      "X4 Cavitation & Lipo laser",
      "X6 Cavitation & 2 Radio frequency skin tightening",
      "Follow up session after 8th is Free"
    ]
  },
  { 
    category: "Lypolysis Slimming Injections", 
    icon: Syringe,
    services: [
      "X10 Injections",
      "X30 Injections",
      "X40 Injections",
      "X50 Injections"
    ]
  },
  { 
    category: "Lipo Laser Treatment", 
    icon: Target,
    services: [
      "X1 Session",
      "X10 Sessions"
    ]
  },
  { 
    category: "Radio Frequency Skin Tightening Treatment", 
    icon: Waves,
    services: [
      "Single Session per area",
      "X8 Sessions"
    ]
  }
];

const generalServicesIcons = [Stethoscope, Baby, Users, Flower2, Heart, Shield, FileCheck, TestTube, Activity];

const generalServices = [
    { category: "Primary Care", services: [
      "Consultation & Medication",
      "Pensioners Special",
      "Doctor Appointment",
      "Nurse Led Consultation"
    ]},
    { category: "Maternal & Child Health", services: [
      "Obstetrics / Gynecology Care",
      "Antenatal Care (First Visit)",
      "Antenatal Care (Follow-Up)",
      "Postnatal Visit",
      "Baby Wellness + Vit-A + Monitoring",
      "Baby Immunizations",
      "Children's Clinic"
    ]},
    { category: "Men's Health", services: [
      "Men's Health",
      "Male Medical Circumcisions"
    ]},
    { category: "Women's Health", services: [
      "Family Planning / Contraception",
      "Nur-Isterate Injection",
      "Depo Injection",
      "Emergency Contraceptive",
      "Pregnancy Test",
      "Choice Termination of Pregnancy"
    ]},
    { category: "Chronic & Acute Care", services: [
      "Chronic Diseases Care",
      "Acute Diseases Care",
      "STI Treatment",
      "HIV Clinic",
      "HIV Testing & Counseling",
      "Medical Weight Management"
    ]},
    { category: "Preventive Care", services: [
      "General Health Screening",
      "PDP Wellness Assessments",
      "Immunizations / Vaccinations"
    ]},
    { category: "Procedures & Certificates", services: [
      "Minor Surgical Procedures",
      "Home Affairs Medical Certificate",
      "Medical Certificates",
      "PDP / Home Affairs Medicals"
    ]},
    { category: "Laboratory & Diagnostics", services: [
      "General Abdominal / Obstetrics and Gynecology Ultrasound (sonar)",
      "Cholesterol / Uric Acid / Hb / Sugar / HIV / Syphilis and Rhesus Tests Available"
    ]},
    { category: "Wound Care", services: [
      "Expert Dressing & Care",
      "Follow-Up Consultations",
      "Personalized Review"
    ]}
  ];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-secondary/80">
        <div className="relative container mx-auto px-4 sm:px-6 z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg animate-fade-in">
            Our Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: '150ms' }}>
            Comprehensive healthcare solutions for every stage of life
          </p>
        </div>
      </section>

      {/* IV Therapy Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="group relative overflow-hidden border-0 shadow-2xl animate-fade-in bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative bg-gradient-to-r from-primary/10 via-primary/8 to-secondary/10 pb-4 sm:pb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary via-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <Droplets className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl">IV Therapy Services</CardTitle>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">Specialized intravenous treatments</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative pt-6 sm:pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {ivTherapy.map((service, index) => (
                  <Card
                    key={index}
                    className="group/item relative overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex items-start space-x-3 sm:space-x-4 mb-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover/item:shadow-md group-hover/item:scale-110 transition-all duration-300">
                          <Syringe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover/item:text-primary transition-colors flex-1">{service.name}</h3>
                      </div>
                      {service.description && (
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2 leading-relaxed">{service.description}</p>
                      )}
                      {service.ingredients && (
                        <div className="mt-3 pt-3 border-t border-border/50">
                          <p className="text-xs font-semibold text-foreground mb-1">Ingredients:</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{service.ingredients}</p>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-gradient-to-r from-secondary/10 via-secondary/8 to-accent/10 rounded-xl border border-secondary/20 shadow-md">
                <p className="text-xs sm:text-sm text-muted-foreground flex items-center">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-secondary flex-shrink-0" />
                  <span>Led by Registered Professional Nurse (PR No: 1246100)</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Wellness & Spa Services Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Wellness & Spa Services</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-4">
              Relaxation and rejuvenation services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {wellnessServices.map((category, catIndex) => {
              const IconComponent = category.icon;
              
              return (
                <Card 
                  key={catIndex} 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm"
                  style={{ animationDelay: `${catIndex * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-accent/0 group-hover:from-secondary/5 group-hover:to-accent/5 transition-all duration-500" />
                  <CardHeader className="relative pb-4 sm:pb-6">
                    <CardTitle className="flex items-center space-x-2 sm:space-x-3 text-lg sm:text-xl md:text-2xl">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                      </div>
                      <span className="group-hover:text-secondary transition-colors">{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-2 sm:space-y-3">
                      {category.services.map((service, index) => (
                        <li key={index} className="flex flex-col space-y-1 text-sm sm:text-base group/item">
                          {typeof service === 'string' ? (
                            <>
                              <div className="flex items-start space-x-2 sm:space-x-3">
                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-secondary to-accent rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                                <span className="text-muted-foreground group-hover/item:text-foreground transition-colors flex-1">{service}</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-start space-x-2 sm:space-x-3">
                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-secondary to-accent rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                                <div className="flex-1">
                                  <span className="text-muted-foreground group-hover/item:text-foreground transition-colors font-semibold">{service.name}</span>
                                  <p className="text-xs sm:text-sm text-muted-foreground/80 mt-1 italic">{service.description}</p>
                                </div>
                              </div>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wood Therapy Massage Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="group relative overflow-hidden border-0 shadow-2xl animate-fade-in bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 order-2 lg:order-1 overflow-hidden">
                  <img 
                    src={woodTherapyImage} 
                    alt="Wood Therapy Massage Tools"
                    className="w-full h-full object-contain p-4 sm:p-6 lg:p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Services List Section */}
                <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm flex flex-col justify-center order-1 lg:order-2">
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      Wood Therapy Massage
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6">
                      Specialized therapeutic massage using wooden tools for contouring, detoxification, and body sculpting
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-foreground">Our services include:</h4>
                    <ul className="space-y-3 sm:space-y-4">
                      <li className="flex items-start space-x-3 sm:space-x-4 group/item">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-primary to-secondary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                        <div className="flex-1 min-w-0">
                          <span className="text-sm sm:text-base font-semibold text-foreground group-hover/item:text-primary transition-colors">Lymphatic Detox</span>
                          <span className="text-xs sm:text-sm text-muted-foreground block mt-1">75 minutes</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3 sm:space-x-4 group/item">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-primary to-secondary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                        <div className="flex-1 min-w-0">
                          <span className="text-sm sm:text-base font-semibold text-foreground group-hover/item:text-primary transition-colors">Cellulite Buster</span>
                          <span className="text-xs sm:text-sm text-muted-foreground block mt-1">60 minutes</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3 sm:space-x-4 group/item">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-primary to-secondary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                        <div className="flex-1 min-w-0">
                          <span className="text-sm sm:text-base font-semibold text-foreground group-hover/item:text-primary transition-colors">Sculpt and Slim</span>
                          <span className="text-xs sm:text-sm text-muted-foreground block mt-1">60 minutes</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3 sm:space-x-4 group/item">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-primary to-secondary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                        <div className="flex-1 min-w-0">
                          <span className="text-sm sm:text-base font-semibold text-foreground group-hover/item:text-primary transition-colors">Tummy Target</span>
                          <span className="text-xs sm:text-sm text-muted-foreground block mt-1">45 minutes</span>
                        </div>
                      </li>
                      <li className="flex items-start space-x-3 sm:space-x-4 group/item">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-primary to-secondary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                        <div className="flex-1 min-w-0">
                          <span className="text-sm sm:text-base font-semibold text-foreground group-hover/item:text-primary transition-colors">Sculpt and Detox Combo</span>
                          <span className="text-xs sm:text-sm text-muted-foreground block mt-1">135 minutes</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Aesthetic Treatments Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Aesthetic Treatments</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-4">
              Body contouring and weight loss solutions
            </p>
          </div>

          {/* Consultation Notice */}
          <Card className="mb-8 sm:mb-10 border-0 shadow-lg bg-gradient-to-br from-card via-card to-card/95 animate-fade-in backdrop-blur-sm">
            <CardContent className="relative p-5 sm:p-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-accent to-secondary rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Consultation must be conducted:</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Upper and lower tummy, Bra fat, back fat, inner or outer thighs, inner knee area, male breaststrokes, back of arms, low love handles, below bums.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {aestheticTreatments.map((category, catIndex) => {
              const IconComponent = category.icon;
              
              return (
                <Card 
                  key={catIndex} 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm"
                  style={{ animationDelay: `${catIndex * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-secondary/0 group-hover:from-accent/5 group-hover:to-secondary/5 transition-all duration-500" />
                  <CardHeader className="relative pb-4 sm:pb-6">
                    <CardTitle className="flex items-center space-x-2 sm:space-x-3 text-lg sm:text-xl md:text-2xl">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                      </div>
                      <span className="group-hover:text-accent transition-colors">{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-2 sm:space-y-3">
                      {category.services.map((service, index) => (
                        <li key={index} className="flex items-start space-x-2 sm:space-x-3 text-sm sm:text-base group/item">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-accent to-secondary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors flex-1">{service}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* General Services */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Complete Medical Services</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground px-4">
              From routine check-ups to specialized care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {generalServices.map((category, catIndex) => {
              const IconComponent = generalServicesIcons[catIndex] || Stethoscope;
              
              return (
              <Card 
                key={catIndex} 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm"
                style={{ animationDelay: `${catIndex * 100}ms` }}
              >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500" />
                  <CardHeader className="relative pb-4 sm:pb-6">
                    <CardTitle className="flex items-center space-x-2 sm:space-x-3 text-lg sm:text-xl md:text-2xl">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <span className="group-hover:text-primary transition-colors">{category.category}</span>
                  </CardTitle>
                </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-2 sm:space-y-3">
                    {category.services.map((service, index) => (
                        <li key={index} className="flex items-start space-x-2 sm:space-x-3 text-sm sm:text-base group/item">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-primary to-secondary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors flex-1">{service}</span>
                      </li>
                    ))}
                  </ul>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="group relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-secondary/10 animate-fade-in backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-secondary/0 group-hover:from-accent/5 group-hover:to-secondary/5 transition-all duration-500" />
              <CardContent className="relative pt-8 sm:pt-10 pb-6 sm:pb-8">
                <div className="text-center mb-6 sm:mb-8">
                  <Badge className="bg-gradient-to-r from-accent to-secondary text-white mb-4 sm:mb-6 text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-2.5 shadow-lg">
                    Special Offer
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Consultation Package</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Complete health assessment with medications</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                  <Card className="group/item relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm">
                    <CardContent className="p-5 sm:p-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md group-hover/item:shadow-lg group-hover/item:scale-110 transition-all duration-300">
                        <Pill className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                    </div>
                      <div className="text-xs sm:text-sm text-muted-foreground mb-3">Consultation with Medications</div>
                      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                        <Badge variant="outline" className="text-xs">Free BP</Badge>
                        <Badge variant="outline" className="text-xs">Free Urine Test</Badge>
                  </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </CardContent>
                  </Card>

                  <Card className="group/item relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm">
                    <CardContent className="p-5 sm:p-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md group-hover/item:shadow-lg group-hover/item:scale-110 transition-all duration-300">
                        <Users className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Pensioners Special</div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </CardContent>
                  </Card>

                  <Card className="group/item relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm">
                    <CardContent className="p-5 sm:p-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md group-hover/item:shadow-lg group-hover/item:scale-110 transition-all duration-300">
                        <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-secondary" />
                  </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Home Affairs Medical Certificate</div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-gradient-to-r from-card/80 to-card/60 rounded-xl text-center border border-accent/20 shadow-md">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    💚 House calls offered by arrangements
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
