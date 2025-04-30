"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TestTube2, 
  LineChart,
  Braces,
  LayoutDashboard,
  Database,
  Brain,
  FileCode
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CoursesSection() {
  const courses = [
    {
      icon: <Braces className="h-10 w-10 text-[#f89820]" />, // Java color
      title: "Java",
      slug: "java",
      description:
        "Comprehensive Java programming from basics to advanced concepts including Spring, Hibernate, and microservices architecture.",
    },
    {
      icon: <TestTube2 className="h-10 w-10 text-[#2fc781]" />, // Testing icon in green
      title: "Software Testing",
      slug: "software-testing",
      description:
        "Learn manual and automation testing methodologies, tools, and best practices for quality assurance.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-[#000000]" />, // Kafka black
      title: "Apache Kafka",
      slug: "apache-kafka",
      description:
        "Master distributed event streaming platform for high-performance data pipelines and streaming analytics.",
    },
    {
      icon: <LayoutDashboard className="h-10 w-10 text-[#2496ED]" />, // Docker blue for DevOps
      title: "DevOps",
      slug: "devops",
      description:
        "Comprehensive training on DevOps practices, tools, and methodologies for continuous integration and deployment.",
    },
    {
      icon: <Database className="h-10 w-10 text-[#00758F]" />, // Database blue
      title: "Data Engineer",
      slug: "data-engineer",
      description:
        "Learn to design, build and maintain data pipelines and infrastructure for efficient data processing.",
    },
    {
      icon: <Brain className="h-10 w-10 text-[#FF6B6B]" />, // Brain in coral color
      title: "Data Scientist",
      slug: "data-scientist",
      description:
        "Master data analysis, machine learning, and statistical modeling to extract insights from complex datasets.",
    },
    {
      icon: <FileCode className="h-10 w-10 text-[#3776AB]" />, // Python blue
      title: "Python",
      slug: "python",
      description:
        "Learn Python programming for web development, data analysis, automation, and artificial intelligence.",
    },
  ]

  return (
    <section className="w-full py-20 bg-white">
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
              Training Programs Offered
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Advance your career with our industry-leading training programs
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Link href={`/courses/${course.slug}`} className="block h-full">
                <Card className="h-full transition-all hover:shadow-lg border-2 border-transparent hover:border-primary/20">
                  <CardHeader className="pb-2">
                    <div className="mb-4">{course.icon}</div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{course.description}</CardDescription>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Button variant="link" className="p-0 h-auto font-semibold text-primary">
                        View Course Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

