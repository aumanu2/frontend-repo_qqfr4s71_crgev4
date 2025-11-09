import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const logos = ['Acme', 'Nova', 'Pulse', 'Aether', 'Vertex', 'Flux', 'Orbit', 'Lumen'];

function Strip({ reverse = false }) {
  const stripRef = useRef(null);

  useEffect(() => {
    if (!stripRef.current) return;
    const distance = 800;
    const ctx = gsap.context(() => {
      const from = reverse ? -distance : 0;
      const to = reverse ? 0 : -distance;
      const tween = gsap.fromTo(
        stripRef.current,
        { x: from },
        {
          x: to,
          duration: 18,
          ease: 'linear',
          repeat: -1,
        }
      );
      return () => tween.kill();
    }, stripRef);
    return () => ctx.revert();
  }, [reverse]);

  return (
    <div ref={stripRef} className="flex min-w-[1600px] items-center justify-around gap-8 px-4">
      {logos.map((name, idx) => (
        <div
          key={idx}
          className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white/80 backdrop-blur-md"
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export default function MarqueeLogos() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('[data-marquee="title"]', {
        y: 24,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
      gsap.from('[data-marquee="wrap"]', {
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black py-10">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.02] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-marquee="title" className="mb-6 text-center text-sm uppercase tracking-widest text-white/50">Brands we’ve accelerated</div>
      </div>
      <div data-marquee="wrap" className="relative flex gap-6 overflow-hidden">
        <Strip />
        <Strip reverse />
      </div>
    </section>
  );
}
