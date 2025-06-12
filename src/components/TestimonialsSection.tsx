
import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Delhi Travel Services",
      location: "New Delhi",
      rating: 5,
      text: "Mihuru's business loan helped me expand my travel agency to three new locations. The process was incredibly smooth and the rewards were a fantastic bonus!"
    },
    {
      name: "Priya Sharma",
      business: "Wanderlust Tours",
      location: "Mumbai",
      rating: 5,
      text: "I was skeptical about business loans, but Mihuru made it so easy. Got approved in just 2 days and the JBL earbuds were a sweet surprise!"
    },
    {
      name: "Amit Patel",
      business: "Gujarat Travel Hub",
      location: "Ahmedabad", 
      rating: 5,
      text: "The flexible repayment options suited my seasonal business perfectly. Already planning to apply for my second loan to qualify for the lucky draw!"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-mihuru-dark/95 to-mihuru-dark">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-mihuru-gold">
            What Travel Agents Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear from fellow travel agents who have grown their businesses with Mihuru
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 relative hover:border-mihuru-gold/30 transition-all duration-300"
            >
              <div className="absolute -top-3 -left-3 bg-mihuru-gold rounded-full p-2">
                <Quote className="h-4 w-4 text-mihuru-dark" />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-mihuru-gold fill-current" />
                  ))}
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="border-t border-white/20 pt-4">
                <h4 className="font-bold text-mihuru-gold">{testimonial.name}</h4>
                <p className="text-white/70 text-sm">{testimonial.business}</p>
                <p className="text-white/60 text-xs">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-mihuru-blue/20 rounded-lg p-6 max-w-2xl mx-auto border border-mihuru-blue/30">
            <p className="text-white/90 font-medium">
              Join <span className="text-mihuru-gold font-bold">500+</span> travel agents who have already benefited from Mihuru's business loans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
