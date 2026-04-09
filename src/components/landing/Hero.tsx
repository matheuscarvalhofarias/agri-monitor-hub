import { Button } from "@/components/ui/button";
import { ArrowRight, Satellite, CloudSun, BarChart3 } from "lucide-react";
import dashboardImage from "@/assets/dashboard-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-0 overflow-hidden">
      {/* Subtle green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-muted text-xs font-medium text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              +12.000 propriedades ativas
            </div>

            <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-5">
              Sua fazenda,
              <br />
              <span className="text-gradient">dados inteligentes.</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Monitore clima, solo e produtividade em tempo real. 
              O AgroVista transforma dados em decisões que aumentam sua safra em até 23%.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-3 mb-10">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 text-sm font-semibold">
                Teste grátis por 14 dias
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 text-sm text-muted-foreground hover:text-foreground">
                Ver demonstração
              </Button>
            </div>

            {/* Mini features */}
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-5 text-sm text-muted-foreground">
              {[
                { icon: Satellite, label: "Imagens NDVI" },
                { icon: CloudSun, label: "Clima hiper-local" },
                { icon: BarChart3, label: "Relatórios de safra" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard screenshot */}
          <div className="relative lg:ml-4">
            <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-xl overflow-hidden border shadow-xl">
              <img
                src={dashboardImage}
                alt="Dashboard AgroVista com mapa NDVI, gráficos de solo e dados climáticos"
                className="w-full"
                width={1920}
                height={1080}
              />
            </div>
            {/* Floating stat cards */}
            <div className="absolute -bottom-4 -left-4 bg-background rounded-xl border shadow-lg px-4 py-3 animate-float">
              <p className="text-xs text-muted-foreground">Produtividade</p>
              <p className="text-lg font-bold text-primary">+23%</p>
            </div>
            <div className="absolute -top-3 -right-3 bg-background rounded-xl border shadow-lg px-4 py-3 animate-float" style={{ animationDelay: '1.5s' }}>
              <p className="text-xs text-muted-foreground">Hectares</p>
              <p className="text-lg font-bold">2.4M+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
