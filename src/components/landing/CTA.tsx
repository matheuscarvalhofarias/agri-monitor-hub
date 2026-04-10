import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const CTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-24 border-t">
      <div className="container">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Fale com nosso
              <br />
              <span className="text-gradient">time de especialistas</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Descubra como o AgroVista pode transformar a gestão da sua propriedade. Preencha o formulário e receba uma demonstração personalizada.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Demonstração gratuita e sem compromisso
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Suporte técnico especializado em agro
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Implementação em menos de 24 horas
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 space-y-5 shadow-sm">
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-1.5 block">Nome completo</label>
              <Input id="name" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-1.5 block">E-mail</label>
              <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-1.5 block">Mensagem</label>
              <Textarea id="message" placeholder="Como podemos ajudar?" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} required />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold">
              Solicitar demonstração
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
