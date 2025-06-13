import { Clock } from 'lucide-react';
import * as React from 'react';
import { useEffect, useState } from 'react';

const Counter: React.FC = () => {
    // Set your target date here (YYYY-MM-DDTHH:mm:ss)
    const targetDate = new Date('2025-06-20T00:00:00');

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTime = calculateTimeLeft();
            setTimeLeft(updatedTime);

            // Optional: clear interval when countdown ends
            if (
                updatedTime.days === 0 &&
                updatedTime.hours === 0 &&
                updatedTime.minutes === 0 &&
                updatedTime.seconds === 0
            ) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-mihuru-dark/90 border-b border-white/10 py-4">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <Clock className="h-6 w-6 mihuru-goldAccent glow-accent" />
                        <h3 className="text-lg font-bold mihuru-goldAccent glow-accent">Limited Time Offer Ends In:</h3>
                    </div>
                    <div className="flex justify-center gap-4">
                        {(['days', 'hours', 'minutes', 'seconds'] as const).map((unit) => (
                            <div key={unit} className="bg-mihuru-medium rounded-lg p-3 min-w-[80px] border-2 border-mihuru-goldAccent glow-accent-box">
                                <div className="text-2xl font-bold mihuru-goldAccent glow-accent">
                                    {timeLeft[unit].toString().padStart(2, '0')}
                                </div>
                                <div className="text-sm text-navy-light">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;
