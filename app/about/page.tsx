"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-[700px] text-white/80 md:text-xl"
            >
              Empowering Businesses Through Training & Outsourcing Excellence
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tighter text-primary">Our Story</h2>
              <p className="text-gray-600">
                Established in 2010 in Bangalore, Acquiescent Technologies has been a trusted partner for corporations worldwide, delivering high-quality staffing and training solutions.
              </p>
              <p className="text-gray-600">
                We specialize in manpower recruitment, corporate training, and psychometric assessment, ensuring organizations build skilled and efficient teams.
              </p>
              <p className="text-gray-600">
                Our mission is to empower businesses by providing them with the tools and expertise needed to thrive in a competitive market.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-[400px] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center text-gray-500"
            >
              <img src="/images/company-image.jpg" alt="Company Image" className="object-cover w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tighter text-primary"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-4 text-gray-600 max-w-[700px] mx-auto"
            >
              Comprehensive solutions tailored to your business needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Training & Development", content: "Comprehensive corporate training tailored to industry needs." },
              { title: "Recruitment & Staffing Solutions", content: "Permanent & Direct Hire Recruitment – Connecting businesses with top-tier talent." },
              { title: "Pre-Screening & Assessment", content: "Skill Assessments to ensure role-fit candidates." },
              { title: "Consulting Services", content: "Expert advice to optimize your business processes and strategies." },
              { title: "Outsourcing Solutions", content: "Efficient outsourcing services to enhance your operational capabilities." },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
