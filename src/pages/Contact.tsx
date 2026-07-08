import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Shield, Users, CircleCheck as CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import EmailObfuscator from "@/components/seo/EmailObfuscator";
import RadarScope from "@/components/RadarScope";

const trustPoints = [
  { icon: Clock, text: "Response within 24 hours" },
  { icon: Shield, text: "Confidential & secure" },
  { icon: Users, text: "Tailored demo for your jurisdiction" },
  { icon: CheckCircle2, text: "No commitment required" },
];

const contactDetails = [
  { icon: Mail, label: "Email", value: "info@copmap.in", href: "mailto:info@copmap.in" },
  { icon: Phone, label: "Phone", value: "+91 8855891936", href: "tel:+918855891936" },
  { icon: MapPin, label: "Address", value: "10/81, Near SJP Petrol Pump, Bidkin, Chhatrapati Sambhajinagar – 431105, Maharashtra, India", href: null },
];

const FloatingInput = ({
  id, label, type = "text", required = false, placeholder, value, onChange,
}: { id: string; label: string; type?: string; required?: boolean; placeholder?: string; value: string; onChange: (v: string) => void }) => (
  <div className="relative">
    <input
      id={id}
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder=" "
      className="peer w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-5 pt-7 pb-3 text-sm text-slate-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#00a2c7]/30 focus:border-[#00a2c7] focus:bg-white dark:focus:bg-white/10 transition-all shadow-sm"
    />
    <label htmlFor={id}
      className="absolute left-5 top-2.5 text-[10px] font-black uppercase tracking-[0.15em] text-[#00a2c7] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 dark:peer-placeholder-shown:text-slate-500 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-[#00a2c7]">
      {label}{required ? " *" : ""}
    </label>
  </div>
);

