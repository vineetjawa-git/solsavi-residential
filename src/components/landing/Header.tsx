import { Sun, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <Sun className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Sol<span className="text-accent">Savi</span>
            </span>
          </a>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+919876543210" 
              className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </a>
            <Button 
              className="bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-accent transition-all duration-300"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;