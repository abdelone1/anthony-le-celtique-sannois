const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-hero text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-serif mb-2">Le Celtique</h3>
            <p className="text-primary-foreground/80">
              Tabac • Presse • Loto — Sannois
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <svg 
                viewBox="0 0 100 100" 
                className="w-6 h-6"
                fill="none"
              >
                <path 
                  d="M50 10 L90 50 L50 90 L10 50 Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} Le Celtique — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
