import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MeteorParams {
  id: string;
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
}

export const Meteors = ({ number = 20, className = "" }: { number?: number; className?: string }) => {
  const [meteors, setMeteors] = useState<MeteorParams[]>([]);

  useEffect(() => {
    const arr = new Array(number).fill(true).map(() => ({
      id: Math.random().toString(36).substring(7),
      left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
      top: Math.floor(Math.random() * (400 - -400) + -400) + "px",
      animationDuration: Math.floor(Math.random() * (8 - 2) + 2) + "s",
      animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
    }));
    setMeteors(arr);
  }, [number]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
          style={{
            top: meteor.top,
            left: meteor.left,
            animation: `meteor ${meteor.animationDuration} linear infinite`,
            animationDelay: meteor.animationDelay,
          }}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
      <style>{`
        @keyframes meteor {
          0% { transform: rotate(215deg) translateX(0); opacity: 1; }
          70% { opacity: 1; }
          100% {
            transform: rotate(215deg) translateX(-500px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
