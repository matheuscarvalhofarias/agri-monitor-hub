import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold tracking-tight">AgroVista</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Termos</a>
            <a href="#" className="hover:text-foreground transition-colors">Contato</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 AgroVista</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
