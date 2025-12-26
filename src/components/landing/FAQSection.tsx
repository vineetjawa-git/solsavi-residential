import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is PM Surya Ghar Yojana?",
    answer: "PM Surya Ghar Yojana is a government initiative to promote rooftop solar installations in India. Under this scheme, residential consumers can avail subsidies up to ₹78,000 for installing solar panels up to 3KW capacity. The scheme aims to make 1 crore households solar-powered by 2027.",
  },
  {
    question: "Who qualifies for the solar subsidy?",
    answer: "All residential electricity consumers with a valid electricity connection are eligible for the subsidy. The subsidy is available for installations up to 10KW, with ₹30,000/KW for the first 2KW and ₹18,000/KW for the next 1KW. Commercial and industrial consumers are not eligible for the residential subsidy but may have other incentives.",
  },
  {
    question: "How much can I save on my electricity bill?",
    answer: "Depending on your current consumption and system size, you can save 70-90% on your electricity bills. A typical 3KW system generates around 12-15 units per day, which is sufficient for most households. Many customers report their bills dropping from ₹3,000-5,000 to just ₹200-500 per month.",
  },
  {
    question: "What is the installation timeline?",
    answer: "The complete installation process typically takes 2-4 weeks from enquiry to commissioning. This includes site survey (1-2 days), design & approval (3-5 days), installation (2-3 days), and net metering setup (7-10 days). Our verified installers ensure timely completion.",
  },
  {
    question: "Is financing available for solar installation?",
    answer: "Yes! We partner with leading banks and NBFCs to offer attractive financing options. You can avail solar loans with interest rates starting from 9% per annum, with EMI options from 12 to 60 months. Many banks offer special solar loans with quick approval.",
  },
  {
    question: "What maintenance is required for solar panels?",
    answer: "Solar panels require minimal maintenance. Basic cleaning with water once every 2-4 weeks is usually sufficient. The panels come with 25-year performance warranty, and inverters typically have 5-10 year warranties. Annual inspection by professionals is recommended.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked{" "}
              <span className="text-gradient-accent">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about going solar
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;