"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CoursesSection } from "@/components/courses-section"
import { ClientsCarousel } from "@/components/clients-carousel"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { LatestBlogs } from "@/components/latest-blogs"
import { CoursePopup } from "@/components/course-popup"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TermsAndConditions} from "@/components/terms"
import { BrochurePopup } from "@/components/brochure-popup"

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
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
                Acquiescent was established in 2010 in Bangalore. All offices of Acquiescent
                staffing and training solutions are owned and operated by experienced business executives who have
                provided staffing to major corporations.
              </p>
              <p className="text-lg text-gray-700">
                Acquiescent is into the business of providing manpower recruitment services and
                psychometric assessment to various clients across the globe.
              </p>
              <p className="text-lg text-gray-700">
                Acquiescent undertakes recruitment of all verticals in almost all the Training sectors like
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
                src="https://content.jdmagicbox.com/v2/comp/bangalore/w6/080pxx80.xx80.170901162023.f6w6/catalogue/acquiescent-technologies-btm-layout-1st-stage-bangalore-computer-training-institutes-34o7tmc.jpg"
                alt="Acquiescent Office"
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
      <ClientsCarousel />
      <StatsSection />
      <TestimonialsSection />
      <LatestBlogs />
      <WhyChooseUs />
      <TermsAndConditions />

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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Enroll For Free Demo</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <CoursePopup /> */}
      {/* <BrochurePopup /> */}
    </main>
  )
}

