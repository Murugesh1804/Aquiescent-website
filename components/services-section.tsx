"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Briefcase, Clock, DollarSign, FileText } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Training & Deployment",
      description:
        "Comprehensive training programs designed by industry experts to help you master the latest technologies and advance your career.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Corporate Training",
      description:
        "Specialized training programs tailored to meet the specific needs of corporate clients and enhance employee skills.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Permanent & Direct Hire Recruiting",
      description: "Professional recruitment services to help companies find the right talent for permanent positions.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Temporary/Contract Staffing",
      description:
        "Flexible staffing solutions including temporary, temp-to-hire, and contract niche staffing to meet your business needs.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Pay Rolling Services",
      description: "Comprehensive payroll management services for your temporary and contract workforce.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Consulting/Project Based Engagement",
      description: "Expert consulting services and project-based solutions to help businesses achieve their goals.",
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Services Offered
            </h2>
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

