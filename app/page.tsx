"use client"

import { Montserrat } from "next/font/google"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { LatestBlogs } from "@/components/latest-blogs"
import { CourseCard } from "@/components/course-card"
import { ChevronRight } from "lucide-react"
import  PopupImage  from "@/components/popup-img";

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <PopupImage />
      <HeroSection />

      {/* Featured Courses Section */}
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
                Our Featured Courses
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Advance your career with our industry-leading training programs
              </p>
            </motion.div>
          </div>

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
                website="www.acquiescent.in"
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
                website="www.acquiescent.in"
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
                website="www.acquiescent.in"
              />
            </motion.div>
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild size="lg">
              <Link href="/courses">
                View All Courses <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <LatestBlogs />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Advance Your Career?
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Join our training programs and gain the skills that employers are looking for
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Enroll For Free Demo</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

