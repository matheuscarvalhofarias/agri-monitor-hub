import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R$ 197",
    period: "/mês",
    description: "Para pequenos produtores começando a digitalizar.",
    features: [
      "Até 3 propriedades",
      "Monitoramento climático básico",
      "Relatórios mensais",
      "Suporte por e-mail",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "R$ 497",
    period: "/mês",
    description: "Para produtores que buscam máxima eficiência.",
    features: [
      "Até 15 propriedades",
      "Sensores IoT integrados",
      "Imagens de satélite NDVI",
      "Alertas inteligentes por IA",
      "Relatórios semanais",
      "Suporte prioritário",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Para cooperativas e grandes operações agrícolas.",
    features: [
      "Propriedades ilimitadas",
      "API personalizada",
      "Integração com ERPs",
      "Gerente de conta dedicado",
      "SLA garantido",
      "Treinamento da equipe",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Planos</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Invista no futuro da sua fazenda
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha o plano ideal e comece seu teste grátis de 14 dias.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-hero-gradient text-primary-foreground border-transparent shadow-xl scale-105"
                  : "bg-card"
              }`}
            >
              <h3 className={`text-lg font-semibold mb-1 ${plan.highlighted ? "" : ""}`}>{plan.name}</h3>
              <p className={`text-sm mb-5 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-hero-gradient text-primary-foreground hover:opacity-90"
                }`}
                size="lg"
              >
                {plan.price === "Sob consulta" ? "Falar com vendas" : "Começar agora"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
