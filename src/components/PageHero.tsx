import { motion } from "framer-motion";
import { ReactNode } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// HERO SIZING CONFIG — Change values here to affect ALL page hero sections
// ─────────────────────────────────────────────────────────────────────────────
export const HERO_SIZE = {
  // Padding top/bottom (Tailwind classes)
  pt: "pt-28",
  pb: "pb-14",
  // Min height
  minH: "min-h-[38vh]",
};

// ─────────────────────────────────────────────────────────────────────────────

interface PageHeroProps {
  badge: string;
  badgeType?: "pulse" | "ping";
  title: ReactNode;
  subtitle: string;
  actions?: ReactNode;  // optional CTA buttons below subtitle
  bg?: string;
}

const PageHero = ({
  badge,
  badgeType = "pulse",
  title,
  subtitle,
  actions,
  bg = "bg-transparent",
}: PageHeroProps) => {
  return (
    <section
      className={`relative ${HERO_SIZE.pt} ${HERO_SIZE.pb} overflow-hidden ${bg} flex flex-col items-center justify-center ${HERO_SIZE.minH}`}
    >
      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
      {/* Glow blob */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00a2c7]/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl mb-8"
        >
          {badgeType === "ping" ? (
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c3eb] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00c3eb]" />
            </span>
          ) : (
            <div className="w-2 h-2 rounded-full bg-[#00a2c7] shadow-[0_0_10px_#00a2c7] animate-pulse" />
          )}
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-700 dark:text-white/80">
            {badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-heading font-black text-slate-900 dark:text-white leading-[0.95] tracking-tighter mb-8"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
        >
          {subtitle}
        </motion.p>

        {/* Optional actions */}
        {actions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {actions}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
