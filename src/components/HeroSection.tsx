
import React from 'react';
import { Button } from "@/components/ui/button";

export const HeroSection: React.FC = () => {
    const scrollToForm = () => {
        const formElement = document.getElementById('application-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-[60vh] p-0 flex items-center justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-mihuru-dark bg-opacity-80 z-0"></div>
            <div className="absolute inset-0 bg-[url('https://itraveleoblogdiag865.blob.core.windows.net/websiteimages/assets/images/marketing-bg.png')] bg-cover bg-center opacity-30 z-0"></div>

            {/* Animated confetti/particle effects */}
            <div className="absolute inset-0 confetti-bg z-0"></div>

            {/* Decorative gift boxes */}
            <div className="absolute bottom-0 left-10 flex items-center justify-center w-28 h-28 bg-mihuru-blue rounded-lg rotate-12 opacity-60 animate-float z-0 taai-box"></div>

            <div className="absolute top-20 right-10 w-20 h-20 bg-mihuru-gold rounded-lg -rotate-6 opacity-40 animate-float z-0" style={{ animationDelay: '1s' }}></div>

            {/* Content */}
            <div className="container mx-auto relative z-10">
                <div className="text-center">
                    <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-mihuru-gold glowing-text">
                        MIHURU<br />MAX MILES
                    </h1>

                    <div className="max-w-2xl mx-auto mb-10">
                        <p className="text-white text-xl mb-4">
                            Grow Your Biz with Mihuru Credit Line. <br /> Introducing <br />
                            <span className="font-bold text-mihuru-gold"> Mihuru Max Miles!</span>
                            <br /> An Exclusive Rewards Program.
                        </p>
                        <p className="text-white/80">
                            Fast approval, minimal documentation, and rewards worth up to ₹1 Lakh!
                            Apply now and fuel your travel business growth.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={scrollToForm}
                            className="bg-mihuru-gold mb-4 hover:bg-mihuru-gold-light text-mihuru-dark text-lg font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
                        >
                            Check Your Eligibility
                        </Button>
                        <Button
                            variant="outline"
                            onClick={scrollToForm}
                            className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
                        >
                            TAAI Association
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
