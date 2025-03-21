"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Advance Your Career with Expert Training",
      subtitle: "Industry-leading courses designed to help you succeed",
      image: "https://i.pinimg.com/736x/fa/71/fe/fa71fed4e50aa2bc4f76dc4f59b4204c.jpg",
    },
    {
      title: "Master the Latest Technologies",
      subtitle: "Hands-on training with real-world projects",
      image: "https://i.pinimg.com/736x/fa/71/fe/fa71fed4e50aa2bc4f76dc4f59b4204c.jpg",
    },
    {
      title: "Learn from Industry Experts",
      subtitle: "Gain insights from professionals with years of experience",
      image: "https://i.pinimg.com/736x/fa/71/fe/fa71fed4e50aa2bc4f76dc4f59b4204c.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/70 z-10" />
        <Image
          src={slides[currentSlide].image || "/placeholder.svg?height=700&width=1920"}
          alt="Hero Background"
          fill
          priority
          className="object-cover transition-opacity duration-1000"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 h-full mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">{slides[currentSlide].subtitle}</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/courses">
                Explore Courses <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

