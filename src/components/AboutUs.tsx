import { Card, CardContent } from "./ui/card";
import landscapingWork from "@/assets/landscaping-work.jpg";

const AboutUs = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Sobre Nós
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald to-accent rounded-full"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pequena empresa local especializada em jardinagem e paisagismo, oferecendo atendimento personalizado e projetos executados com cuidado e profissionalismo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com anos de experiência transformando espaços externos, temos orgulho de criar jardins bonitos e sustentáveis que trazem alegria e agregam valor à sua propriedade. Nossa equipe entende que cada jardim é único, e trabalhamos em estreita colaboração com nossos clientes para dar vida à sua visão.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald">50+</div>
                <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald">5+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <img 
                  src={landscapingWork} 
                  alt="Trabalho profissional de paisagismo em andamento"
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald rounded-full opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;