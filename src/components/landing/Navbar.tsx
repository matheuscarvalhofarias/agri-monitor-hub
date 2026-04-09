import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Leaf className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">AgroVista</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Recursos", "Planos", "Depoimentos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Entrar
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Começar Grátis
          </Button>
        </div>

        <button className="md:hidden text-muted-foreground" onClick={() => setOpen(!open)}>
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-dark border-t px-6 py-4 flex flex-col gap-3">
          {["Recursos", "Planos", "Depoimentos"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground py-1">
              {item}
            </a>
          ))}
          <Button size="sm" className="bg-primary text-primary-foreground mt-2 w-full">Começar Grátis</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
