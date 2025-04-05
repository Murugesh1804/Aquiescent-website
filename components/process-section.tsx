"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, FileSearch, Lightbulb, Settings, Zap } from "lucide-react"

export function ProcessSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

  const processes = [
    {
      icon: <FileSearch className="h-10 w-10 text-primary" />,
      title: "Discovery",
      description:
        "We begin by understanding your business needs, challenges, and goals through in-depth consultations.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Strategy",
      description: "Our experts develop a tailored strategy that aligns with your objectives and maximizes results.",
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Implementation",
      description: "We execute the strategy with precision, ensuring all deliverables meet the highest standards.",
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
      title: "Evaluation",
      description: "Regular assessments ensure we're on track and allow for adjustments to optimize outcomes.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Optimization",
      description: "Continuous improvement ensures long-term success and maximum return on investment.",
    },
  ]

  return (
    <section ref={sectionRef} className="w-full py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(var(--primary), 0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
          <div className="h-1 w-16 bg-primary mx-auto my-4 rounded-full" />
          <p className="max-w-2xl mx-auto text-gray-600 mt-4">
            A systematic approach that ensures consistent, high-quality results for every project we undertake.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process connection line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 20,
                }}
                transition={{
                  duration: 0.5,
                  delay: isInView ? index * 0.1 : 0,
                }}
                className="relative"
              >
                <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="relative z-10">
                      <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 relative">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary/5"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        />
                        <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }}>
                          {process.icon}
                        </motion.div>
                      </div>

                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden md:block">
                        {index < processes.length - 1 && (
                          <motion.div
                            animate={{
                              x: [0, 5, 0],
                              opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                            }}
                          >
                            <ArrowRight className="h-6 w-6 text-primary/60" />
                          </motion.div>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                      <p className="text-gray-600 text-sm">{process.description}</p>

                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center text-xs font-bold text-primary md:hidden">
                        {index + 1}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step number for desktop */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center text-sm font-bold text-primary z-20 hidden md:flex">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

