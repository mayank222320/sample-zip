import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server, TriangleAlert as AlertTriangle, Mail } from "lucide-react";
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
        title: "Purpose",
        items: [
            "This policy outlines the security architecture, principles, and operational controls enforced by CopMap, a mission-critical law enforcement platform.",
            "It ensures the protection of all systems, infrastructure, and law enforcement operational data handled by the platform.",
        ],
    },
    {
        num: "02",
        title: "Scope",
        intro: "Applies to all:",
        items: [
            "Users accessing CopMap services (web and mobile apps)",
            "Internal services and APIs of the platform",
            "Infrastructure and databases used in deployment",
            "Development, monitoring, and incident management processes",
        ],
    },
    {
        num: "03",
        title: "Core Security Principles",
        intro: "CopMap has been designed from the ground up with security-by-design and zero trust architecture as foundational principles:",
        items: [
            "No external service exposure",
            "Encrypted communication and storage",
            "Privately hosted infrastructure",
            "Strict internal access and API governance",
            "Designed in alignment with Government of India cybersecurity guidelines (CERT-In)",
        ],
    },
    {
        num: "04",
        title: "Infrastructure Security",
        items: [
            "CopMap is privately hosted on Google Cloud Platform (GCP) and Microsoft Azure, isolated within VPC environments, with no public exposure of internal services.",
            "Each component (frontend, backend, databases, monitoring) resides within private subnets, accessible only via authenticated internal services.",
            "Firewall policies and IAM roles restrict access by IP, identity, and service-to-service trust rules.",
        ],
    },
    {
        num: "05",
        title: "Data Security & Privacy",
        items: [
            "CopMap does not collect or process any personal user data beyond authorized officer credentials used for authentication.",
            "All operational data is securely encrypted at rest and in transit.",
            "Operational data is stored only within private and authorized environments — never shared with unauthorized services or third-party tools.",
            "The CopMap marketing website uses Google Analytics 4 (GA4) solely to measure anonymous website performance. This data is never linked to officer identities or operational data.",
        ],
    },
    {
        num: "06",
        title: "Authentication & Authorization",
        items: [
            "All user accounts are protected by secure password policies and encrypted using advanced hashing algorithms (e.g., bcrypt).",
            "Multi-factor authentication (MFA) is optionally enforced for sensitive access levels.",
            "Role-Based Access Control (RBAC) ensures officers only access information within their jurisdiction.",
            "OAuth2-compliant access tokens control session integrity and scope.",
        ],
    },
    {
        num: "07",
        title: "API & Application Security",
        intro: "Every request is routed through a dedicated API Gateway, which:",
        items: [
            "Validates tokens",
            "Enforces rate-limits and usage policies",
            "Blocks any unauthorized or malformed requests",
            "Internal services are not directly accessible — all services communicate via isolated internal endpoints.",
            "No direct calls can be made to internal microservices from outside the platform.",
        ],
    },
    {
        num: "08",
        title: "Monitoring & Audit Logging",
        items: [
            "Platform usage, API calls, and access activities are continuously monitored.",
            "Audit logs are stored securely for accountability, compliance, and post-incident forensics.",
            "Anomalies such as failed logins, unusual API patterns, or data access spikes are flagged in real-time.",
        ],
    },
    {
        num: "09",
        title: "Data Backup & Recovery",
        items: [
            "Daily encrypted backups of critical services and map configurations are maintained.",
            "Regular disaster recovery drills ensure continuity even in the event of system or infrastructure failure.",
            "Backup storage is separated from live data and hosted securely within approved regions.",
        ],
    },
    {
        num: "10",
        title: "Software Security & DevOps",
        items: [
            "Code is reviewed and scanned for vulnerabilities (following OWASP Top 10 best practices).",
            "CI/CD pipelines are secured and restricted to authorized maintainers.",
            "All services are containerized and sandboxed to minimize attack surface.",
        ],
    },
    {
        num: "11",
        title: "Incident Response",
        intro: "CopMap follows a structured Incident Response Policy:",
        items: [
            "Real-time detection",
            "Isolation of affected services",
            "Notifications to relevant law enforcement command structures",
            "Root cause analysis and preventive action",
            "All incidents are documented and traceable through audit trails.",
        ],
    },
    {
        num: "12",
        title: "Third-Party Access",
        items: [
            "No third-party services or analytics providers have access to any law enforcement data.",
            "If any external audit or integration is required, it is handled via secure, government-approved pipelines.",
        ],
    },
    {
        num: "13",
        title: "Compliance",
        intro: "CopMap is designed to align with:",
        items: [
            "CERT-In Cyber Security Guidelines",
            "DPDP Act, 2023 (India)",
            "IT Act, 2000 (India)",
            "Ministry of Home Affairs policies for digital law enforcement tools",
        ],
    },
    {
        num: "14",
        title: "User Responsibilities",
        intro: "Users must:",
        items: [
            "Protect their login credentials",
            "Use CopMap only for official, authorized purposes",
            "Report any suspected breach or unusual activity to the internal security team",
        ],
    },
    {
        num: "15",
        title: "Updates & Review",
        intro: "This security policy is reviewed quarterly and updated to reflect:",
        items: [
            "New security features",
            "Evolving threats",
            "Law enforcement needs or policy changes",
        ],
    },
];

