import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R$ 197",
    period: "/mês",
    description: "Para pequenos produtores digitalizando a operação.",
    features: [
      "Até 3 propriedades",
      "Dados climáticos básicos",
      "Relatórios mensais",
      "Suporte por e-mail",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "R$ 497",
    period: "/mês",
    description: "Para quem busca máxima eficiência produtiva.",
    features: [
      "Até 15 propriedades",
      "Sensores IoT integrados",
      "Imagens NDVI por satélite",
      "Alertas com IA",
      "Relatórios semanais",
      "Suporte prioritário 24/7",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Para cooperativas e grandes operações.",
    features: [
      "Propriedades ilimitadas",
      "API dedicada",
      "Integração com ERPs",
      "Gerente de conta",
      "SLA garantido 99.99%",
      "Onboarding completo",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="planos" className="py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Planos</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Invista no futuro da sua fazenda
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary/50 bg-glow-card shadow-lg shadow-primary/5 scale-[1.02]"
                  : "bg-card hover:border-glow"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Mais popular
                </div>
              )}
              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
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
