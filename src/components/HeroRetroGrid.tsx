import { motion } from "framer-motion";

export function HeroRetroGrid() {
  return (
    <div className="absolute inset-0 hidden overflow-hidden pointer-events-none lg:block">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2340]/18 via-transparent to-[#081427]/92" />
      <div className="absolute left-1/2 top-[18%] h-32 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-400/18 blur-[110px]" />
      <div className="absolute left-1/2 top-[26%] h-16 w-[24rem] -translate-x-1/2 rounded-full bg-sky-300/20 blur-[58px]" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-[-18%] bottom-[-46%] top-[26%]"
        style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
      >
        <div className="retro-grid-plane absolute inset-0" />
        <div className="retro-grid-fade absolute inset-0" />
      </motion.div>

      <div className="absolute inset-x-[8%] top-[44%] h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent opacity-80" />
    </div>
  );
}
