

const hours = [
  { day: "Lundi", hours: "7h00 - 20h00" },
  { day: "Mardi", hours: "7h00 - 20h00" },
  { day: "Mercredi", hours: "7h00 - 20h00" },
  { day: "Jeudi", hours: "7h00 - 20h00" },
  { day: "Vendredi", hours: "7h00 - 20h00" },
  { day: "Samedi", hours: "7h30 - 20h00" },
  { day: "Dimanche", hours: "8h00 - 13h00" },
];

const Hours = () => {
  const today = new Date().getDay();
  // Convert to French day index (Monday = 0)
  const frenchDayIndex = today === 0 ? 6 : today - 1;

  return (
    <section id="horaires" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Horaires d'ouverture
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous sommes ouverts 7 jours sur 7 pour vous servir
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-background rounded-2xl shadow-card overflow-hidden border border-border">
            {hours.map((item, index) => (
              <div 
                key={item.day}
                className={`flex justify-between items-center px-8 py-5 border-b border-border last:border-0 transition-colors duration-300 ${
                  index === frenchDayIndex 
                    ? "bg-primary/10 border-l-4 border-l-primary" 
                    : "hover:bg-muted/50"
                }`}
              >
                <span className={`font-medium ${index === frenchDayIndex ? "text-primary font-bold" : "text-foreground"}`}>
                  {item.day}
                  {index === frenchDayIndex && (
                    <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                      Aujourd'hui
                    </span>
                  )}
                </span>
                <span className={`${index === frenchDayIndex ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;
