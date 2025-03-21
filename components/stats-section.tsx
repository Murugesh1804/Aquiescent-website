"use client"

import { motion } from "framer-motion"
import { Users, Award, BookOpen, Briefcase } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "10,000+",
      label: "Students Trained",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "95%",
      label: "Placement Rate",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      value: "25+",
      label: "Training Programs",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      value: "100+",
      label: "Corporate Partners",
    },
  ]

  return (
    <section className="w-full py-16 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="mb-4 p-4 bg-white/10 rounded-full">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

