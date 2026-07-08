import { motion } from "framer-motion";
import { FileText, Mail, Phone, MapPin } from "lucide-react";
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
        title: "Eligibility & Access",
        items: [
            "Only duly authorized law enforcement officers, agency personnel, prosecutors, or judges may access and use CopMap in their official capacity.",
            "You affirm that you meet these eligibility requirements and will use the Platform only within the bounds of your professional authority.",
        ],
    },
    {
        num: "02",
        title: "License Grant",
        items: [
            "We grant you a non-exclusive, non-transferable, revocable license to use CopMap strictly for official law enforcement functions; the software and its intellectual property remain our exclusive property.",
            "Any use beyond lawful duties — such as personal use or external dissemination — is expressly forbidden.",
        ],
    },
    {
        num: "03",
        title: "User Credentials & Security",
        items: [
            "You are responsible for the confidentiality of your login credentials. Incident reporting (e.g. if credentials are compromised) is mandatory.",
            "You must not share or transfer credentials; misuse resulting from shared access remains your responsibility.",
        ],
    },
    {
        num: "04",
        title: "Compliance & Auditing",
        items: [
            "We reserve the right to audit license usage to ensure compliance with purchased entitlements or government-issued licenses.",
            "Overuse beyond licensed capacity may incur additional license fees or require termination of excess access.",
        ],
    },
    {
        num: "05",
        title: "Acceptable Use / Prohibited Conduct",
        intro: "Use of the Platform must align with applicable laws, internal policy, and professional ethics. Prohibited actions include:",
        items: [
            "Unauthorized data sharing or misuse of sensitive information",
            "Attempting unauthorized system access or bypassing security",
            "Employing bots, scripts, or reverse engineering",
            "Uploading malicious code or engaging in harassment or discrimination",
        ],
    },
    {
        num: "06",
        title: "Data Collection & Confidentiality",
        items: [
            "CopMap may collect sensitive personal data and location-based or intelligence-generated data relevant to law enforcement operations.",
            "Classified, investigative, or personally identifiable information (PII) must remain confidential.",
            "We implement robust safeguards and access controls; users must adhere strictly to confidentiality requirements.",
        ],
    },
    {
        num: "07",
        title: "Intellectual Property & Feedback",
        items: [
            "All software, documentation, data, code, logos, and trademarks remain our exclusive property. Your use is purely licensed, not purchased.",
            "We may incorporate user feedback, suggestions, or enhancement requests without obligation or compensation.",
        ],
    },
    {
        num: "08",
        title: "Warranty Disclaimer & Liability Limitation",
        items: [
            "The Platform is provided \"as-is.\" We do not warrant error-free or uninterrupted service. All implied warranties are disclaimed.",
            "Our liability is limited to direct losses up to the amount paid under the licensing agreement; we are not liable for indirect, incidental, or consequential damages.",
        ],
    },
    {
        num: "09",
        title: "Term & Termination",
        intro: "The license term is defined in your agency's written agreement. We reserve the right to suspend or terminate access for:",
        items: [
            "Violation of these Terms",
            "Non-payment of licensing fees (if applicable)",
            "Security breaches or official agency request",
        ],
    },
    {
        num: "10",
        title: "Modifications & Maintenance",
        items: [
            "We may modify features, update policies, or perform downtime as necessary; users will be notified where feasible.",
            "Software updates may be mandatory, ensuring security and compliance.",
        ],
    },
    {
        num: "11",
        title: "Export & Government Regulations",
        items: [
            "Use and distribution of the software must comply with relevant Indian export controls and government regulations.",
            "The software may be deemed a \"commercial item,\" and applicable government rights may apply.",
        ],
    },
    {
        num: "12",
        title: "Governing Law & Dispute Resolution",
        items: [
            "These Terms are governed by the laws of India. Disputes shall be resolved in the competent courts of Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra.",
        ],
    },
    {
        num: "13",
        title: "Acceptance & Enforceability",
        items: [
            "Your use of CopMap — by installing, logging in, or initiating usage — constitutes click-wrap acceptance of these Terms.",
            "This explicit consent method ensures enforceability under Indian law.",
        ],
    },
    {
        num: "14",
        title: "Contact & Support",
        intro: "For inquiries or legal support, contact:",
        items: [
            "EyeQlytics Tech Pvt. Ltd.",
            "Chhatrapati Sambhaji Nagar, Maharashtra, India",
            "admin@copmap.in",
            "+91 8855891936",
        ],
    },
];

const TermsPage = () => {
    const { toast } = useToast();

    const handleAccept = () => {
        localStorage.setItem("copmap_terms_accepted", "true");
        toast({
            title: "Terms & Conditions Accepted",
            description: "You're all set to continue using CopMap.",
        });
    };

    return (
        <PageTransition>
            <SEOHead 
              title="Terms & Conditions — CopMap Platform Usage Policy"
              description="Review the terms and conditions for using the CopMap platform. Authorized law enforcement usage, licensing, and professional conduct requirements."
              keywords="police platform terms, law enforcement software license, CopMap usage terms, EyeQlytics legal"
              canonical="/terms"
            />
            <main className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-white overflow-x-hidden font-sans selection:bg-[#00a2c7]/30">
                <div className="absolute top-0 w-full z-50">
                    <Navbar />
                </div>

                <PageHero
                  badge="Legal"
                  title={<>Terms &{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#00a2c7]">Conditions</span></>}
                  subtitle="The terms governing access to and use of the CopMap platform by authorized law enforcement personnel."
                />

                {/* Attention banner */}
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
                                    <FileText size={18} className="text-[#00a2c7]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00a2c7] mb-2">Attention</p>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                                        By accessing or using CopMap — developed and operated by{" "}
                                        <span className="text-slate-900 dark:text-white font-semibold">EyeQlytics Tech Pvt. Ltd.</span> on behalf of authorized government law enforcement agencies — you agree to be bound by these Terms & Conditions. Any unauthorized access is strictly prohibited.
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

                        {/* Recommended integrations & Accept block */}
                        <div className="mt-8 pt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8 lg:p-12 shadow-[0_8px_30px_rgb(245,158,11,0.06)] relative overflow-hidden"
                            >
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-400/10 blur-[50px] rounded-full pointer-events-none" />
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                                        <FileText size={24} className="text-amber-600" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-heading font-black text-slate-900 dark:text-white mb-4">Recommended Integrations</h3>
                                        <ul className="space-y-3">
                                            {[
                                                "Separate Acceptable Use Policy (AUP) detailing specific user behaviors and incident response procedures",
                                                "Privacy Policy covering data collection, usage, retention, and third-party disclosures",
                                                "Click-wrap mechanism at login or first-use to ensure binding agreement",
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 shadow-[0_0_8px_#f59e0b]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
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
                                    icon={FileText}
                                    iconPosition="left"
                                >
                                    Accept Terms & Conditions
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

export default TermsPage;