import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", designation: "", organisation: "", phone: "", email: "", city: "", message: "" });
  const [consentGiven, setConsentGiven] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      toast({ title: "Verification required", description: "Please complete the reCAPTCHA challenge.", variant: "destructive" });
      return;
    }

    if (!consentGiven) {
      toast({ title: "Consent required", description: "Please agree to the privacy policy to continue.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          designation: formData.designation,
          organisation: formData.organisation,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          message: formData.message,
          'g-recaptcha-response': recaptchaToken,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      toast({ title: "Demo Request Submitted!", description: "Our team will contact you within 24 hours." });
      setFormData({ name: "", designation: "", organisation: "", phone: "", email: "", city: "", message: "" });
      setRecaptchaToken(null);
      // Reset reCAPTCHA visually
      // @ts-ignore
      window.grecaptcha?.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({ title: "Something went wrong", description: "Please try again or contact us directly via email.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const set = (field: string) => (v: string) => setFormData((p) => ({ ...p, [field]: v }));

  return (
    <PageTransition>
      <SEOHead 
        title="Contact CopMap — Schedule a Live Police Demo"
        description="Schedule a 30-minute demo of CopMap for your police force. Discover how our platform digitizes Indian law enforcement operations."
        keywords="contact CopMap, police software demo, request information law enforcement, EyeQlytics contact, schedule bandobast demo"
        canonical="/contact"
      />
      <main className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-white overflow-x-hidden font-sans selection:bg-[#00a2c7]/30">
        <div className="absolute top-0 w-full z-50"><Navbar /></div>

        {/* ─── ULTRA MODERN HERO ─── */}
        <PageHero
          badge="Get in Touch"
          title={<>Let's{" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-[#00a2c7] animate-gradient">Connect.</span></>}
          subtitle="Whether you are a senior officer exploring CopMap for your jurisdiction, a private security organisation, or a government institution — we are ready to show you CopMap in action."
        />

        {/* ─── MAIN CONTENT ─── */}
        <section className="py-24 bg-[#f8fafc] dark:bg-[#030f1e] relative overflow-hidden border-t border-slate-200 dark:border-white/5">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">

              {/* LEFT — Info panel */}
              <div className="space-y-6 lg:sticky lg:top-32">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                  className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-8 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 font-heading flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00a2c7]/10 flex items-center justify-center">
                      <Mail size={16} className="text-[#00c3eb]" />
                    </div>
                    Contact Details
                  </h3>
                  <div className="space-y-6">
                    {contactDetails.map((c) => (
                      <div key={c.label} className="flex gap-4 group">
                        <div className="mt-1 w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-slate-100 dark:group-hover:bg-white/10 transition-colors">
                          <c.icon size={16} className="text-slate-500 group-hover:text-[#00a2c7] transition-colors" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 mb-1">{c.label}</div>
                          {c.href === "mailto:info@copmap.in" ? (
                            <EmailObfuscator 
                              email="info@copmap.in" 
                              className="text-sm font-semibold text-slate-900 dark:text-white hover:text-[#00c3eb] transition-colors"
                            />
                          ) : c.href ? (
                            <a href={c.href} className="text-sm font-semibold text-slate-900 dark:text-white hover:text-[#00c3eb] transition-colors">
                              {c.value}
                            </a>
                          ) : (
                            <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{c.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* ── 3D RADAR SCOPE — Live Command Radar ── */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 }}
                  className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] shadow-sm overflow-hidden relative depth-hover cursor-default"
                >
                  <div className="absolute inset-0 shimmer-surface pointer-events-none" />
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#00c3eb]/30 to-transparent" />
                  <div className="p-6 flex flex-col items-center">
                    <RadarScope />
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                  className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-8 shadow-sm"
                >
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest font-heading">What to expect</h3>
                  <ul className="space-y-3">
                    {trustPoints.map((t, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                        <t.icon size={16} className="text-[#00a2c7]" /> {t.text}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* RIGHT — Form */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
                className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-8 lg:p-12 relative overflow-hidden shadow-2xl shadow-slate-200/60 dark:shadow-black/30"
              >
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#00a2c7]/8 blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 blur-[80px]" />
                {/* Top shimmer accent */}
                <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#00a2c7]/30 to-transparent" />
                
                <h2 className="text-3xl font-heading font-black text-slate-900 dark:text-white mb-2 relative z-10">Request a Live Demo</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-10 relative z-10 font-medium">Fill out the form below and our deployment specialists will get back to you.</p>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-5">
                    <FloatingInput id="name" label="Full Name" required value={formData.name} onChange={set("name")} />
                    <FloatingInput id="designation" label="Designation / Role" required value={formData.designation} onChange={set("designation")} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <FloatingInput id="organisation" label="Organisation / Unit" required value={formData.organisation} onChange={set("organisation")} />
                    <FloatingInput id="city" label="State / City" required value={formData.city} onChange={set("city")} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <FloatingInput id="phone" label="Phone Number" type="tel" required value={formData.phone} onChange={set("phone")} />
                    <FloatingInput id="email" label="Official Email ID" type="email" required value={formData.email} onChange={set("email")} />
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => set("message")(e.target.value)}
                      placeholder=" "
                      rows={4}
                      className="peer w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-5 pt-7 pb-3 text-sm text-slate-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#00a2c7]/30 focus:border-[#00a2c7] focus:bg-white dark:focus:bg-white/10 transition-all shadow-sm resize-none"
                    />
                    <label htmlFor="message"
                      className="absolute left-5 top-2.5 text-[10px] font-black uppercase tracking-[0.15em] text-[#00a2c7] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-500 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-[#00a2c7]">
                      Message (Optional)
                    </label>
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                      onChange={(token) => setRecaptchaToken(token)}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    variant="cta"
                    size="lg"
                    className="w-full rounded-full transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Submit Demo Request"
                    )}
                  </Button>

                  <div className="flex items-start gap-3 mt-4 px-1">
                    <input 
                      type="checkbox" 
                      id="privacy-consent" 
                      required 
                      checked={consentGiven}
                      onChange={(e) => setConsentGiven(e.target.checked)}
                      className="mt-1 flex-shrink-0 w-4 h-4 rounded border-slate-300 text-[#00a2c7] focus:ring-[#00a2c7]" 
                    />
                    <label htmlFor="privacy-consent" className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                      I agree to be contacted and understand my data will be processed per the <Link to="/privacy" className="text-[#00a2c7] hover:underline font-bold">Privacy Policy</Link>.
                    </label>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default ContactPage;
