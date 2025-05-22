
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-mihuru-dark/90 border-t border-white/10 py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <div className="text-white text-2xl font-serif">
            <span className="font-bold">mi</span>
            <span className="italic">huru</span>
            <span className="text-sm align-top ml-1">®</span>
          </div>
          <p className="text-white/60 text-sm mt-1">Financing Freedom. Dreams. You.</p>
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <h4 className="font-bold text-white mb-3">Contact</h4>
              <p className="text-white/60">support@mihuru.com</p>
              <p className="text-white/60">+91 8005678900</p>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-white mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-mihuru-gold">About Us</a></li>
                <li><a href="#" className="text-white/60 hover:text-mihuru-gold">Loan Products</a></li>
                <li><a href="#" className="text-white/60 hover:text-mihuru-gold">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold text-white mb-3">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-white/60 hover:text-mihuru-gold">Facebook</a>
                <a href="#" className="text-white/60 hover:text-mihuru-gold">Instagram</a>
                <a href="#" className="text-white/60 hover:text-mihuru-gold">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-white/40 text-sm">
            <p>© 2025 Mihuru Financial Services. All rights reserved.</p>
            <p className="mt-1">
              <a href="#" className="hover:text-mihuru-gold">Privacy Policy</a> | 
              <a href="#" className="hover:text-mihuru-gold ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
