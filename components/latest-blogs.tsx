"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, User } from "lucide-react"

export function LatestBlogs() {
  const blogs = [
    {
      title: "Top 5 Skills Every Data Engineer Needs in 2025",
      excerpt:
        "Discover the essential skills that will make you stand out as a data engineer in today's competitive job market.",
        image: "https://plus.unsplash.com/premium_photo-1661265902815-162b20274c88?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 15, 2025",
      author: "Rajesh Kumar",
      slug: "top-5-skills-data-engineer-2025",
    },  
    {
      title: "The Future of Automation Testing: AI and Beyond",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the field of automation testing and what it means for QA professionals.",
        image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 10, 2025",
      author: "Priya Sharma",
      slug: "future-automation-testing-ai-beyond",
    },
    {
      title: "How to Prepare for a Successful Career in Cloud Computing",
      excerpt:
        "Learn the steps you need to take to build a rewarding career in the rapidly growing field of cloud computing.",
        image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 5, 2025",
      author: "Vikram Singh",
      slug: "prepare-successful-career-cloud-computing",
    },
  ]

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
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blog.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {blog.author}
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

