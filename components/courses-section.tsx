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
      icon:<img width="64" height="64" src="https://img.icons8.com/color/96/amazon-web-services.png" alt="amazon-web-services"/>,
      title: "AWS Security Engineer",
      slug: "awsSecurity",
      description:
      "Master cloud security on AWS platform with comprehensive training on IAM, network security, and best practices.",
    },
    {
      icon: <img width="64" height="64" src="https://img.icons8.com/nolan/64/apache-kafka.png" alt="apache-kafka"/>, // Kafka black
      title: "Confluent Kafka",
      slug: "confluenKafka",
      description:
      "Learn distributed event streaming with Kafka, covering architecture, implementation, and administration.",
    },
    {
      icon:<img width="64" height="64" src="https://img.icons8.com/windows/62/snowflake.png" alt="snowflake"/>, // Snowflake blue
      title: "Snowflake on AWS",
      slug: "snowflake",
      description:
      "Master cloud data warehousing with Snowflake, focusing on architecture and AWS integration.",
    },
    {
      icon: <img width="64" height="64" src="https://img.icons8.com/color/64/python--v1.png" alt="python--v1"/>, // Python blue
      title: "Python Full Stack",
      slug: "python_full_stack",
      description:
      "Complete full-stack development training with Python, Django, and modern web technologies.",
    },
    {
      icon: <img width="60" height="60" src="https://img.icons8.com/external-flat-juicy-fish/60/external-dev-coding-and-development-flat-flat-juicy-fish.png" alt="external-dev-coding-and-development-flat-flat-juicy-fish"/>, // DevOps blue
      title: "AWS & DevOps",
      slug: "aws_devops",
      description:
      "Learn cloud infrastructure and DevOps practices with AWS, Docker, and CI/CD pipelines.",
    },
    {
      icon: <img width="96" height="96" src="https://img.icons8.com/color/96/oracle-logo.png" alt="oracle-logo"/>, // Oracle red
      title: "Oracle APEX",
      slug: "oracle_apex",
      description:
      "Build enterprise applications with Oracle's low-code development platform.",
    },
    {
      icon: <img width="66" height="66" src="https://img.icons8.com/pulsar-gradient/96/test-results.png" alt="test-results"/>, // Testing green
      title: "Software Testing",
      slug: "softwareTesting",
      description:
      "Comprehensive training in manual and automated testing with industry-standard tools.",
    },
    {
      icon: <img width="64" height="64" src="https://img.icons8.com/external-solidglyph-m-oki-orlando/64/external-data-science-data-engineering-solid-solidglyph-m-oki-orlando.png" alt="external-data-science-data-engineering-solid-solidglyph-m-oki-orlando"/>, // Brain coral
      title: "Data Science",
      slug: "dataScience",
      description:
      "Master data science with Python, machine learning, and advanced analytics.",
    },
    {
      icon: <img width="96" height="96" src="https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>, // Java blue
      title: "Java Full Stack",
      slug: "javafullstack",
      description:
      "Complete Java development training from core concepts to enterprise applications.",
    },
    {
      icon: <img width="96" height="96" src="https://img.icons8.com/fluency/144/my-sql.png" alt="my-sql"/>, // SQL Server red
      title: "SQL Server",
      slug: "sqlServer",
      description:
      "Learn database management and operations with Microsoft SQL Server.",
    },
    {
      icon: <img width="96" height="96" src="https://img.icons8.com/color/144/azure-1.png" alt="azure-1"/>, // Azure blue
      title: "Azure Data Factory",
      slug: "azureADF",
      description:
      "Master data integration and ETL pipelines with Azure Data Factory.",
    },
    {
      icon: <img width="144" height="144" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/MERN-logo.png/960px-MERN-logo.png?20200328184328" alt="mernstack" />, // React icon for MERN
      title: "MERN Stack Development",
      slug: "mern",
      description:
        "Master full stack web development using MongoDB, Express.js, React.js, and Node.js.",
    }
    
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

