import { useRef } from "react";

interface MarqueeTickerProps {
  items: { text: string; highlight?: boolean }[];
  speed?: "slow" | "normal" | "fast";
  dark?: boolean;
}

const speeds = { slow: "50s", normal: "32s", fast: "20s" };

const MarqueeTicker = ({ items, speed = "normal", dark = false }: MarqueeTickerProps) => {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Left fade edge */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
          dark
            ? "bg-gradient-to-r from-slate-900 to-transparent"
            : "bg-gradient-to-r from-slate-50 via-white to-transparent"
        }`}
      />
      {/* Right fade edge */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
          dark
            ? "bg-gradient-to-l from-slate-900 to-transparent"
            : "bg-gradient-to-l from-slate-50 via-white to-transparent"
        }`}
      />

      <div
        className="flex w-max animate-marquee"
        style={{ animationDuration: speeds[speed] }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            {item.highlight ? (
              <span
                className={`mx-3 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${
                  dark
                    ? "bg-blue-500/15 border border-blue-400/30 text-blue-400"
                    : "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50 text-blue-600"
                }`}
              >
                {item.text}
              </span>
            ) : (
              <span
                className={`mx-3 text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap ${
                  dark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {item.text}
              </span>
            )}
            {/* Separator dot */}
            <span className={`text-[8px] select-none ${dark ? "text-blue-500/25" : "text-blue-300"}`}>
              ●
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
