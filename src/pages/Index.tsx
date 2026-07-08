import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, ChevronDown, Zap, Shield, Globe, MapPin, Activity, Lock, Radio } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import MarqueeTicker from "@/components/MarqueeTicker";
import { useState, useEffect, useRef } from "react";
import SEOHead from "@/components/seo/SEOHead";
import { FAQSchema } from "@/components/seo/StructuredData";
import { GlassStats } from "@/components/GlassStats";
import { GlassFeatures } from "@/components/GlassFeatures";
import { EcosystemLayers3D } from "@/components/EcosystemLayers3D";
import GlassHero from "@/components/GlassHero";

const tickerItems = [
  { text: "Live GPS Tracking" },
  { text: "Bandobast Management", highlight: true },
  { text: "Minimal Paperwork" },
  { text: "Strategic Deployment", highlight: true },
  { text: "Patrolling Operations" },
  { text: "Active in Law Enforcement", highlight: true },
  { text: "Attendance Automation" },
  { text: "Resource Escalation" },
  { text: "Endorsed by Top Brass", highlight: true },
  { text: "Real-Time Command" },
];

const faqItems = [
  { q: "Is the operational data secured?", a: "Yes. All operational data is heavily encrypted at rest and in transit, hosted securely in compliance with strict law enforcement infosec guidelines." },
  { q: "Can field officers tamper with the GPS?", a: "No. The CopMap system utilizes tamper-evident tracking technology and instantly logs all disconnects for immediate administrative review." },
  { q: "Does this replace manual station diaries?", a: "Yes. CopMap integrates duty assignments with automated shift generation, completely digitizing 90% of tedious manual paperwork." },
  { q: "What is the deployment timeline?", a: "Initial command center setup takes typically 2-3 days, with full field personnel onboarded and trained in under two weeks." }
];

const AnimatedNumber = ({ count, suffix, shouldStart }: { count: number; suffix: string; shouldStart: boolean }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    const dur = 2200;
    const t0 = performance.now();
    const run = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * count));
      if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }, [shouldStart, count]);
  return <>{val}{suffix}</>;
};

const HowItWorksSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });

  const steps = [
    { num: "01", title: "Station Onboarding", body: "Register your station, import officer roster, and configure patrol zones — all in under 48 hours." },
    { num: "02", title: "Deploy to the Field", body: "Officers download the mobile app, check in digitally, and begin GPS-verified patrols instantly." },
    { num: "03", title: "Monitor in Real Time", body: "Command center sees every officer, every route, every alert — live on an interactive map." },
    { num: "04", title: "Audit & Report", body: "Auto-generated muster rolls, duty logs, and patrol reports available instantly for review." },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none grid-lines opacity-30" />

      {/* Gradient accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 container mx-auto px-6 lg:px-10 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50 text-blue-700"
          >
            <Zap size={12} />
            <span className="text-[11px] font-bold uppercase tracking-wider">Platform Workflow</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
          >
            Live in{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              4 simple steps.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-xl mx-auto"
          >
            No server setup. No complex IT. Just onboard and go live.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl p-7 group cursor-default bg-white border border-slate-200/60 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Hover gradient */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.06), transparent 70%)" }}
              />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

              {/* Number */}
              <div className="text-5xl font-black mb-4 text-blue-500/15">{step.num}</div>
              <h3 className="text-base font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.body}</p>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-2 hidden lg:flex items-center z-10">
                  <ArrowRight size={14} className="text-blue-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none grid-dots-subtle opacity-30" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center px-4 py-2.5 rounded-full mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50 text-blue-700"
          >
            <span className="text-[11px] font-bold uppercase tracking-wider">Knowledge Base</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mt-2"
          >
            Common questions,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              answered.
            </span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-300 bg-white ${
                openFaq === i
                  ? "border-blue-300 shadow-lg shadow-blue-500/5"
                  : "border-slate-200/60 hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {openFaq === i && (
                <motion.div
                  layoutId="faq-accent"
                  className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-blue-500 to-indigo-500"
                />
              )}

              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-base font-semibold transition-colors duration-200 pr-4 ${
                  openFaq === i ? "text-slate-900" : "text-slate-700"
                }`}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openFaq === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    openFaq === i ? "bg-blue-500/10 border-blue-200" : "bg-slate-100 border-slate-200"
                  } border`}
                >
                  <ChevronDown
                    size={16}
                    className={openFaq === i ? "text-blue-600" : "text-slate-400"}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.27 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-slate-100">
                      <div className="pt-4 text-sm text-slate-600 leading-relaxed pl-3">{faq.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm mb-6">Ready to modernize your force operations?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 h-12 px-8 rounded-full font-bold text-sm text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true });

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 pointer-events-none grid-dots-subtle opacity-30" />

      <div ref={ref} className="relative z-10 container mx-auto px-6 max-w-[900px]">
        <div
          className="relative overflow-hidden rounded-[2rem] p-12 lg:p-20 text-center bg-white border border-slate-200/60 shadow-2xl shadow-slate-900/5"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-indigo-500/3 to-violet-500/3" />

          {/* Top gradient line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full mb-8 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/50" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">Start Your Deployment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-5 leading-tight"
          >
            Ready to command your force{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              with precision?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 mb-12 leading-relaxed max-w-xl mx-auto"
          >
            Join Maharashtra's live police operations network. Setup in 48 hours. Full station onboarding. Zero infrastructure cost.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a
              href="https://calendly.com/admin-copmap/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 h-14 px-8 rounded-full font-bold text-sm text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Zap size={16} />
              Schedule a Live Demo
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+918855891936"
              className="flex items-center gap-2.5 h-14 px-8 rounded-full font-bold text-sm text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              Call Our Team
            </a>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-400">
            {["No setup fee", "48hr onboarding", "MeitY Recognised", "100% encrypted"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <PageTransition>
      <SEOHead
        title="CopMap — Police Field Operations Platform India"
        description="CopMap is India's leading police bandobast and patrolling platform. Digitize field operations with smart planning and real-time tracking."
        keywords="bandobast app, police patrolling platform, law enforcement digitization, officer tracking software India, smart policing app"
        canonical="/"
      />
      <FAQSchema />

      <main className="min-h-screen overflow-x-hidden relative bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="absolute top-0 w-full z-50">
          <Navbar />
        </div>

        {/* HERO */}
        <GlassHero />

        {/* TICKER */}
        <div className="relative z-20 border-t border-b border-slate-200/60 bg-gradient-to-r from-slate-50 via-white to-slate-50">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
          <div className="flex items-center">
            <div className="hidden sm:flex items-center gap-2 pl-6 pr-5 py-4 border-r border-slate-200/60 shrink-0">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600">Live Feed</span>
            </div>
            <div className="flex-1 py-3.5 overflow-hidden">
              <MarqueeTicker items={tickerItems} speed="normal" dark={false} />
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <HowItWorksSection />

        {/* 3D ECOSYSTEM */}
        <EcosystemLayers3D />

        {/* GLASS STATS */}
        <GlassStats />

        {/* GLASS FEATURES (Bento Grid) */}
        <GlassFeatures />

        {/* FAQ */}
        <FAQSection />

        {/* CTA */}
        <CTASection />

        <Footer />
      </main>
    </PageTransition>
  );
};

export default HomePage;
