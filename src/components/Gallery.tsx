import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-[#F5F2EA]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2C5530] text-center mb-16 fade-in">
          Gallery
        </h2>
        <div className="text-center fade-in mb-10">
          <p className="text-lg text-[#1A3B1E]">
            Template section for your family photos and memories.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 fade-in">
          <img src="img1.jpg" alt="Gallery Image 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src="img2.jpg" alt="Gallery Image 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src="img3.jpg" alt="Gallery Image 3" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src="img4.jpg" alt="Gallery Image 4" className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
