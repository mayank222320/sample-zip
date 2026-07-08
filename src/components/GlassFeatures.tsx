/**
 * GlassFeatures v4 - PREMIUM LIGHT THEME
 * Bento-grid feature showcase with enterprise aesthetic
 * Glassmorphism cards, animated gradients, interactive depth
 */
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, MapPin, ClipboardCheck, RadioTower, BadgeAlert, Users,
  ArrowUpRight, Zap, Lock, Activity, ChevronRight, Sparkles
} from "lucide-react";

const features = [
  {
    num: "01",
    tag: "Bandobast Command",
    title: "Deploy entire operations from one command map.",
    body: "Assign points, push encrypted orders, manage zones, and track every unit live — all from a single battle-map interface that your HQ controls in real time.",
    icon: ShieldCheck,
    color: "blue",
    hex: "#3b82f6",
    span: "col-span-2",
    bullets: ["Multi-zone point assignment", "Encrypted order dispatch", "Live officer density heat map"],
  },
  {
    num: "02",
    tag: "Live Patrolling",
    title: "Every officer. Every route. Live on your screen.",
    body: "See live GPS positions of every patrolling unit with geo-fence alerts and route deviation tracking.",
    icon: MapPin,
    color: "emerald",
    hex: "#10b981",
    span: "col-span-1",
    bullets: ["Real-time GPS · 30s refresh", "Geo-fence breach alerts", "Route compliance analytics"],
  },
  {
    num: "03",
    tag: "Officer Management",
    title: "Your entire force. Fully digital. Fully accounted.",
    body: "Manage officer profiles, rank, designation, shifts, and attendance from a centralized roster.",
    icon: Users,
    color: "violet",
    hex: "#8b5cf6",
    span: "col-span-1",
    bullets: ["Digital shift generation", "Auto attendance marking", "Force availability dashboard"],
  },
  {
    num: "04",
    tag: "Command Escalation",
    title: "Force requests flow up the chain. Precisely.",
    body: "Station-to-ACP-to-DCP-to-CP escalation built into the system. Every request logged, tracked, and fulfilled digitally.",
    icon: RadioTower,
    color: "amber",
    hex: "#f59e0b",
    span: "col-span-1",
    bullets: ["Defined escalation hierarchy", "Force reserve tracking", "Real-time fulfillment status"],
  },
  {
    num: "05",
    tag: "Incident Alerts",
    title: "Nearest officer auto-dispatched. Instantly.",
    body: "AI-driven nearest-officer dispatch uses live GPS to automatically route the closest available unit to any reported incident.",
    icon: BadgeAlert,
    color: "rose",
    hex: "#f43f5e",
    span: "col-span-2",
    bullets: ["Automatic proximity detection", "Push notification dispatch", "Incident resolution tracking"],
  },
  {
    num: "06",
    tag: "Digital Paperwork",
    title: "90% of your station diary — automated.",
    body: "Daily duty assignments, muster rolls, bandobast reports auto-generated from live operational data. No typing required.",
    icon: ClipboardCheck,
    color: "cyan",
    hex: "#06b6d4",
    span: "col-span-1",
    bullets: ["Auto-generated duty reports", "Digital muster rolls", "One-click export to PDF"],
  },
];

const statsBar = [
  { value: "10K+", label: "Officers", icon: Users, color: "blue" },
  { value: "99%", label: "Uptime", icon: Activity, color: "emerald" },
  { value: "AES-256", label: "Encryption", icon: Lock, color: "violet" },
  { value: "<30s", label: "GPS Refresh", icon: Zap, color: "amber" },
];

