"use client";

import React from "react";
import { motion } from "framer-motion";
import { data } from "@/data/portfolio";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Licenses & <span className="text-primary">Certifications</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {data.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all flex flex-col h-full items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-[15px] mb-2 leading-snug">{cert.name}</h3>
              <p className="text-xs text-foreground/50 uppercase tracking-wider mt-auto">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
