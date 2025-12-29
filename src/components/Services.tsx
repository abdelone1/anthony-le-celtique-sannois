import { Cigarette, Newspaper, Ticket, Stamp, CreditCard, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Cigarette,
    title: "Tabac",
    description: "Large choix de cigarettes, tabac à rouler, cigares et accessoires",
  },
  {
    icon: Newspaper,
    title: "Presse",
    description: "Journaux quotidiens, magazines et revues spécialisées",
  },
  {
    icon: Ticket,
    title: "Jeux FDJ",
    description: "Loto, Euro Millions, jeux de grattage et paris sportifs",
  },
  {
    icon: Stamp,
    title: "Timbres",
    description: "Timbres postaux et fiscaux, envois recommandés",
  },
  {
    icon: CreditCard,
    title: "Recharges",
    description: "Recharges téléphoniques et cartes prépayées",
  },
  {
    icon: Gift,
    title: "Cadeaux",
    description: "Articles cadeaux, briquets, confiseries",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un large éventail de produits et services pour répondre à tous vos besoins quotidiens
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-card hover:shadow-card transition-all duration-300 border-border/50 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
