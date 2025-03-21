import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, User } from "lucide-react"

export const metadata = {
  title: "Blog | Acquiescent Consultancy Services",
  description: "Latest insights, tips, and industry updates from Acquiescent Consultancy Services",
}

export default function BlogPage() {
  const blogs = [
    {
      title: "Top 5 Skills Every Data Engineer Needs in 2025",
      excerpt:
        "Discover the essential skills that will make you stand out as a data engineer in today's competitive job market.",
      image: "/placeholder.svg?height=300&width=600",
      date: "March 15, 2025",
      author: "Rajesh Kumar",
      slug: "top-5-skills-data-engineer-2025",
      category: "Data Engineering",
    },
    {
      title: "The Future of Automation Testing: AI and Beyond",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the field of automation testing and what it means for QA professionals.",
      image: "/placeholder.svg?height=300&width=600",
      date: "March 10, 2025",
      author: "Priya Sharma",
      slug: "future-automation-testing-ai-beyond",
      category: "Testing",
    },
    {
      title: "How to Prepare for a Successful Career in Cloud Computing",
      excerpt:
        "Learn the steps you need to take to build a rewarding career in the rapidly growing field of cloud computing.",
      image: "/placeholder.svg?height=300&width=600",
      date: "March 5, 2025",
      author: "Vikram Singh",
      slug: "prepare-successful-career-cloud-computing",
      category: "Cloud Computing",
    },
    {
      title: "Understanding Data Warehousing with Snowflake",
      excerpt: "A comprehensive guide to understanding the fundamentals of data warehousing using Snowflake.",
      image: "/placeholder.svg?height=300&width=600",
      date: "February 28, 2025",
      author: "Ananya Patel",
      slug: "understanding-data-warehousing-snowflake",
      category: "Data Warehousing",
    },
    {
      title: "Best Practices for Mobile App Testing",
      excerpt: "Discover the best practices and strategies for effective mobile application testing.",
      image: "/placeholder.svg?height=300&width=600",
      date: "February 20, 2025",
      author: "Rahul Verma",
      slug: "best-practices-mobile-app-testing",
      category: "Testing",
    },
    {
      title: "The Role of DevOps in Modern Software Development",
      excerpt:
        "Explore how DevOps practices are transforming the software development lifecycle and improving team productivity.",
      image: "/placeholder.svg?height=300&width=600",
      date: "February 15, 2025",
      author: "Sunil Mehta",
      slug: "role-devops-modern-software-development",
      category: "DevOps",
    },
  ]

  const categories = ["All", "Data Engineering", "Testing", "Cloud Computing", "Data Warehousing", "DevOps"]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Blog</h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Insights, tips, and industry updates to help you stay ahead in your career
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <Card key={blog.slug} className="h-full overflow-hidden hover:shadow-lg transition-all">
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
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <Link
                          href={
                            category === "All"
                              ? "/blog"
                              : `/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`
                          }
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {blogs.slice(0, 3).map((blog) => (
                      <li key={blog.slug} className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                          <Image
                            src={blog.image || "/placeholder.svg"}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <Link
                            href={`/blog/${blog.slug}`}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {blog.title}
                          </Link>
                          <p className="text-sm text-gray-500">{blog.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

