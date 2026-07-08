import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Shield, MapPin, Users, UserCheck, CalendarDays, ClipboardCheck, Map, Truck, CircleCheck as CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import { ScrollReveal, ScrollFade, ScrollSlide, ScrollStagger } from "@/components/ScrollReveal";
import { TiltCard } from "@/components/TiltCard";
import { useState, useRef, useEffect } from "react";
import SEOHead from "@/components/seo/SEOHead";

// ─── FEATURE DATA ──────────────────────────────────────────────
const featuresData = [
  {
    id: "bandobast",
    label: "Bandobast",
    category: "Bandobast Management",
    headline: "Systematic Security Deployment for Every Event.",
    subheadline: "From a small nakabandi to a state-level festival — planned, monitored, and reported automatically.",
    body: "CopMap transforms bandobast planning from a multi-day paper exercise into a digital workflow that takes minutes. Select deployment points on the map, assign officers based on availability, and deploy with one click.",
    points: [
      "Select deployment points from the static points database on Google Maps",
      "Assign officers per point based on availability, designation, and duty history",
      "Send deployment notifications via App, WhatsApp, Email, and Call — simultaneously",
      "Live GPS monitoring with auto-alerts if an officer goes offline or leaves their post",
      "Auto-generate complete bandobast PDF reports after every operation",
    ],
    outcomes: ["No deployment gaps", "Real-time visibility", "Automatic reports", "90% Paperless Process"],
    icon: Shield,
    accentColor: "blue",
    image: "/New Images/Overview Dashboard.png",
  },
  {
    id: "patrolling",
    label: "Patrolling",
    category: "Patrolling Operations",
    headline: "Plan It. Monitor It. Prove It.",
    subheadline: "Every patrol planned digitally, tracked live, and automatically documented — with no manual registers.",
    body: "CopMap turns patrolling from an informal verbal assignment into a fully planned, real-time monitored, and automatically documented operation.",
    points: [
      "Plan patrol routes by selecting static points and drawing routes on Google Maps",
      "Assign officers and vehicles directly through the portal",
      "Automated notifications via App, WhatsApp, Email, and Call simultaneously",
      "Live GPS tracking with alerts for offline, route deviation, and unexpected halts",
    ],
    outcomes: ["Complete patrol proof", "Zero manual registers", "Route compliance", "Auto-reports"],
    icon: MapPin,
    accentColor: "cyan",
    image: "/New Images/LIve Patroling Screen.png",
  },
  {
    id: "resource",
    label: "Resource Req.",
    category: "Resource Requirement",
    headline: "Request. Distribute. Deploy.",
    subheadline: "Structured force escalation from station to commissioner level.",
    body: "When a station needs additional officers for a large deployment, CopMap allows them to raise a formal force requirement. The system distributes the request, tracks partial fulfilments, and escalates only the remaining shortfall.",
    points: [
      "Raise designation-wise and gender-wise force requirements digitally",
      "Auto-escalates to DCP or CP based on deployment scale and available strength",
      "Partial fulfilment tracking only the remaining shortfall escalates upward",
      "Fulfilled officers flow directly into the bandobast or patrolling deployment plan",
      "Real-time fulfilment status visible to all command levels simultaneously",
    ],
    outcomes: ["No phone coordination", "Full audit trail", "Faster fulfilment", "Command visibility"],
    icon: Users,
    accentColor: "sky",
    image: "/New Images/Requirements Screen.png",
  },
  {
    id: "attendance",
    label: "Attendance",
    category: "Attendance Management",
    headline: "Smart, Location-Based Attendance. Maximum Fraud Deterrence.",
    subheadline: "Attendance verified by actual GPS location before it is marked. No proxy. No manual entry.",
    body: "CopMap automates attendance by verifying an officer's real GPS location against their assigned duty before marking them present.",
    points: [
      "Officers clock in via the CopMap mobile app",
      "System validates GPS location against assigned duty coordinates before marking present",
      "Auto-marks attendance for patrol, bandobast, and station duty",
      "Generates shift schedules based on leave status, prior duty, and officer availability",
    ],
    outcomes: ["Zero proxy attendance", "Zero manual entry", "Real-time duty status", "Automatic shift planning"],
    icon: UserCheck,
    accentColor: "blue",
    image: "/New Images/Attendance Screen.png",
  },
  {
    id: "leave",
    label: "Leave Mgmt.",
    category: "Leave Management",
    headline: "Data-Driven Leave Approvals. No Operational Gaps.",
    subheadline: "Officers apply from their phone. Supervisors approve with full context. Conflicts are flagged automatically.",
    body: "CopMap streamlines leave requests while protecting operational readiness. Officers submit leave requests from the mobile app with full context for supervisors.",
    points: [
      "Officers submit leave requests directly from the mobile app",
      "Portal shows leave balance, history, and duty conflicts before approval",
      "Automatically flags clashes with scheduled patrols or bandobast",
      "Complete leave history maintained for workforce planning",
    ],
    outcomes: ["Faster approvals", "No duty gaps", "Historical data", "Fair process"],
    icon: CalendarDays,
    accentColor: "sky",
    image: "/New Images/Leave Management Screen.png",
  },
  {
    id: "officers",
    label: "Officer Mgmt.",
    category: "Officer & Hierarchy Management",
    headline: "Complete Organisational Visibility. From State to Station.",
    subheadline: "Every officer linked. Every level visible. Every deployment tracked.",
    body: "CopMap mirrors India's police hierarchy — State → Zone → District → Division → Station — and gives every level of authority real-time visibility into officers, duties, and deployments.",
    points: [
      "Officers onboard via simple self-registration on the mobile app",
      "Each officer linked to their station, designation, and reporting hierarchy",
      "Filter officers by duty status: idle, patrolling, bandobast, on leave",
      "District and state authorities have drill-down visibility into any station at any time",
    ],
    outcomes: ["Full roster visibility", "Smart duty assignment", "No unlinked personnel", "Command drill-down"],
    icon: ClipboardCheck,
    accentColor: "cyan",
    image: "/New Images/Officers Screen.png",
  },
  {
    id: "staticpoints",
    label: "Static Points",
    category: "Static Points Management",
    headline: "Geographic Intelligence at the Heart of Every Operation.",
    subheadline: "Crime hotspots, sensitive areas, checkpoints all mapped, prioritised, and shared across the command chain.",
    body: "Static points are the fixed locations that anchor all patrol routes and bandobast deployments. CopMap lets stations map these points digitally with priority levels.",
    points: [
      "Map static points on Google Maps with precise GPS coordinates",
      "Assign priority levels: High, Medium, Low",
      "Cascades visibility up the hierarchy zone, district, state",
      "Serves as the foundation for all patrol route and bandobast point selection",
    ],
    outcomes: ["Shared intelligence", "Priority-based planning", "Consistent ground data", "Informed decisions"],
    icon: Map,
    accentColor: "blue",
    image: "/New Images/Static Points Screen.png",
  },
  {
    id: "assets",
    label: "Asset Mgmt.",
    category: "Asset & Resource Management",
    headline: "Know Where Every Vehicle and Resource Is. At All Times.",
    subheadline: "Patrol cars, motorcycles, barricades, equipment all registered, assigned, and tracked digitally.",
    body: "CopMap digitally registers and tracks all police station assets. Every asset can be assigned directly to an operation, and tracked by officer, duty, and time.",
    points: [
      "Register all station assets with type, condition, and availability status",
      "Assign vehicles and equipment directly to specific operations",
      "Track asset usage by officer, duty, and time",
      "Identify underutilised or shortage assets across stations",
    ],
    outcomes: ["Optimised utilisation", "Full accountability", "No untracked equipment", "Current inventory"],
    icon: Truck,
    accentColor: "sky",
    image: "/New Images/Vehicles Screen.png",
  },
];

