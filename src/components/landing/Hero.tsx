import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardImage from "@/assets/dashboard-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-0 overflow-hidden bg-glow">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-glow bg-secondary text-sm text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Monitoramento inteligente em tempo real
          </div>

          <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            Sua fazenda no
            <br />
            <span className="text-gradient">controle total</span>
          </h1>

          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Dashboard completa para monitorar clima, solo, irrigação e produtividade.
            Tome decisões baseadas em dados e maximize cada hectare.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base font-semibold">
              Teste grátis por 14 dias
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 text-base border-border hover:bg-secondary text-muted-foreground hover:text-foreground">
              Ver demonstração
            </Button>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl" />
          <div className="relative rounded-xl overflow-hidden border border-glow shadow-2xl shadow-primary/5">
            <img
              src={dashboardImage}
              alt="Dashboard AgroVista mostrando mapa de NDVI, gráficos de solo e clima"
              className="w-full"
              width={1920}
              height={1080}
            />
          </div>
          {/* Fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
