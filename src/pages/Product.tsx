import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Monitor, Smartphone, Shield, Zap, MapPin, ClipboardCheck, Crosshair, Network, ChartBar as BarChart3, CircleCheck as CheckCircle2, RadioTower, Lock, ChevronRight, Activity, Eye, Layers, Globe, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import { useRef, useState, useEffect } from "react";
import { AnimatedAppSection } from "@/components/AnimatedAppSection";
import EcosystemLayers3D from "@/components/EcosystemLayers3D";
import { TiltCard } from "@/components/TiltCard";
import SEOHead from "@/components/seo/SEOHead";

const dashboardFeatures = [
  { icon: MapPin, label: "Live Operations Map", desc: "See every officer, vehicle, and incident in real time — no refresh needed.", tag: "Realtime" },
  { icon: BarChart3, label: "Instant Analytics", desc: "Auto-generated PDF reports after every bandobast. Full audit trail.", tag: "Reporting" },
  { icon: Shield, label: "Role-Based Access", desc: "Custom views from Station Incharge to State DGP — each level sees only what they need.", tag: "Security" },
  { icon: RadioTower, label: "Force Dispatch Engine", desc: "Allocate, track, and recall force with one click. Encrypted push to field devices.", tag: "Dispatch" },
];

const appFeatures = [
  { icon: Crosshair, title: "GPS Attendance", desc: "Verifies officer location before marking present.", color: "text-[#00a2c7]", bg: "bg-[#00a2c7]/10", border: "border-[#00a2c7]/20" },
  { icon: Zap, title: "Instant Duty Push", desc: "Roster arrives via encrypted notification.", color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" },
  { icon: Network, title: "Offline Mode", desc: "Full functionality without 4G connectivity.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: Lock, title: "Secure Access", desc: "Biometric login + AES-256 encrypted data.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { icon: ClipboardCheck, title: "Duty Log", desc: "Full history of assignments and reports.", color: "text-[#00a2c7]", bg: "bg-[#00a2c7]/10", border: "border-[#00a2c7]/20" },
  { icon: Activity, title: "Live Status", desc: "Officers see their patrol route and geo-fence alerts.", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
];

const ProductPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <PageTransition>
      <SEOHead 
        title="CopMap Products — Command Dashboard & Mobile App"
        description="Explore the CopMap ecosystem: A web Command Dashboard and an intuitive Mobile App for officers. Real-time sync for police field operations."
        keywords="police dashboard software, law enforcement mobile app, officer tracking app, command center portal, digital policing products"
        canonical="/product"
      />
      <main className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-white overflow-x-hidden font-sans selection:bg-[#00a2c7]/30">
        <div className="absolute top-0 w-full z-50"><Navbar /></div>

        <PageHero
          badge="Ecosystem Architecture"
          title={<>Two Products.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a2c7] via-blue-400 to-[#00a2c7]">One Reality.</span></>}
          subtitle="A web-based Command Dashboard for supervisors, and an intuitive Mobile App for officers. Perfectly synced in real-time."
          actions={<>
            <Button variant="cta" className="h-14 px-8 rounded-full" asChild icon={ArrowRight}>
              <a href="#dashboard">Explore Dashboard</a>
            </Button>
            <Button variant="outline-hero" className="h-14 px-8 rounded-full border-white text-white hover:bg-white/10 hover:border-white backdrop-blur-md" asChild>
              <a href="#app">Explore App</a>
            </Button>
          </>}
        />

        {/* ─── AIO ENTITY CLARITY & FACTUAL SUMMARY ─── */}
        <section className="relative z-10 -mt-12 mb-16 px-4 lg:px-8 max-w-5xl mx-auto">
          <div className="bg-[#0A192F]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                <Globe size={18} className="text-[#00c3eb]" />
                About the Product
              </h3>
              <p className="text-blue-100/70 text-sm leading-relaxed">
                <strong className="text-white">CopMap</strong>, developed by EyeQlytics Technologies, is an enterprise law enforcement software ecosystem used by government police departments in India (currently active in Maharashtra). The platform combines a Command Dashboard and a secure Mobile App to achieve 99% GPS visibility for field officers, digitize bandobast deployment in under 3 days, and eliminate paper-based rosters.
              </p>
            </div>
            <div className="hidden md:flex flex-col gap-3 min-w-[200px] border-l border-white/10 pl-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                </div>
                <div className="text-sm">
                  <div className="text-white font-bold">99%</div>
                  <div className="text-blue-200/50 text-[10px] uppercase">GPS Accuracy</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Shield size={14} className="text-blue-400" />
                </div>
                <div className="text-sm">
                  <div className="text-white font-bold">10K+</div>
                  <div className="text-blue-200/50 text-[10px] uppercase">Officers Scalable</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COMMAND DASHBOARD — BENTO GRID ─── */}
        <section id="dashboard" ref={containerRef} className="py-32 relative overflow-hidden border-t border-slate-200 bg-white">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#00a2c7]/5 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#00a2c7] mb-5 bg-sky-50 px-4 py-2 rounded-full border border-sky-100"
              >
                <Monitor size={11} />
                Web Dashboard
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                className="text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.05] text-slate-900 mb-4"
              >
                The Command <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a2c7] to-cyan-400">Dashboard.</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.16 }}
                className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed"
              >
                A high-performance web portal built for full-force visibility. Every widget, every metric alive.
              </motion.p>
            </div>

            {/* ── BENTO GRID ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-12">

              {/* CARD 1 — Live Map (spans 2 cols) */}
              <TiltCard intensity={5} className="md:col-span-2 rounded-[1.75rem]">
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="md:col-span-2 group relative rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white overflow-hidden cursor-default"
                style={{ minHeight: "380px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00a2c7]/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#00a2c7]/40 to-transparent transition-all duration-700" />
                
                {/* Screenshot with overlay */}
                <div className="absolute inset-0">
                  <img src="/New Images/Overview Dashboard.png" alt="Live Operations Map" className="w-full h-full object-cover object-top opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-700 scale-105 group-hover:scale-100" style={{ transition: "opacity 0.7s, transform 1.2s cubic-bezier(0.22,1,0.36,1)" }} />
                </div>
                
                <div className="relative z-10 p-8 lg:p-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#00a2c7]/20 rounded-2xl blur-lg group-hover:blur-xl transition-all" />
                        <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00a2c7] to-cyan-500 flex items-center justify-center shadow-lg">
                          <MapPin size={22} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00a2c7]">Realtime</span>
                        <h3 className="text-2xl font-heading font-black text-slate-900 leading-tight">Live Operations Map</h3>
                      </div>
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed max-w-lg mb-8">
                      See every officer, vehicle, and incident plotted on a live map. Track deployments in real-time with no refresh — powered by WebSocket streaming.
                    </p>
                  </div>
                  
                  {/* Live stat chips */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: "Officers Online", value: "247", color: "bg-emerald-400" },
                      { label: "Active Patrols", value: "18", color: "bg-[#00a2c7]" },
                      { label: "Geo-Fences", value: "64", color: "bg-blue-400" },
                    ].map((chip) => (
                      <div key={chip.label} className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-full px-4 py-2.5 shadow-sm group-hover:shadow-md transition-shadow">
                        <span className={`w-2 h-2 rounded-full ${chip.color} animate-pulse`} />
                        <span className="text-lg font-black text-slate-900 tabular-nums">{chip.value}</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{chip.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              </TiltCard>

              {/* CARD 2 — Analytics */}
              <TiltCard intensity={8} className="rounded-[1.75rem]">
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
                className="group relative rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 overflow-hidden cursor-default flex flex-col"
                style={{ minHeight: "380px" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent transition-all duration-700" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg mb-5">
                    <BarChart3 size={22} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-1">Reporting</span>
                  <h3 className="text-xl font-heading font-black text-slate-900 leading-tight mb-3">Instant Analytics</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                    Auto-generated PDF reports after every bandobast. Full audit trail with zero manual effort.
                  </p>
                  
                  {/* Mini chart visual */}
                  <div className="flex items-end gap-1.5 h-16">
                    {[35, 55, 40, 70, 50, 80, 65, 90, 75, 95, 60, 85].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-blue-500/30 to-blue-400/60"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
              </TiltCard>

              {/* CARD 3 — Role Access */}
              <TiltCard intensity={8} className="rounded-[1.75rem]">
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
                className="group relative rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 overflow-hidden cursor-default flex flex-col"
                style={{ minHeight: "320px" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent transition-all duration-700" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-[#00a2c7] flex items-center justify-center shadow-lg mb-5">
                    <Shield size={22} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 mb-1">Security</span>
                  <h3 className="text-xl font-heading font-black text-slate-900 leading-tight mb-3">Role-Based Access</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                    Custom views from Station Incharge to State DGP each level sees only what they need.
                  </p>
                  
                  {/* Role hierarchy visual */}
                  <div className="space-y-2">
                    {[
                      { role: "Commissioner", level: 100, color: "from-[#00a2c7] to-cyan-400" },
                      { role: "DCP / ACP", level: 75, color: "from-blue-500 to-blue-400" },
                      { role: "Station PI", level: 50, color: "from-sky-500 to-sky-400" },
                      { role: "Constable", level: 30, color: "from-slate-400 to-slate-300" },
                    ].map((r, i) => (
                      <div key={r.role} className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-slate-500 w-20 text-right">{r.role}</span>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${r.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${r.level}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              </TiltCard>

              {/* CARD 4 — Force Dispatch (spans 2 cols) */}
              <TiltCard intensity={5} className="md:col-span-2 rounded-[1.75rem]">
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}
                className="md:col-span-2 group relative rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 lg:p-10 overflow-hidden cursor-default"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent transition-all duration-700" />
                <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg mb-5">
                      <RadioTower size={22} className="text-white" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-1 block">Dispatch</span>
                    <h3 className="text-2xl font-heading font-black text-slate-900 leading-tight mb-3">Force Dispatch Engine</h3>
                    <p className="text-slate-500 text-base leading-relaxed max-w-md mb-6">
                      Allocate, track, and recall force with one click. Encrypted push notifications delivered to every field device simultaneously.
                    </p>
                    
                    {/* Feature checks */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {["One-Click Deploy", "Encrypted Push", "Force Recall", "Audit Trail", "Bulk Assignment", "Status Tracking"].map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                          <span className="text-xs font-semibold text-slate-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Dispatch visual — animated workflow */}
                  <div className="w-full lg:w-[280px] flex-shrink-0">
                    <div className="space-y-3">
                      {[
                        { step: "01", label: "Select deployment zone", icon: MapPin, status: "done" },
                        { step: "02", label: "Assign officers & vehicles", icon: Crosshair, status: "done" },
                        { step: "03", label: "Push to field devices", icon: Zap, status: "active" },
                        { step: "04", label: "Monitor & report", icon: Eye, status: "pending" },
                      ].map((s, i) => (
                        <motion.div
                          key={s.step}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                            s.status === "active" 
                              ? "bg-emerald-50 border-emerald-200 shadow-sm" 
                              : s.status === "done" 
                                ? "bg-white border-slate-200" 
                                : "bg-slate-50 border-slate-100 opacity-60"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            s.status === "active" ? "bg-emerald-500 text-white" : s.status === "done" ? "bg-slate-100 text-slate-500" : "bg-slate-100 text-slate-300"
                          }`}>
                            <s.icon size={14} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Step {s.step}</div>
                            <div className={`text-xs font-bold truncate ${s.status === "active" ? "text-emerald-700" : "text-slate-600"}`}>{s.label}</div>
                          </div>
                          {s.status === "done" && <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />}
                          {s.status === "active" && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              </TiltCard>
            </div>

            {/* ── LIVE DEPLOYMENT BADGE ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex items-center justify-center gap-3 py-4"
            >
              <div className="flex items-center gap-2 bg-white border border-slate-200 shadow-sm rounded-full px-5 py-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Live in Nagpur Police</span>
                <span className="text-[10px] text-slate-400">•</span>
                <span className="text-xs font-bold text-slate-500">10,000+ officers managed</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── OFFICER APP — ANIMATED FEATURE SHOWCASE ─── */}
        <AnimatedAppSection />

        {/* ─── 3D ECOSYSTEM ARCHITECTURE ─── */}
        <EcosystemLayers3D />

        {/* ─── CTA — DIAGONAL SPLIT ─── */}
        <section className="py-32 relative overflow-hidden bg-[#f8fafc] border-t border-slate-200">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00a2c7]/10 blur-[150px] rounded-full" />

          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left: text */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#00a2c7] mb-6 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a2c7] animate-pulse" />
                  Ready to Deploy
                </motion.div>
                <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="text-5xl lg:text-6xl font-heading font-black tracking-tighter leading-[1.05] mb-6 text-slate-900"
                >
                  Experience<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a2c7] to-cyan-400">the platform.</span>
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
                  className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0"
                >
                  Stop tracking operations on paper. Digitize your entire force today with a live 30-minute demo.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.26 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button variant="cta" className="h-14 px-8 rounded-full" asChild icon={ArrowRight}>
                    <Link to="/contact">Schedule Live Demo</Link>
                  </Button>
                  <Button variant="outline-light" className="h-14 px-8 rounded-full" asChild>
                    <Link to="/features">Explore Features</Link>
                  </Button>
                </motion.div>
              </div>

              {/* Right: floating stat cards */}
              <div className="relative w-full max-w-xs flex-shrink-0">
                {[
                  { v: "2–3", l: "Days to Deploy", color: "border-[#00a2c7]/20", glow: "bg-[#00a2c7]/5" },
                  { v: "10K+", l: "Officers Managed", color: "border-blue-500/20", glow: "bg-blue-500/5" },
                  { v: "99%", l: "GPS Visibility", color: "border-emerald-500/20", glow: "bg-emerald-500/5" },
                ].map((card, i) => (
                  <motion.div
                    key={card.l}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                    transition={{
                      opacity: { delay: 0.15 + i * 0.12 },
                      x: { delay: 0.15 + i * 0.12 },
                      y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                    }}
                    className={`mb-4 p-6 rounded-2xl border ${card.color} ${card.glow} bg-white shadow-sm`}
                    style={{ marginLeft: `${i * 20}px` }}
                  >
                    <div className="text-3xl font-black text-slate-900 mb-1 tabular-nums">{card.v}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">{card.l}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

// Missing arrow down icon component
const ArrowDown = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 5v14M19 12l-7 7-7-7"/>
  </svg>
);

export default ProductPage;
