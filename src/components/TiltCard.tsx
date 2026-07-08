import { useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // 1–20, default 10
  glareOpacity?: number; // 0–1, default 0.12
  scale?: number; // hover scale, default 1.02
}

/**
 * Premium 3D tilt card — mouse-tracking perspective transform.
 * Inspired by Framer / Awwwards hover depth effects.
 */
export const TiltCard = ({
  children,
  className = "",
  intensity = 10,
  glareOpacity = 0.12,
  scale = 1.02,
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const rect = cardRef.current!.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const rotateX = -y * intensity;
        const rotateY = x * intensity;

        cardRef.current!.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`;

        // Move glare
        if (glareRef.current) {
          const glareX = (x + 0.5) * 100;
          const glareY = (y + 0.5) * 100;
          glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareOpacity}), transparent 65%)`;
        }
      });
    },
    [intensity, scale, glareOpacity]
  );

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    }
    if (glareRef.current) {
      glareRef.current.style.background = "transparent";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
    >
      {/* Glare overlay */}
      <div
        ref={glareRef}
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-10 transition-all duration-150"
        style={{ borderRadius: "inherit" }}
      />
      {children}
    </div>
  );
};

export default TiltCard;
