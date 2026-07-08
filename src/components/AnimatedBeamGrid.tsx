/**
 * AnimatedBeamGrid — Live animated grid with glowing beams
 * Light theme version for premium enterprise aesthetic
 */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BeamProps {
  top?: string | number;
  left?: string | number;
  rotate?: number;
  delay?: number;
  duration?: number;
  width?: number;
  opacity?: number;
  color?: string;
}

const Beam = ({ top = "10%", left = "50%", rotate = 0, delay = 0, duration = 8, width = 1, opacity = 0.15, color = "#3b82f6" }: BeamProps) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      top,
      left,
      width: `${width}px`,
      height: "100vh",
      background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
      rotate: `${rotate}deg`,
      transformOrigin: "top center",
      opacity: 0,
    }}
    animate={{
      opacity: [0, opacity, 0],
      scaleY: [0.3, 1.2, 0.3],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

interface GridFlashProps {
  row: number;
  col: number;
  color: string;
  delay: number;
}

const GridFlash = ({ row, col, color, delay }: GridFlashProps) => (
  <motion.div
    className="absolute pointer-events-none rounded-sm"
    style={{
      top: `${row * 80}px`,
      left: `${col * 80}px`,
      width: "80px",
      height: "80px",
    }}
    animate={{
      backgroundColor: [`${color}00`, `${color}10`, `${color}00`],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

export const AnimatedBeamGrid = ({ className = "", dark = false }: { className?: string; dark?: boolean }) => {
  const [flashes, setFlashes] = useState<GridFlashProps[]>([]);

  useEffect(() => {
    const arr: GridFlashProps[] = [];
    for (let i = 0; i < 12; i++) {
      arr.push({
        row: Math.floor(Math.random() * 15),
        col: Math.floor(Math.random() * 25),
        color: Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6",
        delay: Math.random() * 6,
      });
    }
    setFlashes(arr);
  }, []);

  const beamColor = dark ? "#00c3eb" : "#3b82f6";
  const gridColor = dark ? "rgba(0,162,199,0.07)" : "rgba(59,130,246,0.04)";

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Random cell flashes */}
      {flashes.map((f, i) => (
        <GridFlash key={i} {...f} />
      ))}

      {/* Animated beams */}
      <Beam top="0%" left="15%" rotate={15} delay={0} duration={12} color={beamColor} opacity={0.08} />
      <Beam top="0%" left="40%" rotate={-3} delay={2} duration={10} color="#8b5cf6" opacity={0.06} />
      <Beam top="0%" left="68%" rotate={-10} delay={4} duration={14} color={beamColor} opacity={0.08} />
      <Beam top="0%" left="88%" rotate={5} delay={1} duration={11} color="#a855f7" opacity={0.05} />

      {/* Corner glow spots - subtle for light theme */}
      {dark ? (
        <>
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/3 rounded-full blur-3xl" />
        </>
      )}
    </div>
  );
};
