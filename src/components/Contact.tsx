import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nous Trouver
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Situé au cœur de Sannois, Le Celtique vous accueille chaleureusement
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10484.847459577447!2d2.2541!3d48.9683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6677d5c0a3e1d%3A0x40b82c3688c5830!2s95110%20Sannois!5e0!3m2!1sfr!2sfr!4v1703000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Le Celtique Sannois"
            />
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <Card className="bg-card shadow-soft border-border/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-serif">Adresse</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Le Celtique<br />
                      Centre-ville<br />
                      95110 Sannois
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-soft border-border/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-serif">Téléphone</h3>
                    <a 
                      href="tel:+33139820000" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      01 39 82 00 00
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button 
              size="lg" 
              className="w-full py-6 text-lg shadow-card hover:shadow-soft transition-all duration-300"
              onClick={() => window.open('https://www.google.com/maps/dir//95110+Sannois', '_blank')}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Obtenir l'itinéraire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
