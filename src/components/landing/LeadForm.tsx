import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Sparkles, Loader2 } from "lucide-react";

const LeadForm = () => {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
  });

  const GOOGLE_APPS_SCRIPT_URL =
    import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL ||
    "https://script.google.com/macros/s/AKfycbyzMYQwUgIJZ4NLQjurv_N1RGwwWymDMLAyWHis34RWxd3Gdbvx2JOZwlwHq31hRa0f/exec";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast({
        title: "Please enter your name",
        variant: "destructive",
      });
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      toast({
        title: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }

    if (!/^\d{6}$/.test(formData.pincode)) {
      toast({
        title: "Please enter a valid 6-digit pincode",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      const bodyText = await response.text();

      let result: {
        success?: boolean;
        message?: string;
      } = {};

      try {
        result = JSON.parse(bodyText);
      } catch {
        result = {
          success: true,
        };
      }

      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      toast({
        title: "🎉 Request Submitted Successfully!",
        description:
          "Our solar expert will contact you within 24 hours.",
      });

      setFormData({
        name: "",
        phone: "",
        pincode: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);

      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border border-border relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-300/20 to-yellow-200/20 blur-3xl rounded-full" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-5">
          <Sparkles className="w-4 h-4 text-yellow-500" />
          Free Consultation
        </div>

        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 leading-tight">
          Get a Free Quote from an Installer
        </h3>

        <p className="text-muted-foreground text-sm md:text-base mb-8">
          We will call you and connect you with verified solar installers in
          your area.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>

            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="h-12"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>

            <Input
              id="phone"
              type="tel"
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10),
                })
              }
              className="h-12"
            />
          </div>

          {/* Pincode */}
          <div className="space-y-2">
            <Label htmlFor="pincode">Pin Code</Label>

            <Input
              id="pincode"
              type="text"
              placeholder="6-digit pincode"
              value={formData.pincode}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  pincode: e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 6),
                })
              }
              className="h-12"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-green-500 to-lime-500 hover:opacity-90 transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Get a Free Consultation
                <CheckCircle2 className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </form>

        {/* Trust Indicators */}
        <div className="mt-8 pt-5 border-t border-border">
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              100% Free
            </div>

            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              No Obligation
            </div>

            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              Verified Installers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;