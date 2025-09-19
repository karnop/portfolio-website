"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  FolderKanban,
  NotebookPen,
  Briefcase,
  UserRound,
} from "lucide-react";

const navItems = [
  { href: "#home", section: "home", icon: Home, label: "Home" },
  {
    href: "#projects",
    section: "projects",
    icon: FolderKanban,
    label: "Projects",
  },
  { href: "#blog", section: "blog", icon: NotebookPen, label: "Blog" },
  {
    href: "#experience",
    section: "experience",
    icon: Briefcase,
    label: "History",
  },
  { href: "#contact", section: "contact", icon: UserRound, label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.section)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-full max-w-md z-50 px-4">
      <nav className="w-full bg-cream/70 backdrop-blur-md rounded-full p-2 flex justify-around items-center shadow-md border border-neutral-200">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.section;
          return (
            <Link
              key={item.section}
              href={item.href}
              className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ease-in-out text-charcoal hover:bg-neutral-200 ${
                isActive ? "bg-charcoal text-cream" : ""
              }`}
            >
              <Icon className="w-5 h-5" />
              <span
                className={`text-sm font-medium overflow-hidden transition-all duration-300 ease-in-out ${
                  isActive
                    ? "max-w-xs opacity-100 pl-2 pr-3"
                    : "max-w-0 opacity-0"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
