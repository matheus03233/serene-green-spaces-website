import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Gardening and Landscaping Company</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming outdoor spaces with professional gardening and landscaping services. 
              Your trusted partner for beautiful, sustainable gardens.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 pt-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="w-10 h-10 p-0 hover:bg-white/10"
                onClick={() => window.open('https://instagram.com', '_blank')}
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="w-10 h-10 p-0 hover:bg-white/10"
                onClick={() => window.open('https://facebook.com', '_blank')}
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <div className="text-primary-foreground/80 hover:text-white cursor-pointer transition-colors">
                Home
              </div>
              <div className="text-primary-foreground/80 hover:text-white cursor-pointer transition-colors">
                About Us
              </div>
              <div className="text-primary-foreground/80 hover:text-white cursor-pointer transition-colors">
                Services
              </div>
              <div className="text-primary-foreground/80 hover:text-white cursor-pointer transition-colors">
                Portfolio
              </div>
              <div className="text-primary-foreground/80 hover:text-white cursor-pointer transition-colors">
                Contact
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald" />
                <span className="text-primary-foreground/80">info@gardencompany.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald" />
                <span className="text-primary-foreground/80">Your City, State</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Gardening and Landscaping Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;