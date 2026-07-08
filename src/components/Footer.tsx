import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Zap } from "lucide-react";
import EmailObfuscator from "./seo/EmailObfuscator";

const Footer = () => {
  return (
    <footer className="relative border-t border-slate-200/60 bg-white transition-colors duration-300">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200/50 flex items-center justify-center">
                <img src="/Copmap-logo.png" alt="CopMap" className="h-8 w-8 object-contain" />
              </div>
              <span className="text-lg font-heading font-bold text-slate-900">CopMap</span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              India's purpose-built SaaS platform for law enforcement from a single station to an entire state.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-5">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "Product", to: "/product" },
                { label: "Features", to: "/features" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-5">Features</h4>
            <div className="flex flex-col gap-3">
              {[
                { name: "Bandobast Management", hash: "#bandobast" },
                { name: "Patrolling Operations", hash: "#patrolling" },
                { name: "Resource Requirement", hash: "#resource" },
                { name: "Attendance Management", hash: "#attendance" },
                { name: "Leave Management", hash: "#leave" },
                { name: "Officer Management", hash: "#officers" },
              ].map((f) => (
                <Link
                  key={f.name}
                  to={`/features${f.hash}`}
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {f.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-5">Contact</h4>
            <div className="flex flex-col gap-4">
              <EmailObfuscator
                email="info@copmap.in"
                className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-blue-600 transition-colors"
                icon={<Mail size={13} className="shrink-0" />}
              />
              <a
                href="tel:+918855891936"
                className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Phone size={13} className="shrink-0" />
                +91 8855891936
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-600">
                <MapPin size={13} className="mt-0.5 shrink-0" />
                <span>10/81, Near SJP Petrol Pump, Bidkin, Chhatrapati Sambhajinagar – 431105, Maharashtra, India</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <a
                href="https://calendly.com/admin-copmap/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <Zap size={12} />
                Schedule Demo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200/60 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CopMap — EyeQlytics Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms & Conditions", to: "/terms" },
              { label: "Security Policy", to: "/security" },
              { label: "Vulnerability Disclosure", to: "/security#section-11" },
            ].map((t) => (
              <Link
                key={t.label}
                to={t.to}
                className="text-xs text-slate-500 hover:text-blue-600 transition-colors"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
