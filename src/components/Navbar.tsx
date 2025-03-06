import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#F5F2EA]/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-serif text-[#2C5530]">AKRILA</a>
          
          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#family-day" className="text-[#2C5530] hover:text-[#1A3B1E] transition-colors">
              Family Day
            </a>
            <a href="#about" className="text-[#2C5530] hover:text-[#1A3B1E] transition-colors">
              About
            </a>
            <a href="#gallery" className="text-[#2C5530] hover:text-[#1A3B1E] transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-[#2C5530] hover:text-[#1A3B1E] transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <a href="#family-day" className="text-[#2C5530] hover:text-[#1A3B1E] transition-colors">
              Family Day
            </a>
            <a href="#about" className="text-[#2C5530] hover:text-[#1A3B1E] transition-colors">
              About
            </a>
            <a href="#gallery" className="text-[#2C5530] hover:text-[#1A3B1E] transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-[#2C5530] hover:text-[#1A3B1E] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;