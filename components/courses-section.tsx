"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Server, Terminal, FileCode, Brain, Cloud, PieChart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CoursesSection() {
  const courses = [
    {
      icon: <FileCode className="h-10 w-10 text-primary" />,
      title: "Java",
      description:
        "Comprehensive Java programming from basics to advanced concepts including Spring, Hibernate, and microservices architecture.",
    },
    {
      icon: <Terminal className="h-10 w-10 text-primary" />,
      title: "Software Testing",
      description:
        "Learn manual and automation testing methodologies, tools, and best practices for quality assurance.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Apache Kafka",
      description:
        "Master distributed event streaming platform for high-performance data pipelines and streaming analytics.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "MQ",
      description: "Learn message queuing technologies for reliable, secure messaging and integration solutions.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "DevOps",
      description:
        "Comprehensive training on DevOps practices, tools, and methodologies for continuous integration and deployment.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Engineer",
      description:
        "Learn to design, build and maintain data pipelines and infrastructure for efficient data processing.",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Data Scientist",
      description:
        "Master data analysis, machine learning, and statistical modeling to extract insights from complex datasets.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Salesforce",
      description: "Comprehensive training on Salesforce CRM platform, administration, and development.",
    },
    {
      icon: <Terminal className="h-10 w-10 text-primary" />,
      title: "Python",
      description:
        "Learn Python programming for web development, data analysis, automation, and artificial intelligence.",
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: "Power BI",
      description: "Master data visualization and business intelligence using Microsoft Power BI tools and techniques.",
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
            >
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="mb-4">{course.icon}</div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/courses">View Course Details</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

