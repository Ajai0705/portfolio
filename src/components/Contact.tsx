"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { data } from "@/data/portfolio";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Send, Mail, Linkedin, Code2 } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call or mailto fallback
    setTimeout(() => {
      window.location.href = `mailto:${data.personal.email}?subject=Contact from Portfolio - ${formState.name}&body=${formState.message}%0D%0A%0D%0AFrom: ${formState.email}`;
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
      
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Build Something <span className="text-primary">Intelligent.</span></h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Have an idea, opportunity, or project in mind? Let's connect.</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2 flex flex-col gap-6"
            >
              <Card glowColor="primary" className="p-8 flex-1">
                <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
                
                <div className="space-y-6">
                  <a href={`mailto:${data.personal.email}`} className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50 mb-1">Email</p>
                      <p className="font-medium break-all">{data.personal.email}</p>
                    </div>
                  </a>
                  
                  <a href={data.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50 mb-1">LinkedIn</p>
                      <p className="font-medium">Connect with me</p>
                    </div>
                  </a>
                  
                  <a href={`https://leetcode.com/u/${data.personal.leetcode}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Code2 size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/50 mb-1">LeetCode</p>
                      <p className="font-medium">Aj_0705</p>
                    </div>
                  </a>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-3"
            >
              <Card glowColor="secondary" className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-background/50 border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-background/50 border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-background/50 border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="How can we work together?"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-4">
                    {isSubmitting ? (
                      <span className="animate-pulse">Preparing message...</span>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <p className="text-green-400 text-sm text-center mt-4">Opening mail client...</p>
                  )}
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
