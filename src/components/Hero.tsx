"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Code } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Manav Mahesh Sanger. AI Engineer & SaaS Founder.";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText((currentText) => {
        // If the full text is already typed, stop the interval
        if (currentText.length === fullText.length) {
          clearInterval(typingInterval);
          return currentText;
        }
        // Otherwise, add the next character
        return fullText.slice(0, currentText.length + 1);
      });
    }, 60);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-32"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-3 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal leading-tight">
            {text}
            <span id="typewriter-cursor"></span>
          </h1>
          <p className="mt-6 text-neutral-600 max-w-2xl text-lg mx-auto lg:mx-0">
            Passionate about solving complex problems, from scaling machine
            learning pipelines to designing beautiful, user-centric web
            experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <Link
              href="https://github.com/manavsanger"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-charcoal hover:text-brand-sepia transition-colors duration-300 flex items-center gap-2"
            >
              <Github className="w-5 h-5" /> GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/manav-sanger"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-charcoal hover:text-brand-sepia transition-colors duration-300 flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </Link>
            <Link
              href="https://leetcode.com/u/manavv_sanger"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-charcoal hover:text-brand-sepia transition-colors duration-300 flex items-center gap-2"
            >
              <Code className="w-5 h-5" /> LeetCode (Top 20%)
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-center lg:justify-end order-first lg:order-last">
          <AnimateOnScroll className="w-full max-w-xs sm:max-w-sm">
            <div className="relative">
              <div className="absolute inset-0 bg-neutral-200 rounded-lg transform -rotate-3 transition-transform duration-300 hover:rotate-0"></div>
              <Image
                src="/img2.png"
                alt="Manav Sanger"
                width={400}
                height={400}
                className="relative w-full h-auto rounded-lg filter grayscale contrast-125 shadow-2xl"
                priority
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
