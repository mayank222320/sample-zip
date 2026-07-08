/**
 * GlassStats v4 - PREMIUM LIGHT THEME
 * Animated counters with enterprise glassmorphism aesthetic
 */
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, MapPin, Clock, Shield, Zap, Users, ArrowUpRight, Gauge, Database, Radio } from "lucide-react";

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Field Officers",
    sublabel: "Across Maharashtra",
    icon: Users,
    color: "blue",
    hex: "#3b82f6",
  },
  {
    value: 250,
    suffix: "+",
    label: "Active Nodes",
    sublabel: "Stations & Units",
    icon: Radio,
    color: "violet",
    hex: "#8b5cf6",
  },
  {
    value: 1000,
    suffix: "+    ",
    label: "Daily Patrols",
    sublabel: "Logged & Tracked",
    icon: Activity,
    color: "emerald",
    hex: "#10b981",
  },
  {
    value: 99,
    suffix: "%",
    label: "Live Visibility",
    sublabel: "Platform Uptime SLA",
    icon: Zap,
    color: "amber",
    hex: "#f59e0b",
  },
];

const highlights = [
  {
    icon: Clock,
    title: "Setup in Under 48 Hours",
    body: "Full station onboarding, officer registration, and live map deployment — ready in 2 days flat.",
    tag: "Speed",
    color: "blue",
    hex: "#3b82f6",
  },
  {
    icon: Shield,
    title: "256-bit Encrypted Operations",
    body: "All officer positions, deployment orders, and incident data are encrypted end-to-end at the hardware level.",
    tag: "Security",
    color: "violet",
    hex: "#8b5cf6",
  },
  {
    icon: MapPin,
    title: "GPS Tamper Detection",
    body: "Any disconnect, spoofing attempt, or device manipulation is instantly flagged and logged for review.",
    tag: "Integrity",
    color: "emerald",
    hex: "#10b981",
  },
];

const colorConfig: Record<string, { bg: string; bgLight: string; border: string; text: string; gradient: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    bgLight: "bg-blue-500/5",
    border: "border-blue-200/50",
    text: "text-blue-600",
    gradient: "from-blue-500 to-indigo-600",
  },
  violet: {
    bg: "bg-violet-500/10",
    bgLight: "bg-violet-500/5",
    border: "border-violet-200/50",
    text: "text-violet-600",
    gradient: "from-violet-500 to-purple-600",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    bgLight: "bg-emerald-500/5",
    border: "border-emerald-200/50",
    text: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-600",
  },
  amber: {
    bg: "bg-amber-500/10",
    bgLight: "bg-amber-500/5",
    border: "border-amber-200/50",
    text: "text-amber-600",
    gradient: "from-amber-500 to-orange-600",
  },
};

function AnimatedCounter({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const dur = 2500;
    const t0 = performance.now();
    const run = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      const current = Math.round(eased * target);
      setVal(current);
      if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }, [trigger, target]);

  const display = target >= 1000 ? (val >= 1000 ? `${(val / 1000).toFixed(1)}K` : val.toString()) : val.toString();

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

export const GlassStats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none grid-dots-subtle opacity-30" />

      {/* Gradient accents */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/50" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">Live Platform Metrics</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
          >
            Numbers that command{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">respect.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-slate-600 text-lg max-w-xl mx-auto"
          >
            Real metrics from live deployments across Maharashtra and beyond.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const colors = colorConfig[stat.color];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[1.5rem] p-7 cursor-default group bg-white border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${stat.hex}08, transparent 70%)`,
                  }}
                />

                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-px" style={{ background: `linear-gradient(90deg, transparent, ${stat.hex}30, transparent)` }} />

                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 ${colors.bg} rounded-2xl flex items-center justify-center mb-5 border ${colors.border}`}
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={22} className={colors.text} />
                </motion.div>

                {/* Counter */}
                <div
                  className="text-4xl lg:text-5xl font-black mb-2 tabular-nums"
                  style={{ color: stat.hex }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} trigger={inView} />
                </div>

                <div className="text-sm font-bold text-slate-800 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500 font-medium">{stat.sublabel}</div>

                {/* Corner accent */}
                <motion.div
                  className="absolute bottom-5 right-5 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `${stat.hex}10`, border: `1px solid ${stat.hex}20` }}
                >
                  <ArrowUpRight size={12} style={{ color: stat.hex }} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map((h, i) => {
            const HIcon = h.icon;
            const colors = colorConfig[h.color];
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[1.5rem] p-7 group cursor-default bg-white border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: `radial-gradient(ellipse at 20% 50%, ${h.hex}08, transparent 70%)` }}
                />

                {/* Tag chip */}
                <div
                  className={`inline-flex items-center px-3 py-1.5 rounded-full mb-5 text-[9px] font-bold uppercase tracking-wider ${colors.bg} border ${colors.border} ${colors.text}`}
                >
                  {h.tag}
                </div>

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-5 border ${colors.border}`}
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <HIcon size={24} className={colors.text} />
                </motion.div>

                <h3 className="text-base font-bold text-slate-900 mb-3">{h.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{h.body}</p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-px" style={{ background: `linear-gradient(90deg, transparent, ${h.hex}20, transparent)` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlassStats;
