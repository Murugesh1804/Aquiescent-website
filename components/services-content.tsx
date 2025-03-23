"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, UserCheck, Clock, DollarSign, Briefcase } from "lucide-react"

export function ServicesContent() {
  const services = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Training & Deployment",
      description: "Comprehensive training programs with hands-on experience followed by deployment opportunities in leading organizations."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Corporate Training", 
      description: "Customized training solutions for enterprises to upskill their workforce with the latest technologies and best practices."
    },
    {
      icon: <UserCheck className="h-10 w-10 text-primary" />,
      title: "Permanent & Direct Hire Recruiting",
      description: "End-to-end recruitment services to help companies find and hire top talent for permanent positions."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Temporary/Contract Staffing",
      description: "Flexible staffing solutions including temporary, temp-to-hire and contract positions for niche technical roles."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Payrolling Services",
      description: "Comprehensive payroll management services to handle all aspects of employee compensation and benefits."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Consulting/Project Based Engagement",
      description: "Expert consulting services and project-based solutions tailored to meet specific business objectives."
    }
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Comprehensive solutions to help businesses grow and individuals advance their careers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
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
    </main>
  )
}
