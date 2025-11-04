import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const testimonials = [
  {
    quote: 'They turned our seasonal campaign into a perennial revenue stream. Stunning work.',
    author: 'Ava R., CMO at Moonlit Apparel',
  },
  {
    quote: 'Automation flows that feel human. Lead volume up and support load down.',
    author: 'Jasper K., Founder at Candle & Cauldron',
  },
  {
    quote: 'Professional, fast, and results-driven — with just the right Halloween touch.',
    author: 'Noemi S., VP Growth at Harvest Foods',
  },
];

const CTASection = () => {
  return (
    <section className="relative w-full bg-[#0F0F23] py-24 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.12),transparent_60%)]" aria-hidden />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold sm:text-4xl"
            style={{ fontFamily: 'Montserrat, system-ui' }}
          >
            Don't let your marketing haunt you — let us cast the perfect spell
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 text-white/75"
            style={{ fontFamily: 'Inter, system-ui' }}
          >
            Book a strategy session and see how our automation-first approach unlocks growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#FF6B35] px-6 py-3 font-semibold text-white shadow-lg shadow-[#FF6B35]/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/60"
            >
              <Rocket className="h-5 w-5" /> Start Your Transformation
            </a>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="rounded-xl border border-white/10 bg-white/[0.06] p-5"
            >
              <blockquote className="text-sm text-white/85" style={{ fontFamily: 'Inter, system-ui' }}>
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-3 text-xs text-white/60">{t.author}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
