import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import CTASection from './components/CTASection';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0F0F23] text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0F0F23]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold" style={{ fontFamily: 'Montserrat, system-ui' }}>
            Ok Ok Agency
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex" style={{ fontFamily: 'Inter, system-ui' }}>
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#portfolio">Portfolio</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-[#FF6B35] px-4 py-2 text-sm font-semibold text-white shadow shadow-[#FF6B35]/30 transition hover:brightness-110"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0F0F23] py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <p>
            © {new Date().getFullYear()} Ok Ok Digital Marketing Agency. Professional results with a refined Halloween aesthetic.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
