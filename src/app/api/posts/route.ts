import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import BlogPost from "@/../models/blogPost";

// GET all blog posts
export async function GET() {
  await dbConnect();
  try {
    const posts = await BlogPost.find({}).sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

// POST a new blog post
export async function POST(request: Request) {
  await dbConnect();
  try {
    const body = await request.json();
    // Basic slug generation (you might want a more robust library for this)
    const slug = body.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    const newPost = await BlogPost.create({ ...body, slug });
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
