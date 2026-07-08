import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, MapPin, Shield, ClipboardCheck, Zap, Lock, Radio, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// ─── SCENE DATA ───────────────────────────────────────────────────────────────
const scenes = [
  {
    id: "bandobast",
    tag: "Bandobast Management",
    stepNum: "01",
    headline: "Hundreds of officers,\none command layer.",
    body: "Plan multi-zone events digitally. Assign static points, push encrypted duty orders to every officer's phone — before the first patrol vehicle moves.",
    // Aerial city night view — command/deployment feel
    // AI-generated: police officers in tactical formation for bandobast deployment
    image: "/bandobast_deployment.png",
    accent: "#00c3eb",
    accentRgb: "0,195,235",
    stat1: { label: "Officers Deployed", value: "248" },
    stat2: { label: "Active Zones", value: "14" },
    badge: "Operation Active",
    icon: Shield,
    liveItems: [
      "Zone A — 32 officers confirmed",
      "Duty orders encrypted & pushed",
      "GPS lock: 248/248 devices",
      "Command acknowledged by SI Joshi",
    ],
    highlights: ["Multi-zone mapping", "Conflict auto-detection", "Encrypted push dispatch"],
    aiGenerated: true,
  },
  {
    id: "patrolling",
    tag: "Live Patrolling",
    stepNum: "02",
    headline: "Every route.\nEvery officer. Right now.",
    body: "Real-time GPS positions stream into the command dashboard. Geo-fence violations, halted units, and SOS alerts surface the moment they happen.",
    // Night city road / patrol feel
    // AI-generated: police patrol car with GPS lights at night
    image: "/patrol_gps.png",
    accent: "#38bdf8",
    accentRgb: "56,189,248",
    stat1: { label: "Officers On Route", value: "182" },
    stat2: { label: "GPS Coverage", value: "99%" },
    badge: "Live Tracking",
    icon: MapPin,
    liveItems: [
      "Officer #B7 — on route, Zone 3",
      "Geo-fence alert: Unit #C12 halted",
      "SOS cleared — response: 2 min 14s",
      "Night patrol compliance: 97.3%",
    ],
    highlights: ["Live GPS stream", "Geo-fence breach alerts", "Route compliance scoring"],
    aiGenerated: true,
  },
  {
    id: "attendance",
    tag: "Attendance & Duty",
    stepNum: "03",
    headline: "GPS check-in.\nNo paper. No fraud.",
    body: "Officers mark attendance only from their assigned location. Shift rosters auto-generate, leave conflicts auto-flag, and every action is timestamped.",
    // Organized command / operations center
    // AI-generated: police officers doing morning attendance roll call
    image: "/attendance_rollcall.png",
    accent: "#a78bfa",
    accentRgb: "167,139,250",
    stat1: { label: "Officers On Duty", value: "312" },
    stat2: { label: "Availability", value: "94%" },
    badge: "Shift Running",
    icon: ClipboardCheck,
    liveItems: [
      "312 officers marked present (GPS)",
      "Leave conflict auto-flagged: 2",
      "Shift roster pushed — 6:00 AM",
      "Attendance report ready for DCP",
    ],
    highlights: ["GPS-verified check-in", "Auto shift generation", "Leave overlap detection"],
    aiGenerated: true,
  },
  {
    id: "reporting",
    tag: "Command Reporting",
    stepNum: "04",
    headline: "Shift closes.\nReport already filed.",
    body: "The moment a shift ends, CopMap auto-compiles PDF summaries — patrol logs, attendance, incidents — and delivers them to the command inbox instantly.",
    // Data analytics / technology
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=85",
    accent: "#34d399",
    accentRgb: "52,211,153",
    stat1: { label: "Reports Generated", value: "38" },
    stat2: { label: "Manual Effort", value: "Zero" },
    badge: "Auto-Filed",
    icon: Users,
    liveItems: [
      "Attendance locked & verified",
      "Patrol log compiled: 182 routes",
      "PDF report sent to DCP inbox",
      "Audit trail sealed — tamper-proof",
    ],
    highlights: ["Auto PDF generation", "Full audit trail", "DCP inbox delivery"],
    aiGenerated: false,
  },
];

