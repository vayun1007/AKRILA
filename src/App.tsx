import React, { useEffect } from 'react';
import { ScrollText, Calendar, Users, Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FamilyDay from './components/FamilyDay';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F2EA]">
      <Navbar />
      <main>
        <Hero />
        <FamilyDay />
        <About />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

export default App;