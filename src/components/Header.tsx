
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="py-5 px-4 md:px-8 w-full z-10 bg-mihuru-dark/90 border-b border-white/10">
            <div className="container flex items-center justify-between">
                <div className='flex items-center justify-center flex-col'>
                    <div className="max-w-[10rem] max-h-24">
                        <img src="https://itraveleoblogdiag865.blob.core.windows.net/websiteimages/assets/images/mihuru-logo-light.png" className='w-full h-full' alt="logo" />
                    </div>
                    <p className="text-white/80 text-sm">Financing Freedom. Dreams. You.</p>
                </div>
                <div>
                    <div className="max-w-[10rem] max-h-24">
                        <h1 className='text-center text-mihuru-gold glowing-text text-xl font-serif font-bold tracking-widest'>MIHURU</h1>
                        <p className='text-center text-mihuru-gold glowing-text text-xl font-serif font-bold tracking-widest'>MAX MILES</p>
                    </div>
                </div>
            </div>
        </header>
    );
};
