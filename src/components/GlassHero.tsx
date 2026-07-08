/**
 * GlassHero v5 - PREMIUM LIGHT THEME
 * Stunning enterprise hero with:
 * - Animated mesh gradient background
 * - Dynamic 3D dashboard showcase
 * - Live typing effect
 * - Floating glass elements
 * - Professional law enforcement aesthetic
 */
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Shield, MapPin, Lock, ChevronDown, Zap, Activity, Radio, Database, Cpu } from "lucide-react";

const typingWords = [
  "bandobast operations.",
  "live GPS patrolling.",
  "officer management.",
  "digital force ops.",
  "command escalation.",
];

const TypingEffect = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[wordIdx];
    let timer: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (charIdx < word.length) {
        timer = setTimeout(() => setCharIdx((i) => i + 1), 60);
      } else {
        timer = setTimeout(() => setDeleting(true), 2200);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => setCharIdx((i) => i - 1), 32);
      } else {
        setDeleting(false);
        setWordIdx((w) => (w + 1) % typingWords.length);
      }
    }
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx]);

  return (
    <span className="relative">
      <span className="font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
        {typingWords[wordIdx].slice(0, charIdx)}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[0.85em] bg-blue-500 align-middle ml-0.5 rounded-sm"
      />
    </span>
  );
};

const DashboardShowcase = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 30 });
  const rotY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d", perspective: 1200 }}
      className="relative w-full max-w-[640px]"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Outer glow */}
      <div className="absolute -inset-4 rounded-[2rem] pointer-events-none bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-cyan-500/10 blur-2xl" />

      {/* Main card */}
      <div
        className="relative rounded-[1.5rem] overflow-hidden border border-slate-200/50 bg-white/90 backdrop-blur-xl shadow-2xl shadow-slate-900/10"
        style={{
          boxShadow: "0 40px 80px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(255,255,255,0.8) inset",
        }}
      >
        {/* Top gradient accent */}
        <div className="h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

        {/* Window header */}
        <div className="px-5 py-3 flex items-center gap-3 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex gap-2">
            {[{ bg: "#ff5f57" }, { bg: "#febc2e" }, { bg: "#28c840" }].map((style, i) => (
              <div key={i} className="w-3 h-3 rounded-full" style={{ background: style.bg }} />
            ))}
          </div>
          <div className="flex-1 flex items-center justify-center gap-2">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"
            />
            <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase font-medium">
              CopMap · Command Center · LIVE
            </span>
          </div>
        </div>

        {/* Dashboard screenshot */}
        <div className="relative">
          <img
            src="/hero-dashboard.png"
            alt="CopMap Command Dashboard"
            className="w-full"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />

          {/* Scan line effect */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] pointer-events-none bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />
        </div>
      </div>

      {/* Floating live badge */}
      <motion.div
        className="absolute -top-4 -right-4 flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-[11px] font-bold bg-white border border-emerald-200 shadow-lg shadow-emerald-500/10"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-emerald-600">LIVE OPS</span>
      </motion.div>

      {/* Floating stats card */}
      <motion.div
        className="absolute -bottom-5 -left-5 px-5 py-4 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          10K+
        </div>
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Field Officers</div>
      </motion.div>

      {/* Floating activity card */}
      <motion.div
        className="absolute -top-2 -left-8 px-3 py-2 rounded-xl bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/30"
        animate={{ y: [0, -5, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="flex items-center gap-1.5">
          <Activity size={12} />
          <span>247 Active Patrols</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const GlassHero = () => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/80">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary blob */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "900px",
            height: "700px",
            top: "-200px",
            right: "-100px",
            background: "radial-gradient(ellipse, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Secondary blob */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "800px",
            height: "600px",
            bottom: "-150px",
            left: "-150px",
            background: "radial-gradient(ellipse, rgba(6, 182, 212, 0.08) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Accent blob */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "400px",
            top: "40%",
            left: "30%",
            background: "radial-gradient(ellipse, rgba(139, 92, 246, 0.06) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, 60, -30, 0], y: [0, -40, 20, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none grid-dots-subtle opacity-50" />

      {/* Gradient lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 max-w-[1440px] pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          {/* LEFT — Text block */}
          <div className="flex-1 max-w-[680px] text-center lg:text-left">
            {/* Live status pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full mb-8 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                Live in Maharashtra · MeitY Recognised
              </span>
            </motion.div>

            {/* Giant headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-black leading-[1.05] tracking-[-0.04em] mb-6 text-slate-900"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              Plan.{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Deploy.
              </span>
              <br />
              Monitor.{" "}
              <span className="font-light text-slate-400">Audit.</span>
            </motion.h1>

            {/* Gradient accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="h-1 rounded-full mb-8 lg:mb-10 mx-auto lg:mx-0 max-w-xs lg:max-w-md origin-left bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent"
            />

            {/* Tagline with typing */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl leading-relaxed mb-4 text-slate-600"
            >
              India's only command platform for{" "}
              <TypingEffect />
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm mb-12 text-slate-400"
            >
              Trusted from station to state — real-time GPS · AES-256 encryption · 48hr onboarding
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              {/* Primary CTA */}
              <motion.a
                href="https://calendly.com/admin-copmap/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 h-14 px-8 rounded-full font-bold text-sm text-white overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap size={16} />
                Request Live Demo
                <motion.span className="group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowRight size={16} />
                </motion.span>
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="https://drive.google.com/file/d/16ZrLH4Zp5Umc7hI2i-xDVt_XCyBDFeLN/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 h-14 px-7 rounded-full font-semibold text-sm text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200/50"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play size={14} className="ml-0.5 text-blue-600" />
                </motion.div>
                Watch How It Works
              </motion.a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3"
            >
              {[
                { icon: Shield, text: "Gov-Grade Encrypted", color: "blue" },
                { icon: MapPin, text: "Live in Maharashtra", color: "emerald" },
                { icon: Lock, text: "Role-Based Access", color: "indigo" },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-2.5 text-xs font-medium text-slate-500">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center bg-${color}-500/10 border border-${color}-200/50`}>
                    <Icon size={13} className={`text-${color}-600`} />
                  </div>
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Dashboard showcase */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <DashboardShowcase />
          </div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "10K+", label: "Field Officers", color: "blue", icon: Activity },
            { value: "250+", label: "Active Nodes", color: "violet", icon: Radio },
            { value: "1K+", label: "Daily Patrols", color: "emerald", icon: MapPin },
            { value: "99%", label: "Platform Uptime", color: "amber", icon: Zap },
          ].map((s, i) => {
            const SIcon = s.icon;
            return (
              <motion.div
                key={s.label}
                className="relative overflow-hidden rounded-2xl p-5 text-center bg-white/80 border border-slate-200/50 hover:bg-white hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.08 }}
                whileHover={{ y: -3 }}
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-${s.color}-400 to-transparent`} />

                <div className={`w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center bg-${s.color}-500/10`}>
                  <SIcon size={18} className={`text-${s.color}-600`} />
                </div>
                <div className={`text-2xl font-black bg-gradient-to-r from-${s.color}-600 to-${s.color}-500 bg-clip-text text-transparent`}>
                  {s.value}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mt-1">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full flex justify-center pt-2 bg-white/80 border border-slate-200 shadow-sm"
        >
          <div className="w-1 h-2.5 rounded-full bg-blue-500" />
        </motion.div>
        <ChevronDown size={14} className="text-slate-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default GlassHero;
