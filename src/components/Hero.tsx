import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Carotte icon */}
        <div className="mb-8 animate-float">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-full shadow-card">
            <svg 
              viewBox="0 0 100 100" 
              className="w-16 h-16"
              fill="none"
            >
              {/* Diamond/Carotte shape */}
              <path 
                d="M50 5 L95 50 L50 95 L5 50 Z" 
                fill="hsl(var(--primary-foreground))"
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in">
          Le Celtique
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2 font-serif italic animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Tabac • Presse • Loto
        </p>
        
        <p className="text-lg text-primary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Votre bureau de tabac de confiance à Sannois
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            variant="secondary" 
            size="lg" 
            className="gap-2 text-lg px-8 py-6 shadow-card hover:shadow-soft transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MapPin className="w-5 h-5" />
            Nous trouver
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="gap-2 text-lg px-8 py-6 shadow-card hover:shadow-soft transition-all duration-300"
            onClick={() => document.getElementById('horaires')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Clock className="w-5 h-5" />
            Horaires
          </Button>
        </div>
      </div>
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
