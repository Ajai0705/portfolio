"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { data } from "@/data/portfolio";
import { BookOpen } from "lucide-react";

export function Research() {
  return (
    <section id="research" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & <span className="text-secondary">Publications</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl">
          {data.research.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card glowColor="secondary" className="relative pl-6 md:pl-8 border-l-4 border-l-secondary">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <BookOpen size={100} />
                </div>
                
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wider">
                    {item.year}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">{item.title}</h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-sm text-foreground/70">
                    <span className="font-semibold text-foreground/90">{item.conference}</span>
                    <span className="hidden sm:block w-1 h-1 rounded-full bg-border"></span>
                    <span>Organized by {item.organizer}</span>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-foreground/60">
                    <span className="w-2 h-2 rounded-full bg-primary/50"></span>
                    Focus: {item.focus}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
