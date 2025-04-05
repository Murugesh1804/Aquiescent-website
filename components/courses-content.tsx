"use client"

import { motion } from "framer-motion"
import { CourseCard } from "./course-card"

const CoursesContent = () => {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Courses</h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Advance your career with our industry-leading training programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CourseCard
                title="Master Snowflake"
                subtitle="The Future of Data Warehousing"
                imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-21%20at%2017.17.49_c7d57764.jpg-lKjcwrx8v8Yzzf519YiXJF7qIT3EHg.jpeg"
                features={[
                  "Snowflake Core Concepts (Admin & Developer)",
                  "DWH & SQL Basics",
                  "Cloud (AWS) Fundamentals",
                  "Real-time Projects & Scenarios",
                  "SnowPro Certification Guidelines",
                ]}
                date="24 MAR | 7:00 PM"
                phone="91770 89287"
                website="www.acquiescents.in"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CourseCard
                title="Master Automation and Manual Testing"
                subtitle="Comprehensive Testing Training"
                imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-21%20at%2017.17.49_272e866b.jpg-jZ9cMlwVW3oSwsRgzTYolcslxd8ZrE.jpeg"
                features={[
                  "Selenium with Java – Complete automation testing training",
                  "Test Frameworks – Master TestNG & Cucumber",
                  "Manual Testing – Test case design & real-world scenarios",
                  "Unix & SQL Basics – Essential skills for testers",
                  "Mobile & API Testing – Hands-on with app & REST API testing",
                  "AI in Testing – Explore AI-driven testing tools",
                ]}
                date="24 MAR | 10:00 AM"
                phone="91770 89287"
                website="www.Acquiescent.in"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CourseCard
                title="Data Science Mastery"
                subtitle="From Fundamentals to Advanced Analytics"
                imageUrl="/placeholder.svg?height=600&width=600"
                features={[
                  "Python Programming for Data Analysis",
                  "Statistical Methods & Machine Learning",
                  "Data Visualization & Storytelling",
                  "Big Data Processing with Spark",
                  "Deep Learning & Neural Networks",
                  "Capstone Projects with Real-world Data",
                ]}
                date="28 MAR | 6:00 PM"
                phone="91770 89287"
                website="www.Acquiescent.in"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CourseCard
                title="Cloud Computing Fundamentals"
                subtitle="AWS, Azure, and Google Cloud"
                imageUrl="/placeholder.svg?height=600&width=600"
                features={[
                  "Cloud Architecture & Services",
                  "Infrastructure as Code",
                  "Cloud Security Best Practices",
                  "Containerization & Orchestration",
                  "Multi-cloud Deployment Strategies",
                  "Cloud Cost Optimization",
                ]}
                date="30 MAR | 6:00 PM"
                phone="91770 89287"
                website="www.Acquiescent.in"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CoursesContent 