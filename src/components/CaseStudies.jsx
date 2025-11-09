import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    tag: 'Fintech',
    title: 'Scaled CAC down 34% with creative sprints',
    result: '3.1x ROAS',
    gradient: 'from-cyan-500/20 via-fuchsia-500/10 to-emerald-500/20',
  },
  {
    tag: 'SaaS',
    title: 'Revamped brand system and motion language',
    result: '+62% demo conversions',
    gradient: 'from-amber-400/20 via-rose-500/10 to-purple-500/20',
  },
  {
    tag: 'E‑commerce',
    title: 'Launched 3D-led campaign for flagship drop',
    result: '$1.2M launch week',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-sky-400/20',
  },
];

function Card({ i, tag, title, result, gradient }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: i * 0.08,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
        },
      });
    }, cardRef);
    return () => ctx.revert();
  }, [i]);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md"
    >
      <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
      <div className="relative">
        <div className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/70">{tag}</div>
        <h3 className="mt-3 text-lg font-medium leading-tight">{title}</h3>
        <div className="mt-6 inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-sm">{result}</div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-cases="title"]', {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative bg-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.25),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-6 text-white lg:px-8">
        <div data-cases="title" className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected work</h2>
          <p className="mt-3 text-white/70">Scroll to explore outcomes from recent product launches and growth programs.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Card key={c.title} i={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
