import { 
  IndianRupee, 
  Zap, 
  ShieldCheck, 
  Banknote, 
  Clock, 
  Leaf 
} from "lucide-react";

const benefits = [
  {
    icon: IndianRupee,
    title: "₹78,000 Government Subsidy",
    description: "Avail maximum subsidy under PM Surya Ghar Yojana for 3KW residential systems",
    highlight: true,
  },
  {
    icon: Zap,
    title: "90% Electricity Savings",
    description: "Drastically reduce your monthly electricity bills with solar power",
  },
  {
    icon: ShieldCheck,
    title: "Verified Installers",
    description: "Connect only with certified and experienced solar installation experts",
  },
  {
    icon: Banknote,
    title: "Easy Financing",
    description: "Flexible EMI options and bank tie-ups for hassle-free payments",
  },
  {
    icon: Clock,
    title: "25+ Years Lifespan",
    description: "Premium solar panels with long-term performance warranty",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint and contribute to a greener planet",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Why Choose Solar?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Benefits of Going{" "}
            <span className="text-gradient-primary">Solar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of Indian households saving money while helping the environment
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group relative bg-card rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
                benefit.highlight 
                  ? "border-accent shadow-accent/20" 
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {benefit.highlight && (
                <div className="absolute -top-3 left-6 bg-gradient-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                benefit.highlight 
                  ? "bg-gradient-accent" 
                  : "bg-secondary"
              }`}>
                <benefit.icon className={`w-7 h-7 ${
                  benefit.highlight 
                    ? "text-accent-foreground" 
                    : "text-primary"
                }`} />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;