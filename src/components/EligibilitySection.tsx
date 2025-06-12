
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, ExternalLink } from 'lucide-react';

export const EligibilitySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    agencyName: '',
    loanAmount: ''
  });
  const [isChecking, setIsChecking] = useState(false);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    
    // Simulate eligibility check
    setTimeout(() => {
      setIsChecking(false);
      setIsEligible(true);
      toast({
        title: "Eligibility Confirmed!",
        description: "Congratulations! You are eligible for our business loan program.",
        variant: "default",
      });
    }, 2000);
  };

  const handleRedirect = () => {
    window.open('https://partnersplus.mihuru.com/', '_blank');
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 max-w-2xl w-full mx-auto">
      <div className="mb-6 text-center">
        <h3 className="text-mihuru-gold text-2xl md:text-3xl font-serif font-bold mb-2">
          Check Your Eligibility
        </h3>
        <p className="text-white/80">
          See if you qualify for our exclusive business loan program
        </p>
      </div>

      {!isEligible ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Travel Agent Name</Label>
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
              <Label htmlFor="phone" className="text-white">Contact Number</Label>
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
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email ID</Label>
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
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="agencyName" className="text-white">Travel Agency Name</Label>
            <Input
              id="agencyName"
              name="agencyName"
              value={formData.agencyName}
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
              required
              className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isChecking}
            className="w-full bg-mihuru-gold hover:bg-mihuru-gold-light text-mihuru-dark font-bold py-3 text-lg transition-all duration-300 mt-6"
          >
            {isChecking ? "Checking Eligibility..." : "Check My Eligibility"}
          </Button>
        </form>
      ) : (
        <div className="text-center space-y-6">
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-green-400 mb-2">You're Eligible!</h4>
            <p className="text-white/80">
              Congratulations! You qualify for our business loan program. Proceed to complete your application.
            </p>
          </div>
          
          <Button 
            onClick={handleRedirect}
            className="w-full bg-mihuru-gold hover:bg-mihuru-gold-light text-mihuru-dark font-bold py-3 text-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Continue Application
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-white/70 text-sm">
          Your data is secure and will only be used for eligibility assessment
        </p>
      </div>
    </div>
  );
};
