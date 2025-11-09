import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Shield, Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero3D() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('[data-hero="chip"]', { y: 20, autoAlpha: 0, duration: 0.6 })
        .from('[data-hero="title"]', { y: 24, autoAlpha: 0, duration: 0.8 }, '-=0.2')
        .from('[data-hero="desc"]', { y: 18, autoAlpha: 0, duration: 0.6 }, '-=0.3')
        .from('[data-hero="cta"] > *', { y: 16, autoAlpha: 0, stagger: 0.08, duration: 0.5 }, '-=0.2')
        .from('[data-hero="trust"]', { y: 12, autoAlpha: 0, duration: 0.5 }, '-=0.2');
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-black text-white">
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.2),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.25),transparent_45%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 py-24 md:flex-row md:py-28 lg:gap-16 lg:px-8">
        {/* Left: copy */}
        <div className="relative z-10 w-full md:w-1/2">
          <div data-hero="chip" className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-sm text-white/80">Interactive. Futuristic. Minimal.</span>
          </div>

          <h1 data-hero="title" className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            We design growth for brands that move at the speed of tech
          </h1>

          <p data-hero="desc" className="mt-4 max-w-xl text-lg text-white/70 md:text-xl">
            A marketing agency crafting immersive campaigns, performance funnels, and product launches powered by 3D, motion, and data.
          </p>

          <div data-hero="cta" className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Explore our work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Book a strategy call
              <Rocket className="h-4 w-4" />
            </a>
          </div>

          <div data-hero="trust" className="mt-6 flex items-center gap-4 text-white/60">
            <div className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm">Trusted by startups & enterprises</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="text-sm">Avg. 4.9/5 client satisfaction</div>
          </div>
        </div>

        {/* Right: Spline 3D scene */}
        <div className="relative z-0 h-[340px] w-full md:h-[520px] md:w-1/2 lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(255,255,255,0.08)] backdrop-blur-sm" />
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <Spline
              scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* subtle gradient sheen on top of the 3D canvas */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
