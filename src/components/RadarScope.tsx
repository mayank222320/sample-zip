import { motion } from "framer-motion";

const blips = [
  { x: 60, y: 32, color: "#34d399", delay: 0,   period: 4.8 },
  { x: 74, y: 58, color: "#00c3eb", delay: 1.4, period: 5.2 },
  { x: 38, y: 65, color: "#34d399", delay: 2.9, period: 6.0 },
  { x: 26, y: 40, color: "#f59e0b", delay: 4.1, period: 4.5 },
];

export const RadarScope = () => (
  <div className="relative flex flex-col items-center gap-3">
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-[9px] font-black uppercase tracking-[0.22em] text-emerald-600">Command Radar — Live</span>
    </div>
    <div className="relative" style={{ width: 190, height: 190, perspective: "600px" }}>
      <div style={{ transform: "rotateX(18deg) rotateZ(-2deg)", transformStyle: "preserve-3d", width: "100%", height: "100%" }}>
        <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: "drop-shadow(0 0 16px rgba(0,195,235,0.1))" }}>
          <defs>
            <filter id="rGlow"><feGaussianBlur stdDeviation="0.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <clipPath id="rClip"><circle cx="50" cy="50" r="49"/></clipPath>
          </defs>
          <circle cx="50" cy="50" r="49" fill="#f8fafc"/>
          {[12,25,37,49].map(r=><circle key={r} cx="50" cy="50" r={r} fill="none" stroke="rgba(0,195,235,0.2)" strokeWidth="0.4"/>)}
          <line x1="50" y1="1" x2="50" y2="99" stroke="rgba(0,195,235,0.15)" strokeWidth="0.4"/>
          <line x1="1" y1="50" x2="99" y2="50" stroke="rgba(0,195,235,0.15)" strokeWidth="0.4"/>
          <line x1="15" y1="15" x2="85" y2="85" stroke="rgba(0,195,235,0.1)" strokeWidth="0.4"/>
          <line x1="85" y1="15" x2="15" y2="85" stroke="rgba(0,195,235,0.1)" strokeWidth="0.4"/>
          <g clipPath="url(#rClip)" style={{ transformOrigin:"50px 50px", animation:"radar-sweep 3s linear infinite" }}>
            <path d="M50,50 L50,1 A49,49 0 0,1 99,50 Z" fill="rgba(0,195,235,0.1)"/>
            <line x1="50" y1="50" x2="50" y2="1" stroke="#00c3eb" strokeWidth="1.2" opacity="0.85" filter="url(#rGlow)"/>
          </g>
          <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(0,195,235,0.4)" strokeWidth="0.8"/>
        </svg>
        {blips.map((b,i)=>(
          <motion.div key={i} className="absolute rounded-full"
            style={{ top:`${b.y}%`, left:`${b.x}%`, width:6, height:6, marginTop:-3, marginLeft:-3, backgroundColor:b.color, boxShadow:`0 0 8px 3px ${b.color}90` }}
            animate={{ opacity:[0,1,1,0], scale:[0.3,1.4,1,0.3] }}
            transition={{ duration:b.period, delay:b.delay, repeat:Infinity, ease:"easeInOut" }}
          />
        ))}
      </div>
    </div>
    <div className="flex items-center gap-4">
      {[{c:"#34d399",l:"Officer"},{c:"#00c3eb",l:"Unit"},{c:"#f59e0b",l:"Alert"}].map(l=>(
        <div key={l.l} className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{backgroundColor:l.c,boxShadow:`0 0 5px ${l.c}`}}/>
          <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">{l.l}</span>
        </div>
      ))}
    </div>
  </div>
);

export default RadarScope;
