import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    quote: "The entire process was seamless. Got connected with a reliable installer within 24 hours. My electricity bill dropped from ₹4,000 to just ₹400!",
    savings: "₹3,600/month",
    rating: 5,
    system: "3KW Residential",
  },
  {
    name: "Priya Sharma",
    location: "Jaipur, Rajasthan",
    quote: "Thanks to the PM Surya Ghar subsidy guidance, I received ₹78,000 subsidy. The installers were professional and completed work on time.",
    savings: "₹2,800/month",
    rating: 5,
    system: "3KW Residential",
  },
  {
    name: "Anand Industries",
    location: "Ahmedabad, Gujarat",
    quote: "We installed 50KW for our manufacturing unit. The ROI was achieved in just 3 years. Highly recommend for commercial installations.",
    savings: "₹85,000/month",
    rating: 5,
    system: "50KW Commercial",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our{" "}
            <span className="text-gradient-primary">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real customers who made the switch to solar
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-solar-yellow text-solar-yellow" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Savings badge */}
              <div className="inline-flex items-center gap-2 bg-solar-green/10 text-solar-green px-3 py-1.5 rounded-full text-sm font-semibold mb-6">
                Saving {testimonial.savings}
              </div>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">System</p>
                    <p className="text-sm font-medium text-primary">{testimonial.system}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;