const accentMap: Record<string, { ring: string; text: string; bg: string; border: string; glow: string; dot: string }> = {
  blue: { ring: "ring-[#00a2c7]/30", text: "text-[#00a2c7]", bg: "bg-[#00a2c7]/10", border: "border-[#00a2c7]/25", glow: "rgba(0,162,199,0.15)", dot: "bg-blue-400" },
  cyan: { ring: "ring-cyan-500/30", text: "text-[#00a2c7]", bg: "bg-cyan-500/10", border: "border-cyan-500/25", glow: "rgba(6,182,212,0.15)", dot: "bg-cyan-400" },
  sky: { ring: "ring-sky-500/30", text: "text-[#00a2c7]", bg: "bg-sky-500/10", border: "border-sky-500/25", glow: "rgba(14,165,233,0.15)", dot: "bg-sky-400" },
};

// ─── FEATURE PANEL (right side animated content) ─────────────
const FeaturePanel = ({ feature, direction }: { feature: typeof featuresData[0]; direction: number }) => {
  const accent = accentMap[feature.accentColor];
  const Icon = feature.icon;

  return (
    <motion.div
      key={feature.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="h-full flex flex-col"
    >
      {/* Top: visual panel */}
      <div className="relative rounded-[1.75rem] overflow-hidden mb-6 border border-slate-200 bg-slate-50 cursor-default"
        style={{ minHeight: "240px", boxShadow: `0 0 60px ${accent.glow}, 0 15px 40px rgba(15,23,42,0.05)` }}>
        {/* Dot grid bg */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        {/* Top edge glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent ${feature.accentColor === "blue" ? "via-blue-400/50" : feature.accentColor === "cyan" ? "via-cyan-400/50" : "via-sky-400/50"} to-transparent`} />

        {feature.image ? (
          <div className="relative h-[240px] overflow-hidden">
            <img src={feature.image} alt={feature.headline}
              className="w-full h-full object-cover object-top opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="flex items-center justify-center h-[240px] relative">
            {/* Animated ring */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute w-32 h-32 rounded-full ${accent.bg} border ${accent.border}`}
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className={`absolute w-48 h-48 rounded-full ${accent.bg} border ${accent.border}`}
            />
            <motion.div
              className={`relative z-10 w-20 h-20 rounded-2xl ${accent.bg} border ${accent.border} flex items-center justify-center shadow-xl`}
              animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon size={36} className={accent.text} />
            </motion.div>
          </div>
        )}

        {/* Category badge overlay */}
        <div className="absolute bottom-4 left-4">
          <span className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] ${accent.text} ${accent.bg} border ${accent.border} px-3 py-1.5 rounded-full backdrop-blur-sm`}>
            <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} animate-pulse`} />
            {feature.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-2xl lg:text-3xl font-heading font-black text-slate-900 leading-[1.15] tracking-tight mb-3">
          {feature.headline}
        </h2>
        <p className="text-sm font-semibold mb-4 text-[#00a2c7]">{feature.subheadline}</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">{feature.body}</p>

        {/* Feature points */}
        <ul className="space-y-2.5 mb-6">
          {feature.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-slate-200 shadow-sm"
            >
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#00a2c7]/5 border border-[#00a2c7]/20 flex items-center justify-center">
                <CheckCircle2 size={11} className="text-[#00a2c7]" />
              </span>
              <span className="text-sm text-slate-700 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        {/* Outcome tags */}
        <div className="flex flex-wrap gap-2">
          {feature.outcomes.map((o) => (
            <span key={o}
              className="text-[10px] px-3 py-1.5 rounded-full bg-slate-100 bg-slate-800 bg-white/5 text-slate-400 border border-white/10 font-bold uppercase tracking-[0.12em]">
              {o}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ─── MINI FEATURE CARDS (bottom grid, on DARK bg) ─────────────
const MiniFeatureCard = ({ feature, index }: { feature: typeof featuresData[0]; index: number }) => {
  const accent = accentMap[feature.accentColor];
  const Icon = feature.icon;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-6 rounded-[1.5rem] border border-white/[0.07] bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-400 overflow-hidden cursor-default"
    >
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-4/5 bg-gradient-to-r from-transparent ${feature.accentColor === "blue" ? "via-blue-400/50" : feature.accentColor === "cyan" ? "via-cyan-400/50" : "via-sky-400/50"} to-transparent transition-all duration-500`} />

      <div className={`w-11 h-11 rounded-xl ${accent.bg} border ${accent.border} flex items-center justify-center mb-4`}>
        <Icon size={20} className={accent.text} />
      </div>
      <h3 className="text-sm font-heading font-bold text-white mb-2">{feature.category}</h3>
      <p className="text-xs text-slate-500 text-slate-400 text-slate-400 leading-relaxed">{feature.subheadline}</p>

      <div className={`absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-r from-transparent ${feature.accentColor === "blue" ? "via-[#00a2c7]/30" : feature.accentColor === "cyan" ? "via-cyan-500/30" : "via-sky-500/30"} to-transparent`} />
    </motion.div>
  );
};


