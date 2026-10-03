import React from "react";
import { data } from "@/data/portfolio";
import { Linkedin, Code2, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border pt-16 pb-8 bg-background overflow-hidden">
      {/* Animated top line glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-[2px]"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight mb-2">{data.personal.name}</h2>
            <p className="text-foreground/60 text-sm">
              "Building intelligent solutions with code, AI and curiosity."
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={data.personal.linkedin} target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`https://leetcode.com/u/${data.personal.leetcode}`} target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-primary transition-colors">
              <Code2 size={20} />
            </a>
            <a href={`mailto:${data.personal.email}`} className="text-foreground/50 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/40 border-t border-white/5 pt-8">
          <p>© {currentYear} B. Ajai Hariharan. All rights reserved.</p>
          <p>Designed with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
