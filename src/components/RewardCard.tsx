
import React from 'react';
import { cn } from '@/lib/utils';
import { Gift } from 'lucide-react';

interface RewardCardProps {
  title: string;
  reward: string;
  value: string;
  icon?: React.ReactNode;
  className?: string;
  highlight?: boolean;
  description?: string;
}

export const RewardCard: React.FC<RewardCardProps> = ({
  title,
  reward,
  value,
  icon = <Gift className="h-6 w-6" />,
  className,
  highlight = false,
  description,
}) => {
  return (
    <div 
      className={cn(
        "rounded-xl p-6 transition-all duration-300 transform hover:scale-105",
        highlight 
          ? "bg-gradient-to-br from-mihuru-gold to-mihuru-gold-light text-mihuru-dark border-2 border-mihuru-gold" 
          : "bg-white/10 backdrop-blur-sm border border-white/20",
        className
      )}
    >
      <div className="flex items-center mb-4 text-white">
        <div className={cn(
          "p-2 rounded-full mr-3",
          highlight ? "bg-mihuru-dark" : "bg-mihuru-gold text-mihuru-dark"
        )}>
          {icon}
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex flex-col">
          <span className={cn(
            "font-serif font-bold text-2xl",
            highlight ? "text-mihuru-dark" : "text-mihuru-gold-light"
          )}>
            {reward}
          </span>
          <span className={cn(
            "text-sm font-semibold",
            highlight ? "text-mihuru-dark/80" : "text-white/80"
          )}>
            Worth {value}
          </span>
        </div>
        
        {description && (
          <p className={cn(
            "text-sm",
            highlight ? "text-mihuru-dark/70" : "text-white/70"
          )}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
