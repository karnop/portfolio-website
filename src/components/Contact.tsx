import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-neutral-50 border-y border-neutral-200"
    >
      <AnimateOnScroll className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
          Get In Touch
        </h2>
        <p className="mt-6 text-neutral-600 max-w-lg mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of an ambitious vision. Feel free to reach
          out.
        </p>
        <Link
          href="mailto:communicate.manav@gmail.com"
          className="inline-block mt-10 px-8 py-3 bg-charcoal text-white bg-slate-900 font-semibold rounded-lg hover:bg-black transition-colors duration-300"
        >
          Say Hello
        </Link>
      </AnimateOnScroll>
    </section>
  );
}
