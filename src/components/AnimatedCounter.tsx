import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

const AnimatedCounter = ({ value, label }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part
    const numMatch = value.match(/[\d,]+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const numStr = numMatch[0].replace(/,/g, "");
    const target = parseInt(numStr, 10);
    const suffix = value.replace(numMatch[0], "").trim();
    const prefix = value.substring(0, value.indexOf(numMatch[0]));

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      const formatted = current.toLocaleString("en-IN");
      setDisplayValue(`${prefix}${formatted}${suffix}`);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl lg:text-4xl font-heading font-bold text-[#E11D48]">
        {displayValue}
      </div>
      <div className="text-sm text-muted-foreground mt-1 font-body">{label}</div>
    </motion.div>
  );
};

export default AnimatedCounter;
