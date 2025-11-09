import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Complex scroll-controlled experience with pinning, parallax layers, and SVG path draw
export default function ScrollControl() {
  const sectionRef = useRef(null);
  const layersRef = useRef([]);
  const headingsRef = useRef([]);
  const pathRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const layers = layersRef.current;
      const headings = headingsRef.current;
      const path = pathRef.current;

      // Prep
      gsap.set(headings, { autoAlpha: 0, yPercent: 20 });
      gsap.set(layers, { willChange: 'transform' });

      // SVG path draw setup
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      }

      // Master timeline controlling the whole section as user scrolls
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=3000',
          scrub: true,
          pin: true,
        },
      });

      // Phase 1: Parallax layers enter
      tl.to(layers, {
        yPercent: (i) => (i + 1) * -15,
        scale: (i) => 1 + i * 0.03,
        duration: 1,
      }, 0);

      // Phase 2: Reveal first heading
      if (headings[0]) {
        tl.to(headings[0], { autoAlpha: 1, yPercent: 0, duration: 0.6 }, 0.2)
          .to(headings[0], { autoAlpha: 0, yPercent: -20, duration: 0.6 }, 0.9);
      }

      // Phase 3: Draw path while parallax continues
      if (path) {
        tl.to(path, { strokeDashoffset: 0, duration: 1 }, 0.4);
      }

      // Phase 4: Second heading
      if (headings[1]) {
        tl.to(headings[1], { autoAlpha: 1, yPercent: 0, duration: 0.6 }, 1.1)
          .to(headings[1], { autoAlpha: 0, yPercent: -20, duration: 0.6 }, 1.8);
      }

      // Phase 5: Third heading and stronger depth
      if (headings[2]) {
        tl.to(layers, { yPercent: (i) => (i + 1) * -30, scale: (i) => 1 + i * 0.06, duration: 1 }, 1.6)
          .to(headings[2], { autoAlpha: 1, yPercent: 0, duration: 0.6 }, 2.0);
      }

      // Optional ambient background hue shift
      tl.to(section, { background: 'radial-gradient(1200px 800px at 50% 50%, rgba(99,102,241,0.15), rgba(0,0,0,0.8))' }, 1.2);

      return () => {
        tl.recent();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="control" className="relative h-[200vh] overflow-hidden bg-black text-white">
      {/* Parallax layers */}
      <div className="pointer-events-none absolute inset-0">
        <div
          ref={(el) => (layersRef.current[0] = el)}
          className="absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#22d3ee33,transparent_60%)] blur-2xl"
        />
        <div
          ref={(el) => (layersRef.current[1] = el)}
          className="absolute left-1/3 top-1/3 h-[90vmax] w-[90vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_70%_50%,#a78bfa33,transparent_60%)] blur-2xl"
        />
        <div
          ref={(el) => (layersRef.current[2] = el)}
          className="absolute left-2/3 top-2/3 h-[75vmax] w-[75vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_70%,#34d39933,transparent_60%)] blur-xl"
        />
      </div>

      {/* Content wrapper pinned by ScrollTrigger */}
      <div className="relative z-10 mx-auto flex h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h2 ref={(el) => (headingsRef.current[0] = el)} className="mb-6 text-4xl font-semibold tracking-tight text-white/90 md:text-6xl">
          Precision scroll control
        </h2>
        <h2 ref={(el) => (headingsRef.current[1] = el)} className="mb-6 text-4xl font-semibold tracking-tight text-white/90 md:text-6xl">
          Layered parallax depth
        </h2>
        <h2 ref={(el) => (headingsRef.current[2] = el)} className="mb-6 text-4xl font-semibold tracking-tight text-white/90 md:text-6xl">
          Narrative sequencing
        </h2>

        <p className="mx-auto max-w-2xl text-balance text-white/70">
          This section pins and scrubs a master timeline across multiple scenes. Headings transition in sequence while gradient layers move at different speeds for cinematic depth.
        </p>

        {/* SVG path that draws with scroll */}
        <svg className="mt-10 h-40 w-full" viewBox="0 0 800 160" fill="none">
          <path
            ref={pathRef}
            d="M20 140 C 180 20, 260 220, 400 80 S 700 140, 780 40"
            stroke="url(#g)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Soft vignette overlay that never blocks interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(0,0,0,0),rgba(0,0,0,0.6))]" />
    </section>
  );
}
