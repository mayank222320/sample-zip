import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/seo/SEOHead";

const sections = [
  {
    num: "01",
    title: "Controller & Contact Information",
    items: [
      "EyeQlytics Tech Pvt Ltd is the data controller.",
      "Contact Info: support@eyeqlytics.in | +91 8855891936",
      "Registered Office: Chhatrapati Sambhaji Nagar, Maharashtra, India",
    ],
  },
  {
    num: "02",
    title: "Information We Collect",
    subsections: [
      {
        label: "Personal Data",
        items: [
          "Officer credentials (name, rank, badge ID, agency)",
          "Contact data (work email, phone extension)",
          "Usage logs for auditing access",
          "Explicitly provided data (e.g. feedback, case notes)",
        ],
      },
      {
        label: "Operational Data",
        items: [
          "Geolocation (GPS during deployment)",
          "Incident and intelligence reports",
          "Metadata on mapping overlays, evidence logs",
        ],
      },
      {
        label: "Technical Data",
        items: [
          "IP address, device type, browser",
          "Time-stamped usage and system logs",
        ],
      },
    ],
  },
  {
    num: "03",
    title: "How We Collect Data",
    items: [
      "Direct input during registration and use",
      "Agency integrations (secure API feeds)",
      "Automatic capture via system logs, cookies, and analytics",
    ],
  },
  {
    num: "04",
    title: "Purposes & Legal Basis",
    items: [
      "Provision of services: mapping, coordination, intel sharing (public task basis)",
      "Security & compliance: access audits, threat monitoring",
      "Improvements: analytics, bug fixes, operational feedback",
      "Legal compliance: retention per law, court requests",
    ],
  },
  {
    num: "05",
    title: "Use & Disclosure of Data",
    subsections: [
      {
        label: "Internal Use",
        items: [
          "For authorized official duties, investigations, assignments",
          "For auditing and platform optimization",
        ],
      },
      {
        label: "External Sharing",
        items: [
          "Government/agency sharing under statutory duties",
          "Legal disclosure only with proper warrants/subpoenas",
          "No unauthorized third-party sales or marketing uses",
        ],
      },
    ],
  },
  {
    num: "06",
    title: "Cookies & Tracking",
    items: [
      "Session cookies for secure log-in",
      "Analytics for usage trends",
      "No advertising or external profiling",
    ],
  },
  {
    num: "07",
    title: "Data Retention & Storage",
    items: [
      "Stored only for authorized duration or per agency retention rules",
      "Secure deletion or anonymization when no longer needed",
      "Logs retained per internal policies and legal obligations",
    ],
  },
  {
    num: "08",
    title: "Security Measures",
    items: [
      "Encryption in transit (TLS) and at rest (AES)",
      "Access controls, role-based logs, regular security audits",
      "Periodic privacy reviews for new features",
    ],
  },
  {
    num: "09",
    title: "Your Rights",
    intro: "Depending on applicable laws, you may have the right to:",
    items: [
      "Access, correct, delete personal data",
      "Restrict or object to use",
      "Receive your data in portable format",
      "Lodge complaints with a supervisory authority",
    ],
  },
  {
    num: "10",
    title: "Data Residency and International Transfers",
    items: [
      "CopMap operates entirely within the legal jurisdiction of India.",
      "All data is strictly stored, processed, and backed up within India-based data centers.",
    ],
  },
  {
    num: "11",
    title: "Children's Data",
    items: ["CopMap is for adults only. We do not knowingly collect data on minors."],
  },
  {
    num: "12",
    title: "Policy Updates",
    items: [
      "Updated policies are posted on the platform with a new Effective Date.",
      "Continued use indicates acceptance.",
    ],
  },
  {
    num: "13",
    title: "Governing Law & Dispute Resolution",
    items: ["Indian laws apply. Disputes to be resolved by courts in Mumbai, Maharashtra."],
  },
];

