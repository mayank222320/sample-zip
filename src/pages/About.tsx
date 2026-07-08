import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Zap, Award, Shield, Radio, Building2, ArrowRight, MapPin, CircleCheck as CheckCircle2, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import { ScrollReveal, ScrollFade, ScrollSlide } from "@/components/ScrollReveal";
import { TiltCard } from "@/components/TiltCard";
import { useRef } from "react";
import SEOHead from "@/components/seo/SEOHead";
import EmailObfuscator from "@/components/seo/EmailObfuscator";

// ─── DATA ────────────────────────────────────────────────────────────────────

const differentiators = [
  { icon: Target, title: "Purpose-Built for Indian Policing", desc: "Not a generic workforce tool adapted for security. Built from day one around India's police hierarchy, bandobast workflows, and field conditions." },
  { icon: Zap, title: "Real-Time, Not Retrospective", desc: "Every deployment tracked live. Every officer visible in real time. Every alert instant not after the fact." },
  { icon: Eye, title: "Complete Operational Visibility", desc: "From the station to the state — every level of command sees exactly what they need, when they need it." },
  { icon: Shield, title: "Maximum Fraud Deterrence.", desc: "No paper registers, no phone coordination, no manual reports. Everything digital, automatic, and auditable." },
];

const recognition = [
  { icon: Award, title: "MeitY Genesis Grant", desc: "Ministry of Electronics and Information Technology, Government of India" },
  { icon: Shield, title: "Endorsed by IPS Officers", desc: "Serving IPS Officers and SPs — Maharashtra Police" },
  { icon: Building2, title: "Maharashtra Innovation Cell", desc: "State Innovation Recognition — Maharashtra" },
  { icon: Radio, title: "Active Implementation", desc: "Nagpur City Police, Zone I — Live Deployment" },
];

const timelineSteps = [
  { year: "2021", title: "The Problem Identified", desc: "After months of field research with Maharashtra Police officers, the CopMap team documented the systemic gaps — paper diaries, phone-call deployments, zero GPS visibility, and hours wasted on manual rosters." },
  { year: "2022", title: "First Prototype", desc: "The first functional CopMap prototype was built and tested with real field officers. Core features bandobast mapping, GPS tracking, and digital attendance were validated in Zone I." },
  { year: "2023", title: "MeitY Genesis Grant", desc: "CopMap received the prestigious MeitY Genesis Grant from the Government of India, recognising its potential to transform policing operations at scale." },
  { year: "2024", title: "Live Deployment — Nagpur Police", desc: "CopMap went live with Nagpur City Police, Zone I bringing real-time patrol tracking, digital bandobast management, and automated attendance to active duty officers." },
  { year: "2025", title: "Expanding Across Maharashtra", desc: "CopMap continues to scale across Maharashtra, with ongoing implementations and endorsements from senior IPS officers committed to digitising frontline policing." },
];

