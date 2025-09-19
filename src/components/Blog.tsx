import AnimateOnScroll from "./AnimateOnScroll";

export default async function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
            From the Desk
          </h2>
          <p className="mt-4 text-neutral-600">
            Documenting my journey, sharing insights, and exploring the
            intersection of technology, design, and machine intelligence.
          </p>
        </AnimateOnScroll>
        <div className="flex justify-center my-10 outline-none rounded-xl">
          <a
            href="https://www.youtube.com/channel/UCbVtsX8bbYUJwYb_fq_0QIw"
            target="_blank"
            className="outline-none relative block w-96 h-52 rounded-xl bg-slate-50 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
          >
            <img
              src="./banner.jpg"
              alt="YouTube Banner"
              className="rounded-xl w-full h-full object-cover group-hover:scale-105 transform transition duration-300"
            />

            <img
              src="./img1.png"
              alt="Channel Profile"
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full border-1 border-slate-600 bg-slate-600 shadow-md"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
