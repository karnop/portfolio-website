import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-neutral-50 border-y border-neutral-200"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
            Selected Works
          </h2>
          <p className="mt-4 text-neutral-600">
            A collection of projects where I&apos;ve architected and developed
            solutions across AI, web, and software engineering.
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 py-16 gap-8">
          {projects.map((item, index) => (
            <AnimateOnScroll key={item.title} delay={index * 100}>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card block bg-cream p-6 rounded-lg border border-neutral-200 h-full flex flex-col"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-bold font-serif text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-brand-sepia mt-4 w-full text-right flex items-center justify-end gap-2">
                    View Project <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
