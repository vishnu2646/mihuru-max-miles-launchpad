
import React from 'react';

export const StepsSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Application Approved",
      description: "Once your business loan application is approved, you're eligible for rewards",
      reward: "Receive Amazon vouchers worth Rs. 750"
    },
    {
      number: "02",
      title: "Loan Disbursement",
      description: "After approval, funds will be transferred directly to your business account",
      reward: "Get Mihuru goodies worth Rs. 3,000"
    },
    {
      number: "03",
      title: "Repeat Business",
      description: "Return for another business loan when you need additional financing",
      reward: "Earn smartwatch or speakers worth Rs. 5,000"
    },
    {
      number: "04",
      title: "Lucky Draw Entry",
      description: "Repeat loan applicants are entered into our exclusive lucky draw",
      reward: "Chance to win Samsung LED or Tansiq GV worth Rs. 1,00,000"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-mihuru-dark to-mihuru-dark/95">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
            How It <span className="text-mihuru-gold">Works</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Follow these simple steps to apply for your business loan and claim your rewards
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 relative hover:bg-white/10 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-mihuru-gold text-mihuru-dark font-serif font-bold text-xl flex items-center justify-center">
                  {step.number}
                </div>
                
                <div className="pt-3">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 mb-4">
                    {step.description}
                  </p>
                  <div className="bg-gradient-to-r from-mihuru-gold/20 to-transparent p-3 rounded-lg">
                    <p className="text-mihuru-gold font-medium">
                      Reward: {step.reward}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
