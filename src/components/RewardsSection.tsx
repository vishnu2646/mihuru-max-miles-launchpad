
import React from 'react';
import { RewardCard } from './RewardCard';
import { Headphones, Gift, Award, Speaker, Star, CircleDollarSign } from 'lucide-react';

export const RewardsSection: React.FC = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-mihuru-gold to-mihuru-gold-light glowing-text">
            Unlock Amazing Rewards
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Complete each stage of your business loan journey and earn exclusive rewards designed specially for travel agents like you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <RewardCard
            title="Complete Application"
            reward="Swiggy or PVR Vouchers"
            value="Rs. 750"
            icon={<Gift className="h-6 w-6" />}
            description="Simply complete your business loan application to receive food or movie vouchers"
          />
          
          <RewardCard
            title="Loan Disbursement"
            reward="JBL or Boat Earbuds"
            value="Rs. 3,000"
            icon={<Headphones className="h-6 w-6" />}
            description="Get premium earbuds when your loan application is successfully disbursed"
            highlight={true}
          />
          
          <RewardCard
            title="Repeat Business"
            reward="Amazon Vouchers or Speakers"
            value="Rs. 7,500"
            icon={<Speaker className="h-6 w-6" />}
            description="Earn higher rewards when you return for another business loan"
          />
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-mihuru-gold/80 to-mihuru-gold-light/80 rounded-xl p-6 md:p-8 text-mihuru-dark relative overflow-hidden ticket-shine">
            <div className="absolute -top-10 -right-10 bg-white/30 w-40 h-40 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="h-8 w-8" />
                  <h3 className="font-serif font-bold text-2xl">Grand Lucky Draw</h3>
                </div>
                <p className="text-mihuru-dark/80 mb-4">
                  Repeat business loan applicants are entered into an exclusive lucky draw
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-mihuru-dark" />
                    <span className="font-medium">2 lucky winners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CircleDollarSign className="h-5 w-5 text-mihuru-dark" />
                    <span className="font-bold">Samsung LED or Tansiq GV worth Rs. 1,00,000</span>
                  </div>
                </div>
              </div>
              
              <div className="w-32 h-32 border-4 border-mihuru-dark rounded-full flex items-center justify-center bg-white/30 animate-pulse-glow">
                <div className="text-center">
                  <div className="font-serif font-bold text-xl">₹1 LAKH</div>
                  <div className="text-sm font-medium">Prize Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
