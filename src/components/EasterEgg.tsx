"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export function EasterEgg() {
  const [isActive, setIsActive] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);
  const secretCode = "hello";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsActive(true);
        return;
      }

      // Check for secret string "hello"
      const newKeys = [...keys, e.key.toLowerCase()].slice(-secretCode.length);
      setKeys(newKeys);
      if (newKeys.join("") === secretCode) {
        setIsActive(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keys]);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] glass-panel px-6 py-4 rounded-lg flex items-center gap-4 shadow-[0_0_30px_rgba(0,240,255,0.2)] border-primary/30"
        >
          <Terminal className="text-primary animate-pulse" size={24} />
          <div className="font-mono">
            <p className="text-primary text-sm mb-1">{">"} System initialized.</p>
            <p className="text-foreground/80 text-xs">{">"} Welcome to the developer console.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
