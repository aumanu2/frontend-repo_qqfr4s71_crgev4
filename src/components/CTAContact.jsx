import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Calendar } from 'lucide-react';

export default function CTAContact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_55%)]" />
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] p-10 backdrop-blur"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.06),transparent)] [mask-image:radial-gradient(1200px_400px_at_10%_0%,black,transparent)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-white/70">
              <Calendar className="h-4 w-4" />
              Limited April slots available
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Let’s build your next growth chapter</h3>
            <p className="mt-3 max-w-2xl text-white/70">Tell us about your goals. We’ll come back with an action plan and a timeline within 24 hours.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:hello@youragency.com" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black transition-transform duration-300 hover:scale-[1.02]">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white backdrop-blur hover:bg-white/10">
                Book a call
                <PhoneCall className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
