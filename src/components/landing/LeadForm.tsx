import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Sparkles } from "lucide-react";

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    category: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }
    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      toast({ title: "Please enter a valid 10-digit phone number", variant: "destructive" });
      return;
    }
    if (!/^\d{6}$/.test(formData.pincode)) {
      toast({ title: "Please enter a valid 6-digit pincode", variant: "destructive" });
      return;
    }
    if (!formData.category) {
      toast({ title: "Please select a category", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "🎉 Request Submitted Successfully!",
      description: "Our solar expert will contact you within 24 hours.",
    });
    
    setFormData({ name: "", phone: "", pincode: "", category: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 blur-3xl" />
      
      <div className="relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4 text-accent" />
          Free Consultation
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Get Your Free Solar Quote
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          Connect with verified installers in your area
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 bg-background border-border focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
              className="h-12 bg-background border-border focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pincode" className="text-foreground">Pin Code</Label>
            <Input
              id="pincode"
              placeholder="6-digit pincode"
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '').slice(0, 6) })}
              className="h-12 bg-background border-border focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-foreground">Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger className="h-12 bg-background border-border focus:border-primary focus:ring-primary">
                <SelectValue placeholder="Select installation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 text-lg font-semibold bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-accent animate-pulse-glow transition-all duration-300"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Get a Free Consultation
                <CheckCircle2 className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>

        {/* Trust indicators */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-solar-green" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-solar-green" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-solar-green" />
              <span>Verified Installers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;