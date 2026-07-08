import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme/ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "Features", path: "/features" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const location = useLocation();
  const isCompactRef = useRef(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
    const shouldCompact = latest > 300 && window.innerWidth >= 1280;
    isCompactRef.current = shouldCompact;
    setIsCompact(shouldCompact);
  });

  useEffect(() => {
    setIsOpen(false);
    setIsCompact(isCompactRef.current);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500">
      <div className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isCompact ? "w-fit px-4" : "w-full max-w-7xl px-4 lg:px-8"}`}>
        <motion.div
          className={`h-14 lg:h-16 rounded-full border transform-gpu backdrop-blur-xl transition-all duration-700 ${
            isScrolled
              ? "bg-white/90 border-slate-200/50 shadow-[0_8px_32px_rgba(15,23,42,0.08)]"
              : "bg-white/70 border-white/50 shadow-[0_4px_24px_rgba(15,23,42,0.04)]"
          } ${isCompact ? "px-4 lg:px-5" : "px-4 lg:px-6"}`}
          initial={false}
          animate={{
            boxShadow: isScrolled
              ? "0 8px 32px rgba(15, 23, 42, 0.1)"
              : "0 4px 24px rgba(15, 23, 42, 0.04)"
          }}
        >
          <div className={`flex items-center h-full transition-all duration-700 ${isCompact ? "justify-center gap-2 lg:gap-3" : "justify-between gap-4"}`}>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                className="relative flex items-center justify-center rounded-xl w-10 h-10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                style={{
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.08))",
                  boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.15)"
                }}
              >
                <img
                  src="/Copmap-logo.png"
                  alt="CopMap"
                  className="h-8 w-8 object-contain"
                />
              </motion.div>
              <div className={`flex flex-col leading-none overflow-hidden transition-all duration-700 ${isCompact ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"}`}>
                <span className="text-[17px] font-heading font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  CopMap
                </span>
                <span className="text-[10px] text-slate-500 hidden sm:block">
                  Modern Police Operations
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1 px-2 py-1.5 relative">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium z-10 transition-all duration-300 outline-none ${
                      isActive
                        ? "text-white font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        key={link.path}
                        layoutId="activeNav"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/20 -z-10"
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="cta"
                className={`rounded-full h-10 font-semibold transition-all duration-300 ${
                  isCompact ? "px-5 text-sm" : "px-6"
                }`}
                asChild
              >
                <a
                  href="https://calendly.com/admin-copmap/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                >
                  <Zap size={14} className="mr-1.5" />
                  Request Demo
                </a>
              </Button>
            </div>

            {/* Mobile nav items */}
            <div className="flex lg:hidden items-center gap-3">
              <ThemeToggle />
              <button
                className="p-2.5 rounded-xl transition-all text-slate-700 bg-white/80 border border-slate-200/60 shadow-sm hover:bg-white hover:shadow-md"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden mt-2"
            >
              <div className="bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-2xl shadow-slate-900/10">
                {/* Top decorative line */}
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                <div className="flex flex-col gap-1 p-3">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 block ${
                          location.pathname === link.path
                            ? "text-white bg-gradient-to-r from-blue-500 to-indigo-500 font-bold shadow-lg shadow-blue-500/20"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.04 }}
                    className="pt-2 px-2"
                  >
                    <Button
                      variant="cta"
                      className="w-full rounded-xl h-11 font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-lg shadow-blue-500/25"
                      asChild
                    >
                      <a href="https://calendly.com/admin-copmap/30min" target="_blank" rel="noopener noreferrer">
                        <Zap size={14} className="mr-1.5" />
                        Request Demo
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
