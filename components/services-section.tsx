"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Database, Server, Users, Award } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Professional Training",
      description:
        "Comprehensive training programs designed by industry experts to help you master the latest technologies and advance your career.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Software Development",
      description:
        "Custom software development services tailored to meet your business needs with cutting-edge technologies and best practices.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Solutions",
      description:
        "End-to-end data solutions including data warehousing, analytics, and business intelligence to help you make data-driven decisions.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Cloud Services",
      description:
        "Expert cloud migration, management, and optimization services to help you leverage the full potential of cloud technologies.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "IT Consulting",
      description:
        "Strategic IT consulting services to help businesses optimize their technology infrastructure, improve efficiency, and drive innovation.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Certification Programs",
      description:
        "Industry-recognized certification programs to validate your skills and enhance your career prospects in the competitive job market.",
    },
  ]

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Comprehensive solutions to help you achieve your professional and business goals
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

