"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { data } from "@/data/portfolio";

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="education" className="py-24 relative bg-black/20 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education <span className="text-primary">Timeline</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border">
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }} 
              className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-primary via-secondary to-primary"
            />
          </div>

          <div className="space-y-12">
            {data.education.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full border-4 border-background bg-primary -translate-x-[15px] md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
                  
                  {/* Content Container */}
                  <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="glass-panel p-6 rounded-xl hover:border-primary/30 transition-colors"
                    >
                      <div className="text-sm text-primary font-bold tracking-wider mb-2">{item.period}</div>
                      <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                      <p className="text-foreground/70 mb-4">{item.institution}</p>
                      
                      <div className={`inline-flex items-center gap-3 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <span className="font-semibold">{item.score}</span>
                        {item.status && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-foreground/30"></span>
                            <span className="text-sm text-foreground/60">{item.status}</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
