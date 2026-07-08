import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <main className="min-h-screen bg-slate-50 dark:bg-[#0A192F] text-slate-900 dark:text-white overflow-x-hidden font-sans flex flex-col">
        <div className="absolute top-0 w-full z-50">
          <Navbar />
        </div>

        <section className="relative flex-1 flex items-center justify-center pt-32 pb-24 overflow-hidden bg-slate-100 dark:bg-[#0A192F]">
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(circle, rgba(148,163,184,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,162,199,0.08),transparent)]" />

          <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-8xl md:text-9xl font-heading font-black text-slate-900 dark:text-white tracking-tighter mb-4 leading-none">
                404
              </h1>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-4">
                Page Not Found
              </h2>
              <p className="text-slate-600 dark:text-blue-100/70 text-lg leading-relaxed mb-10">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>

              <Button
                className="h-12 px-8 rounded-full"
                asChild
                icon={ArrowLeft}
                iconPosition="left"
              >
                <Link to="/">Return to Home</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default NotFound;
