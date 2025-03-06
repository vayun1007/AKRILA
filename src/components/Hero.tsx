import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F5F2EA] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&q=80')] opacity-5"></div>
      <div className="text-center z-10 fade-in">
        <h1 className="text-8xl md:text-9xl font-serif text-[#2C5530] mb-6">AKRILA</h1>
        <p className="text-xl md:text-2xl text-[#1A3B1E] font-light italic">
          "Where traditions bloom and families grow together"
        </p>
      </div>
    </section>
  );
};

export default Hero;