import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado pela sua mensagem. Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-16 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar seu jardim? Entre em contato conosco para uma consulta e orçamento gratuitos.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Fale Conosco</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">Telefone</div>
                    <div className="text-muted-foreground">+55 (11) 99999-9999</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">E-mail</div>
                    <div className="text-muted-foreground">contato@empresajardinagem.com.br</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">Localização</div>
                    <div className="text-muted-foreground">Sua Cidade, Estado</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <Card className="bg-emerald/5 border-emerald/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-emerald" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-primary">Contato Rápido</div>
                    <div className="text-sm text-muted-foreground">Envie-nos uma mensagem diretamente pelo WhatsApp</div>
                  </div>
                </div>
                <Button 
                  variant="hero" 
                  className="w-full mt-4"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  Falar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Enviar Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1"
                  />
                </div>
                
                <Button type="submit" variant="nature" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;