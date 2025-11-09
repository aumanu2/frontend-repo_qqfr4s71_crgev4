import React, { useEffect, useRef } from 'react';
import { Rocket, BarChart3, Palette, Megaphone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Rocket,
    title: 'Go-to-Market Sprints',
    desc: 'Rapid validation, positioning, and launch playbooks engineered for speed.',
    accent: 'from-fuchsia-500/20 to-purple-500/20',
  },
  {
    icon: BarChart3,
    title: 'Performance Growth',
    desc: 'Full-funnel acquisition with creative testing, CRO, and analytics.',
    accent: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: Palette,
    title: 'Brand & Experience',
    desc: 'Identity systems, 3D/interactive hero moments, and motion language.',
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: Megaphone,
    title: 'Campaigns & Content',
    desc: 'Always-on content engines that convert attention into demand.',
    accent: 'from-amber-500/20 to-rose-500/20',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-service-card]', {
        y: 16,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Capabilities engineered for impact</h2>
          <p className="mt-3 text-white/70">We merge brand artistry with performance science to build momentum your market can feel.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              data-service-card
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${s.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
