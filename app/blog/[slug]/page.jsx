"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await axios.get(`http://localhost:3500/api/blogs/slug/${slug}`);
        setBlog(response.data.blog);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchBlog();
  }, [slug]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!blog) return <p className="text-center text-gray-500">Blog not found.</p>;

  return (
    <main className="container mx-auto py-12 px-4 md:px-6">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(blog.createdAt).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {blog.author?.name || "Unknown"}
          </div>
        </div>
        {blog.featuredImage && (
          <div className="relative w-full h-64 md:h-96 mb-6">
            <Image src={blog.featuredImage} alt={blog.title} fill className="object-cover rounded-lg" />
          </div>
        )}
        <p className="text-gray-700 text-lg">{blog.content}</p>
      </article>
    </main>
  );
}
