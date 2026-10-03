"use client";

import React from "react";
import { motion } from "framer-motion";
import { data } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

function SkillCategory({ title, skills }: { title: string, skills: string[] }) {
  return (
    <div className="mb-10">
      <h3 className="text-sm font-semibold tracking-wider text-foreground/50 uppercase mb-4">{title}</h3>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={item}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2 rounded-md bg-surface border border-border text-sm font-medium hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-colors cursor-default relative overflow-hidden group"
          >
            {/* Hover shine effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
            <span className="relative z-10">{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-secondary">Arsenal</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          <div>
            <SkillCategory title="Programming" skills={data.skills.programming} />
            <SkillCategory title="AI / Data" skills={data.skills.ai_data} />
          </div>
          <div>
            <SkillCategory title="Core CS" skills={data.skills.core_cs} />
            <SkillCategory title="Tools & Productivity" skills={data.skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
}
