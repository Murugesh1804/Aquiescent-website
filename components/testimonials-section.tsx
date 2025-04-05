"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
      {
        "name": "Anjali Verma",
        "role": "Project Manager at TechNova Solutions",
        "content": "The training was exceptional! The structured curriculum and hands-on approach helped me build real-world skills that I now apply daily in my career."
      },
      {
        "name": "Rahul Mehta",
        "role": "Software Engineer at Infowave Systems",
        "content": "Acquiescent Technologies provided top-notch training with expert instructors. The interactive sessions and project-based learning made a huge difference!"
      },
      {
        "name": "Pooja Iyer",
        "role": "UI/UX Designer at PixelCraft Studios",
        "content": "The live classes were engaging, and the mentors were incredibly supportive. I gained in-depth knowledge that has significantly boosted my confidence."
      },
      {
        "name": "Vikram Sharma",
        "role": "Marketing Head at Digital Elevate",
        "content": "An outstanding learning experience! The well-structured course material and real-world projects made it easy to grasp even the most complex concepts."
      },
      {
        "name": "Ramesh Gupta",
        "role": "Chairman SR at BrightTech Solutions",
        "content": "The training sessions were well-structured and covered every concept in detail. The faculty was very supportive and helped us with real-world problem-solving."
      },
      {
        "name": "Neha Reddy",
        "role": "Senior Designer at Creative Minds",
        "content": "An excellent learning experience! The hands-on projects helped me gain practical skills that are essential for my career growth."
      },
      {
        "name": "Vikas Menon",
        "role": "Executive Officer at WebNest Technologies",
        "content": "The live sessions were engaging and interactive. I particularly liked the real-world case studies that made the concepts easy to understand."
      },
      {
        "name": "Shruti Deshpande",
        "role": "Product Designer at Visionary Designs",
        "content": "The training helped me gain confidence in my field. The support from mentors and peers made the learning process smooth and enjoyable."
      },
      {
        "name": "Arjun Nair",
        "role": "Executive Chairman at Nexus Solutions",
        "content": "One of the best training experiences I have had. The well-structured modules and real-time projects helped me land my dream job!"
      },
      {
        "name": "Amit Sharma",
        "role": "Senior Developer at TechNexus Solutions",
        "content": "The team at Acquiescent Technologies provided top-notch training. Their hands-on approach made learning easy and practical."
      },
      {
        "name": "Priya Iyer",
        "role": "Software Engineer at SoftGrid Technologies",
        "content": "Great experience with Acquiescent Technologies! Their trainers are knowledgeable and supportive throughout the learning process."
      },
      {
        "name": "Rahul Verma",
        "role": "Data Analyst at NexGen Analytics",
        "content": "Acquiescent Technologies helped me upskill in Data Engineering. The real-time projects were extremely useful for practical learning."
      },
      {
        "name": "Sneha Reddy",
        "role": "Business Analyst at InfyData Solutions",
        "content": "The trainers at Acquiescent Technologies explained concepts in a simple and clear manner. It was a great learning experience!"
      },
      {
        "name": "Vikram Patil",
        "role": "System Administrator at CloudSync Tech",
        "content": "The DevOps training was highly practical. I could apply what I learned immediately at my workplace."
      },
      {
        "name": "Anjali Menon",
        "role": "Python Developer at CodeBridge IT",
        "content": "Acquiescent Technologies' Python course covered everything from basics to advanced topics. The trainers were excellent!"
      },
      {
        "name": "Rohan Desai",
        "role": "IT Support Engineer at NexaTech Solutions",
        "content": "The practical examples and hands-on training helped me understand concepts better than any other course I've taken."
      },
      {
        "name": "Meera Joshi",
        "role": "Quality Analyst at TestPro Systems",
        "content": "The Software Testing course was detailed and interactive. I got hands-on experience with real-world projects."
      },
      {
        "name": "Arun Kumar",
        "role": "Network Engineer at DataLink Technologies",
        "content": "I was able to switch my career to networking after completing their course. The instructors were highly supportive."
      }    
  ]
  
  // Divide the testimonials into two halves
  const firstHalfTestimonials = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondHalfTestimonials = testimonials.slice(Math.ceil(testimonials.length / 2));
  
  // Double the arrays to create a seamless loop effect
  const topRowTestimonials = [...firstHalfTestimonials, ...firstHalfTestimonials];
  const bottomRowTestimonials = [...secondHalfTestimonials, ...secondHalfTestimonials];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
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

        {/* Top row - right to left marquee */}
        <div className="relative w-full overflow-hidden mb-8">
          <motion.div 
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {topRowTestimonials.map((testimonial, index) => (
              <Card key={`top-${index}`} className="flex-shrink-0 w-80 md:w-96 border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <Quote className="h-8 w-8 text-primary/20 mb-3" />
                    <p className="text-md mb-4 italic text-gray-700 flex-grow">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Bottom row - left to right marquee */}
        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45, // Slightly different speed for variety
                ease: "linear",
              },
            }}
          >
            {bottomRowTestimonials.map((testimonial, index) => (
              <Card key={`bottom-${index}`} className="flex-shrink-0 w-80 md:w-96 border-none shadow-lg bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <Quote className="h-8 w-8 text-primary/20 mb-3" />
                    <p className="text-md mb-4 italic text-gray-700 flex-grow">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}