
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="py-5 px-4 md:px-8 w-full z-10">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-white text-xl md:text-2xl font-serif">
          <span className="font-bold">mi</span>
          <span className="italic">huru</span>
          <span className="text-sm align-top ml-1">®</span>
        </div>
      </div>
      <div className="text-center max-w-lg mx-auto mt-2">
        <p className="text-white/80 text-sm">Financing Freedom. Dreams. You.</p>
      </div>
    </header>
  );
};