// ─── LIVE FEED ITEM ───────────────────────────────────────────────────────────
const LiveFeed = ({ items, accent }: { items: string[]; accent: string }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % items.length), 2600);
    return () => clearInterval(t);
  }, [items]);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={idx}
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -8 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2.5"
      >
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse" style={{ backgroundColor: accent }} />
        <span className="text-[11px] font-semibold text-white/65 truncate leading-tight">{items[idx]}</span>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
export const PlatformShowcase = () => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });
  const scene = scenes[active];

  // Auto-advance every 7s
  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % scenes.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-[#020B16] overflow-hidden">

      {/* Ambient accent glow behind content */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ background: `radial-gradient(ellipse 65% 50% at 50% 38%, rgba(${scene.accentRgb},0.065), transparent 70%)` }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.022]"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1360px] relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#00a2c7] mb-5 bg-[#00a2c7]/10 px-4 py-2 rounded-full border border-[#00a2c7]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00a2c7] animate-pulse" />
            Inside CopMap
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-white tracking-tighter leading-[1.06] mb-4">
            One shift. Four operations.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c3eb] to-sky-400">
              Zero paperwork.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Walk through exactly what CopMap does during a live police shift — from deployment order to auto-filed report.
          </p>
        </motion.div>

        {/* ── STEP PILLS ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {scenes.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-350 border ${
                  isActive
                    ? "shadow-lg text-[#020B16] border-transparent"
                    : "text-white/45 border-white/10 bg-white/5 hover:text-white/70 hover:border-white/20"
                }`}
                style={isActive ? { backgroundColor: s.accent, boxShadow: `0 0 28px rgba(${s.accentRgb},0.38)` } : {}}
              >
                <span className="font-black text-[9px] opacity-70">{s.stepNum}</span>
                <Icon size={12} />
                <span className="hidden sm:inline">{s.tag}</span>
              </button>
            );
          })}
        </motion.div>

        {/* ── CINEMATIC MAIN CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-[2.25rem] overflow-hidden border border-white/[0.07] shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
          style={{ minHeight: "500px" }}
        >
          {/* Background image crossfade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${active}`}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={scene.image} alt="" className="w-full h-full object-cover" />
              {/* Dark overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020B16]/96 via-[#020B16]/72 to-[#020B16]/28" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020B16]/85 via-transparent to-transparent" />
              {/* Subtle accent tint on right */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-transparent"
                style={{ background: `linear-gradient(to left, rgba(${scene.accentRgb},0.04) 0%, transparent 60%)` }} />
            </motion.div>
          </AnimatePresence>

          {/* AI-Generated image label — legal disclosure */}
          {scene.aiGenerated && (
            <div className="absolute bottom-4 right-4 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/45">AI Generated</span>
            </div>
          )}

          {/* Progress bar top edge */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-white/[0.06] z-20">
            <motion.div
              className="h-full origin-left"
              key={active}
              style={{ backgroundColor: scene.accent }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 7, ease: "linear" }}
            />
          </div>

          {/* Content layout */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-end lg:items-center p-8 lg:p-14"
            style={{ minHeight: "500px" }}>

            {/* LEFT: Narrative text */}
            <div className="flex-1 max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`copy-${active}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45 }}
                >
                  {/* Step tag */}
                  <div className="flex items-center gap-2.5 mb-6">
                    <div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.22em]"
                      style={{ backgroundColor: `rgba(${scene.accentRgb},0.15)`, border: `1px solid rgba(${scene.accentRgb},0.3)`, color: scene.accent }}
                    >
                      <span className="font-black opacity-60">{scene.stepNum} —</span>
                      {scene.tag}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: scene.accent }} />
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Live</span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="text-4xl lg:text-5xl font-heading font-black text-white leading-[1.07] tracking-tight mb-5 whitespace-pre-line">
                    {scene.headline}
                  </h3>

                  {/* Body */}
                  <p className="text-slate-300/85 text-base leading-relaxed mb-7 max-w-sm font-medium">
                    {scene.body}
                  </p>

                  {/* Highlight pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {scene.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-bold px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: `rgba(${scene.accentRgb},0.1)`, color: scene.accent, border: `1px solid rgba(${scene.accentRgb},0.2)` }}
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  <Button variant="cta" className="rounded-full" asChild>
                    <Link to={`/features#${scene.id}`}>
                      See Full Module <ArrowRight size={15} className="ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT: Live data panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`panel-${active}`}
                initial={{ opacity: 0, y: 28, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="w-full lg:w-[270px] xl:w-[300px] flex-shrink-0"
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(2,11,22,0.82)",
                    backdropFilter: "blur(20px)",
                    border: `1px solid rgba(${scene.accentRgb},0.2)`,
                    boxShadow: `0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(${scene.accentRgb},0.08)`
                  }}
                >
                  {/* Panel header */}
                  <div className="px-5 py-4 border-b flex items-center justify-between"
                    style={{ borderColor: `rgba(${scene.accentRgb},0.15)` }}>
                    <div className="flex items-center gap-2">
                      <scene.icon size={14} style={{ color: scene.accent }} />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">{scene.tag}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full"
                      style={{ backgroundColor: `rgba(${scene.accentRgb},0.12)` }}>
                      <span className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: scene.accent }} />
                      <span className="text-[8px] font-black uppercase tracking-widest" style={{ color: scene.accent }}>{scene.badge}</span>
                    </div>
                  </div>

                  {/* Big stats */}
                  <div className="grid grid-cols-2 gap-px bg-white/[0.04] m-4 rounded-xl overflow-hidden">
                    {[scene.stat1, scene.stat2].map((s) => (
                      <div key={s.label} className="bg-white/[0.04] px-4 py-4">
                        <div className="text-2xl font-black text-white tabular-nums leading-none mb-1">{s.value}</div>
                        <div className="text-[9px] font-bold uppercase tracking-widest text-white/35">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Live feed */}
                  <div className="mx-4 mb-4 rounded-xl px-4 py-3"
                    style={{ background: `rgba(${scene.accentRgb},0.06)`, border: `1px solid rgba(${scene.accentRgb},0.12)` }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: scene.accent }} />
                      <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/30">Live System Feed</span>
                    </div>
                    <LiveFeed items={scene.liveItems} accent={scene.accent} />
                  </div>

                  {/* Mini progress indicators */}
                  <div className="flex gap-1.5 px-4 pb-4">
                    {scenes.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="h-1 rounded-full transition-all duration-500 flex-1"
                        style={{
                          backgroundColor: active === i ? scene.accent : `rgba(${scene.accentRgb},0.2)`,
                          opacity: active === i ? 1 : 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── BOTTOM 4 CAPABILITY PILLARS ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5"
        >
          {[
            { icon: Zap,     label: "Setup Speed",      value: "2–3 Days",  desc: "Full force operational in under 2 weeks",      color: "#00c3eb", rgb: "0,195,235" },
            { icon: Lock,    label: "Data Encryption",  value: "AES-256",   desc: "Military-grade encryption, every transmission", color: "#a78bfa", rgb: "167,139,250" },
            { icon: Radio,   label: "Platform Uptime",  value: "99.9%",     desc: "Always-on with offline-first field mode",       color: "#34d399", rgb: "52,211,153" },
            { icon: MapPin,  label: "GPS Refresh",      value: "< 30s",     desc: "Live position updates from every officer",      color: "#38bdf8", rgb: "56,189,248" },
          ].map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.44 + i * 0.07 }}
                className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] px-5 py-5 transition-all duration-300 cursor-default"
                style={{ ["--accent" as any]: p.color }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `rgba(${p.rgb},0.15)`, border: `1px solid rgba(${p.rgb},0.25)` }}>
                    <Icon size={13} style={{ color: p.color }} />
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/30">{p.label}</span>
                </div>
                <div className="text-2xl font-black text-white tabular-nums mb-0.5">{p.value}</div>
                <p className="text-[11px] text-white/35 font-medium leading-snug">{p.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
