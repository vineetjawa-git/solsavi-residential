import { Sun, Zap, Shield, ArrowRight } from "lucide-react";
import LeadForm from "./LeadForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-hero-pattern" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-solar-orange/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-solar-blue-light/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-primary-foreground space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-2 rounded-full">
              <Sun className="w-5 h-5 text-solar-yellow" />
              <span className="text-sm font-medium">India's Trusted Solar Marketplace</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-[45px] font-extrabold leading-tight">
              Get a Rooftop Solar Panel
            </h1>

            {/* Subsidy highlight */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-solar-orange flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/80">PM Surya Ghar Yojana</p>
                  <p className="text-2xl md:text-3xl font-bold">
                    Get Upto ₹78,000 Subsidy
                  </p>
                </div>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                *For 3KW residential rooftop solar installation under government scheme
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Verified Installers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">90% Bill Savings</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl md:text-4xl font-bold">500+</p>
                <p className="text-sm text-primary-foreground/70">Verified Installers</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div>
                <p className="text-3xl md:text-4xl font-bold">10,000+</p>
                <p className="text-sm text-primary-foreground/70">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:pl-8 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            <LeadForm />
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;