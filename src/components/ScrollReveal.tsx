/**
 * ScrollReveal — Universal Scroll Animation Components
 *
 * Three reusable animation widgets for section-level entrance animations.
 * All animations fire ONLY on first scroll (once: true).
 * Zero styling impact on children — purely motion wrappers.
 *
 * Usage:
 *   <ScrollReveal>  — Fade + slide-up  (text blocks, headers, general sections)
 *   <ScrollFade>    — Fade + scale-in  (cards, bento grids, feature panels)
 *   <ScrollSlide>   — Directional slide (split layouts, left/right paired content)
 *   <ScrollStagger> — Staggered children (lists, card grids, icon rows)
 */

import { motion, type Easing } from "framer-motion";
import { ReactNode } from "react";

// ─── Shared easing curves (Framer-grade) ─────────────────────────────────────
const EASE_OUT_QUART: Easing = [0.25, 1, 0.5, 1];
const EASE_OUT_EXPO: Easing  = [0.16, 1, 0.3, 1];
const EASE_OUT_BACK: Easing  = [0.34, 1.56, 0.64, 1];

// ─── 1. ScrollReveal ─────────────────────────────────────────────────────────
// Best for: Section headings, paragraphs, labels, CTA blocks, hero sub-elements
// Effect: Smooth fade-in + upward slide — the "Framer classic"
interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;       // seconds
  duration?: number;    // seconds
  yOffset?: number;     // px slide distance (default 36)
  margin?: string;      // viewport margin before trigger (default "-80px")
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.65,
  yOffset = 36,
  margin = "-80px",
}: ScrollRevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: yOffset }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin }}
    transition={{ duration, delay, ease: EASE_OUT_QUART }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── 2. ScrollFade ───────────────────────────────────────────────────────────
// Best for: Cards, bento panels, image containers, feature tiles, stat blocks
// Effect: Fade-in + subtle scale-up from slightly below (premium card feel)
interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;       // initial scale (default 0.94)
  yOffset?: number;     // px slide distance (default 20)
  margin?: string;
}

export const ScrollFade = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  scale = 0.94,
  yOffset = 20,
  margin = "-60px",
}: ScrollFadeProps) => (
  <motion.div
    initial={{ opacity: 0, scale, y: yOffset }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin }}
    transition={{ duration, delay, ease: EASE_OUT_EXPO }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── 3. ScrollSlide ──────────────────────────────────────────────────────────
// Best for: Two-column split sections, left/right paired content, sidebars
// Effect: Slide in from left or right with fade — cinematic split reveal
interface ScrollSlideProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  xOffset?: number;     // px slide distance (default 48)
  margin?: string;
}

export const ScrollSlide = ({
  children,
  className = "",
  direction = "left",
  delay = 0,
  duration = 0.7,
  xOffset = 48,
  margin = "-60px",
}: ScrollSlideProps) => {
  const x = direction === "left" ? -xOffset : xOffset;
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── 4. ScrollStagger ────────────────────────────────────────────────────────
// Best for: Lists, card grids, icon rows, feature point bullets, tag groups
// Effect: Children animate in one-by-one in a staggered cascade
interface ScrollStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;    // seconds between each child (default 0.09)
  childDelay?: number;      // initial delay before first child (default 0)
  childDuration?: number;   // duration per child animation (default 0.5)
  yOffset?: number;
  margin?: string;
  /** Animation style: "up" (default), "scale", "left", "right" */
  variant?: "up" | "scale" | "left" | "right";
}

const staggerChildVariants = {
  up: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.88, y: 12 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
};

export const ScrollStagger = ({
  children,
  className = "",
  staggerDelay = 0.09,
  childDelay = 0,
  childDuration = 0.5,
  margin = "-60px",
  variant = "up",
}: ScrollStaggerProps) => {
  const childEase: Easing = EASE_OUT_QUART;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: childDelay,
          },
        },
      }}
      className={className}
    >
      {/* Wrap each direct child in a motion variant */}
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: staggerChildVariants[variant].hidden,
                visible: {
                  ...staggerChildVariants[variant].visible,
                  transition: { duration: childDuration, ease: childEase },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : (
            <motion.div
              variants={{
                hidden: staggerChildVariants[variant].hidden,
                visible: {
                  ...staggerChildVariants[variant].visible,
                  transition: { duration: childDuration, ease: childEase },
                },
              }}
            >
              {children}
            </motion.div>
          )}
    </motion.div>
  );
};

// ─── 5. ScrollZoom ───────────────────────────────────────────────────────────
// Best for: Hero images, mockup screenshots, dashboard previews, full-bleed visuals
// Effect: Gentle zoom-in from slightly zoomed-out — cinematic reveal
interface ScrollZoomProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  initialScale?: number;    // start scale (default 0.90)
  margin?: string;
}

export const ScrollZoom = ({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  initialScale = 0.90,
  margin = "-40px",
}: ScrollZoomProps) => (
  <motion.div
    initial={{ opacity: 0, scale: initialScale }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin }}
    transition={{ duration, delay, ease: EASE_OUT_BACK }}
    className={className}
  >
    {children}
  </motion.div>
);

// ─── Re-export all for clean imports ─────────────────────────────────────────
export default ScrollReveal;
