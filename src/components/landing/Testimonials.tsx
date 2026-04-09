import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Produtor de Soja — MT",
    quote: "Aumentamos a produtividade em 18% na primeira safra. Os alertas de irrigação são um divisor de águas.",
  },
  {
    name: "Ana Beatriz Silva",
    role: "Gestora — Cooperativa AgroCentral",
    quote: "Gerenciar 40 propriedades ficou simples. Os relatórios automatizados economizam horas por semana.",
  },
  {
    name: "Roberto Tanaka",
    role: "Cafeicultor — MG",
    quote: "As imagens de satélite detectaram uma praga antes de se espalhar. Literalmente salvou minha safra.",
  },
  {
    name: "Fernanda Costa",
    role: "Produtora de Milho — GO",
    quote: "O mapeamento por satélite nos ajudou a reduzir o uso de insumos em 25% sem perder produtividade.",
  },
  {
    name: "João Pedro Almeida",
    role: "Pecuarista — MS",
    quote: "Monitoro todas as pastagens pelo celular. A integração com sensores IoT é impressionante.",
  },
  {
    name: "Mariana Ribeiro",
    role: "Engenheira Agrônoma — PR",
    quote: "A IA de diagnóstico identificou deficiência de potássio que passaria despercebida. Ferramenta essencial.",
  },
  {
    name: "Thiago Oliveira",
    role: "Produtor de Cana — SP",
    quote: "Os alertas de geada me deram tempo de agir e salvar uma área inteira. Pagou o investimento em um mês.",
  },
  {
    name: "Luciana Santos",
    role: "Diretora — Fazenda Santa Clara",
    quote: "Antes eram planilhas infinitas. Agora tenho tudo em tempo real no dashboard. Mudou nossa gestão.",
  },
];

const TestimonialCard = ({ name, role, quote }: { name: string; role: string; quote: string }) => (
  <div className="flex-shrink-0 w-[360px] bg-card rounded-2xl border p-7 hover:border-glow transition-colors duration-300">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{quote}"</p>
    <div>
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-xs text-muted-foreground">{role}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4);

  return (
    <section id="depoimentos" className="py-28 border-t overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Depoimentos</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Quem usa, recomenda
          </h2>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-5">
        <div className="flex gap-5 animate-scroll-left">
          {[...firstRow, ...firstRow, ...firstRow].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="flex gap-5 animate-scroll-right">
          {[...secondRow, ...secondRow, ...secondRow].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
};

export default Testimonials;
