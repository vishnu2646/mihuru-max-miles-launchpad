
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="py-5 px-4 md:px-8 w-full z-10">
            <div className="container mx-auto flex justify-center items-center">
                <div className="max-w-24 max-h-24">
                    <img src="https://ik.imagekit.io/Mihuru/campaign/logo-light-mode.png" className='w-full h-full' alt="logo" />
                </div>
            </div>
            <div className="text-center max-w-lg mx-auto mt-2">
                <p className="text-white/80 text-sm">Financing Freedom. Dreams. You.</p>
            </div>
        </header>
    );
};
