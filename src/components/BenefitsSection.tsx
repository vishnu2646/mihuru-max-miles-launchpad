
import React from 'react';
import { CheckCircle } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    "Loans designed specifically for travel agents",
    "Quick approval process with minimal documentation",
    "Flexible repayment options suited to your business",
    "Competitive interest rates with transparent terms",
    "Dedicated relationship manager for your account"
  ];

  return (
    <div className="py-16 px-4 bg-mihuru-dark">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-mihuru-blue/20 to-mihuru-blue/5 backdrop-blur-sm rounded-xl p-8 border border-mihuru-blue/30">
          <h2 className="text-3xl font-serif font-bold mb-8 text-mihuru-text text-center">
            Why Choose <span className="text-mihuru-gold">Mihuru</span> Business Loans?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-mihuru-gold flex-shrink-0 mt-0.5" />
                <p className="text-mihuru-text">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
