import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Le Celtique - Tabac Presse Loto à Sannois | Bureau de Tabac</title>
        <meta 
          name="description" 
          content="Le Celtique, votre bureau de tabac à Sannois. Tabac, presse, jeux FDJ, timbres et recharges. Ouvert 7j/7. Découvrez nos horaires et venez nous rendre visite." 
        />
        <meta name="keywords" content="tabac, Sannois, Le Celtique, presse, loto, FDJ, cigarettes, bureau de tabac, 95110" />
        <link rel="canonical" href="https://le-celtique-sannois.fr" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <Hours />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
