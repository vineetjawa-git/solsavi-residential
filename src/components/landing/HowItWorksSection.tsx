import { FileText, Users, BarChart3, Sun, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Submit Your Details",
    description: "Fill out the simple form with your requirements and location details",
  },
  {
    icon: Users,
    step: "02",
    title: "Get Matched",
    description: "We connect you with verified local solar installers in your area",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Compare Quotes",
    description: "Receive and compare competitive quotes from multiple installers",
  },
  {
    icon: Sun,
    step: "04",
    title: "Go Solar!",
    description: "Choose the best offer and start your solar journey with expert installation",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It{" "}
            <span className="text-gradient-accent">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Get solar panels installed in 4 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.step} className="relative group">
                <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 h-full">
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shrink-0">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <span className="text-5xl font-bold text-border group-hover:text-primary/20 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 w-8 h-8 rounded-full bg-accent text-accent-foreground items-center justify-center -translate-y-1/2">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;