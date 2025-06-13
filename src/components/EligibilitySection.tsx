import { z } from 'zod';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import { loanApplicationSchema } from '../../schema';

type FormValues = z.infer<typeof loanApplicationSchema>;

interface EligibilityState {
    start: boolean;
    eligible: boolean;
    notEligible: boolean;
}

export const EligibilitySection: React.FC = () => {
    const [isChecking, setIsChecking] = useState(false);
    const [isEligible, setIsEligible] = useState<EligibilityState>({
        start: true,
        eligible: false,
        notEligible: false
    });
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        control
    } = useForm<FormValues>({
        resolver: zodResolver(loanApplicationSchema),
    });

    const onSubmit = (data: FormValues) => {
        console.log("Form Data Submitted:", data);
        setIsChecking(true);
        setTimeout(() => {
            setIsChecking(false);
            setIsEligible({
                start: false,
                eligible: true,
                notEligible: false
            });
        }, 2000);
    };

    useEffect(() => {
        if (isEligible.eligible) {
            toast({
                title: "Eligibility Confirmed!",
                description: "Congratulations! You are eligible for our business loan program.",
                variant: "default",
            });
        } else if (isEligible.notEligible) {
            toast({
                title: "Eligibility Check Failed",
                description: "Unfortunately, you do not meet the eligibility criteria for our business loan program at this time.",
                variant: "destructive",
            });
        }
    }, [isEligible, toast]);

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

            {isEligible.start ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-white">First Name</Label>
                            <Input
                                id="firstName"
                                {...register("firstName")}
                                placeholder="Your full name"
                                className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-white">Last Name</Label>
                            <Input
                                id="lastName"
                                {...register("lastName")}
                                placeholder="Your full name"
                                className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                            />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="contactNumber" className="text-white">Contact Number</Label>
                            <Input
                                id="contactNumber"
                                {...register("contactNumber")}
                                placeholder="Your phone number"
                                className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                            />
                            {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">Email ID</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register("email")}
                                placeholder="Your email"
                                className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="travelAgencyName" className="text-white">Travel Agency Name</Label>
                        <Input
                            id="travelAgencyName"
                            {...register("travelAgencyName")}
                            placeholder="Your travel agency name"
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                        />
                        {errors.travelAgencyName && <p className="text-red-500 text-sm">{errors.travelAgencyName.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="loanAmount" className="text-white">Required Loan Amount</Label>
                        <Input
                            id="loanAmount"
                            {...register("loanAmount")}
                            placeholder="Enter amount in Rs."
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                        />
                        {errors.loanAmount && <p className="text-red-500 text-sm">{errors.loanAmount.message}</p>}
                    </div>

                    <div className="flex items-center space-x-2">
                        <Controller
                            name="termsAccepted"
                            control={control}
                            render={({ field }) => (
                                <Checkbox id="termsAccepted" checked={field.value} onCheckedChange={field.onChange} />
                            )}
                        />
                        <label htmlFor="termsAccepted" className="text-white text-sm">
                            I agree to the <a href="https://www.mihuru.com/privacy/terms" target='_blank' className='text-mihuru-gold'>terms and conditions</a>
                        </label>
                    </div>
                    {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted.message}</p>}

                    <Button
                        type="submit"
                        disabled={isChecking}
                        className="w-full bg-mihuru-gold hover:bg-mihuru-gold-light text-mihuru-dark font-bold py-3 text-lg transition-all duration-300 mt-6"
                    >
                        {isChecking ? "Checking Eligibility..." : "Check My Eligibility"}
                    </Button>
                </form>
            ) : isEligible.eligible ? (
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
            ) : (
                <div className="text-center space-y-6">
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-6">
                        <CheckCircle className="h-16 w-16 text-red-400 mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-red-400 mb-2">Not Eligible</h4>
                        <p className="text-white/80">
                            Unfortunately, you do not meet the eligibility criteria for our business loan program at this time.
                        </p>
                    </div>

                    <Button
                        onClick={() => setIsEligible({ start: true, eligible: false, notEligible: false })}
                        className="w-full bg-mihuru-gold hover:bg-mihuru-gold-light text-mihuru-dark font-bold py-3 text-lg transition-all duration-300"
                    >
                        Request for a Callback
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
