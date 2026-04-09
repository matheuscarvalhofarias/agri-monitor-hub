import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Produtor de Soja — MT",
    initials: "CM",
    quote: "Aumentamos a produtividade em 18% na primeira safra usando o AgroVista. Os alertas de irrigação são incríveis.",
  },
  {
    name: "Ana Beatriz Silva",
    role: "Gestora — Cooperativa AgroCentral",
    initials: "AS",
    quote: "Gerenciar 40 propriedades ficou muito mais simples. Os relatórios automatizados economizam horas do nosso time.",
  },
  {
    name: "Roberto Tanaka",
    role: "Cafeicultor — MG",
    initials: "RT",
    quote: "As imagens de satélite me ajudaram a detectar uma praga antes que se espalhasse. Salvou parte da minha safra.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-section-gradient">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Quem usa, recomenda
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl border p-7">
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 bg-accent">
                  <AvatarFallback className="bg-accent text-accent-foreground text-sm font-semibold">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
