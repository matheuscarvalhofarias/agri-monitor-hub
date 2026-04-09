import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="absolute -inset-12 bg-primary/5 rounded-[40px] blur-3xl" />
          <div className="relative rounded-3xl border border-glow bg-card p-14 md:p-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
              Pronto para transformar
              <br />
              <span className="text-gradient">sua gestão agrícola?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Junte-se a mais de 12.000 propriedades que já usam AgroVista para produzir mais com menos.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-13 px-10 text-base font-semibold">
              Começar teste grátis
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
