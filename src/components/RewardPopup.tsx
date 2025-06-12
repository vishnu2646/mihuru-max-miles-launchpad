
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

interface RewardPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  reward: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

export const RewardPopup: React.FC<RewardPopupProps> = ({
    isOpen,
    onClose,
    title,
    reward,
    value,
    description,
    icon
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-gradient-to-br from-mihuru-blue/90 to-mihuru-dark/90 border-mihuru-gold/30 text-white max-w-sm mx-auto">
                <DialogHeader>
                    <button 
                        onClick={onClose}
                        className="absolute right-4 top-4 text-white/70 hover:text-white"
                    >
                        <X className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="text-mihuru-gold">
                            {icon}
                        </div>
                        <DialogTitle className="text-xl font-serif font-bold text-mihuru-gold">
                            {title}
                        </DialogTitle>
                    </div>
                </DialogHeader>
        
                <div className="text-center space-y-4">
                    <div className="bg-mihuru-gold/20 rounded-lg p-4 border border-mihuru-gold/30">
                        <h3 className="text-lg font-bold text-mihuru-gold mb-2">{reward}</h3>
                        <p className="text-2xl font-serif font-bold text-white">{value}</p>
                    </div>
          
                    <DialogDescription className="text-white/80 text-center">
                        {description}
                    </DialogDescription>
          
                    <Button 
                        onClick={onClose}
                        className="w-full bg-mihuru-gold hover:bg-mihuru-gold-light text-mihuru-dark font-bold"
                    >
            Awesome!
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
