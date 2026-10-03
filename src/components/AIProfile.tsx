"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "@/data/portfolio";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

type Message = {
  role: "user" | "ai";
  content: string;
};

// Simple keyword-based local knowledge base
const getAIResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes("who is") || lowerInput.includes("about ajai") || lowerInput.includes("who are you")) {
    return `${data.personal.name} is a ${data.personal.role.toLowerCase()} studying at ${data.education[0].institution}. He is passionate about ${data.personal.interests.join(", ")}.`;
  }
  
  if (lowerInput.includes("technology") || lowerInput.includes("technologies") || lowerInput.includes("skills") || lowerInput.includes("stack")) {
    return `Ajai works with programming languages like ${data.skills.programming.join(", ")}. In AI/Data, he's experienced with ${data.skills.ai_data.join(", ")}.`;
  }
  
  if (lowerInput.includes("project") || lowerInput.includes("portfolio") || lowerInput.includes("build")) {
    return `Ajai has built several projects, notably "${data.projects[0].title}" (${data.projects[0].subtitle}) and a proposed "${data.projects[1].title}".`;
  }
  
  if (lowerInput.includes("meetinginsights") || lowerInput.includes("meeting") || lowerInput.includes("summarizer")) {
    return `${data.projects[0].title} is ${data.projects[0].description} It was even presented as a research paper at ${data.research[0].conference}.`;
  }
  
  if (lowerInput.includes("education") || lowerInput.includes("study") || lowerInput.includes("college") || lowerInput.includes("university")) {
    return `He is currently in his ${data.education[0].status} of ${data.education[0].degree} at ${data.education[0].institution}, maintaining a ${data.education[0].score}.`;
  }
  
  if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("hire") || lowerInput.includes("reach")) {
    return `You can reach Ajai via email at ${data.personal.email} or connect with him on LinkedIn. There is also a contact form at the bottom of this page.`;
  }
  
  if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
    return "Hello! I'm Ajai's AI Assistant. You can ask me about his skills, projects, education, or how to contact him.";
  }

  return "I'm a simple local AI assistant holding Ajai's portfolio data. Try asking about his 'skills', 'projects', 'MeetingInsights', or 'education'!";
};

export function AIProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hello! I'm Ajai's AI Profile Assistant. What would you like to know about him?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMsg = inputValue.trim();
    setInputValue("");
    
    // Add user message
    setMessages(prev => [...prev, { role: "user", content: newMsg }]);

    // Simulate AI thinking and response
    setTimeout(() => {
      const response = getAIResponse(newMsg);
      setMessages(prev => [...prev, { role: "ai", content: response }]);
    }, 600);
  };

  return (
    <>
      {/* FAB */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-shadow ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AI Assistant</h3>
                  <p className="text-xs text-foreground/50 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-foreground/50 hover:text-foreground transition-colors p-1">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-secondary/20 text-secondary" : "bg-primary/20 text-primary"}`}>
                    {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[75%] text-sm ${msg.role === "user" ? "bg-secondary/20 rounded-tr-none" : "bg-white/5 border border-white/5 rounded-tl-none"}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-white/5">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about Ajai..."
                  className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
