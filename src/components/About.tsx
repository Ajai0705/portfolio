"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { data } from "@/data/portfolio";
import { MapPin, GraduationCap, Building, Trophy, Clock } from "lucide-react";

export function About() {
  const ed = data.education[0]; // B.E. details

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 prose prose-invert prose-lg max-w-none"
          >
            <p className="text-foreground/80 leading-relaxed mb-6">
              {data.personal.about}
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My core interests lie at the intersection of algorithm design and real-world application building. I am particularly focused on exploring:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 list-none pl-0">
              {data.personal.interests.map((interest, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {interest}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card glowColor="primary" className="p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                Quick Profile
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-white/5 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50">Location</p>
                    <p className="font-medium">{data.personal.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-white/5 text-primary">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50">Degree</p>
                    <p className="font-medium">{ed.degree}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-white/5 text-primary">
                    <Building size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50">College</p>
                    <p className="font-medium text-sm leading-tight mt-1">{ed.institution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-white/5 text-primary">
                      <Trophy size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50">CGPA</p>
                      <p className="font-medium">{ed.score.split(': ')[1] || ed.score}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-white/5 text-primary">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50">Status</p>
                      <p className="font-medium">{ed.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
