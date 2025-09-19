import { skills } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
            Technical Capabilities
          </h2>
          <p className="mt-4 text-neutral-600">
            A curated list of the languages, frameworks, and technologies I
            utilize to build robust and intelligent systems.
          </p>
        </AnimateOnScroll>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {Object.entries(skills).map(([category, skillList], index) => (
            <AnimateOnScroll key={category} delay={index * 100}>
              <h3 className="text-base font-serif italic text-brand-sepia mb-4">
                {category}
              </h3>
              <ul className="space-y-2 font-mono text-sm">
                {skillList.map((skill) => (
                  <li key={skill} className="text-neutral-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
