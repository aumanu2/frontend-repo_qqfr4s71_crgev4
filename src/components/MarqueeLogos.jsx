import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const logos = [
  'Acme',
  'Nova',
  'Pulse',
  'Aether',
  'Vertex',
  'Flux',
  'Orbit',
  'Lumen',
];

function Strip({ reverse = false }) {
  const controls = useAnimationControls();

  React.useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({
          x: reverse ? 0 : -800,
          transition: { duration: 18, ease: 'linear' },
        });
        controls.set({ x: reverse ? -800 : 0 });
      }
    };
    loop();
  }, [controls, reverse]);

  return (
    <motion.div className="flex min-w-[1600px] items-center justify-around gap-8 px-4" animate={controls}>
      {logos.map((name, idx) => (
        <div
          key={idx}
          className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white/80 backdrop-blur-md"
        >
          {name}
        </div>
      ))}
    </motion.div>
  );
}

export default function MarqueeLogos() {
  return (
    <section className="relative overflow-hidden bg-black py-10">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.02] to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mb-6 text-center text-sm uppercase tracking-widest text-white/50">Brands we’ve accelerated</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative flex gap-6 overflow-hidden"
      >
        <Strip />
        <Strip reverse />
      </motion.div>
    </section>
  );
}
