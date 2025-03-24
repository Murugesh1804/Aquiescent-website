"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CoursesSection } from "@/components/courses-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { LatestBlogs } from "@/components/latest-blogs"
import  PopupImg  from "@/components/popup-img"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <PopupImg />
      <HeroSection />

      {/* Company Overview Section */}
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
                Company Overview
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">Established in 2010 in Bangalore</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700">
                ACQUIESCENT (ACQUIESCENT Technologies) was established in 2010 in Bangalore. All offices of ACQUIESCENT
                staffing and training solutions are owned and operated by experienced business executives who have
                provided staffing to major corporations.
              </p>
              <p className="text-lg text-gray-700">
                ACQUIESCENT Technologies is into the business of providing manpower recruitment services and
                psychometric assessment to various clients across the globe.
              </p>
              <p className="text-lg text-gray-700">
                ACQUIESCENT Technologies undertakes recruitment of all verticals in almost all the Training sectors like
                IT, Non-IT Banking and Embedded System.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ACQUIESCENT Office"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <CoursesSection />
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