const SecurityPage = () => {
    const { toast } = useToast();

    const handleAccept = () => {
        localStorage.setItem("copmap_security_accepted", "true");
        toast({
            title: "Security Policy Acknowledged",
            description: "Your data is protected with enterprise-grade security.",
        });
    };

    return (
        <PageTransition>
            <SEOHead 
              title="Security Policy — CopMap Enterprise Grade Protection"
              description="Review CopMap's security architecture, principles, and operational controls. We ensure mission-critical protection for law enforcement data."
              keywords="police data security, law enforcement platform security, zero trust policing, encrypted patrol tracking"
              canonical="/security"
            />
            <main className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-white overflow-x-hidden font-sans selection:bg-[#00a2c7]/30">
                <div className="absolute top-0 w-full z-50">
                    <Navbar />
                </div>

                <PageHero
                  badge="Legal"
                  title={<>Security{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#00a2c7]">Policy</span></>}
                  subtitle="The security architecture, principles, and operational controls that protect every layer of the CopMap platform."
                />

                {/* Classification banner */}
                <section className="bg-slate-50 dark:bg-[#050B14] border-t border-slate-200 dark:border-white/5 py-10">
                    <div className="container mx-auto px-4 lg:px-8 max-w-[1100px]">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-[2rem] border border-red-500/20 bg-red-500/5 p-8 lg:p-10 relative overflow-hidden depth-hover cursor-default"
                        >
                            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-transparent via-red-500 to-transparent rounded-full" />
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/25 flex items-center justify-center shrink-0 mt-1">
                                    <AlertTriangle size={18} className="text-red-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400 mb-2">Classification</p>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                                        <span className="text-slate-900 dark:text-white font-semibold">Maintained by:</span> EyeQlytics Tech Pvt. Ltd.
                                        <span className="mx-3 text-slate-300 dark:text-white/20">|</span>
                                        <span className="text-slate-900 dark:text-white font-semibold">Classification:</span> Confidential – Government/Internal Use Only
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
                                                
                                                <ul className="space-y-3">
                                                    {sec.items.map((item, j) => (
                                                        <li key={j} className="flex items-start gap-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#00a2c7] shrink-0 shadow-[0_0_8px_#00a2c7]" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                        {/* Contact */}
                        <div className="mt-8 pt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-[2rem] border border-red-200 bg-gradient-to-br from-red-50 to-white p-8 lg:p-12 shadow-[0_8px_30px_rgb(239,68,68,0.06)] relative overflow-hidden"
                            >
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-400/10 blur-[50px] rounded-full pointer-events-none" />
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center shrink-0">
                                        <Mail size={24} className="text-red-600" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-heading font-black text-slate-900 dark:text-white mb-4">Contact for Security Issues</h3>
                                        <a href="mailto:admin@copmap.in" className="inline-flex items-center gap-2.5 text-base font-bold text-slate-900 dark:text-white hover:text-red-600 transition-colors bg-white dark:bg-white/10 px-6 py-3 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm mb-4">
                                            <Mail size={18} className="text-red-500" /> admin@copmap.in
                                        </a>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium block">Security &amp; Compliance Team, EyeQlytics Tech Pvt. Ltd.</p>
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
                                    icon={ShieldCheck}
                                    iconPosition="left"
                                >
                                    Acknowledge Security Policy
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

export default SecurityPage;
