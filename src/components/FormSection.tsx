
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';

export const FormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    loanAmount: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Started!",
        description: "We've received your information. A Mihuru representative will contact you shortly.",
        variant: "default",
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        loanAmount: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 max-w-xl w-full mx-auto">
      <div className="mb-6 text-center">
        <h3 className="text-mihuru-gold text-2xl font-serif font-bold mb-2">
          Apply Now for Your Business Loan
        </h3>
        <p className="text-white/80">
          Complete your application and unlock amazing rewards
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              required
              className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="businessName" className="text-white">Travel Agency Name</Label>
          <Input
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Your travel agency name"
            required
            className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="loanAmount" className="text-white">Required Loan Amount</Label>
          <Input
            id="loanAmount"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            placeholder="Enter amount in Rs."
            className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-mihuru-gold hover:bg-mihuru-gold-light text-mihuru-dark font-bold py-3 text-lg transition-all duration-300 mt-4"
        >
          {isSubmitting ? "Processing..." : "Submit Application Now"}
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-white/70 text-sm">
          Your data is secure and will only be used to process your business loan application
        </p>
      </div>
    </div>
  );
};
