import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  useEffect(() => {
    const gtag = (
      window as Window & {
        gtag?: (...args: unknown[]) => void;
      }
    ).gtag;

    if (typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: "AW-18098061900/edeYCL-I79AcEMyE6rVD",
        value: 1.0,
        currency: "INR",
      });
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 pt-24 md:pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-solar-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-solar-blue-light/20 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-solar-green/10 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-solar-green" />
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Thank You for Reaching Out!
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              Your request has been received successfully. One of our solar
              consultants will contact you within 24 hours to discuss your
              rooftop solar needs and connect you with verified installers in
              your area.
            </p>

            <div className="bg-secondary/50 rounded-xl p-5 mb-8 flex items-center justify-center gap-3 text-foreground">
              <Phone className="w-5 h-5 text-accent" />
              <span className="text-sm md:text-base">
               Need immediate help? Call or whatsapp us at{" "}
                <a href="tel:+918300883152" className="font-semibold hover:text-accent transition-colors">
                  +91 8300883152
                </a>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="h-12 px-6 bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-accent transition-all duration-300"
              >
                <a href="https://solsavi.in/" target="_blank" rel="noopener noreferrer">
                  Visit Solsavi.in
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 px-6">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              Learn more about rooftop solar, the PM Surya Ghar subsidy, and
              our verified installer network at{" "}
              <a
                href="https://solsavi.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:text-accent transition-colors"
              >
                solsavi.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ThankYou;