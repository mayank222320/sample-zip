import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe, Shield, Layers } from "lucide-react";
import { TiltCard } from "./TiltCard";

/**
 * EcosystemLayers3D - Premium Light Theme
 * Isometric floating planes showing 3-layer CopMap architecture
 */

const layers = [
  {
    label: "01 — Command Dashboard",
    sublabel: "Web Portal",
    desc: "Full-force oversight. Every zone, every officer, live.",
    Icon: Monitor,
    color: "blue",
    hex: "#3b82f6",
    z: 90,
    chips: ["250+ Deploy Points", "Real-Time Sync", "Role-Based Access"],
  },
  {
    label: "02 — Mobile Officer App",
    sublabel: "Field Device",
    desc: "GPS check-in, duty log, patrol tracking — in every pocket.",
    Icon: Smartphone,
    color: "cyan",
    hex: "#06b6d4",
    z: 0,
    chips: ["GPS Tracking", "Offline Mode", "Encrypted Push"],
  },
  {
    label: "03 — Data & GPS Network",
    sublabel: "Infrastructure",
    desc: "AES-256 encrypted backbone with 99.9% uptime SLA.",
    Icon: Globe,
    color: "violet",
    hex: "#8b5cf6",
    z: -90,
    chips: ["AES-256", "IN-Region Data", "WebSocket Stream"],
  },
];

const colorStyles: Record<string, { bg: string; bgLight: string; border: string; text: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    bgLight: "bg-blue-500/5",
    border: "border-blue-200/60",
    text: "text-blue-600",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    bgLight: "bg-cyan-500/5",
    border: "border-cyan-200/60",
    text: "text-cyan-600",
  },
  violet: {
    bg: "bg-violet-500/10",
    bgLight: "bg-violet-500/5",
    border: "border-violet-200/60",
    text: "text-violet-600",
  },
};

export const EcosystemLayers3D = () => {
  return (
    <section
      className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Subtle background patterns */}
      <div className="absolute inset-0 pointer-events-none grid-dots-subtle opacity-30" />

      {/* Gradient accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-10 max-w-[1360px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-700 mb-5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-4 py-2.5 rounded-full border border-blue-200/50"
          >
            <Layers size={12} />
            Platform Architecture
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-4"
          >
            Three layers.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              One system.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-lg mx-auto leading-relaxed"
          >
            From the Commissioner's screen to the constable's pocket — every layer talks in real time.
          </motion.p>
        </div>

        {/* 3D Layer stack */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT — 3D isometric planes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full lg:w-[520px] flex-shrink-0"
            style={{ perspective: "1000px", height: 360 }}
          >
            <div style={{ transformStyle: "preserve-3d", position: "relative", height: "100%" }}>
              {layers.map((layer, i) => {
                const styles = colorStyles[layer.color];
                return (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, z: -60 }}
                    whileInView={{ opacity: 1, z: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.18, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-full animate-float-gentle"
                    style={{
                      top: `${i * 108}px`,
                      animationDelay: `${i * 0.9}s`,
                      transform: `perspective(1000px) rotateX(28deg) rotateY(-8deg) translateZ(${layer.z * 0.35}px)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Layer plane */}
                    <div
                      className="relative rounded-2xl overflow-hidden bg-white border shadow-lg hover:shadow-xl transition-shadow duration-300"
                      style={{
                        borderColor: `${layer.hex}30`,
                        boxShadow: `0 16px 32px rgba(15, 23, 42, 0.08), 0 0 0 1px ${layer.hex}08 inset`,
                      }}
                    >
                      {/* Top gradient line */}
                      <div
                        className="absolute top-0 left-8 right-8 h-0.5"
                        style={{ background: `linear-gradient(90deg, transparent, ${layer.hex}50, transparent)` }}
                      />

                      <div className="flex items-center gap-5 px-6 py-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${styles.bg} border ${styles.border}`}
                        >
                          <layer.Icon size={18} className={styles.text} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-[8px] font-bold uppercase tracking-wider mb-0.5 ${styles.text}`}>
                            {layer.sublabel}
                          </div>
                          <div className="text-[12px] font-bold text-slate-900 leading-tight truncate">
                            {layer.label}
                          </div>
                        </div>
                        {/* Connection dots */}
                        <div className="flex gap-1 flex-shrink-0">
                          {[0, 1, 2].map((d) => (
                            <motion.div
                              key={d}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: layer.hex }}
                              animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                              transition={{ duration: 1.5, delay: d * 0.3, repeat: Infinity }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Connecting vertical line */}
                    {i < layers.length - 1 && (
                      <div
                        className="absolute left-[3rem] -bottom-6 w-px h-6"
                        style={{ background: `linear-gradient(to bottom, ${layer.hex}40, ${layers[i + 1].hex}30)` }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT — Detail cards */}
          <div className="flex-1 space-y-4">
            {layers.map((layer, i) => {
              const styles = colorStyles[layer.color];
              return (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard intensity={6} scale={1.02}>
                    <div
                      className="group relative rounded-2xl p-6 cursor-default overflow-hidden bg-white border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      {/* Hover gradient */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                        style={{ background: `radial-gradient(ellipse at 20% 50%, ${layer.hex}08, transparent 70%)` }}
                      />
                      <div
                        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(90deg, transparent, ${layer.hex}40, transparent)` }}
                      />

                      <div className="relative z-10 flex items-start gap-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${styles.bg} border ${styles.border}`}
                        >
                          <layer.Icon size={16} className={styles.text} />
                        </div>
                        <div className="flex-1">
                          <div className={`text-[9px] font-bold uppercase tracking-wider mb-1 ${styles.text}`}>
                            {layer.sublabel}
                          </div>
                          <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                            {layer.label.replace(/^\d+ — /, "")}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed mb-3">{layer.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {layer.chips.map((c) => (
                              <span
                                key={c}
                                className={`text-[8px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${styles.bg} ${styles.text} border ${styles.border}`}
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemLayers3D;
