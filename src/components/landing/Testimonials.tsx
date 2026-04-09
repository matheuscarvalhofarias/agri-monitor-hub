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
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-28 border-t">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Depoimentos</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Quem usa, recomenda
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl border p-7 hover:border-glow transition-colors duration-300">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
