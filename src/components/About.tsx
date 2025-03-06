import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F5F2EA]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C5530] mb-8 fade-in">About Us</h2>
          <p className="text-lg text-[#1A3B1E] mb-6 fade-in">
            Template section for your family's story and heritage.
          </p>
          <p className="text-lg text-[#1A3B1E] fade-in">
            You can customize this section with your family's unique journey and values.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;