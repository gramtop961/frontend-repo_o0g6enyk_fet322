import React from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, PenTool, Coins, Wand2 } from 'lucide-react';

const services = [
  {
    title: 'SEO Sorcery',
    icon: Search,
    desc: 'Conjure organic growth with technical SEO, on-page mastery, and schema magic.',
    color: '#FF6B35',
  },
  {
    title: 'Social Media Spells',
    icon: Share2,
    desc: 'Enchant audiences across platforms with strategy, content, and community.',
    color: '#9B59B6',
  },
  {
    title: 'Content Conjuring',
    icon: PenTool,
    desc: 'Summon compelling stories that convert with data-backed editorial plans.',
    color: '#FF6B35',
  },
  {
    title: 'PPC Potions',
    icon: Coins,
    desc: 'Brew high-ROI campaigns with laser targeting and relentless optimization.',
    color: '#9B59B6',
  },
  {
    title: 'Automation Alchemy',
    icon: Wand2,
    desc: 'Lead capture, chatbot flows, and email sequences that work while you sleep.',
    color: '#FF6B35',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.05 * i } }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative w-full bg-[#0F0F23] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ fontFamily: 'Montserrat, system-ui' }}>
              Services
            </h2>
            <p className="mt-2 max-w-2xl text-white/70" style={{ fontFamily: 'Inter, system-ui' }}>
              70% professional, 30% Halloween charm. Modern strategies with a seasonal twist.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Subtle glow effects • Smooth hover interactions
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur transition hover:shadow-lg hover:shadow-black/20"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-xl" style={{ background: s.color }} />
              <s.icon className="h-8 w-8" style={{ color: s.color }} aria-hidden />
              <h3 className="mt-4 text-xl font-semibold" style={{ fontFamily: 'Montserrat, system-ui' }}>{s.title}</h3>
              <p className="mt-2 text-sm text-white/75" style={{ fontFamily: 'Inter, system-ui' }}>{s.desc}</p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <button
                className="mt-4 inline-flex items-center text-sm font-medium text-white/90 transition hover:text-white"
                aria-label={`Learn more about ${s.title}`}
              >
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
