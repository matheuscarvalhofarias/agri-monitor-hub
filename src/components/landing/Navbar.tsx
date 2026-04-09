import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-hero-gradient flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">AgroVista</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Recursos</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Planos</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Depoimentos</a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Entrar</Button>
          <Button size="sm" className="bg-hero-gradient text-primary-foreground hover:opacity-90">Começar Grátis</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
