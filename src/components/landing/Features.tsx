import { CloudRain, Thermometer, Droplets, BarChart3, MapPin, Bell } from "lucide-react";

const features = [
  {
    icon: CloudRain,
    title: "Previsão Climática",
    description: "Dados meteorológicos em tempo real com alertas de eventos extremos para cada talhão.",
  },
  {
    icon: Thermometer,
    title: "Análise de Solo",
    description: "Monitore temperatura, umidade e nutrientes do solo com sensores IoT integrados.",
  },
  {
    icon: Droplets,
    title: "Gestão de Irrigação",
    description: "Automatize e otimize a irrigação com base em dados de evapotranspiração e previsões.",
  },
  {
    icon: BarChart3,
    title: "Relatórios de Produtividade",
    description: "Painéis completos com histórico de safras, estimativas de colheita e análise por talhão.",
  },
  {
    icon: MapPin,
    title: "Mapeamento por Satélite",
    description: "Imagens NDVI e mapas de calor para identificar variações na lavoura em tempo real.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Notificações customizáveis para pragas, doenças, geadas e anomalias detectadas por IA.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-section-gradient">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Recursos</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-muted-foreground text-lg">
            Ferramentas poderosas para gerenciar suas propriedades com inteligência e precisão.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl border p-7 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-hero-gradient transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
