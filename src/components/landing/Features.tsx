import { Satellite, CloudSun, Droplets, BarChart3, Cpu, Bell } from "lucide-react";

const features = [
  {
    icon: Satellite,
    title: "Imagens de Satélite",
    description: "Mapas NDVI atualizados a cada 5 dias para acompanhar a saúde da sua lavoura com precisão.",
  },
  {
    icon: CloudSun,
    title: "Previsão Climática",
    description: "Dados hiper-locais de temperatura, chuva, vento e umidade para cada talhão da fazenda.",
  },
  {
    icon: Droplets,
    title: "Gestão de Irrigação",
    description: "Automatize a irrigação com sensores IoT e economize até 30% no consumo de água.",
  },
  {
    icon: BarChart3,
    title: "Relatórios de Safra",
    description: "Histórico completo de produtividade com projeções de colheita baseadas em IA.",
  },
  {
    icon: Cpu,
    title: "IA para Diagnóstico",
    description: "Detecte pragas, doenças e deficiências nutricionais automaticamente com visão computacional.",
  },
  {
    icon: Bell,
    title: "Alertas em Tempo Real",
    description: "Notificações instantâneas de geadas, chuvas fortes e anomalias detectadas nos sensores.",
  },
];

const Features = () => {
  return (
    <section id="recursos" className="py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Recursos</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tudo em uma só plataforma
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl border p-7 hover:border-glow bg-glow-card transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
