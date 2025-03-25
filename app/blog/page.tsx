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
      image: "https://plus.unsplash.com/premium_photo-1661265902815-162b20274c88?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 15, 2025",
      author: "Rajesh Kumar",
      slug: "top-5-skills-data-engineer-2025",
      category: "Data Engineering",
    },
    {
      title: "The Future of Automation Testing: AI and Beyond",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the field of automation testing and what it means for QA professionals.",
      image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 10, 2025",
      author: "Priya Sharma",
      slug: "future-automation-testing-ai-beyond",
      category: "Testing",
    },
    {
      title: "How to Prepare for a Successful Career in Cloud Computing",
      excerpt:
        "Learn the steps you need to take to build a rewarding career in the rapidly growing field of cloud computing.",
      image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 5, 2025",
      author: "Vikram Singh",
      slug: "prepare-successful-career-cloud-computing",
      category: "Cloud Computing",
    },
    {
      title: "Understanding Data Warehousing with Snowflake",
      excerpt: "A comprehensive guide to understanding the fundamentals of data warehousing using Snowflake.",
      image: "https://images.unsplash.com/photo-1615309662472-4ca77a77a189?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "February 28, 2025",
      author: "Ananya Patel",
      slug: "understanding-data-warehousing-snowflake",
      category: "Data Warehousing",
    },
    {
      title: "Best Practices for Mobile App Testing",
      excerpt: "Discover the best practices and strategies for effective mobile application testing.",
      image: "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "February 20, 2025",
      author: "Rahul Verma",
      slug: "best-practices-mobile-app-testing",
      category: "Testing",
    },
    {
      title: "The Role of DevOps in Modern Software Development",
      excerpt:
        "Explore how DevOps practices are transforming the software development lifecycle and improving team productivity.",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "February 15, 2025",
      author: "Sunil Mehta",
      slug: "role-devops-modern-software-development",
      category: "DevOps",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
          <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Blog</h1>
              {/* <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Explore exciting career opportunities at Acquiescent Consultancy Services
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card key={blog.slug} className="h-full overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={blog.image}
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
      </section>
    </main>
  )
}
