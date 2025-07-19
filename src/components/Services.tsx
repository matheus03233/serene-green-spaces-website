import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Leaf, TreePine, Scissors, Flower } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Residential and Commercial Gardening",
    description: "Complete gardening solutions for homes and businesses, tailored to your specific needs and environment."
  },
  {
    icon: TreePine,
    title: "Personalized Landscaping Projects",
    description: "Custom landscape design and implementation that reflects your style and enhances your property value."
  },
  {
    icon: Scissors,
    title: "Garden Maintenance",
    description: "Regular upkeep and care to keep your garden healthy, beautiful, and thriving throughout the seasons."
  },
  {
    icon: Flower,
    title: "Tree and Flower Planting",
    description: "Professional planting services with expert selection of plants that will flourish in your specific location."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive gardening and landscaping services to transform your outdoor space into something extraordinary.
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