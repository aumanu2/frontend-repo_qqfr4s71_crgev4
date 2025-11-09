import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

function Card({ i, tag, title, result, gradient, progress }) {
  // parallax per card
  const y = useTransform(progress, [0, 1], [i * 40, -i * 40]);
  const rotate = useTransform(progress, [0, 1], [0, i % 2 === 0 ? 2 : -2]);
  const opacity = useTransform(progress, [0, 0.15, 1], [0, 1, 1]);

  return (
    <motion.div
      style={{ y, rotate, opacity }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md"
    >
      <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
      <div className="relative">
        <div className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/70">{tag}</div>
        <h3 className="mt-3 text-lg font-medium leading-tight">{title}</h3>
        <div className="mt-6 inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-sm">{result}</div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.35, 0.2]);

  return (
    <section id="work" ref={ref} className="relative bg-black py-24">
      <motion.div style={{ opacity: glowOpacity }} className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(168,85,247,0.25),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-6 text-white lg:px-8">
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected work</h2>
          <p className="mt-3 text-white/70">Scroll to explore outcomes from recent product launches and growth programs.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Card key={c.title} i={i} progress={scrollYProgress} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
