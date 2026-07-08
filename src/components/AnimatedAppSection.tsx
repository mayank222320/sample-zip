import { motion } from "framer-motion";
import {
  Smartphone, Shield, MapPin, ClipboardCheck,
  Zap, Activity, Bell, Eye,
  Map as MapIcon, Crosshair, Users
} from "lucide-react";

// ─── FEATURE CARDS ────────────────────────────────────────────────────────────
const appFeatureCards = [
  { icon: Crosshair,    title: "GPS Attendance",    desc: "Location-verified check-in",  color: "#00c3eb", rgb: "0,195,235" },
  { icon: Zap,          title: "Duty Push",          desc: "Instant roster delivery",     color: "#38bdf8", rgb: "56,189,248" },
  { icon: Shield,       title: "AES-256 Secure",     desc: "End-to-end encryption",       color: "#818cf8", rgb: "129,140,248" },
  { icon: Activity,     title: "Live Status",        desc: "Real-time sync",              color: "#34d399", rgb: "52,211,153" },
  { icon: ClipboardCheck, title: "Duty Log",         desc: "Full assignment history",     color: "#fb923c", rgb: "251,146,60" },
  { icon: MapIcon,      title: "Route Tracking",     desc: "Patrol path compliance",      color: "#00c3eb", rgb: "0,195,235" },
  { icon: Users,        title: "Force Connect",      desc: "Command messaging",           color: "#a78bfa", rgb: "167,139,250" },
  { icon: Bell,         title: "Smart Alerts",       desc: "Geo-fence triggers",          color: "#fbbf24", rgb: "251,191,36" },
  { icon: Eye,          title: "Field Reports",      desc: "Evidence capture",            color: "#34d399", rgb: "52,211,153" },
  { icon: MapPin,       title: "Incident Markers",   desc: "Pin occurrences live",        color: "#38bdf8", rgb: "56,189,248" },
];

