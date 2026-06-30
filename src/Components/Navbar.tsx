import React from 'react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="bg-lime-500 text-slate-900 text-center py-2 text-sm font-bold uppercase tracking-wider">
        Upgrade your daily miles! Get 15% off all high-cushion trainers this weekend only.
      </div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black italic tracking-tighter">STRIDES</h1>
        <nav>
          <button 
            onClick={onCartClick}
            className="font-semibold hover:text-lime-400 transition-colors"
          >
            Cart ({cartCount})
          </button>
        </nav>
      </div>
    </header>
  );
};