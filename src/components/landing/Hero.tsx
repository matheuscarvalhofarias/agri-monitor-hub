import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Monitoramento inteligente em tempo real
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Controle total das suas{" "}
            <span className="text-gradient">propriedades agrícolas</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Dashboard completa para monitorar clima, solo, irrigação e produtividade. 
            Tome decisões baseadas em dados e aumente sua safra.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-hero-gradient text-primary-foreground hover:opacity-90 px-8 h-12 text-base">
              Teste grátis por 14 dias
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 text-base">
              <Play className="mr-2 w-4 h-4" />
              Ver demonstração
            </Button>
          </div>
        </div>

        <div className="mt-16 relative rounded-2xl overflow-hidden shadow-2xl border">
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10" />
          <img 
            src={heroImage} 
            alt="Vista aérea de propriedade agrícola monitorada pelo AgroVista" 
            className="w-full h-[400px] md:h-[500px] object-cover"
            width={1920}
            height={1080}
          />
          {/* Floating stats */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap gap-4">
            {[
              { label: "Hectares monitorados", value: "2.4M+" },
              { label: "Propriedades ativas", value: "12.000+" },
              { label: "Aumento médio na safra", value: "+23%" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl px-5 py-3 border">
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