const colorMap: Record<string, { bg: string; bgLight: string; border: string; text: string; gradient: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    bgLight: "bg-blue-500/5",
    border: "border-blue-200/60",
    text: "text-blue-600",
    gradient: "from-blue-500 to-indigo-500"
  },
  emerald: {
    bg: "bg-emerald-500/10",
    bgLight: "bg-emerald-500/5",
    border: "border-emerald-200/60",
    text: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-500"
  },
  violet: {
    bg: "bg-violet-500/10",
    bgLight: "bg-violet-500/5",
    border: "border-violet-200/60",
    text: "text-violet-600",
    gradient: "from-violet-500 to-purple-500"
  },
  amber: {
    bg: "bg-amber-500/10",
    bgLight: "bg-amber-500/5",
    border: "border-amber-200/60",
    text: "text-amber-600",
    gradient: "from-amber-500 to-orange-500"
  },
  rose: {
    bg: "bg-rose-500/10",
    bgLight: "bg-rose-500/5",
    border: "border-rose-200/60",
    text: "text-rose-600",
    gradient: "from-rose-500 to-pink-500"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    bgLight: "bg-cyan-500/5",
    border: "border-cyan-200/60",
    text: "text-cyan-600",
    gradient: "from-cyan-500 to-blue-500"
  },
};

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const FeatureCard = ({ feature, index, isActive, onClick }: FeatureCardProps) => {
  const Icon = feature.icon;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);
  const colors = colorMap[feature.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-[1.5rem] cursor-pointer transition-all duration-500 bg-white border ${
        isActive || hovered
          ? `${colors.border} shadow-xl shadow-slate-900/5`
          : "border-slate-200/60 shadow-sm"
      } ${feature.span === "col-span-2" ? "lg:col-span-2" : ""}`}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive || hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${feature.hex}10, transparent 70%)`,
        }}
      />

      {/* Top shimmer line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[1.5rem]"
        style={{
          background: `linear-gradient(90deg, transparent, ${feature.hex}${isActive || hovered ? "60" : "30"}, transparent)`,
        }}
        animate={{ opacity: isActive || hovered ? 1 : 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10 p-7 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <motion.div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${colors.bg} border ${colors.border}`}
              whileHover={{ scale: 1.08, rotate: -3 }}
              transition={{ duration: 0.3 }}
            >
              <Icon size={20} className={colors.text} />
            </motion.div>
            <div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                Feature {feature.num}
              </div>
              <div className={`text-[11px] font-bold uppercase tracking-wider ${colors.text}`}>
                {feature.tag}
              </div>
            </div>
          </div>

          <motion.div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${colors.bgLight} border ${colors.border}`}
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={14} className={colors.text} />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-3">
          {feature.title}
        </h3>

        {/* Body */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
          {feature.body}
        </p>

        {/* Bullets */}
        <AnimatePresence>
          {(isActive || feature.span === "col-span-2") && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2"
            >
              {feature.bullets.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-2 text-xs text-slate-600"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: feature.hex }}
                  />
                  {b}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom gradient line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-[1.5rem]"
          style={{
            background: `linear-gradient(90deg, transparent, ${feature.hex}40, transparent)`,
          }}
          animate={{ opacity: isActive || hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export const GlassFeatures = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none grid-lines opacity-50" />

      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-[1400px]">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Platform Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-5"
          >
            Everything your command{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                needs in one platform.
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Six purpose-built modules that work together seamlessly to digitize every layer of law enforcement operations.
          </motion.p>
        </div>

        {/* Live stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          {statsBar.map((s) => {
            const SIcon = s.icon;
            const colors = colorMap[s.color];
            return (
              <div
                key={s.label}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white border ${colors.border} shadow-sm`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${colors.bg}`}>
                  <SIcon size={15} className={colors.text} />
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 leading-none">{s.value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{s.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.num}
              feature={feature}
              index={i}
              isActive={activeFeature === i}
              onClick={() => setActiveFeature(activeFeature === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://calendly.com/admin-copmap/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 h-14 px-8 rounded-full text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Sparkles size={16} />
            See All Features Live
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="text-xs text-slate-500 font-medium">
            No setup fee · 48hr onboarding · Maharashtra-ready
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlassFeatures;
