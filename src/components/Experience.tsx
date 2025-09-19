import { experiences } from "@/lib/data";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-neutral-50 border-y border-neutral-200"
    >
      <div className="max-w-3xl mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center tracking-tight">
            Career Timeline
          </h2>
        </AnimateOnScroll>
        <div className="mt-16 relative">
          <div className="absolute left-3 top-3 h-full w-0.5 bg-neutral-200"></div>
          {experiences.map((exp, index) => (
            <AnimateOnScroll
              key={index}
              className="pl-12 relative mb-10"
              delay={index * 100}
            >
              <div className="absolute left-0 top-1 w-6 h-6 bg-cream border-2 border-neutral-200 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-sepia rounded-full"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm text-neutral-500 font-mono">{exp.date}</p>
                <h3 className="text-lg font-bold font-serif text-charcoal mt-1">
                  {exp.role}
                </h3>
                <p className="text-md font-light text-neutral-600">
                  {exp.company}
                </p>
                <p className="text-sm mt-2 text-neutral-500">
                  {exp.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
