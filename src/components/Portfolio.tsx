import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import residentialGarden from "@/assets/residential-garden.jpg";
import commercialLandscaping from "@/assets/commercial-landscaping.jpg";
import landscapingWork from "@/assets/landscaping-work.jpg";
import heroImage from "@/assets/hero-garden.jpg";

const portfolioItems = [
  {
    image: residentialGarden,
    title: "Transformação de Jardim Residencial",
    description: "Reforma completa do quintal com canteiros de flores e área de estar"
  },
  {
    image: commercialLandscaping,
    title: "Paisagismo Comercial",
    description: "Design profissional de paisagismo para complexo de escritórios"
  },
  {
    image: landscapingWork,
    title: "Manutenção de Jardins",
    description: "Serviços regulares de manutenção e cuidados sazonais"
  },
  {
    image: heroImage,
    title: "Design de Jardim de Luxo",
    description: "Paisagismo premium com fontes e plantas maduras"
  }
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Trabalhos
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja alguns de nossos projetos recentes e descubra como transformamos espaços externos em jardins belos e funcionais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="nature" size="lg" className="px-8">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;