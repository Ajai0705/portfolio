"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "./Button";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  glowColor?: "primary" | "secondary" | "none";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, glowColor = "none", ...props }, ref) => {
    
    const glows = {
      none: "",
      primary: "hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:border-primary/50",
      secondary: "hover:shadow-[0_0_30px_rgba(138,43,226,0.15)] hover:border-secondary/50",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "glass-panel rounded-xl p-6 transition-all duration-500 relative overflow-hidden group",
          glows[glowColor],
          className
        )}
        {...props}
      >
        {/* Subtle inner gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";