const PrivacyPage = () => {
  const { toast } = useToast();

  const handleAccept = () => {
    localStorage.setItem("copmap_privacy_accepted", "true");
    toast({
      title: "Privacy Policy Accepted",
      description: "Thank you. Your data protection rights are secured.",
    });
  };

  return (
    <PageTransition>
      <SEOHead 
        title="Privacy Policy — How CopMap Protects Your Data"
        description="Read the CopMap Privacy Policy. Learn about our data collection, use, and protection practices in compliance with Indian laws."
        keywords="police privacy policy, law enforcement data protection, CopMap privacy, EyeQlytics data policy"
        canonical="/privacy"
      />
      <main className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-white overflow-x-hidden font-sans selection:bg-[#00a2c7]/30">
        <div className="absolute top-0 w-full z-50">
          <Navbar />
        </div>

        <PageHero
          badge="Legal"
          title={<>Privacy{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#00a2c7]">Policy</span></>}
          subtitle="How CopMap collects, uses, and protects your data — in full compliance with applicable laws and privacy best practices."
        />

        {/* Overview banner */}
        <section className="bg-slate-50 dark:bg-[#050B14] border-t border-slate-200 dark:border-white/5 py-10">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1100px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-[#00a2c7]/20 bg-[#00a2c7]/5 p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-transparent via-[#00a2c7] to-transparent rounded-full" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00a2c7]/15 border border-[#00a2c7]/25 flex items-center justify-center shrink-0 mt-1">
                  <Shield size={18} className="text-[#00a2c7]" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00a2c7] mb-2">Overview</p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                    CopMap ("we", "us", "our") is a secure mapping and intelligence platform developed by{" "}
                    <span className="text-slate-900 dark:text-white font-semibold">EyeQlytics Tech Pvt Ltd</span> for use by authorized law enforcement agencies. This Privacy Policy explains how we collect, use, disclose, and protect personal and sensitive data in compliance with applicable laws and privacy best practices.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-24 relative bg-[#fafafa] dark:bg-[#030f1e] border-t border-slate-200 dark:border-white/5">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="w-full mx-auto px-6 lg:px-16 max-w-[1600px] relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 xl:gap-32">
              {/* Sidebar Navigation */}
              <div className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-32 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] border border-slate-200 dark:border-white/10 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00a2c7] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00a2c7] animate-pulse" />
                    Table of Contents
                  </p>
                  <div className="space-y-1 relative">
                    <div className="absolute left-[9px] top-4 bottom-4 w-px bg-slate-100" />
                    {sections.map((sec) => (
                      <a
                        key={sec.num}
                        href={`#section-${sec.num}`}
                        className="relative flex items-start gap-4 px-3 py-2.5 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
                      >
                         <span className="relative z-10 w-5 h-5 rounded-full bg-white dark:bg-white/10 border-2 border-slate-200 dark:border-white/20 group-hover:border-[#00a2c7] transition-colors shrink-0 mt-0.5" />
                        <span className="group-hover:translate-x-1 transition-transform">{sec.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 min-w-0">
              <div className="space-y-0 relative">
                <div className="absolute left-6 lg:left-8 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden sm:block" />
                
                {sections.map((sec, i) => (
                  <motion.div
                    id={`section-${sec.num}`}
                    key={sec.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="scroll-mt-32 relative py-12"
                  >
                    <div className="flex items-start gap-6 lg:gap-10">
                      <div className="hidden sm:flex flex-col items-center relative z-10 shrink-0">
                        <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-2xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 shadow-sm flex items-center justify-center text-sm lg:text-base font-black text-[#00a2c7]">
                          {sec.num}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 bg-white dark:bg-white/[0.03] rounded-[2rem] border border-slate-200 dark:border-white/10 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,162,199,0.08)] transition-shadow">
                        <div className="sm:hidden w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-black text-[#00a2c7] mb-4">
                          {sec.num}
                        </div>
                        <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white mb-4">{sec.title}</h2>
                        {sec.intro && <p className="text-base text-slate-600 mb-6 leading-relaxed font-medium">{sec.intro}</p>}
                        
                        {"subsections" in sec && sec.subsections ? (
                          <div className="space-y-8">
                            {sec.subsections.map((sub) => (
                              <div key={sub.label} className="bg-slate-50 dark:bg-white/5 rounded-2xl p-6 border border-slate-100 dark:border-white/10">
                                <h4 className="text-sm font-black uppercase tracking-[0.1em] text-[#00a2c7] mb-4">{sub.label}</h4>
                                <ul className="space-y-3">
                                  {sub.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#00a2c7] shrink-0 shadow-[0_0_8px_#00a2c7]" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-3">
                            {sec.items?.map((item, j) => (
                              <li key={j} className="flex items-start gap-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#00a2c7] shrink-0 shadow-[0_0_8px_#00a2c7]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            {/* Privacy-by-Design commitment */}
            <div className="mt-8 pt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 lg:p-12 shadow-[0_8px_30px_rgb(16,185,129,0.06)] relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-400/10 blur-[50px] rounded-full pointer-events-none" />
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                    <Lock size={24} className="text-emerald-600" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-black text-slate-900 dark:text-white mb-3">Privacy-by-Design Commitment</h3>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      We commit to embedding privacy principles — like data minimization, transparency, and purpose limitation — throughout the platform's lifecycle.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 rounded-[2rem] border border-[#00a2c7]/20 bg-gradient-to-br from-[#00a2c7]/5 to-white p-8 lg:p-12 shadow-[0_8px_30px_rgba(0,162,199,0.06)] relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#00a2c7]/10 blur-[50px] rounded-full pointer-events-none" />
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#00a2c7]/10 border border-[#00a2c7]/20 flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-[#00a2c7]" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-heading font-black text-slate-900 mb-4">How to Exercise Your Rights</h3>
                    <p className="text-base text-slate-600 mb-6 font-medium">Contact our Privacy Team for any inquiries or data requests:</p>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <a href="mailto:admin@copmap.in" className="flex items-center gap-2.5 text-base font-bold text-slate-900 hover:text-[#00a2c7] transition-colors bg-white px-6 py-3 rounded-xl border border-slate-200 shadow-sm">
                        <Mail size={18} className="text-[#00a2c7]" /> admin@copmap.in
                      </a>
                      <a href="tel:+919970283329" className="flex items-center gap-2.5 text-base font-bold text-slate-900 hover:text-[#00a2c7] transition-colors bg-white px-6 py-3 rounded-xl border border-slate-200 shadow-sm">
                        <Phone size={18} className="text-[#00a2c7]" /> +91 8855891936
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Accept button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <Button
                  onClick={handleAccept}
                  className="h-16 px-12 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                  variant="cta"
                  icon={Shield}
                  iconPosition="left"
                >
                  Accept Privacy Policy
                </Button>
              </motion.div>
            </div>
            
            </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default PrivacyPage;
