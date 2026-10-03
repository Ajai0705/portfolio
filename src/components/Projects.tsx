"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/Card";
import { data } from "@/data/portfolio";
import { ArrowRight, ChevronDown, Cpu, Sparkles, Building2 } from "lucide-react";

const icons = [
  <Sparkles key="1" className="text-primary" size={24} />,
  <Cpu key="2" className="text-secondary" size={24} />,
  <Building2 key="3" className="text-blue-400" size={24} />
];

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((project, idx) => {
            const isExpanded = expandedIndex === idx;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={idx === 1 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card 
                  glowColor={idx % 2 === 0 ? "primary" : "secondary"} 
                  className="h-full flex flex-col hover:-translate-y-2 cursor-pointer"
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                      {icons[idx % icons.length]}
                    </div>
                    {project.isProposed && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/20">
                        Concept
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-foreground/50 font-medium mb-4">{project.subtitle}</p>
                  
                  <p className={`text-foreground/70 text-sm leading-relaxed mb-6 transition-all ${!isExpanded ? "line-clamp-3" : ""}`}>
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, isExpanded ? undefined : 3).map((tech) => (
                        <span key={tech} className="text-xs font-medium text-foreground/60 px-2 py-1 bg-white/5 rounded-md">
                          {tech}
                        </span>
                      ))}
                      {!isExpanded && project.technologies.length > 3 && (
                        <span className="text-xs font-medium text-foreground/60 px-2 py-1 bg-white/5 rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <AnimatePresence>
                      {isExpanded && project.highlight && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 p-3 rounded-md bg-white/5 border border-border/50 text-sm text-foreground/80 overflow-hidden"
                        >
                          <span className="text-primary font-semibold block mb-1">Highlight</span>
                          {project.highlight}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-sm text-foreground/50 group-hover:text-primary transition-colors">
                      <span>{isExpanded ? "Show less" : "View details"}</span>
                      <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                        <ChevronDown size={16} />
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
