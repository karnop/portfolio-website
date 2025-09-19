"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import Editor with SSR disabled
const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, excerpt, content }),
      });

      if (!response.ok) throw new Error("Failed to create post");

      const post = await response.json();
      router.push(`/blog/${post.slug}`);
    } catch (error) {
      console.error(error);
      // Add user-facing error handling here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-8">
          Create New Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-mono text-brand-sepia mb-2"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 font-serif border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-sepia focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="excerpt"
              className="block text-sm font-mono text-brand-sepia mb-2"
            >
              Excerpt
            </label>
            <textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              className="w-full p-3 font-sans border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-sepia focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-mono text-brand-sepia mb-2">
              Content
            </label>
            <Editor value={content} onChange={setContent} />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-charcoal text-white font-semibold rounded-lg hover:bg-black transition-colors duration-300 disabled:bg-neutral-400"
          >
            {isSubmitting ? "Publishing..." : "Publish Post"}
          </button>
        </form>
      </div>
    </section>
  );
}
