import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const yMoon = useTransform(scrollY, [0, 500], [0, 40]);
  const yFog = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <section
      aria-label="Hero"
      className="relative min-h-[90vh] w-full overflow-hidden bg-[#0F0F23] text-white"
    >
      {/* Subtle star field */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.35) 0, transparent 60%), radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.25) 0, transparent 60%), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.2) 0, transparent 60%)'
        }} />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to ensure text contrast - non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F0F23]/60 via-[#0F0F23]/50 to-[#0F0F23]" />

      {/* Parallax elements */}
      <motion.div style={{ y: yMoon }} className="pointer-events-none absolute right-6 top-8" aria-hidden>
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#9B59B6] blur-[2px] shadow-[0_0_40px_#FF6B35]" />
      </motion.div>
      <motion.div style={{ y: yFog }} className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden>
        <div className="h-40 w-full bg-gradient-to-t from-[#0F0F23] via-[#0F0F23]/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-[#FF6B35]" />
          Halloween Professional • Elevate your brand
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl"
          style={{ fontFamily: 'Montserrat, system-ui' }}
        >
          Spellbinding digital marketing solutions that haunt your competition
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg"
          style={{ fontFamily: 'Inter, system-ui' }}
        >
          Ok Ok Digital Marketing Agency blends cutting-edge strategy with an elegant Halloween aesthetic for a modern, credible brand presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-md bg-[#FF6B35] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#FF6B35]/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/60"
          >
            <Rocket className="h-5 w-5" /> Start Your Transformation
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            View Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
