/**
 * GlassCTA — Cinematic full-bleed glass banner with parallax glow
 */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { Meteors } from "./Meteors";

export const GlassCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-white dark:bg-[#030712]">
      {/* Parallax orbs */}
      <motion.div style={{ y: y1 }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: y2 }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-300/20 dark:bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/15 dark:bg-indigo-500/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-[1200px]">
        <TiltCard intensity={5} scale={1.01}>
          <motion.div
            style={{ scale }}
            className="relative rounded-[3rem] overflow-hidden
              bg-white/70 dark:bg-white/3 backdrop-blur-3xl
              border border-white/80 dark:border-white/8
              shadow-[0_40px_100px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.5)]
              dark:shadow-[0_40px_100px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]
              p-12 lg:p-20"
          >
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-transparent to-blue-500/8 pointer-events-none" />
            {/* Top shimmer */}
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            
            {/* Live Meteor Background Effect */}
            <Meteors number={15} />

            {/* Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8
                  bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                  shadow-[0_4px_20px_rgba(0,162,199,0.4)]
                  text-[11px] font-black uppercase tracking-[0.2em]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                Start Your Deployment
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-6xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-tight"
              >
                Ready to command your force{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500">
                  with precision?
                </span>
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-500 dark:text-white/40 mb-12 leading-relaxed"
              >
                Join Maharashtra's live police operations network. Setup in 48 hours. Full station onboarding. Zero infrastructure cost.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              >
                <a
                  href="https://calendly.com/admin-copmap/30min"
                  target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 h-14 px-8 rounded-full font-bold text-sm
                    bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                    shadow-[0_8px_32px_rgba(0,162,199,0.4)]
                    hover:shadow-[0_12px_40px_rgba(0,162,199,0.6)]
                    hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Calendar size={16} />
                  Schedule a Live Demo
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:+918855891936"
                  className="group flex items-center gap-2.5 h-14 px-8 rounded-full font-bold text-sm
                    bg-white/70 dark:bg-white/8 backdrop-blur-xl
                    border border-slate-200/80 dark:border-white/15
                    text-slate-700 dark:text-white
                    hover:bg-white dark:hover:bg-white/12
                    hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone size={16} className="text-cyan-500" />
                  Call Our Team
                </a>
              </motion.div>

              {/* Trust row */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 dark:text-white/25 font-bold uppercase tracking-widest"
              >
                {["No setup fee", "48hr onboarding", "MeitY Recognised", "100% encrypted"].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500" />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  );
};

export default GlassCTA;
