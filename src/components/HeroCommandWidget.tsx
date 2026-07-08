import { motion } from "framer-motion";
import { Shield, MapPin, Radio, Activity, Crosshair, Zap } from "lucide-react";

/**
 * HeroCommandWidget — A 3D floating command-center style widget
 * for the hero section right panel. Inspired by Awwwards / Framer
 * SaaS hero patterns. Pure CSS 3D with Framer Motion micro-animations.
 */

const liveEvents = [
  { icon: MapPin,   label: "Zone Alpha — Deployed",        value: "32 officers",  color: "#00c3eb", dot: "bg-emerald-400" },
  { icon: Radio,    label: "Dispatch sent — Sector 4",     value: "Encrypted",    color: "#38bdf8", dot: "bg-sky-400" },
  { icon: Crosshair,label: "GPS attendance — Shift A",     value: "100% tracked", color: "#a78bfa", dot: "bg-violet-400" },
  { icon: Activity, label: "Patrol compliance",            value: "97.3%",        color: "#34d399", dot: "bg-emerald-400" },
];

const miniStats = [
  { label: "Officers Active",  value: "10,248", change: "+12%" },
  { label: "Zones Covered",   value: "148",     change: "+3"   },
  { label: "GPS Uptime",      value: "99.9%",   change: "Live" },
];

export const HeroCommandWidget = () => {
  return (
    <div
      className="relative w-full max-w-[420px] xl:max-w-[460px]"
      style={{ perspective: "1200px" }}
    >
      {/* ── BACK CARD (depth layer) ── */}
      <motion.div
        initial={{ opacity: 0, rotateY: -12, y: 20 }}
        animate={{ opacity: 1, rotateY: -6, y: 0 }}
        transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-4 bottom-0 top-8 rounded-[2rem] animate-float-slow"
        style={{
          background: "linear-gradient(135deg, rgba(0,163,199,0.12) 0%, rgba(56,189,248,0.06) 100%)",
          border: "1px solid rgba(0,195,235,0.15)",
          transform: "rotateY(-6deg) translateZ(-30px)",
          transformStyle: "preserve-3d",
          boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)",
        }}
      />

      {/* ── MAIN CARD ── */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2rem] overflow-hidden animate-float"
        style={{
          background: "linear-gradient(145deg, rgba(6,14,30,0.95) 0%, rgba(3,7,18,0.98) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderTop: "1px solid rgba(255,255,255,0.14)",
          boxShadow: `
            0 50px 100px -20px rgba(0,0,0,0.7),
            0 0 0 1px rgba(0,195,235,0.08),
            inset 0 1px 0 rgba(255,255,255,0.07)
          `,
          backdropFilter: "blur(24px)",
        }}
      >
        {/* Shimmer sweep */}
        <div className="absolute inset-0 shimmer-surface pointer-events-none z-10" />

        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#00c3eb]/50 to-transparent" />
        <div className="absolute top-0 left-1/4 w-1/2 h-16 bg-[#00c3eb]/5 blur-2xl pointer-events-none" />

        {/* ── HEADER ── */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#00c3eb]/15 border border-[#00c3eb]/25 flex items-center justify-center">
              <Shield size={13} className="text-[#00c3eb]" />
            </div>
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.22em] text-[#00c3eb]/60">CopMap</div>
              <div className="text-[11px] font-black text-white leading-none">Command Center</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400">Live</span>
          </div>
        </div>

        {/* ── MINI STATS ── */}
        <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-b border-white/[0.06]">
          {miniStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              className="px-4 py-3 text-center"
            >
              <div className="text-[13px] font-black text-white tabular-nums">{s.value}</div>
              <div className="text-[7px] text-white/35 uppercase tracking-wider font-bold mt-0.5">{s.label}</div>
              <div className="text-[7px] text-emerald-400 font-bold mt-0.5">{s.change}</div>
            </motion.div>
          ))}
        </div>

        {/* ── LIVE FEED ── */}
        <div className="px-5 pt-4 pb-2">
          <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/25 mb-3">Live Operations Feed</div>
          <div className="space-y-2.5">
            {liveEvents.map((ev, i) => (
              <motion.div
                key={ev.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.12, duration: 0.45 }}
                className="flex items-center gap-3 group"
              >
                {/* Icon */}
                <div
                  className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${ev.color}18`,
                    border: `1px solid ${ev.color}30`,
                  }}
                >
                  <ev.icon size={11} style={{ color: ev.color }} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-semibold text-white/70 truncate">{ev.label}</div>
                </div>

                {/* Value */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className={`w-1.5 h-1.5 rounded-full ${ev.dot}`} />
                  <span className="text-[9px] font-black text-white/50">{ev.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── MINI MAP STRIP ── */}
        <div className="mx-5 mt-4 mb-5 rounded-xl overflow-hidden relative" style={{ height: "70px" }}>
          <div className="absolute inset-0 bg-[#0a1628]" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: "linear-gradient(rgba(0,195,235,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,195,235,0.4) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          {/* SVG route */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 70" preserveAspectRatio="none">
            <path d="M 30 55 Q 100 10 180 38 T 330 20 T 400 40" stroke="#00c3eb" strokeWidth="1.5" fill="none" strokeDasharray="6,3" opacity="0.7" />
            {[
              { cx: 30,  cy: 55, r: 4, fill: "#34d399" },
              { cx: 180, cy: 38, r: 3, fill: "#00c3eb" },
              { cx: 330, cy: 20, r: 3, fill: "#38bdf8" },
              { cx: 400, cy: 40, r: 4, fill: "#f43f5e" },
            ].map((dot, i) => (
              <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill={dot.fill} opacity="0.9" />
            ))}
          </svg>
          {/* Animated GPS ping */}
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-2.5 h-2.5 rounded-full bg-[#00c3eb]"
            style={{
              top: "45%",
              left: "42%",
              boxShadow: "0 0 10px 3px rgba(0,195,235,0.5)",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* Label */}
          <div className="absolute bottom-2 left-3 flex items-center gap-1">
            <Zap size={8} className="text-[#00c3eb]" />
            <span className="text-[7px] font-bold text-[#00c3eb]/70 uppercase tracking-widest">Live GPS Map</span>
          </div>
        </div>

        {/* Bottom scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00c3eb]/30 to-transparent pointer-events-none"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* ── FLOATING BADGE (detached, 3D offset) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6, type: "spring", bounce: 0.35 }}
        className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-2xl z-20 animate-float-x"
        style={{
          background: "linear-gradient(135deg, rgba(0,195,235,0.95), rgba(0,162,199,0.9))",
          boxShadow: "0 8px 24px rgba(0,195,235,0.4), 0 0 0 1px rgba(255,255,255,0.15)",
        }}
      >
        <Shield size={11} className="text-white" />
        <span className="text-[9px] font-black text-white uppercase tracking-widest">AES-256</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.6, type: "spring", bounce: 0.35 }}
        className="absolute -bottom-3 -left-4 flex items-center gap-2 px-3 py-2 rounded-2xl z-20"
        style={{
          background: "linear-gradient(135deg, rgba(52,211,153,0.95), rgba(16,185,129,0.9))",
          boxShadow: "0 8px 24px rgba(52,211,153,0.4), 0 0 0 1px rgba(255,255,255,0.15)",
          animation: "float-y 5s ease-in-out 0.5s infinite",
        }}
      >
        <Activity size={11} className="text-white" />
        <span className="text-[9px] font-black text-white uppercase tracking-widest">99.9% Uptime</span>
      </motion.div>
    </div>
  );
};

export default HeroCommandWidget;
