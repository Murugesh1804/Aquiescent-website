"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, User } from "lucide-react"

export function LatestBlogs() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get("https://api.acquiescent.in/api/blogs/all")
        setBlogs(response.data.blogs.slice(0, 3)) // Get only the latest 3 blogs
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  if (loading) {
    return (
      <section className="w-full py-20 bg-gray-50">
        <p className="text-center text-gray-500">Loading...</p>
      </section>
    )
  }

  if (blogs.length === 0) {
    return (
      <section className="w-full py-20 bg-gray-50">
        <p className="text-center text-gray-500">No blogs found.</p>
      </section>
    )
  }

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Latest from Our Blog
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Insights, tips, and industry updates to help you stay ahead in your career
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={`https://api.acquiescent.in${blog.featuredImage}`}
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
                  <Link href={`/blog/${blog.slug}`} className="hover:text-primary transition-colors">
                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  </Link>
                </CardHeader>
                <CardContent className="p-6 pt-0">
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
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/blog">
              View All Posts <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
