import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    title: 'Haunted Harvest Foods',
    result: '↑ 172% organic traffic in 90 days',
    gradient: 'from-[#1A1A2E] via-[#201B2D] to-[#0F0F23]',
  },
  {
    title: 'Moonlit Apparel',
    result: '3.4x ROAS across paid channels',
    gradient: 'from-[#0F0F23] via-[#1A1A2E] to-[#0F0F23]',
  },
  {
    title: 'Candle & Cauldron Co.',
    result: '↑ 58% email-driven revenue',
    gradient: 'from-[#1A1A2E] via-[#0F0F23] to-[#201B2D]',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative w-full bg-[#0F0F23] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ fontFamily: 'Montserrat, system-ui' }}>
            Portfolio & Case Studies
          </h2>
          <p className="mt-2 max-w-2xl text-white/70" style={{ fontFamily: 'Inter, system-ui' }}>
            A carousel-inspired grid with a subtle parallax hover for depth and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 * idx }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${item.gradient} p-6`}
            >
              <motion.div
                className="absolute -left-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-2xl"
                style={{ background: idx % 2 === 0 ? '#FF6B35' : '#9B59B6' }}
                initial={{ scale: 0.9, opacity: 0.15 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                aria-hidden
              />

              <div className="relative">
                <h3 className="text-xl font-semibold" style={{ fontFamily: 'Montserrat, system-ui' }}>{item.title}</h3>
                <p className="mt-2 text-sm text-white/80" style={{ fontFamily: 'Inter, system-ui' }}>
                  {item.result}
                </p>

                <motion.div
                  className="mt-6 h-40 w-full overflow-hidden rounded-xl bg-white/[0.03]"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  aria-label="Case study visual"
                >
                  <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,53,0.3),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(155,89,182,0.25),transparent_40%)]" />
                </motion.div>

                <div className="mt-4 flex items-center justify-between">
                  <a href="#" className="text-sm text-white/90 underline decoration-white/20 underline-offset-4 hover:text-white">
                    Read case study
                  </a>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">ghost-frame</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