// ─── MAIN PAGE ─────────────────────────────────────────────────
const FeaturesPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [direction, setDirection] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace("#", "");
      const index = featuresData.findIndex(f => f.id === hashId);
      if (index !== -1) {
        setActiveFeature(index);
        setTimeout(() => {
          tabsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <PageTransition>
      <SEOHead 
        title="CopMap Features — Police Force Management Tools"
        description="Explore CopMap's end-to-end police field operations platform. From smart bandobast planning to real-time patrolling and officer management."
        keywords="bandobast planning, police patrolling features, officer management software, attendance automation, law enforcement tools"
        canonical="/features"
      />
      <main className="min-h-screen bg-slate-50 dark:bg-[#0A192F] text-slate-900 dark:text-white overflow-x-hidden relative font-sans">
        <div className="absolute top-0 w-full z-50">
          <Navbar />
        </div>

        <PageHero
          badge="Platform Features"
          badgeType="ping"
          title={<>Every Feature Your{" "}<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-[#00a2c7] animate-gradient">Force Needs.</span></>}
          subtitle="An end-to-end field operations platform. Real-time intelligence from the constable on the ground to the Commissioner in the command room."
        />

        {/* ─── INTERACTIVE FEATURE EXPLORER (Fluence-style tabs) ─── */}
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,rgba(37,99,235,0.05),transparent)]" />
          <div className="container mx-auto px-4 lg:px-8 max-w-[1360px] relative z-10">

            {/* Section label */}
            <div className="text-center mb-14">
              <ScrollReveal delay={0} duration={0.5}>
                <span className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.22em] text-[#00a2c7] mb-4 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
                  Feature Explorer
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1} duration={0.55} yOffset={20}>
                <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 tracking-tight">
                  Explore every module in detail.
                </h2>
              </ScrollReveal>
            </div>

            {/* Main explorer layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] gap-6 lg:gap-8 items-start">

              {/* LEFT: Tab navigation */}
              <ScrollSlide direction="left" delay={0.05} duration={0.65}>
              <div ref={tabsRef} className="lg:sticky lg:top-28">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 backdrop-blur-sm shadow-sm p-3 space-y-1">
                  {featuresData.map((f, i) => {
                    const accent = accentMap[f.accentColor];
                    const Icon = f.icon;
                    const isActive = activeFeature === i;
                    return (
                      <button
                        key={f.id}
                        onClick={() => setActiveFeature(i)}
                        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300 group relative overflow-hidden ${isActive
                          ? `${accent.bg} border ${accent.border} shadow-sm`
                          : "border border-transparent hover:bg-white hover:border-slate-200"
                          }`}
                      >
                        {/* Active indicator bar */}
                        {isActive && (
                          <motion.div
                            layoutId="tab-indicator"
                            className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-full ${accent.dot}`}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          />
                        )}

                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isActive ? `${accent.bg} ${accent.text}` : "bg-white text-slate-400 group-hover:text-slate-600 border border-slate-100"
                          }`}>
                          <Icon size={15} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className={`text-xs font-bold transition-colors duration-200 ${isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}>
                            {f.category}
                          </div>
                        </div>

                        <ChevronRight size={14} className={`flex-shrink-0 transition-all duration-200 ${isActive ? `${accent.text} opacity-100` : "text-slate-300 opacity-0 group-hover:opacity-100"}`} />
                      </button>
                    );
                  })}
                </div>

                {/* Progress indicator */}
                <div className="mt-4 px-2">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 uppercase tracking-widest font-bold">
                    <span>Module</span>
                    <span>{activeFeature + 1} / {featuresData.length}</span>
                  </div>
                  <div className="h-0.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      animate={{ width: `${((activeFeature + 1) / featuresData.length) * 100}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Nav buttons */}
                <div className="mt-4 flex gap-2 px-2">
                  <button
                    onClick={() => {
                      setDirection(-1);
                      setActiveFeature(Math.max(0, activeFeature - 1));
                    }}
                    disabled={activeFeature === 0}
                    className="flex-1 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() => {
                      setDirection(1);
                      setActiveFeature(Math.min(featuresData.length - 1, activeFeature + 1));
                    }}
                    disabled={activeFeature === featuresData.length - 1}
                    className="flex-1 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
                  >
                    Next →
                  </button>
                </div>
              </div>
              </ScrollSlide>

              {/* RIGHT: Animated content panel */}
              <ScrollFade delay={0.15} duration={0.65}>
              <div className="rounded-[2rem] border border-slate-200 bg-white backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.05)] p-6 lg:p-8 min-h-[600px] overflow-hidden relative">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full pointer-events-none opacity-50"
                  style={{ background: accentMap[featuresData[activeFeature].accentColor].glow }} />

                <AnimatePresence mode="wait">
                  <FeaturePanel
                    key={featuresData[activeFeature].id}
                    feature={featuresData[activeFeature]}
                    direction={direction}
                  />
                </AnimatePresence>
              </div>
              </ScrollFade>
            </div>
          </div>
        </section>

        {/* ─── ALL MODULES GRID — HOVER-REVEAL ─── */}
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden border-t border-slate-200">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="container mx-auto px-4 lg:px-8 max-w-[1360px] relative z-10">
            <div className="text-center mb-14">
              <ScrollReveal delay={0}>
                <span className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.22em] text-[#00a2c7] mb-4 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
                  All Modules
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1} yOffset={20}>
                <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 tracking-tight">
                  The complete capability stack.
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuresData.map((f, i) => {
                const accent = accentMap[f.accentColor];
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.id}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className={`group relative p-6 rounded-[1.5rem] border border-slate-200 bg-white hover:shadow-lg transition-all duration-400 overflow-hidden cursor-default`}
                  >
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-4/5 bg-gradient-to-r from-transparent via-[#00a2c7]/50 to-transparent transition-all duration-500`} />
                    <div className={`w-10 h-10 rounded-xl ${accent.bg} border ${accent.border} flex items-center justify-center mb-4`}>
                      <Icon size={18} className={accent.text} />
                    </div>
                    <h3 className="text-sm font-heading font-bold text-slate-900 mb-1.5">{f.category}</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-1 opacity-80">{f.subheadline}</p>
                    <div className={`absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-r from-transparent via-[#00a2c7]/30 to-transparent`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ─── DIFFERENTIATORS — STAT STRIP ─── */}
        <section className="py-20 bg-[#030712] relative overflow-hidden border-t border-white/5">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Zap, label: "Deployed in Days", value: "2–3", unit: "days setup", desc: "Command center live in 2-3 days. Full force operational in under two weeks.", color: "text-[#00a2c7]", bg: "bg-[#00a2c7]/10", border: "border-[#00a2c7]/20" },
                { icon: Shield, label: "Maximum Fraud Deterrence.", value: "AES-256", unit: "encryption", desc: "256-bit AES encryption.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { icon: MapPin, label: "Works Offline", value: "100%", unit: "field ready", desc: "Officers function in low-connectivity areas. Smart sync keeps data current.", color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" }
              ].map((item, i) => (
                <ScrollFade key={item.label} delay={i * 0.1} duration={0.6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`group p-8 rounded-[2rem] border ${item.border} ${item.bg} relative overflow-hidden hover:scale-[1.02] transition-all duration-400 cursor-default`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center`}>
                      <item.icon size={22} className={item.color} />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-black tabular-nums ${item.color}`}>{item.value}</div>
                      <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">{item.unit}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
                </ScrollFade>
              ))}
            </div>
          </div>
        </section>


        {/* ─── CTA — TERMINAL BANNER ─── */}
        <section className="py-32 bg-[#030712] relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00a2c7]/8 blur-[150px] rounded-full" />

          <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
            {/* Terminal prompt line */}
            <ScrollReveal delay={0} duration={0.5} yOffset={-12}>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00a2c7]/60 mb-8 px-4 py-2 rounded-xl bg-slate-100 bg-slate-800 bg-white/5 bg-white/[0.03] border border-white/[0.06]">
              <span className="text-emerald-400">$</span>
              <span>copmap --request-demo --jurisdiction="your-district"</span>
              <span className="w-2 h-4 bg-[#00a2c7]/60 animate-pulse" />
            </div>
            </ScrollReveal>

            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
              className="text-5xl lg:text-7xl font-heading font-black text-white tracking-tighter mb-8 leading-[1.1]"
            >
              Ready to See It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a2c7] to-blue-400">Live?</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-10 mx-auto max-w-lg"
            >
              Book a free 30-minute demo and see every feature running in a real deployment scenario.
            </motion.p>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button className="h-14 px-8 rounded-full shadow-[0_0_30px_rgba(0,162,199,0.4)]" asChild icon={ArrowRight}>
                <Link to="/contact">
                  Schedule Live Demo
                </Link>
              </Button>
              <Button variant="outline-hero" className="h-14 px-8 rounded-full" asChild>
                <Link to="/product">View Products</Link>
              </Button>
            </motion.div>
          </div>
        </section>


        <Footer />
      </main>
    </PageTransition>
  );
};

export default FeaturesPage;
