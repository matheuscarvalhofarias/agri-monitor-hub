import { Layers, TrendingUp, Zap, Eye } from "lucide-react";
import dashboardDetail from "@/assets/dashboard-detail.jpg";

const highlights = [
  {
    icon: Eye,
    title: "Visão completa da propriedade",
    description: "Mapa interativo com camadas de NDVI, umidade do solo e zonas de manejo sobrepostas.",
  },
  {
    icon: Layers,
    title: "Dados integrados em um só lugar",
    description: "Clima, solo, irrigação e produtividade unificados em painéis claros e acionáveis.",
  },
  {
    icon: TrendingUp,
    title: "Tendências e projeções com IA",
    description: "Algoritmos preditivos que antecipam problemas e recomendam ações para cada talhão.",
  },
  {
    icon: Zap,
    title: "Alertas instantâneos",
    description: "Receba notificações no celular sobre geadas, pragas ou anomalias antes que causem danos.",
  },
];

const DashboardShowcase = () => {
  return (
    <section className="py-24 border-t">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">A Dashboard</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Tudo que acontece na sua fazenda,{" "}
            <span className="text-gradient">em uma única tela</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Interface intuitiva pensada para o produtor rural. Sem complicação, só informação que importa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Screenshot */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-xl overflow-hidden border shadow-lg">
              <img
                src={dashboardDetail}
                alt="Dashboard AgroVista mostrando mapa NDVI, clima e umidade do solo"
                className="w-full"
                width={1920}
                height={1080}
                loading="lazy"
              />
            </div>
          </div>

          {/* Feature list */}
          <div className="order-1 lg:order-2 space-y-6">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