// ─── SINGLE CARD ─────────────────────────────────────────────────────────────
const FeatureCard = ({ icon: Icon, title, desc, color, rgb }: typeof appFeatureCards[0]) => (
  <div
    className="flex-shrink-0 w-44 h-44 rounded-[1.75rem] flex flex-col items-center justify-center text-center p-5 relative overflow-hidden group transition-all duration-500 cursor-default"
    style={{
      background: `rgba(${rgb},0.06)`,
      border: `1px solid rgba(${rgb},0.18)`,
      boxShadow: `0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)`,
    }}
  >
    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.75rem]"
      style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(${rgb},0.12), transparent 70%)` }}
    />
    {/* Icon */}
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-lg flex-shrink-0 relative z-10 transition-transform duration-500 group-hover:scale-110"
      style={{ backgroundColor: `rgba(${rgb},0.18)`, border: `1px solid rgba(${rgb},0.3)` }}
    >
      <Icon size={20} style={{ color }} />
    </div>
    <h4 className="text-white font-black text-[12px] mb-1 tracking-tight relative z-10">{title}</h4>
    <p className="text-white/40 text-[10px] font-semibold leading-snug relative z-10">{desc}</p>
    {/* Bottom accent */}
    <div
      className="absolute bottom-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
    />
  </div>
);

// ─── INFINITE MARQUEE ROW ────────────────────────────────────────────────────
const InfiniteRow = ({ items, direction = 1, speed = 50 }: { items: typeof appFeatureCards; direction?: 1 | -1; speed?: number }) => (
  <div className="flex overflow-hidden w-full relative h-48 pointer-events-none">
    <motion.div
      className="flex gap-5 absolute"
      animate={{ x: direction === 1 ? [0, -1820] : [-1820, 0] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <FeatureCard key={i} {...item} />
      ))}
    </motion.div>
  </div>
);

// ─── MAIN SECTION ────────────────────────────────────────────────────────────
export const AnimatedAppSection = () => {
  return (
    <section id="app" className="py-24 lg:py-36 relative overflow-hidden bg-[#020B16]">

      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#00a2c7]/8 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/6 blur-[140px] rounded-full pointer-events-none" />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="container mx-auto px-4 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#00a2c7] mb-5 bg-[#00a2c7]/10 px-4 py-2 rounded-full border border-[#00a2c7]/20"
          >
            <Smartphone size={11} />
            Mobile Force Management
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-heading font-black tracking-tighter leading-[1.06] text-white mb-4"
          >
            Built for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c3eb] to-sky-400">Frontlines.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
            className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed font-medium"
          >
            A secure, intuitive mobile app for field officers. Every assignment, alert, and report — delivered instantly on-duty.
          </motion.p>
        </div>

        {/* ── SHOWCASE AREA ── */}
        <div className="relative flex flex-col items-center" style={{ minHeight: "720px" }}>

          {/* ── BACKGROUND MARQUEE ROWS ── */}
          <div className="absolute inset-0 flex flex-col justify-center gap-10 pointer-events-none">
            {/* Fade masks left+right */}
            <div className="absolute inset-0 z-10"
              style={{ background: "linear-gradient(90deg, #020B16 0%, transparent 18%, transparent 82%, #020B16 100%)" }} />
            {/* Fade masks top+bottom */}
            <div className="absolute inset-0 z-10"
              style={{ background: "linear-gradient(180deg, #020B16 0%, transparent 22%, transparent 78%, #020B16 100%)" }} />

            <InfiniteRow items={appFeatureCards.slice(0, 5)} direction={1} speed={55} />
            <InfiniteRow items={appFeatureCards.slice(5, 10)} direction={-1} speed={65} />
          </div>

          {/* ── PHONE MOCKUP ── */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 22, stiffness: 90, delay: 0.15 }}
            className="relative z-20"
          >
            {/* Outer ambient glow */}
            <div className="absolute -inset-12 bg-[#00a2c7]/15 blur-[100px] rounded-full pointer-events-none" />

            {/* Phone shell */}
            <div
              className="relative w-[270px] lg:w-[300px]"
              style={{
                height: "600px",
                borderRadius: "3.2rem",
                background: "linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #0a1628 100%)",
                border: "8px solid #1e293b",
                boxShadow: `
                  0 0 0 1px rgba(255,255,255,0.08),
                  0 40px 120px rgba(0,0,0,0.7),
                  0 0 80px rgba(0,162,199,0.12),
                  inset 0 2px 0 rgba(255,255,255,0.08)
                `,
                overflow: "hidden",
              }}
            >
              {/* Status bar */}
              <div className="absolute top-0 inset-x-0 h-12 bg-black/60 backdrop-blur-sm z-30 flex items-center justify-between px-6 pt-2">
                <span className="text-[10px] font-black text-white/60 tracking-widest">9:41</span>
                {/* Dynamic island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-40 flex items-center justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00a2c7] animate-pulse" />
                  <span className="text-[8px] font-black text-white/50 uppercase tracking-widest">Live</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-2.5 rounded-sm border border-white/30 flex items-center px-0.5">
                    <div className="w-2/3 h-full bg-emerald-400 rounded-sm" />
                  </div>
                </div>
              </div>

              {/* ── CUSTOM APP UI ── */}
              <div className="absolute inset-0 flex flex-col bg-[#060e1e] overflow-hidden">

                {/* App header */}
                <div className="px-5 pt-14 pb-4 bg-[#060e1e] border-b border-white/5 flex-shrink-0">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#00c3eb]/70">CopMap Officer</div>
                      <div className="text-[15px] font-black text-white leading-tight">Good Morning, Officer</div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#00c3eb]/15 border border-[#00c3eb]/30 flex items-center justify-center">
                      <Shield size={15} className="text-[#00c3eb]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-bold text-emerald-400/80 uppercase tracking-widest">On Duty • Zone A</span>
                  </div>
                </div>

                {/* Today's duty card */}
                <div className="mx-4 mt-4 rounded-2xl overflow-hidden flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #00a2c7 0%, #0ea5e9 100%)" }}>
                  <div className="p-4">
                    <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/60 mb-1">Today's Assignment</div>
                    <div className="text-[13px] font-black text-white">Bandobast — Central Zone</div>
                    <div className="text-[10px] text-white/70 font-semibold mt-0.5">06:00 AM – 10:00 PM</div>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-2.5 py-1">
                        <MapPin size={8} className="text-white" />
                        <span className="text-[8px] font-bold text-white">Entry Point 3</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-2.5 py-1">
                        <Users size={8} className="text-white" />
                        <span className="text-[8px] font-bold text-white">32 officers</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* GPS status row */}
                <div className="mx-4 mt-3 grid grid-cols-2 gap-2 flex-shrink-0">
                  <div className="rounded-xl bg-white/5 border border-white/8 p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Crosshair size={10} className="text-[#00c3eb]" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-white/40">GPS</span>
                    </div>
                    <div className="text-[11px] font-black text-white">Locked</div>
                    <div className="text-[8px] text-emerald-400 font-semibold">±3m accuracy</div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/8 p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Activity size={10} className="text-emerald-400" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Status</span>
                    </div>
                    <div className="text-[11px] font-black text-white">On Route</div>
                    <div className="text-[8px] text-[#00c3eb] font-semibold">Live sync</div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="mx-4 mt-3 flex-shrink-0">
                  <div className="text-[8px] font-black uppercase tracking-[0.18em] text-white/25 mb-2">Quick Actions</div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { icon: Crosshair, label: "Check In", color: "#00c3eb" },
                      { icon: MapPin,    label: "My Route", color: "#38bdf8" },
                      { icon: ClipboardCheck, label: "Duty Log", color: "#a78bfa" },
                      { icon: Bell,     label: "Alerts",   color: "#fbbf24" },
                    ].map((a) => (
                      <div key={a.label} className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `rgba(${a.color === "#00c3eb" ? "0,195,235" : a.color === "#38bdf8" ? "56,189,248" : a.color === "#a78bfa" ? "167,139,250" : "251,191,36"},0.15)`, border: `1px solid rgba(255,255,255,0.08)` }}>
                          <a.icon size={14} style={{ color: a.color }} />
                        </div>
                        <span className="text-[7px] text-white/35 font-semibold">{a.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mini map placeholder */}
                <div className="mx-4 mt-3 flex-1 rounded-2xl overflow-hidden border border-white/8 relative" style={{ minHeight: "80px" }}>
                  <div className="absolute inset-0 bg-[#0a1628]" />
                  {/* Fake map grid */}
                  <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "linear-gradient(rgba(0,162,199,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,162,199,0.3) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  {/* Route line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 260 90" preserveAspectRatio="none">
                    <path d="M 20 70 Q 80 20 140 50 T 240 30" stroke="#00c3eb" strokeWidth="2" fill="none" strokeDasharray="5,3" opacity="0.7" />
                    <circle cx="20" cy="70" r="4" fill="#00c3eb" opacity="0.9" />
                    <circle cx="240" cy="30" r="5" fill="#f43f5e" opacity="0.9" />
                  </svg>
                  {/* Officer dot */}
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute w-3 h-3 rounded-full bg-[#00c3eb] shadow-[0_0_8px_#00c3eb]"
                    style={{ top: "40%", left: "45%" }}
                  />
                  <div className="absolute bottom-2 left-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c3eb] animate-pulse" />
                    <span className="text-[8px] font-bold text-[#00c3eb]/70">Live Tracking</span>
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="flex-shrink-0 border-t border-white/5 bg-[#060e1e] px-6 py-3 flex items-center justify-around mb-1">
                  {[
                    { icon: MapPin, active: false },
                    { icon: Crosshair, active: true },
                    { icon: ClipboardCheck, active: false },
                    { icon: Users, active: false },
                  ].map((n, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <n.icon size={16} style={{ color: n.active ? "#00c3eb" : "rgba(255,255,255,0.25)" }} />
                      {n.active && <div className="w-1 h-1 rounded-full bg-[#00c3eb] mt-1" />}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        </div>

        {/* ── APP STORE BADGES ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.copmap.officer"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-7 transition-transform group-hover:scale-105" />
          </a>
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-7 transition-transform group-hover:scale-105" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
