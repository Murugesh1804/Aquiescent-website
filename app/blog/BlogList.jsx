"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, User } from "lucide-react";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get("http://localhost:3500/api/blogs/all");
        console.log(response.data);
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (blogs.length === 0) {
    return <p className="text-center text-gray-500">No blogs found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <Card key={blog.slug} className="h-full overflow-hidden hover:shadow-lg transition-all">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={blog.featuredImage || "/default-image.jpg"}
              alt={blog.title}
              fill
              className="object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
          <CardHeader className="p-6">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(blog.createdAt).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {blog.author?.name || "Unknown"}
              </div>
            </div>
            <h2 className="text-xl font-semibold">{blog.title}</h2>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600">{blog.excerpt}</p>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button variant="link" className="p-0" asChild>
              <Link href={`/blog/${blog.slug}`}>
                Read More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
