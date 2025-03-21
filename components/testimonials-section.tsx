"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Data Engineer at TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The Snowflake training program was comprehensive and well-structured. The hands-on projects helped me apply what I learned in real-world scenarios. I landed a job as a Data Engineer within a month of completing the course!",
    },
    {
      name: "Rahul Verma",
      role: "QA Lead at InnovateX",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The Automation Testing course was exactly what I needed to advance my career. The instructors were knowledgeable and supportive, and the curriculum covered all the latest tools and techniques. Highly recommended!",
    },
    {
      name: "Ananya Patel",
      role: "Data Scientist at AnalyticsPro",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Acquiescent's Data Science program provided me with the perfect blend of theoretical knowledge and practical skills. The real-time projects were challenging and helped me build a strong portfolio that impressed my employers.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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
              What Our Students Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Hear from our successful graduates who have transformed their careers with our training programs
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="h-10 w-10 text-primary/20 mb-4 mx-auto md:mx-0" />
                    <p className="text-lg md:text-xl mb-6 italic text-gray-700">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div>
                      <h4 className="text-xl font-semibold">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full p-2 ${currentIndex === index ? "bg-primary" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

