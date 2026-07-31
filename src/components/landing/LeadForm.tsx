import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Sparkles } from "lucide-react";

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

// Looks up District & State for a 6-digit pincode using the public
// postalpincode.in API. Returns empty strings if the lookup fails for
// any reason (bad pincode, network issue, API down) so the form can
// still submit without district/state rather than blocking the user.
async function lookupDistrictAndState(pincode: string): Promise<{ district: string; state: string }> {
  try {
    const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    const data = await res.json();
    const po = data?.[0]?.PostOffice?.[0];
    if (data?.[0]?.Status === "Success" && po) {
      return { district: po.District || "", state: po.State || "" };
    }
    return { district: "", state: "" };
  } catch {
    return { district: "", state: "" };
  }
}

const LeadForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    monthlyBill: "",
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
    if (!formData.monthlyBill.trim()) {
      toast({ title: "Please enter your monthly electricity bill", variant: "destructive" });
      return;
    }

    if (!APPS_SCRIPT_URL) {
      toast({
        title: "Form is not configured",
        description: "Missing VITE_APPS_SCRIPT_URL environment variable.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Resolve District & State from the pincode before submitting.
      const { district, state } = await lookupDistrictAndState(formData.pincode);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        signal: controller.signal,
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone,
          pincode: formData.pincode,
          monthlyBill: formData.monthlyBill.trim(),
          district,
          state,
        }),
      });
      clearTimeout(timeoutId);

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Failed to submit form. Please try again.");
      }

      toast({
        title: "🎉 Request Submitted Successfully!",
        description: "Our solar expert will contact you within 24 hours.",
      });

      setFormData({ name: "", phone: "", pincode: "", monthlyBill: "" });
      navigate("/thank-you");
    } catch (error) {
      toast({
        title: "Submission failed",
        description:
          error instanceof Error && error.name === "AbortError"
            ? "Request timed out. Please try again."
            : error instanceof Error
              ? error.message
              : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          Get a Free Quote from an Installer
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          We will call you and then connect with verified installers in your area
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
            <Label htmlFor="phone" className="text-foreground">Whatsapp Phone Number</Label>
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
            <Label htmlFor="monthlyBill" className="text-foreground">Monthly Electricity Bill (in ₹)</Label>
            <Input
              id="monthlyBill"
              type="text"
              placeholder="e.g. 2500"
              value={formData.monthlyBill}
              onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
              className="h-12 bg-background border-border focus:border-primary focus:ring-primary"
            />
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