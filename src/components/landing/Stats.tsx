const stats = [
  { value: "2.4M+", label: "Hectares monitorados" },
  { value: "12.000+", label: "Propriedades ativas" },
  { value: "+23%", label: "Aumento médio na safra" },
  { value: "99.9%", label: "Uptime da plataforma" },
];

const Stats = () => {
  return (
    <section className="py-16 border-y">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-gradient mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
