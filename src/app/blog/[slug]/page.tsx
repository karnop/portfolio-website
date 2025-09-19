import dbConnect from "@/lib/mongodb";
import BlogPost from "@/models/blogPost";
import { notFound } from "next/navigation";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import "@/styles/prose-styles.css"; // We will create this file next

async function getPost(slug: string) {
  await dbConnect();
  const post = await BlogPost.findOne({ slug }).lean();
  if (!post) return null;

  return {
    ...post,
    createdAt: new Date(post.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return { title: `${post.title} | Manav Sanger`, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const contentHTML = generateHTML(post.content, [StarterKit]);

  return (
    <div className="bg-cream pt-24">
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <header className="text-center mb-16">
            <p className="font-mono text-sm text-neutral-500">
              {post.createdAt}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mt-4 leading-tight">
              {post.title}
            </h1>
          </header>
          <div
            className="prose-custom mx-auto"
            dangerouslySetInnerHTML={{ __html: contentHTML }}
          />
        </div>
      </article>
    </div>
  );
}
