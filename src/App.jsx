import React from 'react';
import Hero3D from './components/Hero3D';
import MarqueeLogos from './components/MarqueeLogos';
import Services from './components/Services';
import CTAContact from './components/CTAContact';
import CaseStudies from './components/CaseStudies';
import ScrollProgress from './components/ScrollProgress';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">Pulse Agency</a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">Let’s talk</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-10 text-white/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm md:flex-row lg:px-8">
        <div>© {new Date().getFullYear()} Pulse Agency. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero3D />
        <MarqueeLogos />
        <Services />
        <CaseStudies />
        <CTAContact />
      </main>
      <Footer />
    </div>
  );
}