const companyInfo = [
  ["Company", "EyeQlytics Technologies Private Limited"],
  ["Product", "CopMap"],
  ["Website", "www.copmap.in"],
  ["Email", "info@copmap.in"],
  ["Phone", "+91 8855891936"],
  ["Address", "10/81, Near SJP Petrol Pump, Bidkin, Chhatrapati Sambhajinagar – 431105, Maharashtra, India"],
];

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
const AboutPage = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef as React.RefObject<Element>, { once: true, margin: "-100px" });

  return (
    <PageTransition>
      <SEOHead 
        title="About CopMap — India's Police Digital Mission"
        description="Learn about CopMap's mission to digitize law enforcement field operations. Founded on deep field research and recognized by MeitY, Government of India."
        keywords="police digitization mission, law enforcement technology company India, EyeQlytics Technologies, CopMap story, modern policing"
        canonical="/about"
      />
      <main className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-white overflow-x-hidden relative font-sans selection:bg-[#00a2c7]/30">
        <div className="absolute top-0 w-full z-50">
          <Navbar />
        </div>

        <PageHero
          badge="About CopMap"
          title={<>Built from the ground up.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#00a2c7] animate-gradient">For the ground force.</span></>}
          subtitle="Not built from a boardroom. Built after years of field research understanding how Indian policing works, where the friction is, and what a real solution looks like."
        />

        {/* ─── MISSION + VISION — DIAGONAL SPLIT ─── */}
        <section className="py-24 bg-slate-50 dark:bg-[#050B14] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
            <div className="grid md:grid-cols-2 gap-6">

              {/* Mission — accent border left */}
              <ScrollSlide direction="left" delay={0} duration={0.7}>
              <TiltCard intensity={7} className="rounded-[2rem]">
              <div className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-10 lg:p-12 group relative overflow-hidden">
                <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-[#00a2c7]/60 to-transparent group-hover:via-[#00a2c7] transition-all duration-500" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a2c7]/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#00a2c7] mb-5">01 — Mission</div>
                <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-5">
                  Making Policing{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c3eb] to-[#00a2c7]">Transparent &amp; Accountable.</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
                  CopMap exists to give every officer the tools they need on the ground — and every supervisor the full visibility they need in the command room.
                </p>
                {["Every operation planned", "Every officer visible", "Every action recorded"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 size={13} className="text-gray-400" />
                    <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">{item}</span>
                  </div>
                ))}


              </div>
              </TiltCard>
              </ScrollSlide>

              {/* Vision */}
              <ScrollSlide direction="right" delay={0.1} duration={0.7}>
              <TiltCard intensity={7} className="rounded-[2rem]">
              <div className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-10 lg:p-12 group relative overflow-hidden">
                <div className="absolute right-0 top-8 bottom-8 w-0.5 bg-gradient-to-b from-transparent via-blue-500/60 to-transparent group-hover:via-blue-400 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-400 mb-5">02 — Vision</div>
                <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-5">
                  The{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00a2c7]">Digital Backbone</span>{" "}for Modern Law Enforcement.
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  A future where law enforcement is entirely paperless, deeply connected, and proactively guided by real-time intelligence — creating safer cities and more efficient police forces.
                </p>
              </div>
              </TiltCard>
              </ScrollSlide>

            </div>
          </div>
        </section>

        {/* ─── STORY TIMELINE ─── */}
        <section className="py-24 bg-[#f8fafc] dark:bg-[#030f1e] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">

              {/* Left: heading */}
              <div className="lg:sticky lg:top-32">
                <ScrollReveal delay={0}>
                  <div className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#00c3eb] mb-5 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
                    Our Story
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1} duration={0.65} yOffset={24}>
                  <h2 className="text-4xl lg:text-5xl font-heading font-black text-slate-900 leading-[1.1] tracking-tight mb-5">
                    From field research to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a2c7] to-cyan-400">
                      live deployment.
                    </span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.18} yOffset={16}>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    CopMap didn't start with a pitch deck. It started with conversations — with officers, inspectors, and command staff who knew exactly what was broken and had no solution.
                  </p>
                </ScrollReveal>

                {/* Mini stat strip */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: "2+", l: "Years of R&D" },
                    { v: "2024", l: "Founded" },
                    { v: "MeitY", l: "Grant Recipient" },
                    { v: "Live", l: "In Nagpur Police" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.l}
                      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.25 + i * 0.08 }}
                      className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm depth-hover cursor-default shimmer-surface overflow-hidden"
                    >
                      <div className="text-2xl font-black text-slate-900 dark:text-white mb-1">{s.v}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#00a2c7] font-bold">{s.l}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: timeline */}
              <div ref={timelineRef} className="relative pl-8">
                {/* Animated vertical line */}
                <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <motion.div
                    className="w-full bg-gradient-to-b from-[#00c3eb] via-[#00a2c7] to-[#00a2c7] origin-top"
                    initial={{ scaleY: 0 }}
                    animate={timelineInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 2, ease: [0.215, 0.61, 0.355, 1] }}
                    style={{ height: "100%" }}
                  />
                </div>

                <div className="space-y-0">
                  {timelineSteps.map((step, i) => (
                    <motion.div
                      key={step.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.14, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="relative flex gap-8 pb-16 group"
                    >
                      {/* Node */}
                      <div className="absolute -left-[38px] top-1 flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-[#0f172a] border-[3px] border-slate-200 dark:border-slate-700 group-hover:border-[#00c3eb] flex items-center justify-center transition-all duration-300 z-10">
                        <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#00c3eb] transition-colors duration-300 shadow-[0_0_10px_#00c3eb] opacity-0 group-hover:opacity-100" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-0.5">
                        <span className="text-[12px] font-black uppercase tracking-[0.25em] text-[#00a2c7] mb-2 block">{step.year}</span>
                        <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY COPMAP — Bento spotlight grid ─── */}
        <section className="py-24 bg-white dark:bg-[#050B14] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay z-0" />
          <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 items-end justify-between mb-16">
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#00c3eb] mb-4 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100"
                >
                  Why CopMap
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-[1.1]"
                >
                  Purpose-Built.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a2c7] to-cyan-400">Not Adapted.</span>
                </motion.h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
                className="text-sm text-slate-600 font-medium max-w-sm lg:text-right leading-relaxed"
              >
                Generic tools fail field operations. CopMap was designed around India's specific policing structure from day one.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {differentiators.map((d, i) => (
                <ScrollFade key={d.title} delay={i * 0.1} duration={0.55}>
                <TiltCard intensity={6} className="rounded-[2rem]">
                <div
                  className="flex gap-6 items-start p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/5 hover:border-[#00a2c7]/30 hover:shadow-xl hover:shadow-[#00a2c7]/8 transition-all duration-400 group cursor-default"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#00a2c7]/10 border border-[#00a2c7]/20 flex items-center justify-center group-hover:bg-[#00a2c7]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                    <span className="text-lg font-black text-[#00a2c7]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <d.icon size={15} className="text-[#00a2c7]" />
                      <h3 className="text-base font-heading font-bold text-slate-900 dark:text-white">{d.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
                </TiltCard>
                </ScrollFade>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RECOGNITION ─── */}
        <section className="py-24 bg-[#f8fafc] dark:bg-[#030f1e] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#00c3eb] mb-5 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100"
                >
                  Recognition
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]"
                >
                  Recognised by the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a2c7] to-cyan-400">
                    institutions that matter.
                  </span>
                </motion.h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="text-slate-600 dark:text-slate-400 text-sm max-w-xs leading-relaxed"
              >
                Government grants, senior officer endorsements, and live deployments not just awards, but real-world validation.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {recognition.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className="relative p-7 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-[#00a2c7]/30 hover:bg-white dark:hover:bg-white/5 transition-all duration-400 group hover:shadow-xl hover:shadow-[#00a2c7]/5 overflow-hidden depth-hover cursor-default"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#00a2c7]/50 to-transparent transition-all duration-500" />
                  <div className="w-11 h-11 rounded-xl bg-[#00a2c7]/10 border border-[#00a2c7]/15 flex items-center justify-center mb-5">
                    <r.icon size={19} className="text-[#00a2c7]" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-slate-900 dark:text-white mb-2 leading-snug">{r.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{r.desc}</p>
                  <div className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-[#00a2c7]/30 to-transparent transition-opacity duration-400" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMPANY INFO ─── */}
        <section className="py-24 bg-white dark:bg-[#050B14] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#00c3eb] mb-5 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100"
                >
                  Company
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="text-4xl lg:text-5xl font-heading font-black text-slate-900 dark:text-white tracking-tight mb-4 leading-tight"
                >
                  The team behind the mission.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
                  className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10"
                >
                  EyeQlytics Technologies is the company behind CopMap — a firm laser-focused on digitising India's law enforcement.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
                >
                  <Button className="h-14 px-8 rounded-full shadow-xl" asChild icon={ArrowRight}>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
                className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-black/20"
              >
                <div className="px-8 pt-7 pb-5 border-b border-slate-100 dark:border-white/5 flex items-center gap-3 bg-slate-50 dark:bg-white/[0.02]">
                  <div className="w-10 h-10 rounded-xl bg-[#00a2c7]/10 border border-[#00a2c7]/20 flex items-center justify-center">
                    <Building2 size={18} className="text-[#00c3eb]" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Company Profile</div>
                    <div className="text-[10px] text-[#00a2c7] font-bold">EyeQlytics Technologies</div>
                  </div>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-white/5">
                  {companyInfo.map(([label, value], i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                      className="flex items-start gap-5 px-8 py-5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                    >
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00c3eb] w-24 shrink-0 pt-1">{label}</span>
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-bold">
                        {label === "Email" ? (
                          <EmailObfuscator 
                            email={value} 
                            className="text-[#00a2c7] hover:underline"
                          />
                        ) : value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── CTA — CINEMATIC BANNER ─── */}
        <section className="py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[#030712]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00a2c7]/10 blur-[150px] rounded-full" />
          {/* Left vertical bar */}
          <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#00a2c7]/40 to-transparent" />
          <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#00a2c7]/20 to-transparent" />
          <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#00a2c7] mb-8 bg-[#00a2c7]/10 px-3 py-1.5 rounded-full border border-[#00a2c7]/25"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a2c7] animate-pulse" />
              Live Deployments Available
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-heading font-black text-white tracking-tighter mb-6 leading-[1.05]"
            >
              Ready to see CopMap{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a2c7] to-blue-400">in action?</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            >
              Book a free 30-minute demo and see every feature running in a real deployment scenario.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.26 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button className="h-14 px-8 rounded-full shadow-[0_0_30px_rgba(0,162,199,0.4)]" asChild icon={ArrowRight}>
                <Link to="/contact">Schedule Live Demo</Link>
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

export default AboutPage;
