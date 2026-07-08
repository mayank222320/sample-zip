import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600 font-semibold shadow-md shadow-blue-500/25 hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
        ghost: "hover:bg-slate-100 text-slate-700",
        link: "text-blue-600 underline-offset-4 hover:underline",
        cta: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300",
        "outline-hero": "border-2 border-white text-white hover:bg-white/10 hover:border-blue-300 transition-all duration-200 backdrop-blur-md",
        "outline-light": "border-2 border-slate-900 text-slate-900 hover:bg-slate-100 transition-all duration-300 font-semibold",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-10 text-[15px]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ElementType;
  iconPosition?: "left" | "right";
  animate?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon: Icon, iconPosition = "right", animate = true, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    if (!animate) {
      return (
        <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
          {Icon && iconPosition === "left" && <Icon className="size-4" />}
          {children}
          {Icon && iconPosition === "right" && <Icon className="size-4" />}
        </Comp>
      );
    }

    const textVariants = {
      initial: { y: 0 },
      hover: { y: -2, transition: { duration: 0.4, ease: "easeOut" } },
    };

    const iconVariants = {
      initial: { x: 0, opacity: 0.9 },
      hover: { x: 4, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    };

    const iconVariantsLeft = {
      initial: { x: 0, opacity: 0.9 },
      hover: { x: -4, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "active:scale-[0.98]")}
        ref={ref}
        {...props}
      >
        <motion.div
          className="relative z-10 flex items-center justify-center gap-2 h-full w-full"
          initial="initial"
          whileHover="hover"
          animate="initial"
        >
          {Icon && iconPosition === "left" && (
            <motion.span variants={iconVariantsLeft} className="flex-shrink-0 relative z-20">
              <Icon className="size-4 lg:size-[18px]" />
            </motion.span>
          )}

          <motion.span className="inline-block whitespace-nowrap relative z-20" variants={textVariants}>
            {children}
          </motion.span>

          {Icon && iconPosition === "right" && (
            <motion.span variants={iconVariants} className="flex-shrink-0 relative z-20">
              <Icon className="size-4 lg:size-[18px]" />
            </motion.span>
          )}
        </motion.div>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
