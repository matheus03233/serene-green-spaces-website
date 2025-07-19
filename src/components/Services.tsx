import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Leaf, TreePine, Scissors, Flower } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Jardinagem Residencial e Comercial",
    description: "Soluções completas de jardinagem para casas e empresas, adaptadas às suas necessidades específicas e ambiente."
  },
  {
    icon: TreePine,
    title: "Projetos Personalizados de Paisagismo",
    description: "Design e implementação de paisagismo personalizado que reflete seu estilo e valoriza sua propriedade."
  },
  {
    icon: Scissors,
    title: "Manutenção de Jardins",
    description: "Cuidados regulares e manutenção para manter seu jardim saudável, bonito e próspero durante todas as estações."
  },
  {
    icon: Flower,
    title: "Plantio de Árvores e Flores",
    description: "Serviços de plantio profissional com seleção especializada de plantas que prosperarão em sua localização específica."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos serviços abrangentes de jardinagem e paisagismo para transformar seu espaço externo em algo extraordinário.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-sage/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald/10 to-accent/10 rounded-full flex items-center justify-center group-hover:from-emerald/20 group-hover:to-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-emerald" />
                </div>
                <CardTitle className="text-lg font-semibold text-primary group-hover:text-emerald transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
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